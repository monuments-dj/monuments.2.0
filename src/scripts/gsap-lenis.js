// Shared GSAP + ScrollTrigger, bridged to the site's existing Lenis smooth-scroll.
// Import { gsap, ScrollTrigger } from this in any lab page that needs scroll-pinned
// or scrubbed animation. The bridge makes ScrollTrigger track Lenis's SMOOTHED
// scroll position on ONE shared rAF loop (per the Lenis docs). It waits for Lenis
// because in the production bundle a component script can run before Base's Lenis
// init; Base's standalone rAF loop self-stops once window.__lenisGsapBridged is set.
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function bridge() {
  if (window.__lenisGsapBridged) return true;
  if (!window.lenis) return false; // reduced-motion: Base never makes Lenis; that's fine
  window.__lenisGsapBridged = true;
  window.lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => window.lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  ScrollTrigger.refresh();
  return true;
}

if (typeof window !== 'undefined' && !bridge()) {
  const iv = setInterval(() => { if (bridge()) clearInterval(iv); }, 50);
  setTimeout(() => clearInterval(iv), 4000);
}

export { gsap, ScrollTrigger };
