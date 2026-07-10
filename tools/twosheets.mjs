import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
for (const [r, name] of [['work/turnstile','tsheet'],['work/sony-xperia-summer','xsheet']]) {
  await page.goto('http://localhost:4321/' + r, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  const el = page.locator('.frames').first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(3000);
  const box = await el.boundingBox();
  await page.screenshot({ path: `/tmp/${name}.png`, clip: { x: 0, y: Math.max(0, box.y - 40), width: 1440, height: Math.min(box.height + 80, 870) } });
}
await browser.close(); console.log('ok');
