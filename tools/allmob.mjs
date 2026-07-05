import { chromium } from 'playwright';
const pages=['ac-boise','adorama-music','art-of-visuals','blue-cross','buck-the-quo','clothing-merch','donut-zumiez','dw-drums','flashpoint','know-vape','on-camera','sony-flow-state','sony-this-moment','sony-xm5','sony-xperia-summer','turnstile','waffle-me-up'];
const b=await chromium.launch();
for(const pg of pages){
  const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
  await p.goto('http://localhost:4321/work/'+pg,{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(1800);
  const r=await p.evaluate(()=>{const vw=document.documentElement.clientWidth;let worst=null;
    document.querySelectorAll('*').forEach(el=>{const b=el.getBoundingClientRect();
      if(b.right>vw+6&&(!worst||b.right>worst.right)){const cs=getComputedStyle(el);
        if(cs.position!=='fixed'&&cs.visibility!=='hidden'&&+cs.opacity>0.01) worst={tag:el.tagName.toLowerCase(),cls:(''+el.className).slice(0,30),right:Math.round(b.right)};}});
    return {sw:document.documentElement.scrollWidth,vw,worst};});
  const flag = r.sw>r.vw+8 ? '  <-- OVERFLOW' : '';
  console.log(`${pg.padEnd(20)} scrollW ${r.sw}  worst ${r.worst?r.worst.tag+'.'+r.worst.cls+'@'+r.worst.right:'-'}${flag}`);
  await p.close();
}
await b.close();
