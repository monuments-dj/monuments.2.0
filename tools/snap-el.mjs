#!/usr/bin/env node
// Capture a single element at the scroll position where its section sits centered
// in the viewport, so scroll-scrubbed pattern elements show their mid-reveal state
// (the Claude preview can't: it pauses rAF, so Lenis never composites a scroll).
// Real Chromium. Usage: node tools/snap-el.mjs <url> <selector> <name> [width=1440]
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const [url, selector, name, widthArg] = process.argv.slice(2);
const width = Number(widthArg) || 1440;
if (!url || !selector || !name) { console.error('usage: node tools/snap-el.mjs <url> <selector> <name> [width]'); process.exit(1); }
const dir = path.join('tools', 'snaps', name);
fs.mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
await page.waitForTimeout(900);
await page.evaluate(() => document.querySelectorAll('.split, .fade').forEach((e) => e.classList.add('on')));
await page.evaluate((sel) => {
  const el = document.querySelector(sel);
  if (!el) return;
  const r = el.getBoundingClientRect();
  const target = r.top + window.scrollY - (window.innerHeight - r.height) / 2;
  window.lenis ? window.lenis.scrollTo(target, { immediate: true }) : window.scrollTo(0, target);
}, selector);
await page.waitForTimeout(500);
await page.evaluate(() => window.dispatchEvent(new Event('scroll')));
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(dir, name + '.png') });
console.log('saved', path.join(dir, name + '.png'));
await browser.close();
