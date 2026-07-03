/* Shared face/accent/mono switcher for the converged-cut pages.
   Injects the control strip + Adobe kit + Fontshare faces, drives the CSS vars
   (--disp/--dispw/--dispw2/--dispcond/--condstretch/--mono/--spark/--struct).
   State shares localStorage keys with playground.html so picks follow you. */
(function(){
  const KIT='aos2vlu';
  const FACES=[
    {id:'bricolage', label:'Bricolage Grotesque (free)', stack:"'Bricolage Grotesque',sans-serif", w:800, w2:600, cond:null, stretch:'75%', src:'free'},
    {id:'clash', label:'Clash Grotesk (free)', stack:"'Clash Grotesk',sans-serif", w:600, w2:500, src:'free'},
    {id:'cabinet', label:'Cabinet Grotesk (free)', stack:"'Cabinet Grotesk',sans-serif", w:800, w2:700, src:'free'},
    {id:'neue-haas-grotesk-display', label:'Neue Haas Grotesk Display (kit)', stack:"'neue-haas-grotesk-display',sans-serif", w:700, w2:500, src:'kit'},
    {id:'neue-haas-unica', label:'Neue Haas Unica (kit)', stack:"'neue-haas-unica',sans-serif", w:700, w2:500, src:'kit'},
    {id:'roc-grotesk', label:'Roc Grotesk (kit)', stack:"'roc-grotesk',sans-serif", w:800, w2:500, cond:"'roc-grotesk-condensed','roc-grotesk',sans-serif", src:'kit'},
    {id:'roc-grotesk-wide', label:'Roc Grotesk Wide (kit)', stack:"'roc-grotesk-wide',sans-serif", w:700, w2:500, cond:"'roc-grotesk-condensed','roc-grotesk',sans-serif", src:'kit'},
    {id:'forma-djr-display', label:'Forma DJR Display (kit)', stack:"'forma-djr-display',sans-serif", w:700, w2:500, src:'kit'},
    {id:'halyard-display', label:'Halyard Display (kit)', stack:"'halyard-display',sans-serif", w:700, w2:500, src:'kit'},
  ];
  const MONOS={fragment:"'Fragment Mono',monospace",input:"'input-mono',monospace"};

  // fonts: kit + free comparison faces
  function addCss(href,id){if(document.getElementById(id))return;const l=document.createElement('link');l.id=id;l.rel='stylesheet';l.href=href;document.head.appendChild(l)}
  addCss(`https://use.typekit.net/${KIT}.css`,'kitcss');
  addCss("https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600&f[]=cabinet-grotesk@400,500,700,800&display=swap",'fscss');

  const url=new URLSearchParams(location.search);
  const state={
    face:url.get('face')||localStorage.pgFace||'bricolage',
    accent:url.get('accent')||localStorage.pgAccent||'duo',
    mono:url.get('mono')||localStorage.pgMono||'fragment',
  };
  const root=document.documentElement;

  // strip UI
  const css=`
  #ctl{position:fixed;left:18px;bottom:18px;z-index:95;background:#161514;color:#F5F3EF;border:1px solid #3a3936;border-radius:14px;padding:12px 14px;font-family:'Fragment Mono',monospace;font-size:11px;letter-spacing:.04em;box-shadow:0 18px 50px rgba(0,0,0,.45);max-width:300px}
  #ctl .hd{display:flex;justify-content:space-between;align-items:center;cursor:pointer;user-select:none;gap:18px}
  #ctl .hd b{font-weight:400;color:#EFA1AD;text-transform:uppercase;letter-spacing:.1em}
  #ctl .body{margin-top:12px;display:grid;gap:10px}
  #ctl.min .body{display:none}
  #ctl label{display:block;color:#8f8d88;text-transform:uppercase;font-size:9.5px;letter-spacing:.12em;margin-bottom:4px}
  #ctl select{width:100%;background:#232220;color:#F5F3EF;border:1px solid #3a3936;border-radius:8px;padding:8px 10px;font:inherit}
  #ctl .seg{display:flex;gap:6px}
  #ctl .seg button{flex:1;background:#232220;color:#b9b6b0;border:1px solid #3a3936;border-radius:8px;padding:7px 4px;font:inherit;font-size:10px;cursor:pointer;text-transform:uppercase;letter-spacing:.06em}
  #ctl .seg button.on{background:#F5F3EF;color:#161514;border-color:#F5F3EF}
  #ctl .combo{background:#232220;border:1px dashed #4a4844;border-radius:8px;padding:8px 10px;color:#EFA1AD;font-size:10px;word-break:break-all;cursor:pointer}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const el=document.createElement('div');el.id='ctl';el.className='min';
  el.innerHTML=`
    <div class="hd" id="ctlHd"><b>✳ Fonts</b><span id="ctlTog">[+]</span></div>
    <div class="body">
      <div><label>Display face</label><select id="face"></select></div>
      <div><label>Accent</label><div class="seg" id="accent">
        <button data-v="duo">Duo</button><button data-v="rose">Rose</button><button data-v="cobalt">Cobalt</button></div></div>
      <div><label>Mono voice</label><div class="seg" id="mono">
        <button data-v="fragment">Fragment</button><button data-v="input">Input</button></div></div>
      <div><label>Combo (click to copy)</label><div class="combo" id="combo">—</div></div>
    </div>`;
  document.body.appendChild(el);
  const $=s=>el.querySelector(s);

  const _mc=document.createElement('canvas').getContext('2d');
  function famLoaded(fam){
    const probe='ILoveMonuments1908';
    _mc.font='700 48px monospace';const base=_mc.measureText(probe).width;
    _mc.font=`700 48px ${fam}, monospace`;
    return Math.abs(_mc.measureText(probe).width-base)>0.5;
  }
  function refreshFaces(){
    const sel=$('#face');sel.innerHTML='';
    FACES.forEach(f=>{
      const o=document.createElement('option');o.value=f.id;
      const fam=f.stack.split(',')[0];
      const loaded=f.src==='free'||famLoaded(fam);
      o.textContent=(loaded?'':'○ ')+f.label+(loaded?'':' — loading');
      if(f.id===state.face)o.selected=true;
      sel.appendChild(o);
    });
  }
  function warm(){
    const jobs=[];
    FACES.forEach(f=>{const fam=f.stack.split(',')[0];jobs.push(document.fonts.load(`700 24px ${fam}`),document.fonts.load(`400 24px ${fam}`))});
    ['\'input-mono\'','\'roc-grotesk-condensed\''].forEach(fam=>jobs.push(document.fonts.load(`400 24px ${fam}`)));
    Promise.allSettled(jobs).then(refreshFaces);
  }
  function apply(){
    const f=FACES.find(x=>x.id===state.face)||FACES[0];
    root.style.setProperty('--disp',f.stack);
    root.style.setProperty('--dispw',f.w);
    root.style.setProperty('--dispw2',f.w2);
    root.style.setProperty('--dispcond',f.cond||f.stack);
    root.style.setProperty('--condstretch',f.stretch||'100%');
    const map={duo:['var(--rose)','var(--cobalt)'],rose:['var(--rose)','var(--rose)'],cobalt:['var(--cobalt)','var(--cobalt)']};
    const [spark,struct]=map[state.accent]||map.duo;
    root.style.setProperty('--spark',spark);root.style.setProperty('--struct',struct);
    root.style.setProperty('--mono',MONOS[state.mono]||MONOS.fragment);
    el.querySelectorAll('#accent button').forEach(b=>b.classList.toggle('on',b.dataset.v===state.accent));
    el.querySelectorAll('#mono button').forEach(b=>b.classList.toggle('on',b.dataset.v===state.mono));
    $('#combo').textContent=`face=${state.face}&accent=${state.accent}&mono=${state.mono}`;
    localStorage.pgFace=state.face;localStorage.pgAccent=state.accent;localStorage.pgMono=state.mono;
    // keep picks in the URL + carry them through same-directory nav links
    const q=new URLSearchParams(location.search);q.set('face',state.face);q.set('accent',state.accent);q.set('mono',state.mono);
    history.replaceState(null,'','?'+q.toString());
  }
  $('#face').addEventListener('change',e=>{state.face=e.target.value;apply()});
  el.querySelectorAll('#accent button').forEach(b=>b.addEventListener('click',()=>{state.accent=b.dataset.v;apply()}));
  el.querySelectorAll('#mono button').forEach(b=>b.addEventListener('click',()=>{state.mono=b.dataset.v;apply()}));
  $('#combo').addEventListener('click',()=>{navigator.clipboard.writeText($('#combo').textContent);$('#combo').textContent='copied ✓';setTimeout(apply,900)});
  document.getElementById('ctlHd').addEventListener('click',()=>{el.classList.toggle('min');document.getElementById('ctlTog').textContent=el.classList.contains('min')?'[+]':'[–]'});

  refreshFaces();apply();
  if(document.fonts){document.fonts.ready.then(warm);setTimeout(warm,1200);setTimeout(refreshFaces,3500)}
})();
