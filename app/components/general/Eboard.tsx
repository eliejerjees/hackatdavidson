"use client";

import { Icon } from "@iconify/react";
import Reveal from "../Reveal";
import { Frame } from "./Placeholders";
import Wash from "./Wash";

type Member = { name: string; role?: string; linkedin?: string };

/**
 * The 2027 board, one flat list. Roles left undefined render as "Role TBD" —
 * fill in `role` and the placeholder styling disappears on its own.
 * LinkedIn URLs are the ones already public on hackatdavidson.com.
 */
const MEMBERS: Member[] = [
  {
    name: "Tanaka Makoni",
    role: "Co-President",
    linkedin: "https://www.linkedin.com/in/tanaka-makoni-b415a8268/",
  },
  { name: "Elie Jerjees", role: "Co-President" },
  {
    name: "Alp Niksarli",
    role: "Advisor",
    linkedin: "https://www.linkedin.com/in/alpniksarli/",
  },
  {
    name: "Gopesh Baheti",
    role: "Advisor",
    linkedin: "https://www.linkedin.com/in/gobaheti/",
  },
  {
    name: "Murtaza Nikzad",
    role: "Advisor",
    linkedin: "https://www.linkedin.com/in/murtaza-nikzad-877722158/",
  },
  { name: "Arnav Biyani" },
  { name: "Delila Cruz" },
  { name: "Julia Gelina" },
  {
    name: "Julia Holt",
    linkedin: "https://www.linkedin.com/in/julia-holt-1a2343334/",
  },
  { name: "Jonathan Arenas" },
  { name: "Javier Sanchez" },
  { name: "Jennet Merdanovna" },
  { name: "Melissa Mugengano" },
  {
    name: "Tenzing Dhendup Dorji",
    linkedin: "https://www.linkedin.com/in/tenzing-dhendup-dorji/",
  },
  { name: "Yahya Sheikh" },
];

/** Colour carries the hierarchy now that the group headers are gone. */
function roleTone(role?: string) {
  if (!role) return "var(--g-muted)";
  if (role === "Advisor") return "var(--g-green)";
  if (/President/.test(role)) return "var(--g-red)";
  return "var(--g-blue)";
}

export default function Eboard() {
  return (
    <section id="team" className="relative scroll-mt-20 overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Wash size={560} color="rgba(212,33,33,.10)" className="left-[-14%] top-[4%]" />
        <Wash size={460} color="rgba(30,79,216,.10)" className="right-[-12%] bottom-[8%]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal y={22}>
          <h2 className="g-h2">Our people</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-11 sm:grid-cols-3 lg:grid-cols-5">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} y={18} delay={0.02 * i}>
              <div className="group">
                {/* wrapper stays upright so the badge doesn't tilt with the photo */}
                <div className="relative">
                  <div
                    className="overflow-hidden rounded-[var(--g-r-lg)] transition-transform duration-300 group-hover:-translate-y-1.5"
                    style={{ transform: `rotate(${i % 2 ? 1 : -1}deg)` }}
                  >
                    <Frame ratio="4 / 5" icon="ph:user" className="!rounded-none" />
                  </div>

                  {m.linkedin ? (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${m.name} on LinkedIn`}
                      className="absolute -bottom-2 -right-1.5 grid h-9 w-9 place-items-center rounded-full text-white shadow-md transition-transform hover:scale-110"
                      style={{ background: "var(--g-red)" }}
                    >
                      <Icon icon="ph:linkedin-logo-bold" width="17" height="17" aria-hidden />
                    </a>
                  ) : null}
                </div>

                <h3 className="g-h3 mt-5 text-[0.98rem] leading-tight">{m.name}</h3>
                <p
                  className="mt-1 text-[0.85rem] leading-snug"
                  style={{
                    color: roleTone(m.role),
                    fontWeight: m.role ? 500 : 400,
                    opacity: m.role ? 1 : 0.6,
                  }}
                >
                  {m.role ?? "Role TBD"}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
