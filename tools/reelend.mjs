import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','reelend'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1800);
// scroll to the very end of the reel section's pin range
const res=await p.evaluate(async()=>{
  const sec=document.querySelector('.reel');
  const top=sec.getBoundingClientRect().top+scrollY;
  const total=sec.getBoundingClientRect().height-innerHeight;
  window.scrollTo(0,top+total); await new Promise(r=>setTimeout(r,400));
  window.dispatchEvent(new Event('scroll')); await new Promise(r=>setTimeout(r,300));
  const btq=document.querySelector('a.reel-card[href="/work/buck-the-quo"]').getBoundingClientRect();
  const h2=document.querySelector('.reel-head h2');
  return{
    headline:h2.textContent.replace(/\s+/g,' ').trim(),
    btqCenter:Math.round(btq.left+btq.width/2), vwCenter:innerWidth/2,
    delta:Math.round(btq.left+btq.width/2-innerWidth/2)
  };
});
console.log(JSON.stringify(res));
await p.screenshot({path:path.join(dir,'end.png')});
// tess card count
await p.goto('http://localhost:4321/about',{waitUntil:'domcontentloaded'});await p.waitForTimeout(900);
console.log('testimonial cards:',await p.evaluate(()=>document.querySelectorAll('.tst-card').length));
await b.close();console.log('done');
