"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Reveal from "../Reveal";
import Wash from "./Wash";

/**
 * Real projects from Hack@Davidson 2026. Photos pulled from event photos;
 * Devpost links and blurbs verified by checking each team's actual
 * submission page (not just the project-gallery listing).
 */
const PROJECTS = [
  {
    name: "AcoustiCare",
    img: "/assets/projects/acousticare.jpg",
    devpost: "https://devpost.com/software/acousticare",
    blurb:
      "Turns operating room noise and communication signals into real-time awareness, helping teams recognize rising risk early.",
  },
  {
    name: "Optimus",
    img: "/assets/projects/optimus.jpg",
    devpost: "https://devpost.com/software/optimist-ztvhg7",
    blurb:
      "An all-in-one event planner — manage guests, budgets, tasks, and vendors, and design your venue layout in 2D or 3D.",
  },
  {
    name: "ThreatSight",
    img: "/assets/projects/threatsight.jpg",
    devpost: "https://devpost.com/software/threatsight",
    blurb:
      "An AI-powered SOC that turns raw network traffic and honeypot data into organized, searchable, real-time security intelligence.",
  },
  {
    name: "CEV's Benchmark",
    img: "/assets/projects/cevs-benchmark.jpg",
    devpost: "https://devpost.com/software/cev-s-benchmark",
    blurb:
      "A Godot-built game testing reaction time, time perception, and memory — three human-benchmark mini-games in one consistent art style.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Wash size={560} color="rgba(30,79,216,.10)" className="right-[-12%] top-[-10%]" />
        <Wash size={460} color="rgba(212,33,33,.08)" className="left-[-14%] bottom-[-6%]" />
      </div>

      <div className="g-wrap-wide relative py-16 lg:py-20">
        <Reveal y={22}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="g-h2 max-w-[18ch]">What we&apos;ve built</h2>
            <a
              href="https://hack-davidson.devpost.com/project-gallery"
              target="_blank"
              rel="noreferrer noopener"
              className="g-label inline-flex items-center gap-2"
              style={{ color: "var(--g-red)" }}
            >
              See every project on Devpost
              <Icon icon="ph:arrow-up-right-bold" width="13" height="13" aria-hidden />
            </a>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} y={22} delay={0.06 * i}>
              <a
                href={p.devpost}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${p.name} on Devpost`}
                className="g-tile g-tile-lift block h-full overflow-hidden bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={`${p.name}, a project from Hack@Davidson`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                    unoptimized
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-2 right-2 grid h-7 w-7 place-items-center rounded-full text-white shadow-md"
                    style={{ background: "var(--g-ink)" }}
                  >
                    <Icon icon="ph:arrow-up-right-bold" width="13" height="13" />
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="g-h3 text-[0.98rem]">{p.name}</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-snug" style={{ color: "var(--g-muted)" }}>
                    {p.blurb ?? "Full writeup coming soon."}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
