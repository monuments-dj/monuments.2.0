// focused 390px overhang probe: lists EVERY overhanging element w/ selector path
import { chromium } from 'playwright';
const port = process.argv[2] || '4322';
const pages = process.argv.slice(3);
const list = pages.length ? pages : ['sony-xperia', 'waffle-me-up', 'sony-xm5'];
const b = await chromium.launch();
for (const pg of list) {
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  await p.goto(`http://localhost:${port}/work/${pg}`, { waitUntil: 'domcontentloaded' }).catch(() => {});
  await p.waitForTimeout(2500);
  const r = await p.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const hits = [];
    const path = el => {
      const bits = [];
      let n = el;
      while (n && n.tagName && bits.length < 4) {
        bits.unshift(n.tagName.toLowerCase() + (n.className && typeof n.className === 'string' ? '.' + n.className.trim().split(/\s+/).slice(0, 2).join('.') : ''));
        n = n.parentElement;
      }
      return bits.join(' > ');
    };
    document.querySelectorAll('*').forEach(el => {
      const bb = el.getBoundingClientRect();
      if (bb.right > vw + 6 || bb.left < -6) {
        const cs = getComputedStyle(el);
        if (cs.position !== 'fixed' && cs.visibility !== 'hidden' && +cs.opacity > 0.01 && bb.width > 0)
          hits.push({ sel: path(el), left: Math.round(bb.left), right: Math.round(bb.right), w: Math.round(bb.width) });
      }
    });
    // dedupe children of already-hit parents: keep all, caller reads
    return { vw, sw: document.documentElement.scrollWidth, hits: hits.slice(0, 12) };
  });
  console.log(`\n== ${pg} vw:${r.vw} scrollW:${r.sw}`);
  r.hits.forEach(h => console.log(`  L${h.left} R${h.right} w${h.w}  ${h.sel}`));
  if (!r.hits.length) console.log('  clean');
  await p.close();
}
await b.close();
