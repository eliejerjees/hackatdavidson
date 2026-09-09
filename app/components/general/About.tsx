"use client";

import Image from "next/image";
import Reveal from "../Reveal";

// One horizontal strip, three columns — not three colored boxes. The accent
// colour lives on the heading text only; everything else stays neutral ink
// on white, so colour reads as a system, not a fill.
const COLUMNS = [
  {
    n: "01",
    title: "Meet people",
    points: ["Every major welcome", "No experience needed", "Meet weekly"],
  },
  {
    n: "02",
    title: "Build things",
    points: ["Workshops and build nights", "Learn by doing", "Ship real projects"],
  },
  {
    n: "03",
    title: "Get involved",
    points: ["Free to join", "Mentorship available", "Career building"],
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white">
      <div className="g-wrap-wide py-16 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal y={24}>
            <div>
              <h2 className="g-h2 max-w-[16ch]">Who are we?</h2>
              <p className="g-lead mt-5 max-w-[38ch]" style={{ lineHeight: 1.5 }}>
                The largest student-run tech club at Davidson College. We
                throw the college&apos;s annual hackathon, plus workshops and
                build nights all year.{" "}
                <span className="font-semibold" style={{ color: "var(--g-red)" }}>
                  Free, and open to anyone.
                </span>
              </p>
            </div>
          </Reveal>

          {/* Just the photo. No sticker, no badge — let it breathe. */}
          <Reveal y={26} delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--g-r-xl)] shadow-[0_30px_60px_-34px_rgba(16,18,22,.45)]">
              <Image
                src="/assets/about/club-photo.jpg"
                alt="Hack@Davidson members together after a hackathon"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* One long strip, split into three — editorial, not component-library. */}
        <Reveal y={20} delay={0.05}>
          <div
            className="mt-12 grid grid-cols-1 border-t sm:grid-cols-3"
            style={{ borderColor: "var(--g-rule)" }}
          >
            {COLUMNS.map((c, i) => (
              <div
                key={c.title}
                className="border-b py-8 sm:py-9"
                style={{
                  borderColor: "var(--g-rule)",
                  borderLeft: i > 0 ? "1px solid var(--g-rule)" : undefined,
                  paddingLeft: i > 0 ? "clamp(20px, 3vw, 40px)" : 0,
                  paddingRight: "clamp(20px, 3vw, 40px)",
                }}
              >
                <span
                  className="font-[family-name:var(--font-archivo)] text-[0.8rem] font-black"
                  style={{ color: "var(--g-muted)", opacity: 0.5 }}
                >
                  {c.n}
                </span>
                <h3
                  className="g-h3 mt-2 text-[1.15rem]"
                  style={{ color: "var(--g-red)" }}
                >
                  {c.title}
                </h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {c.points.map((point) => (
                    <li
                      key={point}
                      className="text-[0.92rem] leading-snug"
                      style={{ color: "var(--g-muted)" }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
