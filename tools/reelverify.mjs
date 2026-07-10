import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','home'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(2200);
// natural state (no override)
const nat=await p.evaluate(()=>getComputedStyle(document.documentElement).overflowX);
const res=await p.evaluate(async()=>{
  const pin=document.querySelector('.reel-pin');const sec=pin.parentElement;
  const secTop=sec.getBoundingClientRect().top+scrollY;
  const tops=[];const trackX=[];
  for(let i=0;i<4;i++){window.scrollTo(0,secTop+i*600+300);await new Promise(r=>setTimeout(r,150));
    tops.push(Math.round(pin.getBoundingClientRect().top));
    const tr=document.querySelector('.reel-track');trackX.push(Math.round(tr.getBoundingClientRect().left));}
  // screenshot mid-pin
  window.scrollTo(0,secTop+900);
  return {tops,trackX};
});
await p.waitForTimeout(300);
await p.screenshot({path:path.join(dir,'reel-working.png')});
console.log('natural html overflow-x:',nat);
console.log('pin.top (should stay ~0):',JSON.stringify(res.tops));
console.log('reel-track.left (should CHANGE = horizontal scrub):',JSON.stringify(res.trackX));
await b.close();
