#!/usr/bin/env node
// Resting-offset verification: scroll to N arbitrary offsets, STOP, wait, shoot
// the viewport. Catches lazy-load pop-in, pin misalignment, fixed-overlay bugs
// at positions a real visitor actually rests at.
// Usage: node tools/restshots.mjs <url> <name> [width=1440]
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const [url, name, widthArg] = process.argv.slice(2);
const width = Number(widthArg) || 1440;
const dir = path.join('tools', 'snaps', name);
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
await page.waitForTimeout(1200);

const H = await page.evaluate(() => document.body.scrollHeight);
const stops = [0, .18, .33, .47, .61, .74, .88, .97];
for (let i = 0; i < stops.length; i++) {
  const y = Math.round((H - 900) * stops[i]);
  await page.evaluate(v => window.scrollTo(0, v), y);
  await page.waitForTimeout(900); // settle: lazy fetch + reveal anims
  await page.screenshot({ path: path.join(dir, `rest-${String(i).padStart(2, '0')}-${Math.round(stops[i] * 100)}pct.png`) });
}
await browser.close();
console.log('saved', stops.length, 'resting shots →', dir, `(page ${width}x${H})`);
