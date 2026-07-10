import { chromium } from 'playwright';
const b=await chromium.launch();
for(const [url,w] of [['http://localhost:4321/about',390],['http://localhost:4321/work/turnstile',768],['http://localhost:4321/work/clothing-merch',390],['http://localhost:4321/giving',360]]){
  const p=await b.newPage({viewport:{width:w,height:844}});
  await p.goto(url,{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(1400);
  const before=await p.evaluate(()=>document.documentElement.scrollWidth);
  const after=await p.evaluate(()=>{document.documentElement.style.overflowX='clip';return document.documentElement.scrollWidth;});
  console.log(`${url} @${w}  before ${before}  afterClip ${after}  (vw ${w})`);
  await p.close();
}
await b.close();
