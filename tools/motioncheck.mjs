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
    let playsWhenVisible = 0;
    for (const v of vids) {
      v.scrollIntoView({block:'center'});
      await new Promise(x => setTimeout(x, 700));
      if (!v.paused && !v.error) playsWhenVisible++;
    }
    scrollTo(0, 0);
    await new Promise(x => setTimeout(x, 700));
    const farPaused = vids.filter(v => { const r = v.getBoundingClientRect(); return (r.top > innerHeight + 300 || r.bottom < -300) && v.paused; }).length;
    const far = vids.filter(v => { const r = v.getBoundingClientRect(); return r.top > innerHeight + 300 || r.bottom < -300; }).length;
    return {n: vids.length, playsWhenVisible, far, farPaused, errs: vids.filter(v => v.error).length};
  });
  const ok = res.n > 0 && res.playsWhenVisible === res.n && res.farPaused === res.far && res.errs === 0;
  if (!ok) fails++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${r.padEnd(24)} loops:${res.n} playsVisible:${res.playsWhenVisible} pausedFar:${res.farPaused}/${res.far} errors:${res.errs}`);
}
await browser.close();
console.log(fails ? fails + ' FAILURES' : 'ALL PASS');
