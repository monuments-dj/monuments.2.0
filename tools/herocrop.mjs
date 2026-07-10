import { chromium } from 'playwright'; import fs from 'node:fs';
const url = process.argv[2], name = process.argv[3], out = process.argv[4] || 'tools/snaps/hero';
fs.mkdirSync(out,{recursive:true});
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1440,height:900},deviceScaleFactor:2});
await p.goto(url,{waitUntil:'domcontentloaded'}); await p.waitForTimeout(1600);
// measure: for each .ln, span glyph bottom vs mask clip bottom
const m = await p.evaluate(()=>{
  const lns=[...document.querySelectorAll('.hero .t .ln, .hero h1 .ln')];
  return lns.map((ln,i)=>{
    const sp=ln.querySelector('span'); const lr=ln.getBoundingClientRect(); const sr=sp.getBoundingClientRect();
    const cs=getComputedStyle(ln); const csh=getComputedStyle(document.querySelector('.hero .t,.hero h1'));
    return {i, lnBottom:+lr.bottom.toFixed(1), spanBottom:+sr.bottom.toFixed(1),
      overflowPx:+(sr.bottom-lr.bottom).toFixed(1), padB:cs.paddingBottom, lh:csh.lineHeight, fs:csh.fontSize};
  });
});
console.log(name, JSON.stringify(m));
const hero=await p.$('.hero'); await hero.screenshot({path:`${out}/${name}.png`});
await b.close();
