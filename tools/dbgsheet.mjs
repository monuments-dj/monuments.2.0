import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto('http://localhost:4321/work/sony-xm5', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1500);
await page.locator('#frames').scrollIntoViewIfNeeded();
await page.waitForTimeout(2500);
const d = await page.evaluate(() => {
  const f = document.getElementById('frames');
  const it = f.children[0];
  const img = it.querySelector('img');
  const ics = getComputedStyle(img);
  return {
    itemH: it.getBoundingClientRect().height, imgH: img.getBoundingClientRect().height,
    natural: img.naturalWidth + 'x' + img.naturalHeight, complete: img.complete,
    attrs: img.getAttribute('width') + 'x' + img.getAttribute('height'),
    imgCSS: {h: ics.height, aspect: ics.aspectRatio, objectFit: ics.objectFit, maxH: ics.maxHeight},
    itemSpan: it.style.gridRowEnd, frCSSheight: getComputedStyle(it).height
  };
});
console.log(JSON.stringify(d, null, 1));
await browser.close();
