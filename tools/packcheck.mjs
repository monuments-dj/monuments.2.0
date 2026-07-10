import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
for (const r of ['sony-xm5','sony-flow-state','sony-this-moment','flashpoint']) {
  await page.goto('http://localhost:4321/work/' + r, { waitUntil: 'domcontentloaded' }).catch(()=>null);
  await page.waitForTimeout(1000);
  const sheets = await page.evaluate(async () => {
    const out = [];
    for (const f of document.querySelectorAll('.frames')) {
      f.scrollIntoView({block:'center'});
      await new Promise(x => setTimeout(x, 1800));
    }
    await new Promise(x => setTimeout(x, 2600)); // let retries settle
    for (const f of document.querySelectorAll('.frames')) {
      const items = [...f.children].filter(c => c.getBoundingClientRect().height > 5);
      if (!items.length) continue;
      const slivers = items.filter(c => c.scrollHeight > c.getBoundingClientRect().height + 60).length;
      const bottoms = {};
      items.forEach(it => { const r = it.getBoundingClientRect(); const col = Math.round(r.left/50); bottoms[col] = Math.max(bottoms[col]||0, r.bottom); });
      const bs = Object.values(bottoms);
      out.push({items: items.length, display: getComputedStyle(f).display, overflowing: slivers, spread: Math.round(Math.max(...bs) - Math.min(...bs))});
    }
    return out;
  });
  console.log(r, JSON.stringify(sheets));
}
await browser.close();
