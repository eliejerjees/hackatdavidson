"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Reveal from "../Reveal";
import { Frame } from "./Placeholders";

// The annual hackathon lives in the flagship block above, not here — this
// grid is everything else, the ongoing programming. Rules and typography
// carry it, not rounded cards; colour lives on the title only, cycling
// red/blue/green.
const PROGRAMS = [
  { title: "Workshops", when: "Biweekly", line: "Technical and creative sessions" },
  { title: "Build nights", when: "Weekly", line: "Work on projects with other students" },
  { title: "Tech talks", when: "Monthly", line: "Students, alumni, and industry speakers" },
  { title: "Career prep", when: "Fall + winter", line: "Resumes, recruiting, and interview prep" },
  { title: "Socials", when: "All year", line: "Meet people outside of building" },
  { title: "Networking events", when: "Ongoing", line: "Meet alumni, founders, and engineers in the industry" },
];

// One unique color per item now — six colors for six items, no repeats.
const TONES = [
  "var(--g-red)",
  "var(--g-blue)",
  "var(--g-green)",
  "var(--g-violet)",
  "var(--g-orange)",
  "var(--g-pop)",
];

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-20 bg-white">
      <div className="g-wrap pt-16 lg:pt-20">
        <Reveal y={22}>
          <h2 className="g-h2">What do we do?</h2>
        </Reveal>
      </div>

      {/* Flagship event — the hero of this section, not one item among
          several. The one place colour is a full fill on purpose. */}
      <Reveal y={26} delay={0.05}>
        <div className="g-ground-red my-0 py-10 lg:py-12">
          <div className="g-wrap">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <span className="g-label" style={{ color: "rgba(255,255,255,.7)" }}>
                  Flagship event
                </span>
                <h3
                  className="mt-4 font-[family-name:var(--font-archivo)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-white"
                  style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.4rem)" }}
                >
                  Hack<span style={{ color: "var(--g-sand)" }}>@</span>Davidson
                  <br />
                  2027
                </h3>
                <p
                  className="mt-4 max-w-[38ch] text-[0.95rem] leading-snug"
                  style={{ color: "rgba(255,255,255,.8)" }}
                >
                  48 hours every spring — our biggest event of the year.
                </p>
                <Link href="https://2027.hackatdavidson.com" className="g-btn g-btn-invert mt-8">
                  Visit the event site
                  <Icon icon="ph:arrow-right-bold" width="16" height="16" aria-hidden />
                </Link>
              </div>
              <div className="overflow-hidden rounded-[var(--g-r-lg)]">
                <Frame dark ratio="16 / 10" icon="ph:confetti" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="g-wrap pb-14 pt-10 lg:pb-16 lg:pt-12">
        <Reveal y={14} delay={0.03}>
          <span
            className="g-label"
            style={{ color: "var(--g-red)", fontSize: "0.8rem" }}
          >
            Year-round
          </span>
        </Reveal>
        <div
          className="mt-4 grid grid-cols-1 border-l border-t sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderColor: "var(--g-rule)" }}
        >
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} y={16} delay={0.04 * i}>
              <div
                className="h-full border-b border-r p-6 lg:p-7"
                style={{ borderColor: "var(--g-rule)" }}
              >
                <h3 className="g-h3 text-[1.05rem]" style={{ color: TONES[i % TONES.length] }}>
                  {p.title}
                </h3>
                <span className="g-label mt-3 block" style={{ color: "var(--g-taupe)" }}>
                  {p.when}
                </span>
                <p
                  className="mt-1.5 text-[0.9rem] leading-snug"
                  style={{ color: "var(--g-muted)" }}
                >
                  {p.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
