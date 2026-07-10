import { chromium } from 'playwright';
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1500);
const cards=await p.evaluate(()=>['ac-boise','dw-drums','donut-zumiez','art-of-visuals'].map(s=>{
  const c=document.querySelector(`a.reel-card[href="/work/${s}"]`);
  return {s,role:c.dataset.role,stats:c.dataset.stats,meta:c.querySelector('.rc-meta .mono').textContent};
}));
cards.forEach(c=>console.log(c.s,'::',c.role,'|',c.stats,'|',c.meta));
// hover ACB to confirm new snip plays
const pos=await p.evaluate(async()=>{
  const card=document.querySelector('a.reel-card[href="/work/ac-boise"]');
  const pin=document.querySelector('.reel-pin');const sec=pin.parentElement;
  const secTop=sec.getBoundingClientRect().top+scrollY;
  for(let i=0;i<=56;i++){window.scrollTo(0,secTop+i*120);await new Promise(r=>setTimeout(r,45));
    const r=card.getBoundingClientRect();if(r.left>150&&r.right<1290)return{x:Math.round(r.left+r.width/2),y:Math.round(r.top+r.height/2)};}
  return null;
});
if(pos){await p.mouse.move(pos.x,pos.y);await p.waitForTimeout(1600);
  const v=await p.evaluate(()=>{const c=document.querySelector('a.reel-card[href="/work/ac-boise"]');const vid=c.querySelector('video');return vid?{playing:!vid.paused,t:+vid.currentTime.toFixed(1)}:null});
  console.log('acb snip:',JSON.stringify(v));
  await p.screenshot({path:'tools/snaps/reelend/acb-newsnip.png'});
}
await b.close();console.log('done');
