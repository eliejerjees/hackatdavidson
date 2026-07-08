"use client";

import { Icon } from "@iconify/react";
import Reveal from "./Reveal";
import CountryBadge from "./CountryBadge";

// Rio scene: Corcovado + Christ the Redeemer, Sugarloaf + cable car,
// and the Copacabana wave pavement — the three most recognizable
// silhouettes in Brazil, poster-style.
function RioScene() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%]">
      <svg
        viewBox="0 0 1200 520"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          {/* Copacabana calçadão wave pattern */}
          <pattern id="copacabana" width="120" height="46" patternUnits="userSpaceOnUse">
            <rect width="120" height="46" fill="#f2ecdb" />
            <path
              d="M-30,23 Q0,0 30,23 T90,23 T150,23 L150,46 L-30,46 Z"
              fill="#0b0f2b"
            />
          </pattern>
        </defs>

        {/* Guanabara Bay */}
        <path d="M0,410 Q600,380 1200,410 L1200,470 L0,470 Z" fill="#1d6fd6" opacity="0.9" />

        {/* Sugarloaf (Pão de Açúcar) — two rounded peaks, left side */}
        <g transform="translate(-820 0)">
          <path d="M880,420 Q930,230 985,420 Z" fill="#3f7a4e" />
          <path d="M985,420 Q1060,180 1140,420 Z" fill="#2f5e3c" />
          {/* cable car line + car */}
          <line x1="930" y1="255" x2="1058" y2="205" stroke="#f7f1e3" strokeWidth="3" />
          <g className="anim-bob">
            <rect x="980" y="222" width="26" height="20" rx="4" fill="#ffcf3f" stroke="#0b0f2b" strokeWidth="2.5" />
            <line x1="993" y1="222" x2="993" y2="232" stroke="#0b0f2b" strokeWidth="2.5" />
          </g>
        </g>

        {/* Corcovado + Christ the Redeemer — THE Rio silhouette, standing tall right */}
        <g transform="translate(1000 30)">
          {/* tall peak */}
          <path d="M-95,390 Q-32,170 0,122 Q32,170 95,390 Z" fill="#2f5e3c" />
          <g fill="#f2ecdb" transform="translate(0 -6)">
            {/* pedestal */}
            <rect x="-9" y="98" width="18" height="30" />
            {/* body with open arms */}
            <path d="M0,22 q6,0 6,8 l0,14 q14,1 26,4 q6,2 6,7 q0,5 -6,5 l-26,-2 l0,32 q0,8 -6,8 q-6,0 -6,-8 l0,-32 l-26,2 q-6,0 -6,-5 q0,-5 6,-7 q12,-3 26,-4 l0,-14 q0,-8 6,-8z" />
            {/* head */}
            <circle cx="0" cy="16" r="7" />
          </g>
          {/* glow halo */}
          <circle cx="0" cy="62" r="58" fill="#ffcf3f" opacity="0.16" />
        </g>

        {/* festival bunting across the sky */}
        <g>
          <path d="M320,60 Q600,120 880,60" fill="none" stroke="#f7f1e3" strokeWidth="2.5" opacity="0.7" />
          {Array.from({ length: 11 }).map((_, i) => {
            const t = i / 10;
            const x = 320 + t * 560;
            // round to avoid server/client float-precision hydration mismatch
            const y = Math.round((60 + Math.sin(t * Math.PI) * 58) * 100) / 100;
            const c = ["#16b45a", "#ffcf3f", "#1d6fd6", "#ff2e88", "#22d3ee"][i % 5];
            return <polygon key={i} points={`${x - 9},${y} ${x + 9},${y} ${x},${y + 18}`} fill={c} />;
          })}
        </g>

        {/* beach + calçadão waves */}
        <rect x="0" y="440" width="1200" height="80" fill="url(#copacabana)" />
      </svg>

      {/* real-icon layer */}
      <Icon
        icon="fluent-emoji-flat:palm-tree"
        className="absolute bottom-[17%] left-[4%] h-24 w-24 drop-shadow-[0_8px_0_rgba(0,0,0,0.2)]"
      />
      <Icon
        icon="fluent-emoji-flat:parrot"
        className="anim-bob absolute bottom-[42%] right-[26%] h-14 w-14"
      />
      <div className="anim-drift absolute bottom-[16.5%] left-0" style={{ animationDuration: "13s" }}>
        <Icon icon="fluent-emoji-flat:soccer-ball" className="h-12 w-12 anim-spin-slow" style={{ animationDuration: "3s" }} />
      </div>
    </div>
  );
}

// Three squad archetypes — player cards, but only three.
const SQUAD = [
  { ovr: 99, pos: "DEV", name: "The Builder", trait: "Ships at 3am", c: "#16b45a" },
  { ovr: 98, pos: "DES", name: "The Designer", trait: "Makes it beautiful", c: "#ffcf3f" },
  { ovr: 97, pos: "WLD", name: "The Wildcard", trait: "Chaos, but useful", c: "#1d6fd6" },
];

export default function BrazilSection() {
  return (
    <section
      id="brazil"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #0a7c3f 0%, #12a350 40%, #ffd23f 130%)" }}
    >
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-20 sm:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 text-cream">
            <CountryBadge
              flag="circle-flags:br"
              city="Rio de Janeiro"
              native="Brasil"
              coords="22.9°S · 43.2°W — LEVEL 04"
            />
            <span className="level-chip text-hd-gold">Find Your Squad</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mt-6 text-cream drop-shadow-[0_4px_0_rgba(0,0,0,0.3)]">
            No one wins
            <br />
            <span className="text-hd-gold">the cup alone.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="scene-copy mt-5 text-cream/95">
            Meet builders, designers, and friends from Davidson and nearby schools.
            No team? Draft one at kickoff — we run team formation like a street
            football pickup. Everyone plays.
          </p>
        </Reveal>

        <div className="mt-8 grid max-w-2xl grid-cols-3 gap-4">
          {SQUAD.map((p, i) => (
            <Reveal key={p.name} delay={0.16 + i * 0.08}>
              <div
                className="poster-card p-4 text-ink transition-transform duration-200 hover:-translate-y-2 hover:rotate-[-1.5deg]"
                style={{ background: `linear-gradient(160deg, ${p.c} 0%, #f7f1e3 60%)` }}
              >
                <div className="flex items-start justify-between">
                  <div className="font-display text-4xl leading-none text-ink">
                    {p.ovr}
                    <div className="font-heading text-xs font-black tracking-widest">{p.pos}</div>
                  </div>
                  <Icon icon="circle-flags:br" className="h-6 w-6 opacity-80" />
                </div>
                <div className="mt-7 border-t-2 border-ink/30 pt-2">
                  <div className="font-heading text-base font-black leading-tight">{p.name}</div>
                  <div className="text-xs text-ink/70">{p.trait}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <RioScene />
    </section>
  );
}
