import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','reels'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
for(const w of [1440,390]){
  const p=await b.newPage({viewport:{width:w,height:900}});
  await p.goto('http://localhost:4321/work/sony-xperia-summer',{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(1500);
  const sec=await p.$('.reels'); if(sec){await sec.scrollIntoViewIfNeeded();}
  // give instagram embed.js time to hydrate iframes
  await p.waitForTimeout(6500);
  // report: how many iframes rendered inside .reels
  const info=await p.evaluate(()=>{const r=document.querySelector('.reels');if(!r)return{err:'no .reels'};const bq=r.querySelectorAll('blockquote.instagram-media').length;const ifr=r.querySelectorAll('iframe').length;const heights=[...r.querySelectorAll('iframe')].map(f=>Math.round(f.getBoundingClientRect().height));return{bq,ifr,heights};});
  console.log(`@${w}`,JSON.stringify(info));
  if(sec){await sec.scrollIntoViewIfNeeded();await p.waitForTimeout(400);await sec.screenshot({path:path.join(dir,`reels-${w}.png`)});}
  await p.close();
}
await b.close();console.log('done');
