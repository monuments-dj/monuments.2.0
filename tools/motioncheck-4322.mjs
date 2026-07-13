import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const BASE = process.argv[2] || 'http://localhost:4322';
const routes = ['/work/ac-boise','/work/adorama-music','/work/art-of-visuals','/work/cwi-lets-get-started','/work/donut-zumiez','/work/sony-flow-state','/work/sony-this-moment','/work/sony-xperia-summer','/work/waffle-me-up','/work/on-camera','/work/buck-the-quo','/work/know-vape','/capabilities'];
let fails = 0;
for (const r of routes) {
  await page.goto(BASE + r, { waitUntil: 'domcontentloaded' }).catch(() => null);
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
