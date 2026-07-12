#!/usr/bin/env node
// Renders tools/og-card.html at exactly 1200×630 → public/og/card.png
import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';

const html = path.resolve('tools/og-card.html');
const out = path.resolve('public/og/card.png');
fs.mkdirSync(path.dirname(out), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
await page.goto('file://' + html, { waitUntil: 'networkidle' });
await page.waitForTimeout(600); // fonts settle
await page.screenshot({ path: out });
await browser.close();
console.log('wrote', out);
