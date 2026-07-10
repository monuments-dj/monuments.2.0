import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.addInitScript(() => localStorage.setItem('mnmt-accent','bw'));
for (const [path, sel, name] of [['/contact','.journey','contact'],['/work/flashpoint','.cta','fp-cta'],['/giving','.cta','giving-cta']]) {
  await page.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
  await page.evaluate(() => { document.querySelectorAll('.rv').forEach(el => el.classList.add('in')); });
  const el = page.locator(sel).last();
  await el.scrollIntoViewIfNeeded(); await page.waitForTimeout(700);
  const box = await el.boundingBox();
  await page.screenshot({ path: `/tmp/cta-${name}.png`, clip: { x: 0, y: Math.max(0, box.y), width: 1440, height: Math.min(box.height, 860) } });
}
await browser.close(); console.log('done');
