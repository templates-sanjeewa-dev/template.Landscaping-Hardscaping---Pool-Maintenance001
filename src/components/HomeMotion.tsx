"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!items.length) return;

    document.documentElement.dataset.motion = "ready";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.motion;
    };
  }, []);

  return null;
}
