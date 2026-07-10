import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const routes = ['ac-boise','adorama-music','cwi-lets-get-started','donut-zumiez','sony-flow-state','sony-this-moment','waffle-me-up','on-camera','buck-the-quo','know-vape'];
let fails = 0;
for (const r of routes) {
  await page.goto('http://localhost:4321/work/' + r, { waitUntil: 'domcontentloaded' }).catch(() => null);
  await page.waitForTimeout(1200);
  const res = await page.evaluate(async () => {
    const vids = [...document.querySelectorAll('video.pvid')];
    for (const v of vids) { v.scrollIntoView({block:'center'}); await new Promise(x => setTimeout(x, 500)); }
    return {n: vids.length, playing: vids.filter(v => !v.paused && !v.error).length, errs: vids.filter(v => v.error).length};
  });
  const ok = res.n > 0 && res.playing === res.n && res.errs === 0;
  if (!ok) fails++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${r.padEnd(24)} loops:${res.n} playing:${res.playing} errors:${res.errs}`);
}
await browser.close();
console.log(fails ? fails + ' FAILURES' : 'ALL PASS');
