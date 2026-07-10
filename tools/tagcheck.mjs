import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','tags'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
async function heroShot(route,name){
  const p=await b.newPage({viewport:{width:1440,height:860}});
  await p.goto('http://localhost:4321'+route,{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(2600); // let the underline draw
  const t=await p.evaluate(()=>{const rt=document.querySelector('.role-tag');if(!rt)return null;const r=rt.getBoundingClientRect();const path=document.querySelector('.rt-line path');return{text:rt.textContent.trim(),visible:r.height>0&&getComputedStyle(rt).opacity>0.9,drawn:getComputedStyle(path).strokeDashoffset==='0px'}});
  console.log(name,JSON.stringify(t));
  await p.screenshot({path:path.join(dir,name+'.png')});
  await p.close();
}
await heroShot('/work/flashpoint','fp');
await heroShot('/work/ac-boise','acb');
await heroShot('/work/on-camera','oncam');
// KV: loop width + copy
const p=await b.newPage({viewport:{width:1440,height:860}});
await p.goto('http://localhost:4321/work/know-vape',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1500);
const kv=await p.evaluate(()=>{const tr=document.querySelector('.btstrack');return{trackW:Math.round(tr.scrollWidth),vw:innerWidth,loops:tr.scrollWidth/2>=innerWidth,copy:document.body.textContent.includes('without the finger wagging')}});
console.log('kv:',JSON.stringify(kv));
await b.close();console.log('done');
