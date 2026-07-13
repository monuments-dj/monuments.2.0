import { chromium } from 'playwright';
const OUT='/private/tmp/claude-501/-Users-djram/b02b620f-c76c-4958-b4be-aef5e809f601/scratchpad';
const b=await chromium.launch(); const p=await b.newPage();
await p.setViewportSize({width:1440,height:900});
await p.goto('http://localhost:4468/template',{waitUntil:'networkidle'});
await p.evaluate(()=>document.getElementById('el-headerslider').scrollIntoView({block:'center'}));
await p.waitForTimeout(800);
const r=await p.evaluate(()=>{
  const s=document.querySelector('.hs-slide.on');
  const lead=s.querySelector('.hs-lead'), name=s.querySelector('.hs-name');
  return {lead:lead.textContent, name:name.textContent, leadSize:getComputedStyle(lead).fontSize, nameSize:getComputedStyle(name).fontSize};
});
console.log('SLIDE 1:', JSON.stringify(r));
await p.locator('#el-headerslider').screenshot({path:OUT+'/hdr-2line.png'});
// verify donut logo PNG on home brand ticker
await p.goto('http://localhost:4468/',{waitUntil:'load'}); await p.waitForTimeout(500);
const donut=await p.evaluate(()=>{const i=document.querySelector('img[src*="donut-media"]');return i?{src:i.getAttribute('src'),ok:i.complete&&i.naturalWidth>0}:'none';});
console.log('donut logo on home:', JSON.stringify(donut));
await b.close();
