import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','snip'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(2000);
const pos=await p.evaluate(async()=>{
  const card=document.querySelector('a.reel-card[href="/work/ac-boise"]');
  const pin=document.querySelector('.reel-pin'); const sec=pin.parentElement;
  const secTop=sec.getBoundingClientRect().top+scrollY;
  let best=null;
  for(let i=0;i<=56;i++){
    window.scrollTo(0,secTop+i*120); await new Promise(r=>setTimeout(r,50));
    const r=card.getBoundingClientRect();
    if(r.left>150&&r.right<1290){best={x:Math.round(r.left+r.width/2),y:Math.round(r.top+r.height/2)};break;}
  }
  return best;
});
if(!pos){console.log('card never centered');process.exit(1)}
console.log('card centered at',JSON.stringify(pos));
await p.mouse.move(pos.x,pos.y);await p.waitForTimeout(1600);
const v=await p.evaluate(()=>{const card=document.querySelector('a.reel-card[href="/work/ac-boise"]');const vid=card.querySelector('video');return vid?{src:vid.currentSrc.split('/').slice(-2).join('/'),playing:!vid.paused,t:+vid.currentTime.toFixed(2),live:vid.classList.contains('live')}:null});
console.log('hover video:',JSON.stringify(v));
await p.screenshot({path:path.join(dir,'acb-hover.png')});
await b.close();console.log('done');
