import { chromium } from 'playwright';
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:390,height:844}});
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1800);
const r=await p.evaluate(()=>{
  const vw=document.documentElement.clientWidth;const out=[];
  document.querySelectorAll('*').forEach(el=>{const b=el.getBoundingClientRect();
    if(b.right>vw+3 && b.right<vw+80){const cs=getComputedStyle(el);
      const pcs=el.parentElement?getComputedStyle(el.parentElement):{overflowX:'?'};
      out.push({tag:el.tagName.toLowerCase(),cls:(''+el.className).slice(0,26),right:Math.round(b.right),w:Math.round(b.width),ovx:cs.overflowX,parent:(''+el.parentElement.className).slice(0,20),povx:pcs.overflowX});}});
  out.sort((a,b)=>b.right-a.right);return{vw,sw:document.documentElement.scrollWidth,top:out.slice(0,8)};
});
console.log('vw',r.vw,'sw',r.sw);r.top.forEach(o=>console.log(' ',o.tag+'.'+o.cls,'r'+o.right,'w'+o.w,'ovx:'+o.ovx,'| parent .'+o.parent,'povx:'+o.povx));
await b.close();
