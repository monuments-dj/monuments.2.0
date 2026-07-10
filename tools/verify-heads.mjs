import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT='tools/snaps/verify'; fs.mkdirSync(OUT,{recursive:true});
const B='http://localhost:4321';
const heroes=['/','/about','/ai','/capabilities','/contact','/giving','/photography','/work',
 '/work/ac-boise','/work/adorama-music','/work/art-of-visuals','/work/blue-cross','/work/buck-the-quo',
 '/work/clothing-merch','/work/cwi-lets-get-started','/work/donut-zumiez','/work/dw-drums','/work/flashpoint',
 '/work/know-vape','/work/on-camera','/work/sony-flow-state','/work/sony-this-moment','/work/sony-xm5',
 '/work/sony-xperia-summer','/work/turnstile','/work/waffle-me-up'];
const ctas=['/','/about','/capabilities','/giving','/work'];
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1440,height:900},deviceScaleFactor:2});
async function clip(sel,pad){const r=await p.evaluate((s)=>{const e=document.querySelector(s);if(!e)return null;const b=e.getBoundingClientRect();return {x:b.x,y:b.y,w:b.width,h:b.height};},sel);
  if(!r)return null; const x=Math.max(0,r.x-pad),y=Math.max(0,r.y-pad);
  return {x,y,width:Math.min(1440-x,r.w+pad*2),height:r.h+pad*2};}
const rec=[];
for(const path of heroes){
  await p.goto(B+path,{waitUntil:'domcontentloaded'}); await p.waitForTimeout(1500);
  const c=await clip('.hero .t, .hero h1',34);
  const name='hero_'+path.replace(/\//g,'_').replace(/^_/,'')||'home';
  const file=OUT+'/'+(name||'home')+'.png';
  if(c){await p.screenshot({path:file,clip:c}); rec.push({label:'HERO '+path,file});}
  else rec.push({label:'HERO '+path+' (no heading found)',file:null});
}
for(const path of ctas){
  await p.goto(B+path,{waitUntil:'domcontentloaded'}); await p.waitForTimeout(500);
  await p.evaluate(()=>{const e=document.querySelector('[data-split]');if(e)e.scrollIntoView({block:'center'});});
  await p.waitForTimeout(1300);
  const c=await clip('[data-split]',34);
  const file=OUT+'/cta_'+path.replace(/\//g,'_').replace(/^_/,'x')+'.png';
  if(c){await p.screenshot({path:file,clip:c}); rec.push({label:'CTA '+path,file});}
}
fs.writeFileSync(OUT+'/index.json',JSON.stringify(rec,null,0));
console.log('captured',rec.length,'crops');
await b.close();
