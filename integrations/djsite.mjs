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
  // photography is on HOLD for monuments (DJ). It does not ship on dj until he
  // says the page is ready.
  'photography',
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
        injectRoute({ pattern: '/',           entrypoint: './src/dj/index.astro' });
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
        // the injected "/" beats the monuments homepage; make sure nothing stale
        // from the monuments index survives in the root html
        logger.info(`djthecd: pruned ${pruned.length} monuments-only surfaces`);

        // 2 · the voice transform
        const files = walkHtml(root);
        const changes = [];
        const unhandled = [];
        for (const file of files) {
          const page = '/' + path.relative(root, file).replace(/index\.html$/, '').replace(/\\/g, '/');
          const html = fs.readFileSync(file, 'utf8');
          const res = toSoloVoice(html, { replacements: replacementsFor(page), page });
          if (res.html !== html) fs.writeFileSync(file, res.html);
          changes.push(...res.changes);
          unhandled.push(...res.unhandled);
        }

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
          byPage(unhandled).map(([p, us]) => `## ${p}\n` + us.map(u => `- ${u.text}`).join('\n')).join('\n\n') + '\n');
        fs.writeFileSync(path.join(reportDir, 'leaks.md'),
          `# Leak audit · ${leaks.length} findings\n\n` +
          byPage(leaks).map(([p, ls]) => `## ${p}\n` + ls.map(l => `- [${l.kind}] ${l.hit}${l.context ? ` · "${l.context}"` : ''}`).join('\n')).join('\n\n') + '\n');

        logger.info(`djthecd: ${changes.length} voice changes · ${unhandled.length} unhandled · ${leaks.length} leaks (tools/dj-report/)`);
        if (leaks.length && process.env.DJ_AUDIT !== 'warn') {
          throw new Error(`djthecd leak audit FAILED: ${leaks.length} findings. See tools/dj-report/leaks.md`);
        }
      },
    },
  };
}
