// flowcheck.mjs — the page FLOW RULE, enforced. Content bands must alternate;
// no two LIGHT bands may sit adjacent (never a light section butted against another
// light section). Reads each full-bleed band's rendered ground top-to-bottom,
// works on the template AND real work pages (bands nested in .over/.underfoot).
// Usage: node tools/flowcheck.mjs [url]   default /page-template
import { chromium } from '/Users/djram/monuments-site/node_modules/playwright/index.mjs';
const url = process.argv[2] || 'http://localhost:4321/page-template';
const b = await chromium.launch(); const pg = await b.newPage();
await pg.setViewportSize({ width: 1280, height: 900 });
await pg.goto(url, { waitUntil: 'networkidle' });
await pg.waitForTimeout(300);
const bands = await pg.evaluate(() => {
  const SEL = 'header.hero,.herob,.statrow,.rolerow,.break,.statbeat,.quote,.cta,.cuwrap,.insB,.film,.filmsplit,.ttp-sec,section.paper,section.white,section.tc,section.mzn,section.block-dark,.tstwrap,.cdd';
  let els = [...document.querySelectorAll(SEL)].filter(e => e.offsetHeight >= 140 && e.offsetWidth >= innerWidth * 0.9);
  // keep only outermost (drop any band nested inside another matched band)
  els = els.filter(e => !els.some(o => o !== e && o.contains(e)));
  const tone = (el) => {
    if (el.matches('header.hero,.hero,.herob,.break,.film,.filmsplit')) return 'DARK';
    const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
    if (!m || (m[3] !== undefined && Number(m[3]) === 0)) return 'DARK';
    const [r, g, bl] = m.map(Number), lum = (r + g + bl) / 3;
    if (r > 185 && r - g > 38 && r - bl > 20) return 'ACCENT';
    return lum > 200 ? 'LIGHT' : 'DARK';
  };
  return els.map(e => ({ t: tone(e), label: (e.className || e.tagName).toString().trim().split(/\s+/)[0].slice(0, 16) }));
});
const seq = bands.map(x => x.t);
const viol = [];
for (let i = 1; i < seq.length; i++) if (seq[i] === 'LIGHT' && seq[i - 1] === 'LIGHT') viol.push(`${i-1}-${i}`);
console.log('SEQ:', seq.join(' '));
console.log(viol.length ? `  FAIL adjacent-light @ ${viol.join(',')}` : '  PASS');
await b.close();
process.exit(viol.length ? 1 : 0);
