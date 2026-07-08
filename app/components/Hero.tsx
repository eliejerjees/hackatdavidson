"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Globe from "./Globe";
import StadiumBowl from "./StadiumBowl";
import Confetti from "./Confetti";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Camera pushes into the globe as you scroll away
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 2.4]);
  const globeY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const bowlY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-hidden bg-arena"
    >
      {/* Radial burst behind everything (EURO 2028 energy) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 50% 42%, rgba(255,255,255,0.055) 0deg 6deg, transparent 6deg 12deg)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 20%, rgba(34,211,238,0.28), transparent 55%), radial-gradient(90% 70% at 50% 100%, rgba(10,26,140,0.9), transparent 60%)",
        }}
      />

      {/* Stadium light rigs */}
      {[
        "left-[8%] top-[10%]",
        "right-[8%] top-[10%]",
        "left-[22%] top-[6%]",
        "right-[22%] top-[6%]",
      ].map((pos, i) => (
        <div
          key={i}
          aria-hidden
          className={`absolute ${pos} h-3 w-3 rounded-full bg-cream`}
          style={{ boxShadow: "0 0 22px 8px rgba(247,241,227,0.7)" }}
        />
      ))}

      <Confetti count={30} />

      {/* Top bar */}
      <header className="relative z-20 flex w-full max-w-7xl items-center justify-between px-6 pt-6">
        <span className="font-heading text-sm font-black uppercase tracking-[0.2em] text-cream">
          Hack<span className="text-hd-gold">@</span>Davidson
        </span>
        <span className="hidden font-heading text-xs font-bold uppercase tracking-[0.28em] text-cream/70 sm:block">
          Around the World · 2027
        </span>
      </header>

      {/* Globe */}
      <motion.div
        style={{ scale: globeScale, y: globeY, opacity: globeOpacity }}
        className="relative z-10 mt-6 flex justify-center"
      >
        <div className="anim-bob">
          <Globe className="h-[46vh] max-h-[420px] w-[46vh] max-w-[420px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
        </div>
      </motion.div>

      {/* Title block */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-20 -mt-[14vh] flex flex-col items-center px-6 text-center"
      >
        <h1 className="display-hero text-cream drop-shadow-[0_6px_0_rgba(0,0,0,0.35)]">
          <span className="block text-[clamp(2.8rem,11vw,9rem)]">
            HACK<span className="text-hd-gold">@</span>DAVIDSON
          </span>
        </h1>
        <p className="mt-3 font-heading text-[clamp(1rem,2.4vw,1.6rem)] font-extrabold uppercase tracking-[0.18em] text-hd-cyan">
          Build Locally · Think Globally
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#england" className="btn-stamp btn-arena">
            ⚽ Enter the Arena
          </a>
          <a href="#tracks" className="btn-stamp btn-ghost">
            View the Bracket
          </a>
        </div>
      </motion.div>

      {/* Stadium bowl */}
      <motion.div
        style={{ y: bowlY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
      >
        <StadiumBowl className="h-[42vh] max-h-[420px] w-full" />
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-center">
        <div className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.3em] text-cream/80">
          Scroll to travel
        </div>
        <div className="mx-auto mt-2 h-8 w-5 rounded-full border-2 border-cream/60">
          <div className="anim-bob mx-auto mt-1.5 h-1.5 w-1.5 rounded-full bg-cream" />
        </div>
      </div>
    </section>
  );
}
