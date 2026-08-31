"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { LogoMark } from "./Placeholders";

const SOCIALS = [
  {
    icon: "ph:instagram-logo-bold",
    label: "Instagram",
    href: "https://www.instagram.com/hackatdavidson/",
  },
  {
    icon: "ph:linkedin-logo-bold",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hackatdavidson/",
  },
  {
    icon: "ph:discord-logo-bold",
    label: "Discord",
    href: "https://discord.com/invite/jvaPqNssAa",
  },
  {
    icon: "ph:trophy-bold",
    label: "Devpost project gallery",
    href: "https://hack-davidson.devpost.com/project-gallery",
  },
];

export default function SiteFooter() {
  return (
    <footer className="g-ground-ink">
      <div className="g-wrap flex flex-col gap-7 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size={30} invert />
          <span className="g-label text-white">Hack@Davidson</span>
          <Link
            href="https://2027.hackatdavidson.com"
            className="g-label ml-3 hidden sm:inline"
            style={{ color: "rgba(255,255,255,.55)" }}
          >
            2027
          </Link>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="flex items-center gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border text-white transition-colors hover:bg-white hover:text-[color:var(--g-ink)]"
                style={{ borderColor: "rgba(255,255,255,.26)" }}
              >
                <Icon icon={s.icon} width="16" height="16" aria-hidden />
              </a>
            ))}
          </div>

          <p
            className="text-[0.75rem] sm:text-right"
            style={{ color: "rgba(255,255,255,.45)" }}
          >
            © {new Date().getFullYear()} Hack@Davidson · Davidson College ·
            Student-run, not an official college publication.
          </p>
        </div>
      </div>
    </footer>
  );
}
