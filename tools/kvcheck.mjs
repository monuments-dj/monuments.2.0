import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto('http://localhost:4321/work/know-vape', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1500);
const res = await page.evaluate(async () => {
  const vids = [...document.querySelectorAll('video.pvid')];
  const out = [];
  for (const v of vids) {
    v.scrollIntoView({block:'center'});
    await new Promise(x => setTimeout(x, 800));
    out.push({src: v.src.split('/').pop(), paused: v.paused, ready: v.readyState, net: v.networkState});
  }
  return out;
});
console.log(JSON.stringify(res, null, 1));
await browser.close();
