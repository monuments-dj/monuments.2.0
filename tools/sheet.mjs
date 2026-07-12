#!/usr/bin/env node
// Labeled contact sheet: renders a folder of images as a 5-wide grid with
// filename labels and screenshots it. For vision passes (sorting, pin photos).
// Usage: node tools/sheet.mjs <dir> <outName> [start] [count]
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const [dirArg, outName, startArg, countArg] = process.argv.slice(2);
const start = Number(startArg) || 0;
const count = Number(countArg) || 25;
const files = fs.readdirSync(dirArg).filter(f => /\.(jpe?g|png|webp)$/i.test(f)).sort().slice(start, start + count);

const cells = files.map(f =>
  `<div class="c"><img src="file://${path.resolve(dirArg, f)}"><span>${f}</span></div>`).join('');
const html = `<!DOCTYPE html><html><head><style>
  body{margin:0;background:#111;font:11px monospace;color:#eee}
  .g{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;padding:6px}
  .c{display:flex;flex-direction:column;gap:2px}
  .c img{width:100%;height:200px;object-fit:cover;display:block}
  .c span{color:#9f9}
</style></head><body><div class="g">${cells}</div></body></html>`;
const tmp = path.join('tools', `.sheet-tmp.html`);
fs.writeFileSync(tmp, html);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 200 } });
await page.goto('file://' + path.resolve(tmp), { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
fs.mkdirSync('tools/snaps/sheets', { recursive: true });
await page.screenshot({ path: `tools/snaps/sheets/${outName}.png`, fullPage: true });
await browser.close();
fs.unlinkSync(tmp);
console.log(`tools/snaps/sheets/${outName}.png · ${files.length} imgs (${files[0]} … ${files[files.length - 1]})`);
