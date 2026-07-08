"use client";

import { Icon } from "@iconify/react";
import Reveal from "./Reveal";

// Each challenge track is a boarding pass to a real city —
// more of the world in the site, and no card wall.
const TRACKS = [
  { t: "Local Impact", flag: "circle-flags:us", city: "Charlotte", gate: "A1", c: "#e8322b", icon: "fluent-emoji-flat:round-pushpin", d: "Fix something real in the 704." },
  { t: "Education", flag: "circle-flags:kr", city: "Seoul", gate: "B2", c: "#ffcf3f", icon: "fluent-emoji-flat:books", d: "Make learning click." },
  { t: "Health", flag: "circle-flags:ng", city: "Lagos", gate: "C3", c: "#16b45a", icon: "fluent-emoji-flat:stethoscope", d: "Tech that keeps people well." },
  { t: "Climate", flag: "circle-flags:id", city: "Jakarta", gate: "D4", c: "#22d3ee", icon: "fluent-emoji-flat:globe-showing-asia-australia", d: "Build for the planet." },
  { t: "AI & Society", flag: "circle-flags:in", city: "Bengaluru", gate: "E5", c: "#6a2bd6", icon: "fluent-emoji-flat:robot", d: "Smart — and responsible." },
  { t: "Creative Tech", flag: "circle-flags:mx", city: "Mexico City", gate: "F6", c: "#ff2e88", icon: "fluent-emoji-flat:artist-palette", d: "Art meets code." },
  { t: "Wildcard", flag: "circle-flags:un", city: "Anywhere", gate: "??", c: "#f7f1e3", icon: "fluent-emoji-flat:joker", d: "Break the rules. Surprise us." },
];

export default function TracksSection() {
  return (
    <section
      id="tracks"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0a1050]"
    >
      {/* dotted world-map grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          color: "#bfe0ff",
        }}
      />

      <div className="relative z-20 mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
        <Reveal>
          <span className="level-chip text-hd-cyan">Level 05 · Departures</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mt-6 text-cream">
            Choose
            <br />
            <span className="text-hd-cyan">your route.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="scene-copy mt-5 text-cream/90">
            Seven challenge tracks, seven destinations. Pick the route that fits
            your team — or go Wildcard and invent your own lane. Every track has
            its own prizes.
          </p>
        </Reveal>

        {/* departure board */}
        <Reveal delay={0.18}>
          <div className="mt-8 overflow-hidden rounded-2xl border-[3px] border-ink bg-[#0e1330]" style={{ boxShadow: "8px 8px 0 rgba(0,0,0,0.4)" }}>
            <div className="flex items-center justify-between bg-ink px-5 py-3">
              <span className="font-heading text-[0.65rem] font-black uppercase tracking-[0.3em] text-hd-gold">
                ✈ Departures — HCK·27
              </span>
              <span className="hidden font-heading text-[0.6rem] font-bold uppercase tracking-[0.2em] text-cream/50 sm:block">
                Track · Destination · Gate
              </span>
            </div>
            <div className="divide-y divide-cream/10">
              {TRACKS.map((tr, i) => (
                <div
                  key={tr.t}
                  className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-white/5"
                >
                  <Icon icon={tr.icon} className="h-8 w-8 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-heading text-sm font-black uppercase tracking-wide" style={{ color: tr.c }}>
                      {tr.t}
                    </div>
                    <div className="truncate text-xs text-cream/55">{tr.d}</div>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <Icon icon={tr.flag} className="h-6 w-6" />
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-cream/85">
                      {tr.city}
                    </span>
                  </div>
                  <span
                    className="rounded-md border-2 px-2 py-1 font-heading text-[0.65rem] font-black"
                    style={{ borderColor: tr.c, color: tr.c }}
                  >
                    {tr.gate}
                  </span>
                  <span
                    className="font-heading text-[0.6rem] font-black uppercase tracking-[0.14em] text-hd-green"
                  >
                    <span className="hidden sm:inline">Boarding</span>
                    <span className="ml-1 inline-block h-2 w-2 animate-pulse rounded-full bg-hd-green" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
