"use client";

import { Icon } from "@iconify/react";

// Passport-stamp marquee — the whole world shows up to this thing.
// Two rows scrolling opposite directions, every stamp a real flag + city.

const STOPS: { flag: string; city: string; native: string; tilt: number }[] = [
  { flag: "circle-flags:ng", city: "Lagos", native: "Nigeria", tilt: -4 },
  { flag: "circle-flags:in", city: "Mumbai", native: "भारत", tilt: 3 },
  { flag: "circle-flags:ru", city: "Moscow", native: "Москва", tilt: -2 },
  { flag: "circle-flags:es", city: "Madrid", native: "España", tilt: 4 },
  { flag: "circle-flags:mx", city: "Mexico City", native: "México", tilt: -3 },
  { flag: "circle-flags:us", city: "Charlotte", native: "USA", tilt: 2 },
  { flag: "circle-flags:cn", city: "Shanghai", native: "上海", tilt: -4 },
  { flag: "circle-flags:kr", city: "Seoul", native: "서울", tilt: 3 },
  { flag: "circle-flags:id", city: "Jakarta", native: "Indonesia", tilt: -2 },
  { flag: "circle-flags:fr", city: "Paris", native: "France", tilt: 4 },
  { flag: "circle-flags:gh", city: "Accra", native: "Ghana", tilt: -3 },
  { flag: "circle-flags:ar", city: "Buenos Aires", native: "Argentina", tilt: 2 },
];

function Stamp({ s }: { s: (typeof STOPS)[number] }) {
  return (
    <span
      className="mx-3 inline-flex shrink-0 items-center gap-2.5 rounded-xl border-[2.5px] border-dashed border-cream/70 px-4 py-2"
      style={{ transform: `rotate(${s.tilt}deg)` }}
    >
      <Icon icon={s.flag} className="h-7 w-7" />
      <span className="leading-none">
        <span className="block font-heading text-xs font-black uppercase tracking-[0.14em] text-cream">
          {s.city}
        </span>
        <span className="block pt-0.5 font-heading text-[0.6rem] font-bold tracking-[0.12em] text-cream/60">
          {s.native}
        </span>
      </span>
    </span>
  );
}

export default function WorldTourMarquee() {
  const row = (reverse: boolean, offset: number) => {
    const items = [...STOPS.slice(offset), ...STOPS.slice(0, offset)];
    return (
      <div className="flex overflow-hidden">
        <div
          className="flex min-w-max py-2"
          style={{
            animation: `marquee ${reverse ? 46 : 38}s linear infinite ${reverse ? "reverse" : ""}`,
          }}
        >
          {[...items, ...items].map((s, i) => (
            <Stamp key={`${s.city}-${i}`} s={s} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-ink py-8">
      <div className="mb-4 text-center font-heading text-[0.65rem] font-black uppercase tracking-[0.34em] text-cream/60">
        ✈ Every route leads to Davidson ✈
      </div>
      {row(false, 0)}
      {row(true, 6)}
    </div>
  );
}
