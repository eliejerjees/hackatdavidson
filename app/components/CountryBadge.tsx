"use client";

import { Icon } from "@iconify/react";

// Identity strip shown at the top of every country scene:
// real flag (circle-flags) + city + native script + coordinates.
// This is what makes each stop instantly recognizable.

export default function CountryBadge({
  flag, // iconify circle-flags name, e.g. "circle-flags:jp"
  city,
  native, // city/country in native script
  coords,
  accent = "var(--color-hd-gold)",
}: {
  flag: string;
  city: string;
  native: string;
  coords: string;
  accent?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Icon
        icon={flag}
        className="h-10 w-10 drop-shadow-[0_3px_0_rgba(0,0,0,0.3)]"
      />
      <div className="leading-tight">
        <div className="font-heading text-sm font-black uppercase tracking-[0.22em]">
          {city}
          <span className="ml-2 opacity-70">{native}</span>
        </div>
        <div
          className="font-heading text-[0.65rem] font-bold tracking-[0.18em]"
          style={{ color: accent }}
        >
          {coords}
        </div>
      </div>
    </div>
  );
}
