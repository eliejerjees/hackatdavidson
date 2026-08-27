"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Reveal from "../Reveal";
import { Frame } from "./Placeholders";
import Wash from "./Wash";

const PROGRAMS = [
  { icon: "ph:trophy-bold", title: "Annual hackathon", when: "Spring · 48 hours", tone: "red" },
  { icon: "ph:chalkboard-teacher-bold", title: "Workshops", when: "Biweekly", tone: "blue" },
  { icon: "ph:hammer-bold", title: "Build nights", when: "Weekly", tone: "green" },
  { icon: "ph:microphone-bold", title: "Tech talks", when: "Monthly", tone: "blue" },
  { icon: "ph:briefcase-bold", title: "Career prep", when: "Fall + winter", tone: "red" },
  { icon: "ph:pizza-bold", title: "Socials", when: "All year", tone: "green" },
];

const TONE = {
  red: { chip: "var(--g-red)", soft: "var(--g-red-soft)" },
  blue: { chip: "var(--g-blue)", soft: "var(--g-blue-soft)" },
  green: { chip: "var(--g-green)", soft: "var(--g-green-soft)" },
} as const;

export default function Programs() {
  return (
    <section id="programs" className="g-ground-cool scroll-mt-20 rounded-[var(--g-r-xl)]">
      <div className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 lg:py-28">
        <Reveal y={22}>
          <h2 className="g-h2">What do we do?</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => {
            const tone = TONE[p.tone as keyof typeof TONE];
            return (
              <Reveal key={p.title} y={20} delay={0.04 * i}>
                <div className="g-tile g-tile-lift flex h-full items-center gap-4 bg-white p-5 sm:p-6">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-[var(--g-r-md)] text-white"
                    style={{ background: tone.chip }}
                  >
                    <Icon icon={p.icon} width="21" height="21" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="g-h3 block truncate">{p.title}</span>
                    <span
                      className="g-pill mt-2"
                      style={{ background: tone.soft, color: tone.chip }}
                    >
                      {p.when}
                    </span>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Flagship event — one big rounded blue card, not a hard band */}
        <Reveal y={26}>
          <div className="g-ground-blue relative mt-6 overflow-hidden rounded-[var(--g-r-xl)]">
            <Wash size={620} color="rgba(255,255,255,.20)" className="-bottom-64 -left-24" />
            <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
              <div>
                <span
                  className="g-pill"
                  style={{ background: "rgba(255,255,255,.18)", color: "#fff" }}
                >
                  Flagship event
                </span>
                <h3
                  className="mt-6 font-[family-name:var(--font-archivo)] font-black uppercase leading-[0.9] tracking-[-0.035em]"
                  style={{ fontSize: "clamp(2rem, 4.6vw, 3.4rem)" }}
                >
                  Hack@Davidson
                  <br />
                  2027
                </h3>
                <Link href="/2027" className="g-btn g-btn-invert mt-8">
                  Visit the event site
                  <Icon icon="ph:arrow-right-bold" width="16" height="16" aria-hidden />
                </Link>
              </div>
              <div className="overflow-hidden rounded-[var(--g-r-lg)]">
                <Frame dark ratio="3 / 2" icon="ph:confetti" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
