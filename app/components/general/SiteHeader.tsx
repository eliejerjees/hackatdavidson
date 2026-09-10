"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { LogoMark } from "./Placeholders";

// "Become a sponsor" isn't in this list — it already has its own CTA button
// (desktop) and gets appended separately in the mobile menu below.
const NAV = [
  { label: "About", href: "/#about" },
  { label: "What we do", href: "/#programs" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Projects", href: "/#projects" },
  { label: "Team", href: "/#team" },
  { label: "Sponsors", href: "/#sponsors" },
];

export default function SiteHeader() {
  // Nothing sits over the hero — the bar arrives once you scroll past it.
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.8;
      setShown(past);
      if (!past) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {shown ? (
        <motion.header
          initial={{ y: -70 }}
          animate={{ y: 0 }}
          exit={{ y: -70 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-50 border-b"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            borderColor: "var(--g-rule)",
          }}
        >
          <div className="g-wrap grid grid-cols-[auto_1fr_auto] items-center gap-6 py-3 md:grid-cols-[1fr_auto_1fr]">
            <Link href="/#top" className="flex items-center gap-2.5 justify-self-start" aria-label="Back to top">
              <LogoMark size={28} />
              <span className="g-label hidden sm:inline">Hack@Davidson</span>
            </Link>

            <nav className="hidden items-center gap-5 md:flex" aria-label="Main">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="g-label whitespace-nowrap transition-colors hover:text-[color:var(--g-red)]"
                  style={{ color: "var(--g-muted)" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center justify-self-end gap-2.5 md:flex">
              <Link href="/2027" className="g-btn g-btn-outline !px-4 !py-2.5">
                2027
              </Link>
              <Link href="/sponsor" className="g-btn g-btn-solid !px-4 !py-2.5">
                Become a sponsor
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="col-start-3 grid h-9 w-9 shrink-0 place-items-center justify-self-end rounded-[2px] border md:hidden"
              style={{ borderColor: "var(--g-rule)" }}
            >
              <Icon icon={open ? "ph:x" : "ph:list"} width="18" height="18" />
            </button>
          </div>

          {open ? (
            <div
              className="border-t px-5 pb-4 pt-1 md:hidden"
              style={{ borderColor: "var(--g-rule)", background: "#fff" }}
            >
              <nav className="flex flex-col" aria-label="Mobile">
                {[...NAV, { label: "Become a sponsor", href: "/sponsor" }].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="g-label border-b py-3.5"
                    style={{ color: "var(--g-ink)", borderColor: "var(--g-rule)" }}
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  href="/2027"
                  onClick={() => setOpen(false)}
                  className="g-label py-3.5"
                  style={{ color: "var(--g-red)" }}
                >
                  2027 Hackathon
                </Link>
              </nav>
            </div>
          ) : null}
        </motion.header>
      ) : null}
    </AnimatePresence>
  );
}
