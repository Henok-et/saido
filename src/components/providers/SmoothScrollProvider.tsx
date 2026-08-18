"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    // Named __lenisInstance (not `lenis`) — the lenis package itself
    // reserves window.lenis for its own devtools-detection metadata.
    // Exposed so SectionPager can stop/start it while it owns the wheel
    // gesture on desktop, without this file needing to know that exists.
    __lenisInstance?: Lenis;
  }
}

/**
 * Buttery inertia scrolling for the whole site. Lenis smooths the native
 * scroll position itself (no wrapper/transform), so window.scrollY, IntersectionObserver
 * and Framer Motion's useScroll all keep working unmodified.
 *
 * Skips entirely under prefers-reduced-motion so the OS setting always wins.
 */
export function SmoothScrollProvider() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });
    window.__lenisInstance = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // SectionPager takes over the wheel gesture on desktop and stops Lenis
    // itself, but watch documentElement's class too as a defensive backstop
    // in case the two ever get out of sync.
    const syncPaginated = () => {
      if (document.documentElement.classList.contains("paginated")) lenis.stop();
      else lenis.start();
    };
    const pagerObserver = new MutationObserver(syncPaginated);
    pagerObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Route same-page anchor links (nav, hero CTAs) through Lenis so they
    // glide instead of jumping, offset by the sticky header's live height.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();
      const header = document.querySelector<HTMLElement>("header");
      lenis.scrollTo(target, { offset: -((header?.offsetHeight ?? 80) + 8) });
      history.pushState(null, "", href);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      pagerObserver.disconnect();
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__lenisInstance = undefined;
    };
  }, []);

  return null;
}
