import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','diag'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
// Flashpoint statrow+rolerow
let p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/work/flashpoint',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1400);
let sr=await p.$('.statrow'); await sr.scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
const fp=await p.evaluate(()=>{const r=document.querySelector('.statrow').getBoundingClientRect();const role=document.querySelector('.rolerow').getBoundingClientRect();const stats=[...document.querySelectorAll('.statrow .stat')].map(s=>{const b=s.getBoundingClientRect();return{l:Math.round(b.left),r:Math.round(b.right),w:Math.round(b.width),h:Math.round(b.height),txt:s.textContent.trim().slice(0,18)}});return{statrowH:Math.round(r.height),rolerowH:Math.round(role.height),stats}});
console.log('FLASHPOINT statrow h='+fp.statrowH,'rolerow h='+fp.rolerowH);fp.stats.forEach(s=>console.log('  stat',JSON.stringify(s)));
// screenshot both bands
const bb=await p.evaluate(()=>{const a=document.querySelector('.statrow').getBoundingClientRect();const c=document.querySelector('.rolerow').getBoundingClientRect();return{y:a.top+scrollY,h:(c.bottom-a.top)}});
await p.screenshot({path:path.join(dir,'fp-bar.png'),clip:{x:0,y:bb.y,width:1440,height:Math.min(bb.h,400)}});
await p.close();
// Waffle markband
p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/work/waffle-me-up',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1400);
let mb=await p.$('.markband'); await mb.scrollIntoViewIfNeeded(); await p.waitForTimeout(400);
const wf=await p.evaluate(()=>{const m=document.querySelector('.markband').getBoundingClientRect();const card=document.querySelector('.markband .logocard').getBoundingClientRect();const cell2=document.querySelector('.markband .in > div:last-child').getBoundingClientRect();const k=document.querySelector('.markband .k').getBoundingClientRect();const note=document.querySelector('.markband .note').getBoundingClientRect();return{bandH:Math.round(m.height),card:{l:Math.round(card.left),r:Math.round(card.right),w:Math.round(card.width),h:Math.round(card.height)},cell2:{l:Math.round(cell2.left),r:Math.round(cell2.right),w:Math.round(cell2.width)},k:{l:Math.round(k.left)},note:{l:Math.round(note.left),r:Math.round(note.right),w:Math.round(note.width)}}});
console.log('\nWAFFLE markband h='+wf.bandH);console.log('  card',JSON.stringify(wf.card));console.log('  cell2',JSON.stringify(wf.cell2));console.log('  k.left='+wf.k.l,'note',JSON.stringify(wf.note));
const wy=await p.evaluate(()=>{const m=document.querySelector('.markband').getBoundingClientRect();return{y:m.top+scrollY,h:m.height}});
await p.screenshot({path:path.join(dir,'wf-mark.png'),clip:{x:0,y:wy.y,width:1440,height:Math.min(wy.h,700)}});
await p.close();
await b.close();console.log('done');
