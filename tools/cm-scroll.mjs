import { chromium } from 'playwright';
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1440,height:900}});
const errs=[]; p.on('console',m=>{if(m.type()==='error')errs.push(m.text());});
p.on('pageerror',e=>errs.push('PAGEERROR: '+e.message));
await p.goto('http://localhost:4321/work/clothing-merch',{waitUntil:'domcontentloaded'}); await p.waitForTimeout(600);
for(let i=0;i<6;i++){await p.evaluate(y=>window.scrollTo(0,y),150*i); await p.waitForTimeout(120);}
const t=await p.evaluate(()=>{const v=document.querySelector('.hero>video');return v?v.style.transform:'(no video)';});
console.log('hero video transform after scroll:', t||'(empty)');
console.log('console/page errors:', errs.length?errs.slice(0,3):'NONE');
await b.close();
