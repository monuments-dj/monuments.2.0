#!/usr/bin/env node
// Motion capture: SEE what a user gets when they scroll a site.
// Scrolls the page in small wheel steps like a human, saves a frame at every
// step, samples element transforms/opacity per step, and tiles the frames
// into filmstrip sheets for review.
//
// Output in tools/snaps/<name>/:
//   sheet-NN.png   — 3x3 filmstrip grids (read these: motion over scroll)
//   frame-NN.png   — raw per-step frames
//   intro-NN.png   — frames of the first 4s after load (load animations)
//   motion.json    — per-step telemetry: which elements moved, how far, opacity
//
// Usage: node tools/motion.mjs <url> <name> [width=1440] [steps=36] [wheel=420]
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const [url, name, widthArg, stepsArg, wheelArg] = process.argv.slice(2);
const width = Number(widthArg) || 1440;
const STEPS = Number(stepsArg) || 36;
const WHEEL = Number(wheelArg) || 420;
if (!url || !name) { console.error('usage: node tools/motion.mjs <url> <name> [width] [steps] [wheel]'); process.exit(1); }
const dir = path.join('tools', 'snaps', name);
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});

// --- Phase A: load/intro animation, one frame every 300ms for 4s ---
for (let i = 0; i < 13; i++) {
  await page.screenshot({ path: path.join(dir, `intro-${String(i).padStart(2, '0')}.png`) });
  await page.waitForTimeout(300);
}

// Tag trackable elements once so telemetry can follow identity across steps.
await page.evaluate(() => {
  let id = 0;
  document.querySelectorAll('h1,h2,h3,img,video,canvas,p,a,figure,section,[class*=title],[class*=text]').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width > 40 && r.height > 14) el.setAttribute('data-mid', String(id++));
  });
});

const sample = () => page.evaluate(() => {
  const out = [];
  document.querySelectorAll('[data-mid]').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > innerHeight + 200) return; // near-viewport only
    const cs = getComputedStyle(el);
    out.push({
      id: el.getAttribute('data-mid'),
      tag: el.tagName.toLowerCase(),
      cls: (typeof el.className === 'string' ? el.className : '').slice(0, 60),
      x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height),
      tf: cs.transform !== 'none' ? cs.transform : null,
      op: Number(cs.opacity),
      clip: cs.clipPath !== 'none' ? cs.clipPath : null,
      txt: (el.children.length === 0 ? el.textContent.trim().replace(/\s+/g, ' ').slice(0, 40) : ''),
    });
  });
  return { scrollY: Math.round(scrollY), els: out };
});

// --- Phase B: human-ish scroll. wheel → settle → frame + telemetry ---
const telemetry = [];
telemetry.push(await sample());
await page.screenshot({ path: path.join(dir, 'frame-00.png') });
for (let s = 1; s <= STEPS; s++) {
  await page.mouse.wheel(0, WHEEL);
  await page.waitForTimeout(450); // let smooth-scroll/lerp settle into view
  await page.screenshot({ path: path.join(dir, `frame-${String(s).padStart(2, '0')}.png`) });
  telemetry.push(await sample());
}
fs.writeFileSync(path.join(dir, 'motion.json'), JSON.stringify(telemetry));

// --- Phase C: tile frames into 3x3 sheets via an in-browser canvas ---
const tile = async (prefix, outPrefix) => {
  const files = fs.readdirSync(dir).filter((f) => f.startsWith(prefix)).sort();
  const per = 9, cols = 3, cell = 470, cellH = Math.round(cell * 900 / width);
  for (let sIdx = 0; sIdx * per < files.length; sIdx++) {
    const batch = files.slice(sIdx * per, sIdx * per + per);
    const sheet = await browser.newPage({ viewport: { width: cols * cell, height: Math.ceil(batch.length / cols) * cellH } });
    const imgs = batch.map((f) => `data:image/png;base64,${fs.readFileSync(path.join(dir, f)).toString('base64')}`);
    await sheet.setContent(`<body style="margin:0;display:grid;grid-template-columns:repeat(${cols},${cell}px);background:#222">` +
      imgs.map((src, i) => `<div style="position:relative"><img src="${src}" style="width:${cell}px;display:block"><span style="position:absolute;top:4px;left:6px;font:700 13px monospace;color:#0f0;background:#000a;padding:1px 5px">${batch[i].replace('.png', '')}</span></div>`).join('') + '</body>');
    await sheet.waitForTimeout(400);
    await sheet.screenshot({ path: path.join(dir, `${outPrefix}-${String(sIdx).padStart(2, '0')}.png`), fullPage: true });
    await sheet.close();
  }
};
await tile('frame-', 'sheet');
await tile('intro-', 'introsheet');

// Motion summary: which elements actually moved relative to the document flow.
const moved = {};
for (let i = 1; i < telemetry.length; i++) {
  const dScroll = telemetry[i].scrollY - telemetry[i - 1].scrollY;
  const prev = Object.fromEntries(telemetry[i - 1].els.map((e) => [e.id, e]));
  telemetry[i].els.forEach((e) => {
    const p = prev[e.id];
    if (!p || dScroll === 0) return;
    const expected = p.y - dScroll;            // where it would sit if static
    const dev = e.y - expected;                 // deviation = scroll-linked motion
    const dOp = Math.abs(e.op - p.op);
    if (Math.abs(dev) > 6 || dOp > 0.08 || (e.tf !== p.tf && e.tf && p.tf)) {
      const k = `${e.tag}.${e.cls.split(' ')[0]}`;
      moved[k] = moved[k] || { samples: 0, maxDev: 0, opChanges: 0, txt: e.txt };
      moved[k].samples++;
      moved[k].maxDev = Math.max(moved[k].maxDev, Math.abs(dev));
      if (dOp > 0.08) moved[k].opChanges++;
    }
  });
}
fs.writeFileSync(path.join(dir, 'moved-summary.json'), JSON.stringify(moved, null, 1));
console.log(`saved ${dir}: ${STEPS} frames, ${Math.ceil((STEPS + 1) / 9)} sheets, ${Object.keys(moved).length} moving element groups`);
console.log(JSON.stringify(moved, null, 1).slice(0, 2200));
await browser.close();
