#!/usr/bin/env node
// ============================================================================
// djcheck.mjs · THE GATE for the djthecd build. Run before any deploy.
//   node tools/djcheck.mjs            (expects dist/ from a SITE=dj build)
//
// Written BEFORE the copy work, on purpose: these are the conditions the fork
// has to satisfy, independent of how the copy gets written. Do not edit a check
// to make a build pass. Fix the build.
//
// CHECK 1 is the one that matters most and the one DJ named explicitly:
// other people's words are never altered. Recommendation letters and client
// testimonials must appear in the dj output BYTE-IDENTICAL to their source.
// This is proven per-build, not assumed from how the transform was designed.
// ============================================================================
import fs from 'node:fs';
import path from 'node:path';

const DIST = process.argv[2] || 'dist';
const fail = [];
const warn = [];
const pass = [];

// ── the corpus of other people's words ──────────────────────────────────────
// Sourced from docs/TESTIMONIALS-2026-08.md (the recommendation letters) and
// the client quote on turnstile. If a quote is added anywhere, add it here.
const PEOPLE = [
  { who: 'Jakke',         q: "DJ is a true artist who isn't afraid to get dirty (or lose sleep) to get the job done right and on time." },
  { who: 'Lauryn Hodge',  q: "If things don't go as planned, DJ handles it with a calm and collected demeanor" },
  { who: 'Tess Rizvi',    q: "When it comes to creative strategy, I've never questioned that DJ would produce work our team would be proud of." },
  { who: 'Tommy Lundberg',q: 'He was clear about what he needed and always made me feel empowered to explore my creative impulses' },
  // Casey's cut re-picked by DJ 2026-08-13 ("remove the PA statement"): the mounted
  // excerpt now opens at "He brings the vibes." Still his words, still verbatim.
  { who: 'Casey Levins',  q: 'He has a very special gift of bringing the best out of everyone on the team' },
  { who: 'Mike Sutton',   q: 'Well, DJ nailed it, it is' },
  { who: 'on-set letter', q: "On set, DJ's fun personality allows him to connect well with both the talent and the crew" },
];

// Entity-encode the way Astro emits it, so a check can never pass by accident
// on an apostrophe mismatch. (This is the exact bug that made the first pass of
// the voice transform silently no-op.)
const enc = (s) => s.replace(/&/g, '&amp;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

const files = (function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
})(DIST);

const corpus = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

// ── CHECK 1 · other people's words are untouched ────────────────────────────
for (const { who, q } of PEOPLE) {
  const hit = corpus.includes(q) || corpus.includes(enc(q));
  if (hit) pass.push(`quote intact · ${who}`);
  else fail.push(`ALTERED OR MISSING QUOTE · ${who} · expected verbatim: "${q.slice(0, 60)}..."`);
}

// ── CHECK 2 · no monuments identity leaks into the dj build ─────────────────
const LEAKS = ['monuments.cc@gmail.com', 'monuments-2-0.vercel.app', 'M<i>✳</i>NUMENTS', 'M<span>✳</span>NUMENTS'];
for (const s of LEAKS) {
  const where = files.filter((f) => fs.readFileSync(f, 'utf8').includes(s));
  if (where.length) fail.push(`MONUMENTS LEAK · "${s}" in ${where.length} page(s): ${where.slice(0, 3).map((f) => path.relative(DIST, f)).join(', ')}`);
  else pass.push(`no leak · ${s}`);
}

// ── CHECK 3 · monuments-only surfaces are not shipped ───────────────────────
const CUT = ['capabilities', 'giving', 'ai', 'lab', 'work-preview', 'template', 'page-template',
             'page-elements', 'cta-preview', 'hire', 'keystatic', 'photography', 'redesign', 'brand-lab',
             'mox'];
for (const c of CUT) {
  if (fs.existsSync(path.join(DIST, c))) fail.push(`CUT PAGE SHIPPED · /${c}/ should not exist in the dj build`);
}
if (!fail.some((f) => f.startsWith('CUT PAGE'))) pass.push(`${CUT.length} monuments-only surfaces pruned`);

// ── CHECK 4 · the routes that must exist ────────────────────────────────────
const REQUIRED = ['index.html', 'production/index.html', 'direction/index.html', 'strategy/index.html',
                  'work/index.html', 'about/index.html', 'contact/index.html'];
for (const r of REQUIRED) {
  if (fs.existsSync(path.join(DIST, r))) pass.push(`route · /${r.replace('index.html', '')}`);
  else fail.push(`MISSING ROUTE · /${r.replace('index.html', '')}`);
}
const cases = fs.existsSync(path.join(DIST, 'work')) ? fs.readdirSync(path.join(DIST, 'work')).filter((d) => fs.existsSync(path.join(DIST, 'work', d, 'index.html'))).length : 0;
if (cases >= 19) pass.push(`${cases} case pages present`);
else fail.push(`ONLY ${cases} CASE PAGES · expected 19`);

// ── CHECK 5 · no em dashes anywhere (DJ's standing rule) ────────────────────
const dashPages = files.filter((f) => /[—–]/.test(fs.readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>/g, '')));
if (dashPages.length) fail.push(`EM DASH · found in ${dashPages.length} page(s): ${dashPages.slice(0, 3).map((f) => path.relative(DIST, f)).join(', ')}`);
else pass.push('no em dashes');

// ── CHECK 6 · no placeholder copy (DJ's rule 4, zero tolerance) ─────────────
// Scans VISIBLE COPY only. HTML comments and scripts are stripped first: dev
// notes in this repo quote the no-placeholder rule by name, and matching those
// is a false positive, not a finding. The rule itself is not relaxed.
const visible = corpus.replace(/<!--[\s\S]*?-->/g, '').replace(/<script[\s\S]*?<\/script>/g, '');
const ph = visible.match(/lorem|ipsum|consectetur|sample text/i);
if (ph) fail.push(`PLACEHOLDER COPY PRESENT · "${visible.slice(Math.max(0, ph.index - 50), ph.index + 60).replace(/\s+/g, ' ').trim()}"`);
else pass.push('no placeholder copy in visible text');

// ── report ──────────────────────────────────────────────────────────────────
console.log(`\n  djcheck · ${files.length} pages in ${DIST}\n`);
for (const p of pass) console.log(`  \x1b[32mPASS\x1b[0m  ${p}`);
for (const w of warn) console.log(`  \x1b[33mWARN\x1b[0m  ${w}`);
for (const f of fail) console.log(`  \x1b[31mFAIL\x1b[0m  ${f}`);
console.log(`\n  ${pass.length} passed · ${warn.length} warnings · ${fail.length} failed\n`);
process.exit(fail.length ? 1 : 0);
