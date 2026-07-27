"use client";

import { Icon } from "@iconify/react";
import Reveal from "./Reveal";
import CountryBadge from "./CountryBadge";

function rng(s: number) {
  const x = Math.sin(s * 51.9) * 3771.2;
  return x - Math.floor(x);
}

function SandDrift() {
  const grains = Array.from({ length: 22 }, (_, i) => ({
    i,
    top: Math.round((40 + rng(i + 1) * 55) * 10) / 10,
    delay: Math.round(rng(i + 3) * 80) / 10,
    dur: Math.round((6 + rng(i + 6) * 8) * 10) / 10,
    w: Math.round(30 + rng(i + 2) * 90),
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {grains.map((g) => (
        <span
          key={g.i}
          style={{
            position: "absolute",
            top: `${g.top}%`,
            left: 0,
            width: g.w,
            height: 2,
            background: "rgba(255,240,200,0.55)",
            borderRadius: 2,
            animation: `drift-x ${g.dur}s linear ${g.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function EgyptScene() {
  return (
    <svg
      viewBox="0 0 1200 560"
      className="absolute inset-x-0 bottom-0 h-[70%] w-full"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      {/* glowing sun */}
      <g className="anim-sun">
        <circle cx="600" cy="150" r="90" fill="#ffcf3f" />
        <circle cx="600" cy="150" r="118" fill="none" stroke="#ffcf3f" strokeWidth="3" opacity="0.5" />
      </g>

      {/* dunes */}
      <path d="M0,360 Q300,300 600,350 T1200,340 L1200,560 L0,560 Z" fill="#e2ad55" />
      <path d="M0,430 Q400,380 800,430 T1200,420 L1200,560 L0,560 Z" fill="#d1922f" />

      {/* pyramids */}
      <g>
        <polygon points="250,360 430,360 340,150" fill="#e9c877" />
        <polygon points="340,150 430,360 340,360" fill="#c99a3d" />
        <polygon points="640,360 900,360 770,120" fill="#eccf82" />
        <polygon points="770,120 900,360 770,360" fill="#cb9d40" />
        {/* block lines */}
        <line x1="340" y1="150" x2="340" y2="360" stroke="#b3822c" strokeWidth="2" opacity="0.5" />
        <line x1="770" y1="120" x2="770" y2="360" stroke="#b3822c" strokeWidth="2" opacity="0.5" />
      </g>

      {/* sphinx (simplified crouch) */}
      <g transform="translate(70 300)">
        <rect x="0" y="40" width="150" height="60" rx="10" fill="#d1922f" />
        <rect x="120" y="0" width="46" height="56" rx="8" fill="#e2ad55" />
        <rect x="118" y="-4" width="50" height="18" fill="#0b5c56" />
        <rect x="118" y="14" width="50" height="6" fill="#0b5c56" />
        <circle cx="150" cy="26" r="3" fill="#0b0f2b" />
      </g>

      {/* Giant glowing doorway / portal */}
      <g transform="translate(980 210)">
        <rect x="0" y="0" width="120" height="200" rx="60" fill="#0b5c56" />
        <rect x="12" y="14" width="96" height="186" rx="48" fill="#22d3ee" opacity="0.35" />
        <rect
          x="0"
          y="0"
          width="120"
          height="200"
          rx="60"
          fill="none"
          stroke="#ffcf3f"
          strokeWidth="4"
          className="anim-sun"
        />
        {/* tiny explorer before the door for scale */}
        <g transform="translate(52 150)">
          <circle cx="0" cy="0" r="7" fill="#0b0f2b" />
          <rect x="-6" y="6" width="12" height="26" rx="5" fill="#0b0f2b" />
          <rect x="-10" y="30" width="6" height="16" fill="#0b0f2b" />
          <rect x="4" y="30" width="6" height="16" fill="#0b0f2b" />
        </g>
      </g>

      {/* hieroglyph border morphing into code */}
      <g transform="translate(0 500)">
        <rect x="0" y="0" width="1200" height="34" fill="#0b5c56" />
        {Array.from({ length: 24 }).map((_, i) => {
          const isCode = i % 5 === 3;
          const x = 24 + i * 49;
          return isCode ? (
            <text key={i} x={x} y="24" fontFamily="var(--font-archivo)" fontWeight="900" fontSize="16" fill="#ffcf3f">
              {["</>", "{ }", "()", "=>"][i % 4]}
            </text>
          ) : (
            <g key={i} transform={`translate(${x} 8)`} fill="#e2ad55">
              {i % 3 === 0 ? (
                <circle cx="8" cy="9" r="8" />
              ) : i % 3 === 1 ? (
                <polygon points="0,18 8,0 16,18" />
              ) : (
                <rect x="0" y="2" width="16" height="14" rx="2" />
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export default function EgyptSection() {
  return (
    <section
      id="egypt"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #0b5c56 0%, #1f8a7e 32%, #e8c877 70%)" }}
    >
      <SandDrift />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-20 sm:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 text-cream">
            <CountryBadge
              flag="circle-flags:eg"
              city="Cairo"
              native="القاهرة"
              coords="30.0°N · 31.2°E — LEVEL 03"
            />
            <span className="level-chip text-hd-gold">Underdog Story</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mt-6 text-cream drop-shadow-[0_4px_0_rgba(11,15,43,0.35)]">
            Everybody loves
            <br />
            <span className="text-hd-gold">an underdog story.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="scene-copy mt-5 text-cream/95">
            First hackathon? Perfect. You do not need a team, a polished idea, or
            years of experience. Show up curious. Every legend on the leaderboard
            started as someone who had never shipped a thing.
          </p>
        </Reveal>

        {/* Quest card */}
        <Reveal delay={0.2}>
          <div
            className="poster-card mt-8 max-w-md bg-cream p-5 text-ink"
            style={{ borderColor: "#0b5c56", boxShadow: "8px 8px 0 rgba(11,92,86,0.4)" }}
          >
            <div className="flex items-center justify-between">
              <span className="font-heading text-xs font-black tracking-[0.22em] text-[#0b5c56]">
                ⚑ BEGINNER QUEST
              </span>
              <span className="stamp-mark text-hd-red">No XP required</span>
            </div>
            <ul className="mt-3 space-y-2 font-heading font-bold">
              {[
                "Show up curious",
                "Find a team (or let one find you)",
                "Build something that shouldn't exist yet",
              ].map((q) => (
                <li key={q} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded border-2 border-[#0b5c56] text-[#0b5c56]">
                    ✓
                  </span>
                  <span className="text-sm">{q}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-xs italic text-ink/60">
              Reward: a demo, a team, and a story worth telling.
            </div>
          </div>
        </Reveal>
      </div>

      <EgyptScene />

      {/* real-icon accents over the scene */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        <div className="anim-drift absolute bottom-[16%] left-0" style={{ animationDuration: "26s" }}>
          <Icon icon="fluent-emoji-flat:camel" className="h-20 w-20 drop-shadow-[0_6px_0_rgba(0,0,0,0.2)]" />
        </div>
        <Icon
          icon="fluent-emoji-flat:palm-tree"
          className="absolute bottom-[13%] left-[30%] h-16 w-16 drop-shadow-[0_6px_0_rgba(0,0,0,0.15)]"
        />
      </div>
    </section>
  );
}
