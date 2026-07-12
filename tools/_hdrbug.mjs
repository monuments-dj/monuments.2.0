import { chromium } from 'playwright';
const OUT='/private/tmp/claude-501/-Users-djram/b02b620f-c76c-4958-b4be-aef5e809f601/scratchpad';
const b=await chromium.launch(); const p=await b.newPage();
await p.setViewportSize({width:1440,height:900});
await p.goto('http://localhost:4468/template',{waitUntil:'networkidle'});
await p.evaluate(()=>document.getElementById('el-headerslider').scrollIntoView({block:'center'}));
await p.waitForTimeout(1500);
const r=await p.evaluate(()=>{
  const slides=[...document.querySelectorAll('.hs-slide')];
  const visible=slides.filter(s=>parseFloat(getComputedStyle(s).opacity)>0.01).map(s=>({t:s.querySelector('h2').textContent.slice(0,18),op:+getComputedStyle(s).opacity}));
  const rmBtns=[...document.querySelectorAll('.hs-in .rm-btn')];
  const rmVisible=rmBtns.filter(bt=>{const s=bt.closest('.hs-slide');return parseFloat(getComputedStyle(s).opacity)>0.01;}).length;
  return {totalSlides:slides.length, visibleSlides:visible, totalRmButtons:rmBtns.length, rmButtonsOnVisibleSlides:rmVisible};
});
console.log(JSON.stringify(r,null,2));
await p.locator('#el-headerslider').screenshot({path:OUT+'/hdrbug.png'});
await b.close();
