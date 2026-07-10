import { chromium } from 'playwright';
const b=await chromium.launch();
async function probe(url,w){
  const p=await b.newPage({viewport:{width:w,height:844}});
  await p.goto(url,{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(1400);
  const r=await p.evaluate(()=>{
    const vw=document.documentElement.clientWidth; const out=[];
    document.querySelectorAll('*').forEach(el=>{const b=el.getBoundingClientRect();
      if(b.right>vw+4){const cs=getComputedStyle(el); if(cs.position==='fixed'||cs.visibility==='hidden'||+cs.opacity<0.01)return;
        out.push({tag:el.tagName.toLowerCase(),cls:(''+el.className).slice(0,36),id:el.id,w:Math.round(b.width),l:Math.round(b.left),right:Math.round(b.right),txt:(el.textContent||'').trim().slice(0,20)});}});
    out.sort((a,b)=>b.right-a.right); return {vw,sw:document.documentElement.scrollWidth,top:out.slice(0,7)};
  });
  console.log(`\n${url} @${w}  vw${r.vw} sw${r.sw}`);
  r.top.forEach(o=>console.log(`  ${o.tag}.${o.cls}${o.id?'#'+o.id:''} w${o.w} l${o.l} r${o.right} "${o.txt}"`));
  await p.close();
}
await probe('http://localhost:4321/work/turnstile',768);
await probe('http://localhost:4321/about',390);
await probe('http://localhost:4321/giving',390);
await b.close();
