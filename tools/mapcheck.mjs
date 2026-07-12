// Verifies the WorldMap: white band render + hover tips (photos + label).
// Hovers by dot coordinates (rings pulse, so bbox-based hover is flaky).
import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4444/about/', { waitUntil: 'networkidle' });
await page.locator('.wmap').scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await page.screenshot({ path: 'tools/snaps/map-white.png' });

async function hoverPin(place, shot) {
  const box = await page.locator(`.pin[data-place="${place}"] .dot`).evaluate(el => {
    const r = el.getBoundingClientRect();
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
  });
  await page.mouse.move(box.x, box.y);
  await page.waitForTimeout(800);
  await page.screenshot({ path: `tools/snaps/${shot}.png` });
  const tipVisible = await page.evaluate(() => !document.getElementById('wmTip').hidden);
  console.log(place, 'tip visible:', tipVisible);
}
await hoverPin('Uganda', 'map-hover-uganda');
await hoverPin('Los Angeles', 'map-hover-la');
await hoverPin('Berlin', 'map-hover-berlin');
await browser.close();
console.log('map shots saved');
