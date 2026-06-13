#!/usr/bin/env node
// Capture the SAME /lab content band under every LabFx theme preset, so the
// presets can be compared apples-to-apples (real Chromium, rAF works here, unlike
// the headless Claude-preview). Saves tools/snaps/themes/<theme>.png + a hero-NN.
// Usage: node tools/snap-themes.mjs [url=http://localhost:4321/lab]
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const THEMES = ['monument', 'noir', 'electric', 'press', 'slate', 'forest', 'sand', 'mono'];
const URL = process.argv[2] || 'http://localhost:4321/lab';
const width = 1440, height = 900;
const dir = path.join('tools', 'snaps', 'themes');
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
for (const theme of THEMES) {
  const ctx = await browser.newContext({ viewport: { width, height } });
  await ctx.addInitScript((t) => { try { localStorage.setItem('mc-theme', t); } catch (e) {} }, theme);
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await page.waitForTimeout(1000);
  // Walk the page so IntersectionObserver reveals + lazy media fire, then force
  // any still-hidden reveal classes and return to top.
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 600) {
      window.lenis ? window.lenis.scrollTo(y, { immediate: true }) : window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 80));
    }
    document.querySelectorAll('.split, .fade').forEach(e => e.classList.add('on'));
    window.lenis ? window.lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);

  const top = await page.evaluate(() => {
    const el = document.querySelector('.lab-blocks');
    return el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : 0;
  });
  const fullH = await page.evaluate(() => document.body.scrollHeight);
  await page.screenshot({ path: path.join(dir, `${theme}.png`), fullPage: true, clip: { x: 0, y: top, width, height: Math.min(1060, fullH - top) } });
  // also a hero frame (top of page) for each
  await page.screenshot({ path: path.join(dir, `${theme}-hero.png`), clip: { x: 0, y: 0, width, height } });
  console.log('saved', theme, '(blocks top', top + ')');
  await ctx.close();
}
await browser.close();
console.log('done ->', dir);
