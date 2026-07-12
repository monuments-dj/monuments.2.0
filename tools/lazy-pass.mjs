#!/usr/bin/env node
// Lazy-load pass: adds loading="lazy" decoding="async" to every <img> that
// (a) has a src, (b) lacks loading=, (c) lacks fetchpriority="high" (heroes),
// (d) isn't in the EAGER whitelist (first-screen images), (e) isn't under lab/.
// Reports every change. Re-runnable (no-op once stamped).
import fs from 'node:fs';
import path from 'node:path';

// file → line numbers (tag start) that must STAY eager (first-screen)
const EAGER = {
  'src/pages/index.astro': [370, 376],
  'src/pages/about.astro': [311],
  'src/pages/capabilities.astro': [268],
  'src/pages/ai.astro': [157],
  'src/pages/giving.astro': [222],
  'src/pages/template.astro': [188],
  'src/pages/photography.astro': [407],          // JS lightbox viewer, leave as-is
  'src/pages/work/ac-boise.astro': [235],
  'src/pages/work/sony-xperia-summer.astro': [278],
  'src/pages/work/sony-this-moment.astro': [228],
  'src/pages/work/dw-drums.astro': [198],
  'src/pages/work/waffle-me-up.astro': [265],
  'src/pages/work/buck-the-quo.astro': [323],
  'src/pages/work/donut-zumiez.astro': [243],
  'src/pages/work/art-of-visuals.astro': [212],
  'src/pages/work/on-camera.astro': [253],
  'src/pages/work/sony-xm5.astro': [255],
};

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : p.endsWith('.astro') ? [p] : [];
  });
}

let total = 0;
for (const file of [...walk('src/pages'), ...walk('src/components')]) {
  if (file.includes('/lab/')) continue;          // museum, don't touch
  const src = fs.readFileSync(file, 'utf8');
  const eager = EAGER[file] ?? [];
  const edits = [];
  const re = /<img\b[^>]*?>/gs;
  let m;
  while ((m = re.exec(src))) {
    const tag = m[0];
    if (!/\bsrc\s*=/.test(tag)) continue;
    if (/\bloading\s*=/.test(tag)) continue;
    if (/fetchpriority\s*=\s*["']high["']/.test(tag)) continue;
    const line = src.slice(0, m.index).split('\n').length;
    if (eager.includes(line)) continue;
    edits.push({ index: m.index, line });
  }
  if (!edits.length) continue;
  let out = src;
  for (const e of edits.reverse()) {
    out = out.slice(0, e.index) + '<img loading="lazy" decoding="async"' + out.slice(e.index + 4);
  }
  fs.writeFileSync(file, out);
  console.log(`${file}: ${edits.length} lazied (lines ${edits.map(e => e.line).reverse().join(', ')})`);
  total += edits.length;
}
console.log(`\n${total} images set to lazy.`);
