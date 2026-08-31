"use client";

import { Icon } from "@iconify/react";
import Reveal from "../Reveal";
import { Frame } from "./Placeholders";
import Wash from "./Wash";

type Category = "president" | "advisor" | "operations" | "brand" | "outreach" | "logistics";

type Member = { name: string; role?: string; category: Category; linkedin?: string };

/** One color per category — not one per role, since several roles share a
 * category (Secretary/Treasurer/Finance are all "operations", etc). */
const CATEGORY_TONE: Record<Category, string> = {
  president: "var(--g-red)",
  advisor: "var(--g-blue)",
  operations: "var(--g-green)",
  brand: "var(--g-pop)",
  outreach: "var(--g-orange)",
  logistics: "var(--g-violet)",
};

// Grouped by category (leadership first, then in the order the roles were
// defined), alphabetical by first name within each group.
const MEMBERS: Member[] = [
  // Presidents
  {
    name: "Elie Jerjees",
    role: "Co-President",
    category: "president",
    linkedin: "https://www.linkedin.com/in/eliejerjees/",
  },
  {
    name: "Tanaka Makoni",
    role: "Co-President",
    category: "president",
    linkedin: "https://www.linkedin.com/in/tanaka-makoni-b415a8268/",
  },
  // Advisors
  {
    name: "Alp Niksarli",
    role: "Advisor",
    category: "advisor",
    linkedin: "https://www.linkedin.com/in/alpniksarli/",
  },
  {
    name: "Gopesh Baheti",
    role: "Advisor",
    category: "advisor",
    linkedin: "https://www.linkedin.com/in/gobaheti/",
  },
  {
    name: "Murtaza Nikzad",
    role: "Advisor",
    category: "advisor",
    linkedin: "https://www.linkedin.com/in/murtaza-nikzad-877722158/",
  },
  // Operations — Secretary, Treasurer, and Finance are all "keeping the
  // org's internal records straight," just different flavors of it.
  { name: "Arnav Biyani", role: "Treasurer", category: "operations" },
  { name: "Javier Sanchez", role: "Finance", category: "operations" },
  { name: "Jennet Merdanovna", role: "Finance", category: "operations" },
  { name: "Melissa Mugengano", role: "Secretary", category: "operations" },
  // Outreach
  { name: "Jonathan Arenas", role: "Outreach", category: "outreach" },
  {
    name: "Julia Holt",
    role: "Outreach",
    category: "outreach",
    linkedin: "https://www.linkedin.com/in/julia-holt-1a2343334/",
  },
  {
    name: "Tenzing Dhendup Dorji",
    role: "Outreach",
    category: "outreach",
    linkedin: "https://www.linkedin.com/in/tenzing-dhendup-dorji/",
  },
  // Logistics
  { name: "Julia Gelina", role: "Logistics", category: "logistics" },
  // Branding + Social Media
  { name: "Delila Cruz", role: "Branding Lead", category: "brand" },
  { name: "Yahya Sheikh", role: "Social Media Chair", category: "brand" },
];

export default function Eboard() {
  return (
    <section id="team" className="relative scroll-mt-20 overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Wash size={560} color="rgba(212,33,33,.10)" className="left-[-14%] top-[4%]" />
        <Wash size={460} color="rgba(30,79,216,.10)" className="right-[-12%] bottom-[8%]" />
      </div>

      <div className="g-wrap relative py-16 lg:py-20">
        <Reveal y={22}>
          <h2 className="g-h2">Our team</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-11 sm:grid-cols-3 lg:grid-cols-5">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} y={18} delay={0.02 * i}>
              <div className="group">
                <div className="relative">
                  {m.linkedin ? (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${m.name} on LinkedIn`}
                      className="block overflow-hidden rounded-[var(--g-r-lg)] transition-transform duration-300 group-hover:-translate-y-1.5"
                    >
                      <Frame ratio="4 / 5" icon="ph:user" className="!rounded-none" />
                    </a>
                  ) : (
                    <div className="overflow-hidden rounded-[var(--g-r-lg)] transition-transform duration-300 group-hover:-translate-y-1.5">
                      <Frame ratio="4 / 5" icon="ph:user" className="!rounded-none" />
                    </div>
                  )}

                  {m.linkedin ? (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-2 -right-1.5 grid h-9 w-9 place-items-center rounded-full text-white shadow-md transition-transform group-hover:scale-110"
                      style={{ background: "var(--g-red)" }}
                    >
                      <Icon icon="ph:linkedin-logo-bold" width="17" height="17" />
                    </span>
                  ) : null}
                </div>

                <h3 className="g-h3 mt-5 text-[0.98rem] leading-tight">{m.name}</h3>
                <p
                  className="mt-1 text-[0.85rem] leading-snug"
                  style={{
                    color: m.role ? CATEGORY_TONE[m.category] : "var(--g-muted)",
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
