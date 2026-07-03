/* Brands scroller — port of the lab's BrandTicker (scroll-driven marquee).
   Base drift + scroll-velocity kick, hover pause, seamless wrap, reduced-motion static. */
(function(){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.brand-ticker').forEach(root=>{
    const track=root.querySelector('.bt-track');
    if(!track||reduced)return;
    let offset=0,half=track.scrollWidth/2||1,velAdd=0,lastScroll=scrollY,paused=false,last=performance.now();
    root.addEventListener('pointerenter',()=>paused=true);
    root.addEventListener('pointerleave',()=>paused=false);
    addEventListener('scroll',()=>{
      const y=scrollY,dy=y-lastScroll;lastScroll=y;
      velAdd+=-dy*0.9;velAdd=Math.max(-900,Math.min(900,velAdd));
    },{passive:true});
    addEventListener('resize',()=>{half=track.scrollWidth/2||half},{passive:true});
    (function frame(now){
      const dt=Math.min(0.05,(now-last)/1000);last=now;
      const base=parseFloat(root.dataset.speed)||28;
      velAdd*=0.9;if(Math.abs(velAdd)<0.1)velAdd=0;
      offset+=(paused?velAdd:base+velAdd)*dt;
      if(offset>=half)offset-=half;else if(offset<0)offset+=half;
      track.style.transform='translate3d('+(-offset.toFixed(2))+'px,0,0)';
      requestAnimationFrame(frame);
    })(last);
  });
})();
