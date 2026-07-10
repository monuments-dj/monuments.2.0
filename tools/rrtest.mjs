import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','rr'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message.slice(0,110)));
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1800);
// scrub through the rr section, sample panel scale + word x at 3 points
const secTop=await p.evaluate(()=>document.querySelector('.rr').getBoundingClientRect().top+scrollY);
const samples=[];
for(const f of [0.15,0.5,0.95]){
  await p.evaluate(([t,frac])=>{const sec=document.querySelector('.rr');window.scrollTo(0,t+(sec.getBoundingClientRect().height-innerHeight)*frac)},[secTop,f]);
  await p.waitForTimeout(350);
  samples.push(await p.evaluate(()=>{const pn=document.getElementById('rrPanel');const wl=document.querySelector('.rr-l');return{scale:+(pn.style.transform.match(/scale\(([\d.]+)\)/)||[])[1],wOp:+wl.style.opacity,pinTop:Math.round(document.querySelector('.rr-pin').getBoundingClientRect().top)}}));
  await p.screenshot({path:path.join(dir,`rr-${f}.png`)});
}
console.log('errors:',errs.length?errs.join('|'):'none');
console.log('samples:',JSON.stringify(samples));
// click at full scale -> lightbox
const box=await p.evaluate(()=>{document.getElementById('rrPanel').click();return new Promise(r=>setTimeout(()=>r(document.getElementById('reelbox').classList.contains('on')),400))});
console.log('click opens reelbox:',box);
// testimonials on home + about
await p.evaluate(()=>window.scrollTo(0,0));
const t1=await p.evaluate(()=>!!document.querySelector('.tst-grid'));
await p.goto('http://localhost:4321/about',{waitUntil:'domcontentloaded'});await p.waitForTimeout(1000);
const t2=await p.evaluate(()=>document.querySelectorAll('.tst-card').length);
// capabilities kit
await p.goto('http://localhost:4321/capabilities',{waitUntil:'domcontentloaded'});await p.waitForTimeout(1000);
const k=await p.$('.kit'); await k.scrollIntoViewIfNeeded(); await p.waitForTimeout(600);
await k.screenshot({path:path.join(dir,'kit.png')});
console.log('testimonials home:',t1,'· about cards:',t2);
await b.close();console.log('done');
