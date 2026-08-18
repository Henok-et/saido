"use client";

import { useEffect } from "react";

/**
 * "One scroll gesture = one section" pagination on desktop, layered on top
 * of the `.scene` class every top-level section carries (see
 * AnimatedSection.tsx, HeroSection.tsx, MetricsSection.tsx).
 *
 * Mobile/tablet viewports (width <= 768px) bypass this entirely and stay a
 * normal, fully Lenis-scrollable document — see isMobileViewport() below.
 *
 * Sections aren't forced to fit one screen (Saido's content is far denser
 * than a slide deck): each `.scene` is exactly 100svh with overflow-y:auto,
 * so wheel/keyboard/touch first scrolls a tall section internally to its
 * top/bottom edge, and only then advances to the next/previous section —
 * nothing is ever clipped.
 */

function readCssSeconds(varName: string, fallback: number) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  if (!raw) return fallback;
  const value = parseFloat(raw);
  if (Number.isNaN(value)) return fallback;
  return raw.endsWith("ms") ? value / 1000 : value;
}

function makeCubicBezierEasing(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;

  function sampleX(t: number) {
    return ((ax * t + bx) * t + cx) * t;
  }
  function sampleY(t: number) {
    return ((ay * t + by) * t + cy) * t;
  }
  function sampleDerivativeX(t: number) {
    return (3 * ax * t + 2 * bx) * t + cx;
  }

  function solveXForT(x: number) {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const dx = sampleX(t) - x;
      if (Math.abs(dx) < 1e-5) return t;
      const d = sampleDerivativeX(t);
      if (Math.abs(d) < 1e-6) break;
      t -= dx / d;
    }
    let lo = 0;
    let hi = 1;
    t = x;
    while (lo < hi) {
      const xEst = sampleX(t);
      if (Math.abs(xEst - x) < 1e-5) return t;
      if (xEst < x) lo = t;
      else hi = t;
      t = (lo + hi) / 2;
    }
    return t;
  }

  return function easing(t: number) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return sampleY(solveXForT(t));
  };
}

// Same curve as PREMIUM_EASE in AnimatedSection.tsx — kept as raw numbers
// here since this file drives a manual rAF loop, not Framer Motion.
const easePremium = makeCubicBezierEasing(0.22, 1, 0.36, 1);

export function SectionPager() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".scene"));
    if (sections.length === 0) return;

    let cleanupPaginated: (() => void) | null = null;

    function isMobileViewport() {
      return window.innerWidth <= 768;
    }

    function initMode() {
      if (cleanupPaginated) {
        cleanupPaginated();
        cleanupPaginated = null;
      }

      if (isMobileViewport() || prefersReduced) {
        document.documentElement.classList.remove("paginated");
        window.__lenisInstance?.start();
        return;
      }

      document.documentElement.classList.add("paginated");
      window.__lenisInstance?.stop();

      // Escape-hatch attribute Lenis checks before it ever reaches its own
      // isStopped preventDefault branch — with this set, Lenis skips these
      // elements entirely, so native wheel/touch scrolling still works for
      // sections taller than one viewport even while Lenis itself is
      // stopped for the pagination gesture.
      sections.forEach((el) => el.setAttribute("data-lenis-prevent", ""));

      const sceneDuration = readCssSeconds("--t-scene", 1.3);

      let index = nearestIndex();
      let animating = false;
      let touchStartY = 0;
      let touchActive = false;

      function setActive(i: number) {
        sections.forEach((el, n) => el.classList.toggle("scene-active", n === i));
      }
      setActive(index);

      function nearestIndex() {
        const y = window.scrollY;
        let best = 0;
        let bestDist = Infinity;
        sections.forEach((el, i) => {
          const dist = Math.abs(el.offsetTop - y);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        return best;
      }

      function isScrollLockedElsewhere() {
        return getComputedStyle(document.body).overflow === "hidden";
      }

      function isFormField(el: Element | null) {
        if (!el) return false;
        const tag = el.tagName;
        return (
          tag === "INPUT" ||
          tag === "TEXTAREA" ||
          tag === "SELECT" ||
          (el as HTMLElement).isContentEditable
        );
      }

      function animateScrollTo(targetY: number, duration: number, onComplete?: () => void) {
        const startY = window.scrollY;
        const distance = targetY - startY;
        if (Math.abs(distance) < 2) {
          window.scrollTo(0, targetY);
          if (onComplete) onComplete();
          return;
        }

        const startTime = performance.now();

        function stepFrame(currentTime: number) {
          const elapsed = (currentTime - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easePremium(progress);

          window.scrollTo(0, startY + distance * easedProgress);

          if (progress < 1) {
            requestAnimationFrame(stepFrame);
          } else {
            window.scrollTo(0, targetY);
            if (onComplete) onComplete();
          }
        }

        requestAnimationFrame(stepFrame);
      }

      function goTo(target: number) {
        if (target < 0 || target >= sections.length || animating) return;
        if (isScrollLockedElsewhere()) return;

        const direction: "down" | "up" = target > index ? "down" : "up";
        const outgoing = sections[index];
        const incoming = sections[target];

        document.documentElement.setAttribute("data-dir", direction);
        sections.forEach((el) => el.classList.remove("scene-leaving"));
        if (outgoing !== incoming) {
          outgoing.classList.remove("scene-active");
          outgoing.classList.add("scene-leaving");
        }

        void incoming.offsetHeight;

        incoming.scrollTop = 0;
        index = target;
        animating = true;
        incoming.classList.add("scene-active");
        sections.forEach((el, n) => {
          if (n !== target) el.classList.remove("scene-active");
        });
        const duration = prefersReduced ? 0.05 : sceneDuration;

        animateScrollTo(incoming.offsetTop, duration, () => {
          animating = false;
          outgoing.classList.remove("scene-leaving");
        });

        window.setTimeout(() => {
          animating = false;
          outgoing.classList.remove("scene-leaving");
        }, duration * 1000 + 300);
      }

      let lastStepTime = 0;
      const STEP_COOLDOWN_MS = 350;

      function step(direction: 1 | -1) {
        index = nearestIndex();
        goTo(index + direction);
      }

      function onWheel(e: WheelEvent) {
        if (isScrollLockedElsewhere()) return;

        const currentSection = sections[index];
        if (currentSection) {
          const isScrollable = currentSection.scrollHeight > currentSection.clientHeight + 4;
          if (isScrollable) {
            const atTop = currentSection.scrollTop <= 4;
            const atBottom =
              Math.abs(currentSection.scrollHeight - currentSection.clientHeight - currentSection.scrollTop) < 6;
            // Not preventing default here lets the browser natively scroll
            // the section's own overflow-y:auto box. That only works because
            // every scene carries data-lenis-prevent while paginated (see
            // initMode below) — Lenis's own wheel listener otherwise
            // unconditionally preventDefaults while stopped (lenis.mjs,
            // isStopped branch), which would swallow this before native
            // scroll ever got a chance to run.
            if (e.deltaY > 0 && !atBottom) return;
            if (e.deltaY < 0 && !atTop) return;
          }
        }

        e.preventDefault();
        const now = Date.now();
        if (animating || now - lastStepTime < STEP_COOLDOWN_MS) return;
        if (Math.abs(e.deltaY) < 6) return;

        lastStepTime = now;
        step(e.deltaY > 0 ? 1 : -1);
      }

      function onKeyDown(e: KeyboardEvent) {
        if (isFormField(document.activeElement) || isScrollLockedElsewhere()) return;

        const currentSection = sections[index];
        if (currentSection) {
          const isScrollable = currentSection.scrollHeight > currentSection.clientHeight + 4;
          if (isScrollable) {
            const atTop = currentSection.scrollTop <= 4;
            const atBottom =
              Math.abs(currentSection.scrollHeight - currentSection.clientHeight - currentSection.scrollTop) < 6;
            const scrollStep = currentSection.clientHeight * 0.85;
            if ((e.key === "PageDown" || e.key === "ArrowDown" || e.key === " ") && !atBottom) {
              e.preventDefault();
              currentSection.scrollTop += scrollStep;
              return;
            }
            if ((e.key === "PageUp" || e.key === "ArrowUp") && !atTop) {
              e.preventDefault();
              currentSection.scrollTop -= scrollStep;
              return;
            }
          }
        }

        if (e.key === "PageDown" || e.key === "ArrowDown" || e.key === " ") {
          e.preventDefault();
          step(1);
        } else if (e.key === "PageUp" || e.key === "ArrowUp") {
          e.preventDefault();
          step(-1);
        }
      }

      function onTouchStart(e: TouchEvent) {
        if (isScrollLockedElsewhere()) return;
        touchStartY = e.touches[0].clientY;
        touchActive = true;
      }

      function onTouchMove() {
        // Presence tracked via touchActive; native internal scroll of a
        // tall section handles itself, onTouchEnd decides whether to page.
      }

      function onTouchEnd(e: TouchEvent) {
        if (!touchActive) return;
        touchActive = false;
        if (isScrollLockedElsewhere() || animating) return;

        const delta = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(delta) < 50) return;

        const now = Date.now();
        if (now - lastStepTime < STEP_COOLDOWN_MS) return;
        lastStepTime = now;
        step(delta > 0 ? 1 : -1);
      }

      let syncQueued = false;
      function onScrollSync() {
        if (animating || syncQueued) return;
        syncQueued = true;
        requestAnimationFrame(() => {
          syncQueued = false;
          if (animating) return;
          const i = nearestIndex();
          if (i !== index) {
            index = i;
            setActive(i);
          }
        });
      }

      function onAnchorClick(e: MouseEvent) {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const anchor = (e.target as HTMLElement | null)?.closest?.("a");
        if (!anchor) return;
        const href = anchor.getAttribute("href");
        if (!href || !href.startsWith("#") || href === "#") return;
        const idx = sections.findIndex((s) => s.id === href.slice(1));
        if (idx === -1) return;

        e.preventDefault();
        history.pushState(null, "", href);
        window.setTimeout(() => goTo(idx), 120);
      }
      document.addEventListener("click", onAnchorClick, true);

      let resizeTimer: number | undefined;
      function onResize() {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          if (isScrollLockedElsewhere()) return;
          window.scrollTo(0, sections[index].offsetTop);
          setActive(index);
        }, 150);
      }
      window.addEventListener("resize", onResize);

      window.addEventListener("scroll", onScrollSync, { passive: true });
      window.addEventListener("hashchange", onScrollSync);
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });

      cleanupPaginated = () => {
        document.removeEventListener("click", onAnchorClick, true);
        window.clearTimeout(resizeTimer);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScrollSync);
        window.removeEventListener("hashchange", onScrollSync);
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
        sections.forEach((el) => {
          el.classList.remove("scene-active", "scene-leaving");
          el.removeAttribute("data-lenis-prevent");
        });
        document.documentElement.classList.remove("paginated");
        window.__lenisInstance?.start();
      };
    }

    initMode();

    const mql = window.matchMedia("(max-width: 768px)");
    const onBreakpointChange = () => initMode();
    if (mql.addEventListener) mql.addEventListener("change", onBreakpointChange);
    else mql.addListener(onBreakpointChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onBreakpointChange);
      else mql.removeListener(onBreakpointChange);
      if (cleanupPaginated) cleanupPaginated();
    };
  }, []);

  return null;
}
