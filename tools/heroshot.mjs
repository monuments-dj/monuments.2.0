import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','home'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message.slice(0,120)));
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1800);
// baseline
await p.screenshot({path:path.join(dir,'hero-rest.png'),clip:{x:0,y:0,width:1440,height:900}});
// move mouse to top-left to trigger tilt, capture transform
await p.mouse.move(1200,250); await p.waitForTimeout(500);
const t=await p.evaluate(()=>{const el=document.getElementById('hero-tilt');return{transform:el?el.style.transform:null, handImg:!!document.querySelector('.floating-hand .fh-img'), words:[...document.querySelectorAll('.hero-word')].map(w=>w.textContent.trim().slice(0,10))}});
await p.screenshot({path:path.join(dir,'hero-tilt.png'),clip:{x:0,y:0,width:1440,height:900}});
console.log('pageerrors:',errs.length?errs.join(' | '):'none');
console.log('tilt transform:',t.transform);
console.log('floating hand present:',t.handImg,'| words:',JSON.stringify(t.words));
await b.close();
