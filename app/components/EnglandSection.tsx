"use client";

import { Icon } from "@iconify/react";
import Reveal from "./Reveal";
import CountryBadge from "./CountryBadge";

// deterministic scatter
function rng(s: number) {
  const x = Math.sin(s * 91.7) * 9973.13;
  return x - Math.floor(x);
}

const CODE_BITS = ["{ }", "</>", "( )", "=>", "[ ]", "&&"];

function Rain() {
  const drops = Array.from({ length: 40 }, (_, i) => {
    const isCode = i % 6 === 0;
    return {
      i,
      left: Math.round(rng(i + 1) * 1000) / 10,
      delay: Math.round(rng(i + 5) * 40) / 10,
      dur: Math.round((1.6 + rng(i + 9) * 1.8) * 10) / 10,
      isCode,
      bit: CODE_BITS[Math.floor(rng(i + 2) * CODE_BITS.length)],
    };
  });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {drops.map((d) =>
        d.isCode ? (
          <span
            key={d.i}
            className="font-heading font-black text-hd-gold"
            style={{
              position: "absolute",
              top: "-6%",
              left: `${d.left}%`,
              fontSize: "0.9rem",
              animation: `rain ${d.dur * 2}s linear ${d.delay}s infinite`,
            }}
          >
            {d.bit}
          </span>
        ) : (
          <span
            key={d.i}
            style={{
              position: "absolute",
              top: "-6%",
              left: `${d.left}%`,
              width: 2,
              height: 16,
              background: "rgba(210,225,255,0.75)",
              borderRadius: 2,
              animation: `rain ${d.dur}s linear ${d.delay}s infinite`,
            }}
          />
        ),
      )}
    </div>
  );
}

function LondonScene() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%]">
      {/* Union-Jack-inspired diagonal geometry, abstract not literal */}
      <svg
        viewBox="0 0 1200 520"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <g opacity="0.16">
          <polygon points="0,520 300,0 380,0 80,520" fill="#e8322b" />
          <polygon points="1200,520 900,0 820,0 1120,520" fill="#f7f1e3" />
        </g>

        {/* cream ground / pitch */}
        <rect x="0" y="380" width="1200" height="140" fill="#f2ecdb" />
        <g stroke="#c9be9c" strokeWidth="3" fill="none" opacity="0.9">
          <line x1="0" y1="408" x2="1200" y2="408" />
          <line x1="600" y1="408" x2="600" y2="520" />
          <circle cx="600" cy="480" r="44" />
        </g>

        {/* Big Ben — kept large + simple, poster style */}
        <g transform="translate(1000 90)">
          <polygon points="0,70 55,0 110,70" fill="#c0392b" />
          <rect x="8" y="70" width="94" height="52" fill="#e8322b" />
          <rect x="18" y="122" width="74" height="200" fill="#d8cba6" />
          <rect x="18" y="122" width="74" height="200" fill="none" stroke="#b3a373" strokeWidth="3" />
          <circle cx="55" cy="162" r="27" fill="#f7f1e3" stroke="#0b0f2b" strokeWidth="4" />
          <line x1="55" y1="162" x2="55" y2="145" stroke="#0b0f2b" strokeWidth="3" className="anim-spin-slow" style={{ transformOrigin: "55px 162px" }} />
          <line x1="55" y1="162" x2="69" y2="162" stroke="#0b0f2b" strokeWidth="3" />
          {[190, 228, 266].map((y) => (
            <rect key={y} x={38} y={y} width="34" height="22" fill="#1533d6" stroke="#0b0f2b" strokeWidth="2" />
          ))}
        </g>

        {/* Red phone booth */}
        <g transform="translate(690 268)">
          <rect x="0" y="-14" width="70" height="16" rx="4" fill="#c0392b" />
          <rect x="0" y="0" width="70" height="112" rx="6" fill="#e8322b" stroke="#0b0f2b" strokeWidth="4" />
          <rect x="10" y="14" width="50" height="58" fill="#bfe0ff" stroke="#0b0f2b" strokeWidth="3" />
          <rect x="10" y="80" width="50" height="20" fill="#f7f1e3" />
        </g>

        {/* London Eye — spoked wheel on the skyline */}
        <g transform="translate(210 250)" opacity="0.95">
          <circle cx="0" cy="0" r="86" fill="none" stroke="#dfe7fb" strokeWidth="5" />
          <g stroke="#dfe7fb" strokeWidth="2.5" className="anim-spin-slow" style={{ transformOrigin: "0px 0px" }}>
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              // round to avoid server/client float-precision hydration mismatch
              const x = Math.round(Math.cos(a) * 8600) / 100;
              const y = Math.round(Math.sin(a) * 8600) / 100;
              return (
                <g key={i}>
                  <line x1="0" y1="0" x2={x} y2={y} />
                  <circle cx={x} cy={y} r="7" fill="#e8322b" stroke="none" />
                </g>
              );
            })}
          </g>
          <polygon points="-18,130 0,86 18,130" fill="none" stroke="#dfe7fb" strokeWidth="5" />
        </g>
      </svg>

      {/* Driving red double-decker — drawn, because no icon set has a proper one */}
      <div className="anim-drift absolute bottom-[9%] left-0" style={{ animationDuration: "16s" }}>
        <svg viewBox="0 0 240 110" className="h-24 w-auto drop-shadow-[0_8px_0_rgba(0,0,0,0.18)]">
          <rect x="0" y="0" width="220" height="86" rx="12" fill="#e8322b" stroke="#0b0f2b" strokeWidth="4" />
          <rect x="0" y="40" width="220" height="8" fill="#f7f1e3" />
          {[14, 62, 110, 158].map((x) => (
            <rect key={`u${x}`} x={x} y="10" width="38" height="22" rx="3" fill="#bfe0ff" stroke="#0b0f2b" strokeWidth="2" />
          ))}
          {[14, 62, 110, 158].map((x) => (
            <rect key={`l${x}`} x={x} y="52" width="38" height="24" rx="3" fill="#bfe0ff" stroke="#0b0f2b" strokeWidth="2" />
          ))}
          <rect x="60" y="0" width="100" height="10" rx="5" fill="#f7f1e3" />
          <text x="110" y="9" textAnchor="middle" fontSize="8" fontWeight="900" fill="#0b0f2b">HACK@DAVIDSON</text>
          <circle cx="48" cy="90" r="16" fill="#0b0f2b" />
          <circle cx="172" cy="90" r="16" fill="#0b0f2b" />
          <circle cx="48" cy="90" r="6" fill="#f7f1e3" />
          <circle cx="172" cy="90" r="6" fill="#f7f1e3" />
        </svg>
      </div>
      <div className="anim-bob absolute bottom-[5%] left-[46%]">
        <Icon icon="fluent-emoji-flat:soccer-ball" className="h-12 w-12" />
      </div>
    </div>
  );
}

export default function EnglandSection() {
  return (
    <section
      id="england"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #1533d6 0%, #2a4be0 55%, #7fa0f5 100%)" }}
    >
      <Rain />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-20 sm:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 text-cream">
            <CountryBadge
              flag="circle-flags:gb"
              city="London"
              native="England"
              coords="51.5°N · 0.1°W — LEVEL 01"
            />
            <span className="level-chip text-hd-gold">Kickoff</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mt-6 text-cream drop-shadow-[0_4px_0_rgba(0,0,0,0.3)]">
            The match
            <br />
            starts here.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="scene-copy mt-5 text-cream/95">
            Hack<span className="text-hd-gold">@</span>Davidson is Davidson&apos;s
            student-run hackathon — one weekend where students turn rough ideas
            into real demos. Coders, designers, writers, dreamers: everyone plays.
            No suits, no gatekeeping. Just a whistle and 24 hours on the clock.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          {/* single match-details strip instead of a card grid */}
          <div className="mt-6 inline-flex flex-wrap items-center gap-x-6 gap-y-2 rounded-full border-2 border-cream/50 bg-ink/25 px-6 py-3 font-heading text-xs font-black uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <Icon icon="fluent-emoji-flat:stadium" className="h-5 w-5" /> Davidson College
            </span>
            <span className="text-hd-gold">·</span>
            <span className="flex items-center gap-2">
              <Icon icon="fluent-emoji-flat:spiral-calendar" className="h-5 w-5" /> One weekend, 2027
            </span>
            <span className="text-hd-gold">·</span>
            <span className="flex items-center gap-2">
              <Icon icon="fluent-emoji-flat:admission-tickets" className="h-5 w-5" /> Free entry
            </span>
          </div>
        </Reveal>
      </div>

      <LondonScene />
    </section>
  );
}
