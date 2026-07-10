import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','v3'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
// 1) turnstile card hover on home
let p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(2000);
const pos=await p.evaluate(async()=>{
  const card=document.querySelector('a.reel-card[href="/work/turnstile"]');
  const pin=document.querySelector('.reel-pin'); const sec=pin.parentElement;
  const secTop=sec.getBoundingClientRect().top+scrollY;
  for(let i=0;i<=56;i++){window.scrollTo(0,secTop+i*120);await new Promise(r=>setTimeout(r,50));
    const r=card.getBoundingClientRect();
    if(r.left>150&&r.right<1290)return{x:Math.round(r.left+r.width/2),y:Math.round(r.top+r.height/2)};}
  return null;
});
if(pos){await p.mouse.move(pos.x,pos.y);await p.waitForTimeout(1500);
  const v=await p.evaluate(()=>{const c=document.querySelector('a.reel-card[href="/work/turnstile"]');const vid=c.querySelector('video');return vid?{src:vid.currentSrc.split('/').pop(),playing:!vid.paused,t:+vid.currentTime.toFixed(2)}:null});
  console.log('turnstile hover:',JSON.stringify(v));
  await p.screenshot({path:path.join(dir,'turnstile-hover.png')});
}else console.log('turnstile card never centered');
await p.close();
// 2) about creed
p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/about',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1500);
const f=await p.$('.file'); await f.scrollIntoViewIfNeeded(); await p.waitForTimeout(1200);
const cv=await p.evaluate(()=>{const v=document.getElementById('leadVid');return {src:(v.currentSrc||'').split('/').pop(),playing:!v.paused,poster:v.poster.split('/').pop()}});
console.log('creed video:',JSON.stringify(cv));
await f.screenshot({path:path.join(dir,'creed.png')});
await p.close();
await b.close();console.log('done');
