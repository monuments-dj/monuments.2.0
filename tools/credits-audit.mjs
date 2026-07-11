// Extracts every rendered role/credit claim per project into CREDITS-AUDIT.md
// Surfaces: case page (Role · lines, My part, CallSheet credits), /work row
// (fmt descriptor, disc tags, hover cap), home reel card (data-role, data-stats).
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd());
const workDir = path.join(ROOT, 'src/pages/work');
const strip = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// /work index rows
const workSrc = fs.readFileSync(path.join(ROOT, 'src/pages/work.astro'), 'utf8');
const rows = {};
for (const m of workSrc.matchAll(/href="\/work\/([a-z0-9-]+)"([^>]*)>([\s\S]*?)<\/a>/g)) {
  const [, slug, attrs, body] = m;
  const cap = (attrs.match(/data-cap="([^"]*)"/) || [])[1] || '';
  const disc = (attrs.match(/data-disc="([^"]*)"/) || [])[1] || '';
  const fmt = (body.match(/<span class="fmt">([\s\S]*?)<\/span>/) || [])[1] || '';
  if (!rows[slug]) rows[slug] = [];
  rows[slug].push({ cap, disc, fmt: strip(fmt) });
}

// home reel cards
const homeSrc = fs.readFileSync(path.join(ROOT, 'src/pages/index.astro'), 'utf8');
const homeCards = {};
for (const m of homeSrc.matchAll(/class="reel-card" href="\/work\/([a-z0-9-]+)"[^>]*data-role="([^"]*)"[^>]*data-stats="([^"]*)"/g)) {
  homeCards[m[1]] = { role: m[2], stats: m[3] };
}

// case pages
const out = ['# CREDITS AUDIT · generated ' + '2026-07-11',
'',
'Every rendered role/credit claim, per project. Mark corrections on the CORRECT line',
'(or just message them); each fix gets propagated to every surface listed.',
'Disc tag vocabulary: commercial (directing) · cd (creative direction) · photo ·',
'experiential · campaign (development) · oncam.',
''];

const files = fs.readdirSync(workDir).filter(f => f.endsWith('.astro')).sort();
for (const f of files) {
  const slug = f.replace('.astro', '');
  const src = fs.readFileSync(path.join(workDir, f), 'utf8');
  out.push(`## ${slug}`);

  // Role · lines (hero NFO etc.)
  const roles = [...src.matchAll(/Role ·([^<\n{]*)/g)].map(m => strip(m[1])).filter(Boolean);
  if (roles.length) out.push(`- case page Role lines: ${[...new Set(roles)].join(' | ')}`);

  // My part
  const parts = [...src.matchAll(/My part<\/b>? ?·([^<\n]*)/g)].map(m => strip(m[1]));
  if (parts.length) out.push(`- case page My part: ${[...new Set(parts)].join(' | ')}`);

  // credits array kv pairs
  const credBlock = (src.match(/const credits ?= ?\[([\s\S]*?)\];/) || [])[1] || '';
  const kv = [...credBlock.matchAll(/k: ?'([^']*)', ?v: ?'([^']*)'/g)].map(m => `${m[1]}: ${m[2]}`);
  if (kv.length) out.push(`- call sheet: ${kv.join(' · ')}`);

  // /work row
  (rows[slug] || []).forEach(r => {
    out.push(`- /work row: "${r.fmt}" · tags [${r.disc}] · hover "${r.cap}"`);
  });

  // home card
  if (homeCards[slug]) out.push(`- home card: role "${homeCards[slug].role}" · stats "${homeCards[slug].stats}"`);

  // mismatch flag: /work tags claim cd but no role line on the page says so (or the reverse)
  const claimsCD = [...roles, ...parts, homeCards[slug]?.role || ''].join(' ').match(/creative dir/i);
  const tagsCD = (rows[slug] || []).some(r => r.disc.split(',').includes('cd'));
  if (tagsCD && !claimsCD) out.push('- ⚠ MISMATCH: /work tags say creative direction, the page itself never does (the Know Vape pattern)');
  if (!tagsCD && claimsCD && rows[slug]) out.push('- ⚠ MISMATCH: page claims creative direction but the /work tags do not');

  out.push('- CORRECT (leave blank if right): ');
  out.push('');
}

fs.writeFileSync(path.join(ROOT, 'CREDITS-AUDIT.md'), out.join('\n'));
console.log('wrote CREDITS-AUDIT.md ·', files.length, 'projects');
