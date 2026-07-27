"use client";

import { Icon } from "@iconify/react";
import Reveal from "./Reveal";
import CountryBadge from "./CountryBadge";

function rng(s: number) {
  const x = Math.sin(s * 74.3) * 5123.7;
  return x - Math.floor(x);
}

function Blossoms() {
  const petals = Array.from({ length: 26 }, (_, i) => ({
    i,
    left: Math.round(rng(i + 1) * 1000) / 10,
    delay: Math.round(rng(i + 4) * 90) / 10,
    dur: Math.round((7 + rng(i + 8) * 8) * 10) / 10,
    size: Math.round((8 + rng(i + 2) * 8) * 10) / 10,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.i}
          style={{
            position: "absolute",
            top: "-5%",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle at 30% 30%, #ffd9ec, #ff8fc4)",
            borderRadius: "60% 0 60% 0",
            animation: `fall ${p.dur}s linear ${p.delay}s infinite`,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
}

function TokyoScene() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]">
      {/* rising sun disc — big, abstract */}
      <div
        className="absolute left-1/2 top-[4%] h-64 w-64 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, #ff4d6d 0%, #e8322b 70%)", opacity: 0.55, filter: "blur(2px)" }}
      />

      <svg
        viewBox="0 0 1200 520"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* neon city bar */}
        <rect x="0" y="350" width="1200" height="170" fill="#120a2e" />
        {Array.from({ length: 40 }).map((_, i) => (
          <rect
            key={i}
            x={20 + i * 30}
            y={368 + (i % 4) * 12}
            width="14"
            height="10"
            fill={i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#ff2e88" : "#ffcf3f"}
            opacity="0.85"
          />
        ))}
        {/* vertical neon sign — katakana ハック = "hack" */}
        <g transform="translate(80 130)" className="anim-flicker" style={{ color: "#ff2e88" }}>
          <rect x="0" y="0" width="64" height="220" rx="10" fill="#160a33" stroke="#ff2e88" strokeWidth="4" />
          <text x="32" y="62" textAnchor="middle" fontSize="40" fill="#ff2e88" fontWeight="bold">ハ</text>
          <text x="32" y="122" textAnchor="middle" fontSize="40" fill="#22d3ee" fontWeight="bold">ッ</text>
          <text x="32" y="182" textAnchor="middle" fontSize="40" fill="#ffcf3f" fontWeight="bold">ク</text>
        </g>
      </svg>

      {/* Real landmark icons */}
      <Icon
        icon="fluent-emoji-flat:tokyo-tower"
        className="absolute bottom-[24%] right-[10%] h-48 w-48 drop-shadow-[0_10px_0_rgba(0,0,0,0.25)]"
      />
      <Icon
        icon="fluent-emoji-flat:shinto-shrine"
        className="absolute bottom-[26%] left-[16%] h-32 w-32 drop-shadow-[0_8px_0_rgba(0,0,0,0.25)]"
      />
      <div className="anim-bob absolute bottom-[30%] right-[30%]">
        <Icon icon="fluent-emoji-flat:cherry-blossom" className="h-10 w-10" />
      </div>

      {/* bullet train — real icon streaking across with speed lines */}
      <div className="anim-drift absolute bottom-[4%] left-0 flex items-center" style={{ animationDuration: "7s" }}>
        <div className="mr-2 flex flex-col gap-1.5">
          {[24, 40, 24].map((w, i) => (
            <span key={i} className="h-1 rounded-full bg-hd-cyan/70" style={{ width: w }} />
          ))}
        </div>
        <Icon icon="fluent-emoji-flat:bullet-train" className="h-24 w-24 -scale-x-100 drop-shadow-[0_8px_0_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}

const MENU = [
  { icon: "fluent-emoji-flat:hammer-and-wrench", t: "Workshops", d: "Ship-your-first-app crash courses" },
  { icon: "fluent-emoji-flat:brain", t: "Mentors", d: "Upperclassmen + pros on call all weekend" },
  { icon: "fluent-emoji-flat:high-voltage", t: "Tools & credits", d: "APIs, starter kits, and hardware to power up" },
];

export default function JapanSection() {
  return (
    <section
      id="japan"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #1a0b3e 0%, #2b0f52 45%, #3a0f4a 100%)" }}
    >
      <Blossoms />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-20 sm:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 text-cream">
            <CountryBadge
              flag="circle-flags:jp"
              city="Tokyo"
              native="東京"
              coords="35.7°N · 139.7°E — LEVEL 02"
              accent="var(--color-hd-cyan)"
            />
            <span className="level-chip text-hd-cyan">Training Grounds</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title mt-6 text-cream">
            Power up
            <br />
            <span className="text-hd-pink">before you build.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="scene-copy mt-5 text-cream/90">
            Workshops, mentors, and tools get you moving before the timer starts.
            Level up your skills, grab a power-up, and hit the ground sprinting
            when the clock does.
          </p>
        </Reveal>

        {/* slim arcade menu — a list, not a card wall */}
        <Reveal delay={0.18}>
          <div className="mt-7 max-w-md divide-y divide-hd-cyan/20 rounded-2xl border-2 border-hd-cyan/60 bg-[#160a33]/85 backdrop-blur-sm" style={{ boxShadow: "6px 6px 0 rgba(34,211,238,0.3)" }}>
            <div className="px-5 py-2.5 font-heading text-[0.65rem] font-black uppercase tracking-[0.3em] text-hd-cyan">
              ▸ Select power-up
            </div>
            {MENU.map((m) => (
              <div key={m.t} className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-hd-cyan/10">
                <Icon icon={m.icon} className="h-8 w-8 shrink-0" />
                <div>
                  <div className="font-heading text-sm font-black text-cream group-hover:text-hd-cyan">
                    {m.t}
                  </div>
                  <div className="text-xs text-cream/60">{m.d}</div>
                </div>
                <span className="ml-auto font-heading text-hd-pink opacity-0 transition-opacity group-hover:opacity-100">
                  ▶
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <TokyoScene />
    </section>
  );
}
