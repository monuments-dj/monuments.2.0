import { chromium } from 'playwright';
const b=await chromium.launch();
async function test(clip){
  const p=await b.newPage({viewport:{width:1440,height:900}});
  await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(2000);
  await p.evaluate((c)=>{document.documentElement.style.overflowX=c;},clip);
  await p.waitForTimeout(200);
  // find reel-pin's section, scroll into its pinning range, sample pin.top
  const res=await p.evaluate(async()=>{
    const pin=document.querySelector('.reel-pin');
    const sec=pin.parentElement; // the tall scroll section
    const secTop=sec.getBoundingClientRect().top+scrollY;
    const tops=[];
    for(let i=0;i<5;i++){ window.scrollTo(0, secTop+ i*300 + 200); await new Promise(r=>setTimeout(r,120));
      tops.push(Math.round(pin.getBoundingClientRect().top)); }
    window.scrollTo(0,0);
    return {secH:Math.round(sec.getBoundingClientRect().height), tops};
  });
  console.log(`html overflow-x=${clip.padEnd(8)} secH=${res.secH}  pin.top samples: [${res.tops.join(', ')}]  (sticky OK if tops stay ~0)`);
  await p.close();
}
await test('clip');
await test('visible');
await b.close();
