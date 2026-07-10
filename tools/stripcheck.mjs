import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto('http://localhost:4321/about', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1500);
const res = await page.evaluate(async () => {
  const strip = document.querySelector('.btssec');
  strip.scrollIntoView({block:'center'});
  await new Promise(x => setTimeout(x, 1500));
  const vids = [...strip.querySelectorAll('video')];
  const playing = vids.filter(v => !v.paused).length;
  scrollTo(0, 0);
  await new Promise(x => setTimeout(x, 900));
  const stillPlaying = vids.filter(v => !v.paused).length;
  return {total: vids.length, playingWhenVisible: playing, playingWhenAway: stillPlaying};
});
console.log(JSON.stringify(res));
await browser.close();
