"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Reveal from "../Reveal";
import Wash from "./Wash";

/**
 * Real projects from Hack@Davidson 2026, pulled from event photos. Only
 * AcoustiCare has a description sourced from an actual on-screen slide —
 * the rest are name + photo only until we get real writeups from the teams.
 */
const PROJECTS = [
  {
    name: "AcoustiCare",
    img: "/assets/projects/acousticare.jpg",
    blurb:
      "Turns environmental instability and communication breakdown into a live Surgical Risk Index — real-time situational awareness during rising instability, instead of reacting after errors occur.",
  },
  {
    name: "Optimus",
    img: "/assets/projects/optimus.jpg",
    blurb: null,
  },
  {
    name: "ThreatSight",
    img: "/assets/projects/threatsight.jpg",
    blurb: null,
  },
  {
    name: "CEV's Benchmark",
    img: "/assets/projects/cevs-benchmark.jpg",
    blurb: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Wash size={560} color="rgba(30,79,216,.10)" className="right-[-12%] top-[-10%]" />
        <Wash size={460} color="rgba(212,33,33,.08)" className="left-[-14%] bottom-[-6%]" />
      </div>

      <div className="g-wrap-wide relative py-20 lg:py-24">
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
              <div className="g-tile h-full overflow-hidden bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={`${p.name}, a project from Hack@Davidson`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="g-h3 text-[0.98rem]">{p.name}</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-snug" style={{ color: "var(--g-muted)" }}>
                    {p.blurb ?? "Full writeup coming soon."}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
