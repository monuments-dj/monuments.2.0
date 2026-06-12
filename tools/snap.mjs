#!/usr/bin/env node
// Visual-truth capture for any page. Renders in real Chromium, scrolls the full
// page to trigger lazy-load + scroll reveals, then saves:
//   snaps/<name>/full.png          — full-page screenshot at the given width
//   snaps/<name>/sec-NN-<tag>.png  — one crop per top-level section
//   snaps/<name>/elements.json     — visible elements w/ rects + key computed styles
// Usage: node tools/snap.mjs <url> <name> [width=1440] [--sections]
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const [url, name, widthArg] = process.argv.slice(2);
const width = Number(widthArg) || 1440;
const wantSections = process.argv.includes('--sections');
if (!url || !name) { console.error('usage: node tools/snap.mjs <url> <name> [width] [--sections]'); process.exit(1); }
const dir = path.join('tools', 'snaps', name);
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
await page.waitForTimeout(1500);

// Scroll through the whole page so lazy images + IntersectionObserver reveals fire.
await page.evaluate(async () => {
  const h = document.body.scrollHeight;
  for (let y = 0; y <= h; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
  window.scrollTo(0, 0);
  // Force any opacity-based reveal classes commonly used on this site + WP themes.
  document.querySelectorAll('.fade').forEach(el => el.classList.add('on'));
});
await page.waitForTimeout(1200);

await page.screenshot({ path: path.join(dir, 'full.png'), fullPage: true });

// Element dump: visible elements with geometry + the styles that define a design.
const elements = await page.evaluate(() => {
  const out = [];
  const walk = (el, depth) => {
    if (depth > 14 || !(el instanceof Element)) return;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const visible = r.width > 2 && r.height > 2 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0.01;
    if (visible) {
      const entry = {
        tag: el.tagName.toLowerCase(),
        cls: typeof el.className === 'string' ? el.className.slice(0, 80) : '',
        rect: { x: Math.round(r.x + scrollX), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) },
      };
      const text = (el.childNodes.length && [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()))
        ? el.textContent.trim().replace(/\s+/g, ' ').slice(0, 90) : '';
      if (text) {
        entry.text = text;
        entry.font = `${cs.fontStyle === 'italic' ? 'italic ' : ''}${cs.fontWeight} ${cs.fontSize}/${cs.lineHeight} ${cs.fontFamily.split(',')[0]}`;
        entry.color = cs.color;
        if (cs.letterSpacing !== 'normal') entry.tracking = cs.letterSpacing;
        if (cs.textTransform !== 'none') entry.transform = cs.textTransform;
      }
      if (el.tagName === 'IMG') entry.src = el.currentSrc.split('/').pop();
      if (cs.backgroundColor !== 'rgba(0, 0, 0, 0)') entry.bg = cs.backgroundColor;
      if (cs.position !== 'static') entry.pos = cs.position;
      out.push(entry);
    }
    [...el.children].forEach(c => walk(c, depth + 1));
  };
  walk(document.body, 0);
  return out;
});
fs.writeFileSync(path.join(dir, 'elements.json'), JSON.stringify(elements, null, 1));

// Per-section crops: top-level structural children of body/main/article.
if (wantSections) {
  const sections = await page.evaluate(() => {
    const roots = document.querySelectorAll('body > *, body > * > section, body > * > header, body > * > footer, main > *, article > *');
    const seen = new Set();
    const out = [];
    roots.forEach(el => {
      const r = el.getBoundingClientRect();
      const key = Math.round(r.y + scrollY) + ':' + Math.round(r.height);
      if (r.height > 120 && r.width > 300 && !seen.has(key)) {
        seen.add(key);
        out.push({ tag: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : ''), y: Math.round(r.y + scrollY), h: Math.round(r.height) });
      }
    });
    return out.sort((a, b) => a.y - b.y).slice(0, 24);
  });
  const fullH = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    const clipH = Math.min(s.h, 4000, fullH - s.y);
    if (clipH < 50) continue;
    await page.screenshot({
      path: path.join(dir, `sec-${String(i).padStart(2, '0')}-${s.tag.replace(/[^a-z0-9.-]/g, '')}.png`),
      fullPage: true,
      clip: { x: 0, y: s.y, width, height: clipH },
    });
  }
  console.log(JSON.stringify(sections, null, 1));
}

const fullH = await page.evaluate(() => document.body.scrollHeight);
console.log(`saved ${dir}/ — page ${width}x${fullH}, ${elements.length} elements`);
await browser.close();
