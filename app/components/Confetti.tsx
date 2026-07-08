"use client";

import { useEffect, useState } from "react";

// Pseudo-random scatter, computed client-side only (Math.sin can differ in the
// last bits between the Node server and browser V8, so we skip SSR for the
// purely decorative particle layer to avoid hydration mismatches).
function rng(seed: number) {
  const x = Math.sin(seed * 99.13) * 43758.5453;
  return x - Math.floor(x);
}

const COLORS = [
  "var(--color-hd-red)",
  "var(--color-hd-gold)",
  "var(--color-hd-pink)",
  "var(--color-hd-cyan)",
  "var(--color-hd-green)",
  "var(--color-cream)",
];

export default function Confetti({ count = 34 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const pieces = Array.from({ length: count }, (_, i) => {
    const left = rng(i + 1) * 100;
    const delay = rng(i + 7) * 8;
    const duration = 6 + rng(i + 13) * 7;
    const size = 6 + rng(i + 21) * 8;
    const color = COLORS[Math.floor(rng(i + 3) * COLORS.length)];
    const round = rng(i + 5) > 0.5;
    return { left, delay, duration, size, color, round, i };
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {pieces.map((p) => (
        <span
          key={p.i}
          style={{
            position: "absolute",
            top: "-5%",
            left: `${p.left}%`,
            width: p.size,
            height: p.size * (p.round ? 1 : 1.6),
            background: p.color,
            borderRadius: p.round ? "999px" : "2px",
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}
