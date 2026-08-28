"use client";

import { useEffect, useState } from "react";

/**
 * Fixed vertical dot rail on the right edge — the desktop navigation, in
 * place of the top navbar (which is hidden in paginated mode; see
 * globals.css). Each dot maps to a `.scene` section, the current one is
 * highlighted, and the section name appears as a tooltip on hover.
 *
 * Clicking a dot dispatches a click on a temporary `#id` anchor rather than
 * scrolling directly, so SectionPager's capture-phase anchor handler owns
 * the navigation. That keeps one code path for every jump on the site —
 * dots, hero CTAs and in-page links all animate identically.
 *
 * Renders nothing until it has discovered the sections, and the CSS hides
 * it entirely at <=768px, where the top header takes over instead.
 */

const SECTION_LABELS: Record<string, string> = {
  hero: "Introduction",
  metrics: "Impact at a Glance",
  profile: "Profile",
  experience: "Career & Leadership",
  research: "Research & Impact",
  initiatives: "Initiatives",
  recognition: "Recognition",
  publications: "Publications",
  engagement: "Speaking & Engagements",
  blog: "Insights",
  contact: "Let's Connect",
  footer: "Details",
};

export function SectionDots() {
  const [sections, setSections] = useState<{ id: string; label: string }[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sceneEls = Array.from(document.querySelectorAll<HTMLElement>(".scene"));
    setSections(
      sceneEls
        .filter((el) => el.id)
        .map((el) => ({ id: el.id, label: SECTION_LABELS[el.id] || el.id }))
    );

    const sync = () => {
      const active = document.querySelector<HTMLElement>(".scene.scene-active");
      if (active?.id) setActiveId(active.id);
    };
    sync();

    // SectionPager toggles `.scene-active` as a class, so watching the class
    // attribute keeps the rail in step with it without duplicating any of the
    // pager's own nearest-section maths here.
    const observer = new MutationObserver(() => requestAnimationFrame(sync));
    sceneEls.forEach((el) =>
      observer.observe(el, { attributes: true, attributeFilter: ["class"] })
    );
    return () => observer.disconnect();
  }, []);

  if (sections.length === 0) return null;

  const goTo = (id: string) => {
    const link = document.createElement("a");
    link.href = `#${id}`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <nav className="section-dots" aria-label="Section navigation">
      {sections.map((s) => (
        <button
          key={s.id}
          type="button"
          className={`section-dot${s.id === activeId ? " active" : ""}`}
          aria-label={s.label}
          aria-current={s.id === activeId ? "true" : undefined}
          onClick={() => goTo(s.id)}
        />
      ))}
    </nav>
  );
}
