import { chromium } from 'playwright';
const routes = [
  '/', '/work', '/about', '/capabilities', '/contact', '/ai', '/giving', '/photography',
  ...['ac-boise','adorama-music','art-of-visuals','blue-cross','buck-the-quo','clothing-merch',
      'donut-zumiez','dw-drums','flashpoint','know-vape','on-camera','sony-flow-state',
      'sony-this-moment','sony-xm5','sony-xperia-summer','turnstile','waffle-me-up',
      'cwi-lets-get-started'].map(s => '/work/' + s),
];
const b = await chromium.launch();
const internal = new Map();   // href -> [pages linking it]
const emptyLinks = [];        // {page, text}
const extByHost = new Map();
for (const route of routes) {
  const p = await b.newPage({ viewport:{width:1280,height:900} });
  await p.goto('http://localhost:4321'+route,{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(700);
  const links = await p.evaluate(()=>[...document.querySelectorAll('a')].map(a=>({href:a.getAttribute('href')||'',text:(a.textContent||'').trim().slice(0,28)})));
  for (const {href,text} of links) {
    if (!href || href==='#' || href.startsWith('javascript:')) { emptyLinks.push({route,text,href}); continue; }
    if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:')) {
      try { const host=href.startsWith('mailto:')?'mailto':new URL(href).host; extByHost.set(host,(extByHost.get(host)||0)+1);}catch{}
      continue;
    }
    const path=href.split('#')[0].split('?')[0];
    if(!path) continue;
    if(!internal.has(path)) internal.set(path,new Set());
    internal.get(path).add(route);
  }
  await p.close();
}
// verify internal links resolve
console.log('=== INTERNAL LINK RESOLUTION ===');
const bad=[];
for (const [path,froms] of internal) {
  const url='http://localhost:4321'+(path.endsWith('/')||path.includes('.')?path:path);
  let status;
  try { const r=await fetch(url,{redirect:'manual'}); status=r.status; } catch(e){ status='ERR'; }
  if (!(status>=200&&status<400)) { bad.push({path,status,from:[...froms]}); }
}
if(bad.length){ bad.forEach(x=>console.log(`  ${x.status}  ${x.path}   <- ${x.from.join(', ')}`)); }
else console.log('  all internal links resolve (200/3xx)');
console.log('\n=== EMPTY / # LINKS ===');
if(emptyLinks.length) emptyLinks.forEach(x=>console.log(`  ${x.route}  "${x.text}" href="${x.href}"`)); else console.log('  none');
console.log('\n=== EXTERNAL HOSTS (spot-check manually) ===');
[...extByHost.entries()].sort((a,b)=>b[1]-a[1]).forEach(([h,n])=>console.log(`  ${n}x  ${h}`));
await b.close();
