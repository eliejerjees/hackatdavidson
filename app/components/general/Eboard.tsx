"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Reveal from "../Reveal";
import { Frame } from "./Placeholders";

type Category = "president" | "advisor" | "operations" | "brand" | "outreach" | "logistics";

type Member = {
  name: string;
  role?: string;
  category?: Category;
  linkedin?: string;
  photo?: string;
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
    photo: "/assets/eboard/elie-jerjees.png",
  },
  {
    name: "Tanaka Makoni",
    role: "Co-President",
    category: "president",
    linkedin: "https://www.linkedin.com/in/tanaka-makoni-b415a8268/",
    photo: "/assets/eboard/tanaka-makoni.jpeg",
  },
  // Advisors
  {
    name: "Alp Niksarli",
    role: "Advisor",
    category: "advisor",
    linkedin: "https://www.linkedin.com/in/alpniksarli/",
    photo: "/assets/eboard/alp-niksarli.jpg",
  },
  {
    name: "Gopesh Baheti",
    role: "Advisor",
    category: "advisor",
    linkedin: "https://www.linkedin.com/in/gobaheti/",
    photo: "/assets/eboard/funny/goatpesh.jpg",
  },
  {
    name: "Murtaza Nikzad",
    role: "Advisor",
    category: "advisor",
    linkedin: "https://www.linkedin.com/in/murtaza-nikzad-877722158/",
    photo: "/assets/eboard/murtaza-nikzad.jpg",
  },
  // Operations — Secretary, Treasurer, and Finance are all "keeping the
  // org's internal records straight," just different flavors of it.
  {
    name: "Melissa Mugengano",
    role: "Secretary",
    category: "operations",
    linkedin: "https://www.linkedin.com/in/melissa-mugengano/",
  },
  {
    name: "Arnav Biyani",
    role: "Treasurer",
    category: "operations",
    linkedin: "https://www.linkedin.com/in/arnav-biyani/",
    photo: "/assets/eboard/arnav-biyani.jpg",
  },
  {
    name: "Javier Sanchez",
    role: "Finance",
    category: "operations",
    linkedin: "https://www.linkedin.com/in/javierestefanosanchez",
    photo: "/assets/eboard/javier-sanchez.jpg",
  },
  {
    name: "Jennet Ylyasova",
    role: "Finance",
    category: "operations",
    linkedin: "https://www.linkedin.com/in/jennetylyasova/",
    photo: "/assets/eboard/jennet-ylyasova.jpg",
  },
  // Outreach
  {
    name: "Jonathan Arenas",
    role: "Outreach",
    category: "outreach",
    linkedin: "https://www.linkedin.com/in/jonathangarenas/",
  },
  {
    name: "Julia Holt",
    role: "Outreach",
    category: "outreach",
    linkedin: "https://www.linkedin.com/in/julia-holt-1a2343334/",
    photo: "/assets/eboard/julia-holt.jpg",
  },
  {
    name: "Tenzing Dhendup Dorji",
    role: "Outreach",
    category: "outreach",
    linkedin: "https://www.linkedin.com/in/tenzing-dhendup-dorji/",
    photo: "/assets/eboard/tenzing-dorji.jpeg",
  },
  // Logistics
  {
    name: "Julia Gelina",
    role: "Logistics",
    category: "logistics",
    linkedin: "https://www.linkedin.com/in/julia-gelina-86831a321/",
  },
  // Likely logistics, role still undecided
  {
    name: "Adolpho Ramirez",
    category: "logistics",
    linkedin: "https://www.linkedin.com/in/adolpho-ramirez/",
  },
  // Branding + Social Media
  {
    name: "Delila Cruz",
    role: "Branding Lead",
    category: "brand",
    linkedin: "https://www.linkedin.com/in/delila-cruz/",
  },
  {
    name: "Yahya Sheikh",
    role: "Social Media Chair",
    category: "brand",
    linkedin: "https://www.linkedin.com/in/yahya-sheikh-6ba6062a5/",
  },
];

const CATEGORY_ORDER: Category[] = [
  "president",
  "advisor",
  "operations",
  "outreach",
  "logistics",
  "brand",
];

const CATEGORY_LABEL: Record<Category, string> = {
  president: "Presidents",
  advisor: "Advisors",
  operations: "Operations",
  outreach: "Outreach",
  logistics: "Logistics",
  brand: "Branding + Social",
};

function groupMembers(members: Member[]) {
  const groups = CATEGORY_ORDER.map((category) => ({
    label: CATEGORY_LABEL[category],
    members: members.filter((m) => m.category === category),
  })).filter((g) => g.members.length > 0);

  const unassigned = members.filter((m) => !m.category);
  if (unassigned.length > 0) {
    groups.push({ label: "Joining soon", members: unassigned });
  }
  return groups;
}

export default function Eboard() {
  return (
    <section id="team" className="scroll-mt-20 bg-white">
      <div className="g-wrap py-16 lg:py-20">
        <Reveal y={22}>
          <h2 className="g-h2">Our team</h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-10">
          {groupMembers(MEMBERS).map((group, gi) => (
            <div key={group.label}>
              <Reveal y={14} delay={0.03 * gi}>
                <span className="g-label" style={{ color: "var(--g-red)" }}>
                  {group.label}
                </span>
              </Reveal>

              <div className="mt-4 flex flex-wrap gap-5">
                {group.members.map((m, i) => {
                  const photo = m.photo ? (
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="230px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <Frame ratio="4 / 5" icon="ph:user" className="!rounded-none" />
                  );

                  return (
                    <Reveal key={m.name} y={16} delay={0.02 * i}>
                      <div className="group w-[150px] sm:w-[230px]">
                        <div className="relative overflow-hidden rounded-[var(--g-r-lg)]">
                          {m.linkedin ? (
                            <a
                              href={m.linkedin}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${m.name} on LinkedIn`}
                              className="block"
                            >
                              {photo}
                              <span
                                aria-hidden
                                className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-full text-white shadow-md"
                                style={{ background: "var(--g-red)" }}
                              >
                                <Icon icon="ph:linkedin-logo-bold" width="16" height="16" />
                              </span>
                            </a>
                          ) : (
                            photo
                          )}
                        </div>

                        <h3 className="g-h3 mt-5 text-[0.98rem] leading-tight">
                          {m.name}
                        </h3>
                        <p
                          className="mt-1 text-[0.85rem] leading-snug"
                          style={{
                            color: m.role ? "var(--g-red)" : "var(--g-muted)",
                            fontWeight: m.role ? 500 : 400,
                            opacity: m.role ? 1 : 0.6,
                          }}
                        >
                          {m.role ?? "Role TBD"}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
