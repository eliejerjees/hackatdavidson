"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Reveal from "../Reveal";
import Wash from "./Wash";

const CELLS = [
  {
    n: "01",
    title: "Community",
    ground: "g-ground-red",
    icon: "ph:users-three-bold",
    points: ["Every major welcome", "No experience needed", "Meet every week"],
  },
  {
    n: "02",
    title: "Making",
    ground: "g-ground-blue",
    icon: "ph:hammer-bold",
    points: ["You build, not just watch", "Mentors in the room", "Ship something real"],
  },
  {
    n: "03",
    title: "Access",
    ground: "g-ground-green",
    icon: "ph:door-open-bold",
    points: ["Free to join, always", "Food at every meeting", "Loaner laptops available"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Wash size={640} color="rgba(30,79,216,.13)" className="right-[-14%] top-[-24%]" />
        <Wash size={480} color="rgba(18,160,106,.10)" className="left-[-12%] bottom-[6%]" />
      </div>

      <div className="g-wrap-wide relative py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal y={24}>
            <div>
              <span
                className="g-pill"
                style={{ background: "var(--g-red-soft)", color: "var(--g-red)" }}
              >
                <Icon icon="ph:sparkle-fill" width="12" height="12" aria-hidden />
                Since 2022
              </span>
              <h2 className="g-h2 mt-6 max-w-[16ch]">Who are we?</h2>
              <p className="g-lead mt-6 max-w-[42ch]">
                The largest student-run tech club at Davidson College. We
                throw the college&apos;s annual hackathon, plus workshops and
                build nights all year.{" "}
                <span className="font-semibold" style={{ color: "var(--g-red)" }}>
                  Free, and open to anyone.
                </span>
              </p>
            </div>
          </Reveal>

          {/* photo card, tipped, with a sticker riding the corner */}
          <Reveal y={26} delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--g-r-xl)] shadow-[0_30px_60px_-34px_rgba(16,18,22,.45)]">
                <Image
                  src="/assets/about/club-photo.jpg"
                  alt="Hack@Davidson members together after a hackathon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <span
                className="g-pill absolute -bottom-3 left-5 shadow-lg"
                style={{ background: "var(--g-green)", color: "#fff" }}
              >
                Every major welcome
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {CELLS.map((c, i) => (
            <Reveal key={c.title} y={22} delay={0.07 * i}>
              <div
                className={`${c.ground} g-tile g-tile-lift flex h-full flex-col p-7 sm:p-8`}
                style={{ minHeight: 230 }}
              >
                <span className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-archivo)] text-[2rem] font-black leading-none text-white/45">
                    {c.n}
                  </span>
                  <Icon
                    icon={c.icon}
                    width="22"
                    height="22"
                    className="text-white/70"
                    aria-hidden
                  />
                </span>
                <h3 className="g-h3 mt-auto pt-10">{c.title}</h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {c.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[0.92rem] leading-snug text-white/85"
                    >
                      <Icon
                        icon="ph:check-bold"
                        width="14"
                        height="14"
                        className="mt-1 shrink-0 text-white/60"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
