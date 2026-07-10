import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','snip'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(2000);
// scroll the pinned reel until the ac-boise card is in view, then hover it
const res=await p.evaluate(async()=>{
  const card=document.querySelector('a.reel-card[href="/work/ac-boise"]');
  if(!card)return{err:'no card'};
  const pin=document.querySelector('.reel-pin'); const sec=pin.parentElement;
  const secTop=sec.getBoundingClientRect().top+scrollY;
  // walk the scrub until the card is centered
  for(let i=0;i<=30;i++){window.scrollTo(0,secTop+i*120);await new Promise(r=>setTimeout(r,60));
    const r=card.getBoundingClientRect(); if(r.left>200&&r.right<1240)break;}
  const r=card.getBoundingClientRect();
  return{x:Math.round(r.left+r.width/2),y:Math.round(r.top+r.height/2),snip:card.dataset.snip};
});
if(res.err){console.log(res.err);process.exit(1)}
console.log('card at',res.x,res.y,'snip:',res.snip);
await p.mouse.move(res.x,res.y);await p.waitForTimeout(1300);
const v=await p.evaluate(()=>{const card=document.querySelector('a.reel-card[href="/work/ac-boise"]');const vid=card.querySelector('video');return vid?{src:vid.currentSrc.split('/').slice(-2).join('/'),playing:!vid.paused,t:+vid.currentTime.toFixed(2),muted:vid.muted}:null});
console.log('hover video:',JSON.stringify(v));
await p.screenshot({path:path.join(dir,'acb-hover.png')});
await b.close();console.log('done');
