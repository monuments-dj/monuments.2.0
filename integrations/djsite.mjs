// ============================================================================
// djsite.mjs · the Astro integration that turns this repo into djthecd.com.
// ----------------------------------------------------------------------------
// Only loaded when SITE=dj. It does exactly three things, and this file plus
// src/data/site.js are the ONLY two places allowed to know the flag exists:
//
//   1 · PAGE-TREE SELECTION. Injects the dj-only routes (the block homepage and
//       its three audience variants) from src/dj/, and prunes the monuments-only
//       pages out of the output (capabilities, giving, ai, the Kit, the lab).
//   2 · THE VOICE TRANSFORM. Rewrites the emitted HTML into solo I-voice using
//       src/lib/dialect.mjs, and writes a full change report to tools/dj-report/
//       so DJ reviews every altered sentence.
//   3 · THE LEAK AUDIT. Fails the build if a We-marker, a Monuments wordmark or
//       a monuments URL survives into the dj output (DJTHECD-PLAN.md §6 risk 1:
//       a We-leak in front of a hiring manager). DJ_AUDIT=warn downgrades it
//       while iterating.
// ============================================================================
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { toSoloVoice, findWeLeaks } from '../src/lib/dialect.mjs';
import { replacementsFor } from '../src/data/dialect.js';

// monuments-only surfaces: not ported, not rewritten (DJTHECD-PLAN.md §2 "Cut")
const CUT = [
  'capabilities', 'giving', 'ai', 'lab', 'work-preview', 'template',
  'page-template', 'page-elements', 'cta-preview', 'hire', 'keystatic',
  // stale draft trees living in public/ (old mockups, never linked)
  'redesign', 'brand-lab',
  // client-deliverable drops in public/ (Mox booth recap + asset zips): studio
  // material, ships on monuments only - never on the portfolio
  'mox',
  // photography SHIPS on dj as of 2026-08-13 (DJ: "we can bring over the
  // photos page from monuments, the one that was like a 90s mac")
];

// strings that must never appear in the dj output
const LEAK_STRINGS = [
  'monuments.cc@gmail.com',
  'monuments-2-0.vercel.app',
  'M<i>✳</i>NUMENTS',
  'M<span>✳</span>NUMENTS',
];

function walkHtml(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkHtml(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

export default function djsite() {
  return {
    name: 'djthecd',
    hooks: {
      'astro:config:setup': ({ injectRoute, logger }) => {
        // NOT injected at '/': that collides with src/pages/index.astro (the
        // monuments homepage) and Astro warns the collision becomes a hard
        // error in a future version. Which file wins would depend on emit
        // order, which is not a thing to bet a homepage on. Injected at a
        // unique path and promoted to / in astro:build:done instead.
        injectRoute({ pattern: '/_djhome',    entrypoint: './src/dj/index.astro' });
        injectRoute({ pattern: '/production', entrypoint: './src/dj/production.astro' });
        injectRoute({ pattern: '/direction',  entrypoint: './src/dj/direction.astro' });
        injectRoute({ pattern: '/strategy',   entrypoint: './src/dj/strategy.astro' });
        logger.info('djthecd: page tree injected (/, /production, /direction, /strategy)');
      },

      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);

        // 1 · prune the monuments-only tree
        const pruned = [];
        for (const name of CUT) {
          const p = path.join(root, name);
          if (fs.existsSync(p)) { fs.rmSync(p, { recursive: true, force: true }); pruned.push(name); }
          const f = path.join(root, `${name}.html`);
          if (fs.existsSync(f)) { fs.rmSync(f); pruned.push(name); }
        }
        // promote the dj homepage to / deterministically (see the injectRoute
        // note above). The monuments index.html that Astro emitted at / is
        // replaced here, so emit order never decides which homepage ships.
        const djHome = path.join(root, '_djhome', 'index.html');
        if (!fs.existsSync(djHome)) {
          throw new Error('djthecd: /_djhome/index.html missing — the dj homepage did not build, refusing to ship the monuments homepage at /');
        }
        fs.copyFileSync(djHome, path.join(root, 'index.html'));
        fs.rmSync(path.join(root, '_djhome'), { recursive: true, force: true });
        logger.info(`djthecd: pruned ${pruned.length} monuments-only surfaces · dj homepage promoted to /`);

        // 2 · THE SKIN (DJ 2026-08-12: "simpler. creative director, helvetica
        // and simple braun / apple design approch while keeping the structure
        // pretty similar"). Injected last in <head> so it wins the cascade on
        // every dj page - interiors included - while monuments source stays
        // byte-identical. Fonts only + grain kill + serif-italic neutralized;
        // interior color worlds are left alone (their art direction is page
        // work, not a token swap).
        // !important is load-bearing here: PageFooter's runtime font engine
        // (applyFont) sets --disp/--dispw etc INLINE on <html> via JS, and an
        // inline style beats any normal stylesheet declaration. !important in
        // a stylesheet is the one thing that outranks inline - verified live
        // The skin is a FILE, not a constant: src/data/skins/<name>.css, selected by
        // DJ_SKIN (default "rams"). One file = the whole dj look; add a skin by
        // adding a file. The !important notes from the 2026-08-12 font-engine
        // fight live in the skin files themselves.
        const skinName = process.env.DJ_SKIN || 'rams';
        const skinPath = path.join(process.cwd(), 'src', 'data', 'skins', `${skinName}.css`);
        if (!fs.existsSync(skinPath)) throw new Error(`djthecd: unknown DJ_SKIN "${skinName}" - no src/data/skins/${skinName}.css`);
        const skinCss = fs.readFileSync(skinPath, 'utf8').trim();
        const SKIN = skinCss ? `<style id="dj-skin" data-skin="${skinName}">\n${skinCss}\n</style>` : '';


        // 3 · the voice transform
        const files = walkHtml(root);
        const changes = [];
        const unhandled = [];
        const everMatched = new Set();
        const declared = new Set();
        for (const file of files) {
          const page = '/' + path.relative(root, file).replace(/index\.html$/, '').replace(/\\/g, '/');
          const html = fs.readFileSync(file, 'utf8');
          const reps = replacementsFor(page);
          reps.forEach(([from]) => declared.add(from));
          const res = toSoloVoice(html, { replacements: reps, page });
          if (SKIN && !res.html.includes('id="dj-skin"')) res.html = res.html.replace('</head>', SKIN + '</head>');
          if (res.html !== html) fs.writeFileSync(file, res.html);
          changes.push(...res.changes);
          unhandled.push(...res.unhandled);
          res.matched.forEach((m) => everMatched.add(m));
        }
        // A declared replacement that matched NOWHERE is a silent no-op: the
        // copy it was meant to fix is still on the page. Treat it as a failure,
        // not a shrug. (This is the bug class that shipped "he's" on /work/on-camera.)
        const deadRules = [...declared].filter((d) => !everMatched.has(d));

        // 3 · the leak audit
        const leaks = [];
        for (const file of files) {
          const page = '/' + path.relative(root, file).replace(/index\.html$/, '').replace(/\\/g, '/');
          const html = fs.readFileSync(file, 'utf8');
          for (const s of LEAK_STRINGS) {
            if (html.includes(s)) leaks.push({ page, kind: 'string', hit: s });
          }
          for (const l of findWeLeaks(html, { page })) leaks.push({ page, kind: 'we', hit: l.word, context: l.context });
        }

        // reports (written before any throw, so a failing build still explains itself)
        const reportDir = path.join(process.cwd(), 'tools', 'dj-report');
        fs.mkdirSync(reportDir, { recursive: true });
        const byPage = (arr) => {
          const m = new Map();
          for (const c of arr) { if (!m.has(c.page)) m.set(c.page, []); m.get(c.page).push(c); }
          return [...m.entries()].sort();
        };
        fs.writeFileSync(path.join(reportDir, 'changes.md'),
          `# djthecd voice transform · ${changes.length} changes\n\n` +
          byPage(changes).map(([p, cs]) =>
            `## ${p}\n` + cs.map(c => `- [${c.rule}${c.hits > 1 ? ` x${c.hits}` : ''}]\n  - was: ${c.from}\n  - now: ${c.to}`).join('\n')
          ).join('\n\n') + '\n');
        fs.writeFileSync(path.join(reportDir, 'unhandled.md'),
          `# Unhandled DJ mentions · ${unhandled.length}\n\n` +
          byPage(unhandled).map(([p, us]) => `## ${p}\n` + us.map(u => `- [${u.marker}] "${u.context}"`).join('\n')).join('\n\n') + '\n');
        fs.writeFileSync(path.join(reportDir, 'leaks.md'),
          `# Leak audit · ${leaks.length} findings\n\n` +
          byPage(leaks).map(([p, ls]) => `## ${p}\n` + ls.map(l => `- [${l.kind}] ${l.hit}${l.context ? ` · "${l.context}"` : ''}`).join('\n')).join('\n\n') + '\n');

        fs.writeFileSync(path.join(reportDir, 'dead-rules.md'),
          `# Replacements that matched nothing · ${deadRules.length}\n\n` +
          (deadRules.length
            ? 'Each of these was declared in src/data/dialect.js and never matched a single page.\n' +
              'The copy it was meant to change is STILL ON THE SITE.\n\n' +
              deadRules.map((d) => `- ${d}`).join('\n')
            : 'None. Every declared replacement matched at least one page.') + '\n');

        logger.info(`djthecd: ${changes.length} applied · ${deadRules.length} dead rules · ${unhandled.length} voice items open · ${leaks.length} leaks (tools/dj-report/)`);
        if (deadRules.length) {
          throw new Error(`djthecd: ${deadRules.length} replacement(s) matched NOTHING. See tools/dj-report/dead-rules.md`);
        }
        if (leaks.length && process.env.DJ_AUDIT !== 'warn') {
          throw new Error(`djthecd leak audit FAILED: ${leaks.length} findings. See tools/dj-report/leaks.md`);
        }
      },
    },
  };
}
