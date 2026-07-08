"use client";

import { Icon } from "@iconify/react";
import Reveal from "./Reveal";
import Confetti from "./Confetti";

// Flags that came along for the tour, landing around campus
const LANDED = [
  { flag: "circle-flags:gb", pos: "left-[6%] top-[46%]" },
  { flag: "circle-flags:jp", pos: "left-[16%] top-[62%]" },
  { flag: "circle-flags:eg", pos: "right-[16%] top-[60%]" },
  { flag: "circle-flags:br", pos: "right-[6%] top-[44%]" },
  { flag: "circle-flags:ng", pos: "left-[26%] top-[50%]" },
  { flag: "circle-flags:in", pos: "right-[26%] top-[50%]" },
  { flag: "circle-flags:kr", pos: "left-[10%] top-[76%]" },
  { flag: "circle-flags:mx", pos: "right-[10%] top-[76%]" },
];

function ChambersScene() {
  return (
    <svg
      viewBox="0 0 1200 460"
      className="absolute inset-x-0 bottom-0 h-[58%] w-full"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      {/* converging route lines to the pin */}
      <g stroke="#ffcf3f" strokeWidth="2.5" strokeDasharray="2 12" fill="none" opacity="0.8" className="anim-dash">
        <path d="M-20,40 Q300,120 600,150" />
        <path d="M1220,30 Q900,120 600,150" />
        <path d="M-20,220 Q280,200 600,150" />
        <path d="M1220,240 Q920,200 600,150" />
        <path d="M600,-20 L600,150" />
      </g>

      {/* landing pins */}
      {[
        [80, 60],
        [1120, 50],
        [70, 210],
        [1130, 230],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="7" fill="#e8322b" stroke="#f7f1e3" strokeWidth="2.5" />
        </g>
      ))}

      {/* campus green */}
      <path d="M0,300 Q600,260 1200,300 L1200,460 L0,460 Z" fill="#1c7a3e" />

      {/* Chambers building */}
      <g transform="translate(430 120)">
        {/* central tower / cupola */}
        <rect x="150" y="-40" width="40" height="50" fill="#f2ecdb" />
        <polygon points="150,-40 170,-70 190,-40" fill="#7a1225" />
        <rect x="162" y="-30" width="16" height="24" fill="#3a5bd0" />
        {/* body */}
        <rect x="0" y="10" width="340" height="150" fill="#f2ecdb" stroke="#c9be9c" strokeWidth="2" />
        {/* pediment */}
        <polygon points="120,10 170,-24 220,10" fill="#f2ecdb" stroke="#c9be9c" strokeWidth="2" />
        {/* columns */}
        {[130, 158, 186, 214].map((x) => (
          <rect key={x} x={x} y="40" width="12" height="90" fill="#e6ddc4" stroke="#c9be9c" strokeWidth="1.5" />
        ))}
        {/* windows */}
        {[20, 56, 262, 298].map((x) => (
          <rect key={x} x={x} y="46" width="26" height="42" fill="#3a5bd0" stroke="#0b0f2b" strokeWidth="1.5" />
        ))}
        <rect x="150" y="120" width="40" height="40" fill="#7a1225" />
      </g>

      {/* big gold pin at Davidson */}
      <g transform="translate(600 90)">
        <path d="M0,0 C-26,0 -34,30 0,70 C34,30 26,0 0,0 Z" fill="#ffcf3f" stroke="#0b0f2b" strokeWidth="3" />
        <circle cx="0" cy="24" r="12" fill="#0b0f2b" />
        <text x="0" y="29" textAnchor="middle" fontFamily="var(--font-display), Impact" fontSize="16" fill="#ffcf3f">
          D
        </text>
      </g>
    </svg>
  );
}

export default function DavidsonSection() {
  return (
    <section
      id="davidson"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #7a1225 0%, #a6192e 45%, #c8102e 100%)" }}
    >
      <Confetti count={26} />

      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 pt-24 text-center sm:pt-28">
        <Reveal>
          <span className="level-chip mx-auto text-hd-gold">Final Level · Davidson</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mx-auto mt-5 text-cream drop-shadow-[0_4px_0_rgba(0,0,0,0.35)]">
            The world lands
            <br />
            <span className="text-hd-gold">at Davidson.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="scene-copy mx-auto mt-5 text-center text-cream/95">
            The tour ends where the building starts. All those routes, all those
            ideas — they converge on one campus. Build something weird. Build
            something useful. Build something that should exist.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="btn-stamp btn-arena">
              <Icon icon="fluent-emoji-flat:trophy" className="h-6 w-6" /> Register
            </a>
            <a href="#" className="btn-stamp btn-ghost">
              <Icon icon="fluent-emoji-flat:handshake" className="h-6 w-6" /> Sponsor Us
            </a>
            <a href="#" className="btn-stamp btn-ghost">
              <Icon icon="fluent-emoji-flat:admission-tickets" className="h-6 w-6" /> Join the Team
            </a>
          </div>
        </Reveal>
      </div>

      <ChambersScene />

      {/* landed flag pins around campus */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        {LANDED.map((f) => (
          <div key={f.flag} className={`anim-bob absolute ${f.pos}`}>
            <Icon icon={f.flag} className="h-9 w-9 rounded-full border-[2.5px] border-cream shadow-[0_4px_0_rgba(0,0,0,0.3)]" />
          </div>
        ))}
      </div>

      <footer className="relative z-20 mt-auto w-full px-6 pb-6 text-center">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-cream/70">
          Hack<span className="text-hd-gold">@</span>Davidson · Around the World ·
          2027 — Build Locally. Think Globally.
        </p>
      </footer>
    </section>
  );
}
