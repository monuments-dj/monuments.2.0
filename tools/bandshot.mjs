import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.addInitScript(() => localStorage.setItem('mnmt-accent','bw'));
for (const [path, name] of [['/template','tpl'],['/work/flashpoint','fp'],['/hire','hire']]) {
  await page.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const sr = path === '/hire' ? page.locator('.band').first() : page.locator('.statrow').first();
  await sr.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const box = await sr.boundingBox();
  await page.screenshot({ path: `/tmp/band-${name}.png`, clip: { x: 0, y: Math.max(0, box.y - 120), width: 1440, height: Math.min(box.height + 300, 880) } });
}
await browser.close();
console.log('shots done');
