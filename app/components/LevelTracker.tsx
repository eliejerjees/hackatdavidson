"use client";

import { useEffect, useState } from "react";

const LEVELS = [
  { id: "hero", label: "Arena", tag: "Kickoff hub" },
  { id: "england", label: "Lv 01", tag: "Kickoff" },
  { id: "japan", label: "Lv 02", tag: "Training" },
  { id: "egypt", label: "Lv 03", tag: "Underdog" },
  { id: "lagos", label: "Lv 04", tag: "Energy" },
  { id: "india", label: "Lv 05", tag: "Motion" },
  { id: "brazil", label: "Lv 06", tag: "Squad" },
  { id: "tracks", label: "Map", tag: "Routes" },
  { id: "davidson", label: "Final", tag: "Davidson" },
];

export default function LevelTracker() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    LEVELS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Journey progress"
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-1 lg:flex"
    >
      {LEVELS.map((l) => {
        const on = active === l.id;
        return (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="group flex items-center justify-end gap-2"
          >
            <span
              className={`font-heading text-[0.6rem] font-black uppercase tracking-[0.16em] transition-all duration-300 ${
                on
                  ? "translate-x-0 text-cream opacity-100"
                  : "translate-x-2 text-cream/60 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {l.label} · {l.tag}
            </span>
            <span
              className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                on
                  ? "scale-125 border-hd-gold bg-hd-gold"
                  : "border-cream/50 bg-transparent group-hover:border-cream"
              }`}
              style={
                on
                  ? { boxShadow: "0 0 0 4px rgba(255,207,63,0.25)" }
                  : undefined
              }
            />
          </a>
        );
      })}
    </nav>
  );
}
