import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SiteHeader from "../components/general/SiteHeader";
import SiteFooter from "../components/general/SiteFooter";
import SandTopography from "../components/general/SandTopography";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Sponsor Hack@Davidson",
  description:
    "Partner with Hack@Davidson, Davidson College's largest student-run tech club. See our sponsorship packages and benefits for Hack@Davidson 2027.",
};

// Sourced from the Hack@Davidson Sponsorship Handbook. Keep dollar amounts
// and benefit wording matched to that document — this page replaces it.
const TIERS = [
  {
    name: "Bronze",
    price: "$1,000",
    benefits: [
      "Logo placement on our website",
      "A shout-out on our social media",
      "Access to hacker profiles",
    ],
  },
  {
    name: "Silver",
    price: "$3,000",
    benefits: ["Premium booth space at the event", "Logo on the event banner"],
  },
  {
    name: "Gold",
    price: "$10,000",
    benefits: [
      "A keynote speaking opportunity",
      "Prominent logo placement throughout the venue and materials",
      "Access to exclusive API features",
      "Judge nominations for project awards",
    ],
  },
];

const REASONS = [
  {
    label: "Recruiting",
    line: "Build a recruiting pipeline with Davidson's most driven builders, from logo placement to on-site conversations, before they're on the job market.",
  },
  {
    label: "Marketing",
    line: "Reach our community online and in person, from a social media shout-out to prominent event-day branding.",
  },
  {
    label: "Technology access",
    line: "Get closer to what hackers are building, with access to hacker profiles and technical integrations.",
  },
  {
    label: "Special benefits",
    line: "Judge nominations and other perks reserved for our top-tier partners.",
  },
];

const GIFT_FORM_URL = "https://community.davidson.edu/gift-form";

// Verbatim from the Davidson online giving instructions — the fund name has to
// be typed exactly for the gift to reach us.
const DONATE_STEPS: { id: string; body: ReactNode }[] = [
  {
    id: "form",
    body: (
      <>
        Go to{" "}
        <a
          href={GIFT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline decoration-2 underline-offset-[3px]"
          style={{ color: "var(--g-red)" }}
        >
          community.davidson.edu/gift-form
        </a>
        .
      </>
    ),
  },
  {
    id: "fund",
    body: (
      <>
        Select <strong style={{ color: "var(--g-ink)" }}>&ldquo;Other&rdquo;</strong> and type in{" "}
        <strong style={{ color: "var(--g-ink)" }}>
          &ldquo;Student Activities Office &ndash; Hack@Davidson&rdquo;
        </strong>
        .
      </>
    ),
  },
  {
    id: "amount",
    body: (
      <>
        Add to cart and enter the amount &mdash; e.g.{" "}
        <strong style={{ color: "var(--g-ink)" }}>$1,000</strong> for Bronze.
      </>
    ),
  },
  { id: "affiliation", body: <>Select your affiliation, and continue.</> },
  { id: "checkout", body: <>Check out.</> },
];

const PERKS = [
  {
    icon: "ph:globe-bold",
    name: "Logo on website",
    line: "Your logo appears prominently on our website.",
  },
  {
    icon: "ph:megaphone-bold",
    name: "Social media shout-out",
    line: "A dedicated shout-out to our audience during the event.",
  },
  {
    icon: "ph:storefront-bold",
    name: "Premium booth",
    line: "Premium booth space at the event to engage participants.",
  },
  {
    icon: "ph:flag-banner-fold-bold",
    name: "Event banner",
    line: "Your logo featured on the event banner.",
  },
  {
    icon: "ph:microphone-stage-bold",
    name: "Keynote opportunity",
    line: "A keynote speaking slot to share your expertise.",
  },
  {
    icon: "ph:identification-card-bold",
    name: "Hacker profiles",
    line: "Exclusive access to detailed hacker profiles.",
  },
  {
    icon: "ph:wifi-high-bold",
    name: "Dedicated Wi-Fi",
    line: "Reliable, dedicated Wi-Fi access throughout the event.",
  },
  {
    icon: "ph:plugs-connected-bold",
    name: "Exclusive API access",
    line: "Special access to our exclusive API integrations.",
  },
  {
    icon: "ph:gavel-bold",
    name: "Judge nominations",
    line: "A say in nominating judges for the hackathon.",
  },
  {
    icon: "ph:chalkboard-teacher-bold",
    name: "Host a workshop",
    line: "The opportunity to host a workshop during the event.",
  },
  {
    icon: "ph:eye-bold",
    name: "Brand visibility",
    line: "Enhanced visibility among tech-savvy participants.",
  },
];

export default function SponsorPage() {
  return (
    <div className="site-general" id="top">
      <SiteHeader />

      <main>
        {/* --- Intro --- */}
        <div
          className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-20 lg:py-28"
          style={{ background: "var(--g-red)" }}
        >
          <SandTopography className="pointer-events-none absolute inset-0 h-full w-full" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(46% 40% at 50% 46%, rgba(212,33,33,.72), transparent 72%)",
            }}
          />

          <Link
            href="/"
            aria-label="Back to home"
            className="absolute left-6 top-7 z-10 flex items-center sm:left-10 sm:top-7"
          >
            <Icon icon="ph:at-bold" width="30" height="30" style={{ color: "#ffffff" }} aria-hidden />
          </Link>

          <div className="g-wrap relative z-10">
            <Reveal y={22}>
              <span className="g-label" style={{ color: "rgba(255,255,255,.7)" }}>
                Sponsorship
              </span>
              <h1 className="g-h1 mt-4 max-w-[18ch] text-white">
                Partner with Hack@Davidson
              </h1>
              <p
                className="mt-5 max-w-[52ch] text-[1.05rem] leading-relaxed"
                style={{ color: "rgba(255,255,255,.85)" }}
              >
                Davidson College&apos;s largest student-run tech club runs the
                college&apos;s annual hackathon, plus workshops and build
                nights all year. Hack@Davidson 2027 is our next hackathon,
                coming this February — and a direct line to the students
                you&apos;ll want on your team before they&apos;re on the job
                market.
              </p>
              <div className="mt-8">
                <a href="#tiers" className="g-btn g-btn-invert">
                  Become a sponsor
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* --- Why sponsor --- */}
        <section className="bg-white">
          <div className="g-wrap py-16 lg:py-20">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <Reveal y={22}>
                <h2 className="g-h2 max-w-[16ch]">Why sponsor us?</h2>
                <p
                  className="mt-3 text-[0.95rem] font-semibold"
                  style={{ color: "var(--g-red)" }}
                >
                  More than a logo.
                </p>
                <p className="g-lead mt-5 max-w-[46ch]">
                  Every February, Davidson&apos;s most driven engineers,
                  designers, and builders show up to ship something in one
                  weekend. Sponsoring puts your brand and your recruiters
                  directly in front of that talent, before it&apos;s on
                  anyone else&apos;s radar.
                </p>
              </Reveal>

              <Reveal y={22} delay={0.06}>
                <div className="border-t" style={{ borderColor: "var(--g-rule)" }}>
                  {REASONS.map((r) => (
                    <div
                      key={r.label}
                      className="border-b py-5"
                      style={{ borderColor: "var(--g-rule)" }}
                    >
                      <h3 className="g-h3 text-[1rem]" style={{ color: "var(--g-red)" }}>
                        {r.label}
                      </h3>
                      <p
                        className="mt-1.5 text-[0.92rem] leading-snug"
                        style={{ color: "var(--g-muted)" }}
                      >
                        {r.line}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal y={20} delay={0.1}>
              <div className="relative mt-14 aspect-[3/2] overflow-hidden rounded-[var(--g-r-lg)] shadow-[0_30px_60px_-34px_rgba(16,18,22,.35)] sm:aspect-[21/9]">
                <Image
                  src="/assets/gallery/06-wide.jpg"
                  alt="The full group on stage at closing ceremony"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* --- Tiers + how to give, together: see the packages, then act --- */}
        <section id="tiers" className="scroll-mt-20 bg-white">
          <div className="g-wrap pb-16 lg:pb-20">
            <Reveal y={22}>
              <span className="g-label" style={{ color: "var(--g-red)" }}>
                Packages
              </span>
              <h2 className="g-h2 mt-3">Sponsorship tiers</h2>
            </Reveal>

            <div
              className="mt-10 overflow-hidden rounded-[var(--g-r-lg)] border"
              style={{ borderColor: "var(--g-rule)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3">
              {TIERS.map((tier, i) => (
                <Reveal key={tier.name} y={20} delay={0.05 * i}>
                  <div
                    className={`flex h-full flex-col border-b p-7 lg:p-9 ${i < TIERS.length - 1 ? "sm:border-r" : ""}`}
                    style={{ borderColor: "var(--g-rule)" }}
                  >
                    <span className="g-label" style={{ color: "var(--g-taupe)" }}>
                      {tier.name}
                    </span>
                    <div
                      className="mt-3 font-[family-name:var(--font-caslon)] font-bold"
                      style={{ fontSize: "clamp(1.9rem, 2.6vw, 2.4rem)", color: "var(--g-ink)" }}
                    >
                      {tier.price}
                    </div>

                    <ul className="mt-6 flex flex-1 flex-col gap-3">
                      {tier.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[0.92rem] leading-snug"
                          style={{ color: "var(--g-muted)" }}
                        >
                          <Icon
                            icon="ph:check-bold"
                            width="15"
                            height="15"
                            className="mt-1 shrink-0"
                            style={{ color: "var(--g-red)" }}
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
              </div>

              <div
                id="donate"
                className="grid scroll-mt-20 items-start gap-12 p-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-12"
              >
              <Reveal y={22}>
                <span className="g-label" style={{ color: "var(--g-red)" }}>
                  How to pay
                </span>
                <h2 className="g-h2 mt-3 max-w-[16ch]">
                  How to sponsor us
                </h2>
                <p className="g-lead mt-5 max-w-[42ch]">
                  There&apos;s no invoice or contract to sign — every package
                  above is paid through Davidson College&apos;s secure giving
                  form, so your sponsorship lands directly in the Student
                  Activities Office fund behind Hack@Davidson.
                </p>
                <a
                  href={GIFT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="g-btn g-btn-solid mt-8"
                >
                  Open the gift form
                  <Icon icon="ph:arrow-up-right-bold" width="14" height="14" aria-hidden />
                </a>
              </Reveal>

              <Reveal y={22} delay={0.06}>
                <ol>
                  {DONATE_STEPS.map((step, i) => (
                    <li
                      key={step.id}
                      className="flex items-start gap-4 border-b py-4"
                      style={{ borderColor: "var(--g-rule)" }}
                    >
                      <span
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[0.78rem] font-bold"
                        style={{ background: "var(--g-red-soft)", color: "var(--g-red)" }}
                      >
                        {i + 1}
                      </span>
                      <span
                        className="pt-0.5 text-[0.95rem] leading-snug"
                        style={{ color: "var(--g-muted)" }}
                      >
                        {step.body}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-[0.85rem]" style={{ color: "var(--g-muted)" }}>
                  Questions about the form, or need an invoice instead? Email{" "}
                  <a
                    href="mailto:hack@davidson.edu"
                    className="font-semibold underline decoration-2 underline-offset-[3px]"
                    style={{ color: "var(--g-red)" }}
                  >
                    hack@davidson.edu
                  </a>
                  .
                </p>
              </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* --- Photo break --- */}
        <section className="bg-white">
          <div className="g-wrap pb-16 lg:pb-20">
            <Reveal y={20}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--g-r-lg)]">
                <Image
                  src="/assets/gallery/extra-03.jpg"
                  alt="A team celebrating with the crowd cheering behind them"
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* --- Full perks reference --- */}
        <section className="g-ground-cool">
          <div className="g-wrap py-16 lg:py-20">
            <Reveal y={22}>
              <span className="g-label" style={{ color: "var(--g-red)" }}>
                Reference
              </span>
              <h2 className="g-h2 mt-3">Every perk, explained</h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {PERKS.map((p, i) => (
                <Reveal key={p.name} y={16} delay={0.02 * i}>
                  <div className="flex items-start gap-3.5">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
                      style={{ background: "var(--g-red-soft)", color: "var(--g-red)" }}
                    >
                      <Icon icon={p.icon} width="18" height="18" aria-hidden />
                    </span>
                    <div>
                      <h3 className="g-h3 text-[0.95rem]">{p.name}</h3>
                      <p
                        className="mt-1 text-[0.88rem] leading-snug"
                        style={{ color: "var(--g-muted)" }}
                      >
                        {p.line}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact --- */}
        <section
          id="contact"
          className="g-ground-red scroll-mt-20 overflow-hidden rounded-t-[var(--g-r-xl)]"
        >
          <div className="g-wrap py-16 text-center lg:py-20">
            <Reveal y={24}>
              <span className="g-label" style={{ color: "rgba(255,255,255,.7)" }}>
                Ready to sponsor?
              </span>
              <h2 className="g-h2 mx-auto mt-6 max-w-[22ch]">
                Let&apos;s build Hack@Davidson together.
              </h2>
              <p className="mt-5 text-[1.05rem] text-white/80">
                Ready to pay? Every package is funded through Davidson&apos;s
                giving form above. Have questions first, or need an invoice?
              </p>
              <a
                href="mailto:hack@davidson.edu"
                className="g-btn mt-10 !bg-white !px-8 !py-4 !text-[0.9rem] !text-[color:var(--g-red)] transition-transform hover:-translate-y-1"
              >
                hack@davidson.edu
              </a>
              <p className="mt-6 text-[0.9rem] text-white/80">
                Or{" "}
                <a
                  href="#donate"
                  className="font-semibold text-white underline decoration-2 underline-offset-[5px]"
                >
                  jump straight to the giving form
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
