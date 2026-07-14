// pagecheck.mjs — structural truth across every page. Finds the class of breakage
// that hit waffle: content escaping .over, dead vertical voids, empty/zero-height
// sections, and duplicated headings. Deterministic; no opinions.
import { chromium } from '/Users/djram/monuments-site/node_modules/playwright/index.mjs';
const PAGES = process.argv.slice(2);
const b = await chromium.launch(); const pg = await b.newPage();
await pg.setViewportSize({ width: 1440, height: 900 });
for (const path of PAGES) {
  const url = 'http://localhost:4321' + path;
  let res;
  try {
    await pg.goto(url, { waitUntil: 'load', timeout: 20000 });
    await pg.waitForTimeout(500);
    res = await pg.evaluate(() => {
      const issues = [];
      const over = document.querySelector('.over');
      const under = document.querySelector('.underfoot');
      // 1) content escaping the .over wrapper (the waffle bug)
      if (over) {
        const main = [...document.querySelectorAll('section, .film, .markband, .quote, .gal')];
        const escaped = main.filter(s => !over.contains(s) && (!under || !under.contains(s)));
        if (escaped.length) issues.push(`${escaped.length} section(s) OUTSIDE .over: ` + escaped.slice(0,4).map(s=>(s.className||'').toString().split(' ')[0]).join(','));
      }
      // 2) dead vertical voids between consecutive top-level bands
      const bands = [...document.querySelectorAll('.over > *, body > section')].filter(e=>e.getBoundingClientRect().height>20);
      for (let i=1;i<bands.length;i++){
        const prev = bands[i-1].getBoundingClientRect(), cur = bands[i].getBoundingClientRect();
        const gap = Math.round(cur.top - prev.bottom);
        if (gap > 120) issues.push(`VOID ${gap}px between .${(bands[i-1].className||'').toString().split(' ')[0]} and .${(cur && bands[i].className||'').toString().split(' ')[0]}`);
      }
      // 3) empty sections (height but no text and no media)
      document.querySelectorAll('section, .markband, .film').forEach(s=>{
        const r=s.getBoundingClientRect();
        if (r.height>150 && !(s.innerText||'').trim() && !s.querySelector('img,video,iframe,svg,canvas'))
          issues.push(`EMPTY section .${(s.className||'').toString().split(' ')[0]} h=${Math.round(r.height)}`);
      });
      // 4) duplicated headings (same h2/h3 twice = copy pasted twice)
      const hs = [...document.querySelectorAll('h1,h2,h3')].map(h=>(h.innerText||'').trim().toLowerCase()).filter(Boolean);
      const dupes = hs.filter((h,i)=>h.length>8 && hs.indexOf(h)!==i);
      if (dupes.length) issues.push('DUPLICATE heading: ' + [...new Set(dupes)].slice(0,2).join(' / '));
      return { issues, h: Math.round(document.body.scrollHeight) };
    });
  } catch(e) { console.log(`❌ ${path} — ${e.message.split('\n')[0]}`); continue; }
  if (res.issues.length) { console.log(`\n⚠️  ${path}`); res.issues.forEach(i=>console.log('     ' + i)); }
  else console.log(`✅ ${path}`);
}
await b.close();
