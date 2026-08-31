"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "motion/react";
import SandTopography from "./SandTopography";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Sponsors", href: "#sponsors" },
];

// Same accounts as the footer — kept in sync manually since there's only two spots.
const SOCIALS = [
  {
    icon: "ph:instagram-logo-bold",
    label: "Instagram",
    href: "https://www.instagram.com/hackatdavidson/",
  },
  {
    icon: "ph:linkedin-logo-bold",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hackatdavidson/",
  },
  {
    icon: "ph:discord-logo-bold",
    label: "Discord",
    href: "https://discord.com/invite/jvaPqNssAa",
  },
  {
    icon: "ph:trophy-bold",
    label: "Devpost project gallery",
    href: "https://hack-davidson.devpost.com/project-gallery",
  },
];

/** Printer's registration mark, one per corner. */
function CropMark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`absolute h-6 w-6 ${className}`} aria-hidden>
      <g stroke="rgba(255,255,255,.5)" strokeWidth="2">
        <path d="M0 6h14M6 0v14" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);

  // The hint retires as soon as they've touched the sand.
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    const on = () => setTouched(true);
    window.addEventListener("pointermove", on, { once: true, passive: true });
    return () => window.removeEventListener("pointermove", on);
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      style={{ background: "var(--g-red)" }}
    >
      {/* --- The sand: procedural contours, pushed by the cursor --- */}
      <SandTopography className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* Warm centre so the wordmark always has a ground */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 40% at 50% 46%, rgba(212,33,33,.72), transparent 72%)",
        }}
      />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <CropMark className="left-4 top-4" />
        <CropMark className="right-4 top-4 rotate-90" />
        <CropMark className="bottom-4 right-4 rotate-180" />
        <CropMark className="bottom-4 left-4 -rotate-90" />
      </div>

      {/* --- Nav --- */}
      <nav
        className="relative z-10 flex items-center justify-between px-6 py-7 sm:px-10"
        aria-label="Main"
      >
        <a href="#top" aria-label="Hack@Davidson" className="flex items-center">
          {/* Placeholder symbol mark. Swap for the real one. */}
          <span
            className="grid h-10 w-10 place-items-center border-2 font-[family-name:var(--font-archivo)] text-[0.72rem] font-black text-white"
            style={{ borderColor: "rgba(255,255,255,.7)" }}
          >
            H@D
          </span>
        </a>
        <div className="flex items-center gap-6 sm:gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hidden text-[0.95rem] text-white/80 transition-colors hover:text-white sm:inline"
            >
              {n.label}
            </a>
          ))}
          <Link
            href="/2027"
            className="text-[0.95rem] font-semibold text-white underline decoration-2 underline-offset-[6px]"
          >
            2027
          </Link>
        </div>
      </nav>

      {/* --- Wordmark --- */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-16"
      >
        <h1
          className="text-center font-[family-name:var(--font-archivo)] font-extrabold uppercase text-white"
          style={{
            fontSize: "clamp(2.4rem, 11.4vw, 9.5rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
          }}
        >
          <span
            className="block"
            style={{ letterSpacing: "0.325em", marginLeft: "0.325em" }}
          >
            Hack<span style={{ color: "var(--g-sand)" }}>@</span>
          </span>
          <span className="block" style={{ letterSpacing: "0.02em" }}>
            Davidson
          </span>
        </h1>

        <div className="mt-7 flex w-full max-w-[420px] items-center gap-3">
          <span className="h-3 w-px bg-white/45" />
          <span className="h-px flex-1 bg-white/45" />
          <span className="g-mono whitespace-nowrap text-white/70">Est. 2024</span>
          <span className="h-px flex-1 bg-white/45" />
          <span className="h-3 w-px bg-white/45" />
        </div>

        <div className="mt-6 flex items-center gap-2.5">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border text-white transition-colors hover:bg-white hover:text-[color:var(--g-red)]"
              style={{ borderColor: "rgba(255,255,255,.35)" }}
            >
              <Icon icon={s.icon} width="19" height="19" aria-hidden />
            </a>
          ))}
        </div>
      </motion.div>

      <span
        aria-hidden
        className="g-mono absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-white/45 transition-opacity duration-700"
        style={{ opacity: touched ? 0 : 1 }}
      >
        Move your cursor
      </span>
    </div>
  );
}
