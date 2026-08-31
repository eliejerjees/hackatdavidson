"use client";

import { Icon } from "@iconify/react";
import Reveal from "../Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="g-ground-red scroll-mt-20 overflow-hidden rounded-t-[var(--g-r-xl)]"
    >
      <div className="g-wrap py-16 text-center lg:py-20">
        <Reveal y={24}>
          <span
            className="g-label inline-flex items-center gap-2"
            style={{ color: "rgba(255,255,255,.7)" }}
          >
            <Icon icon="ph:hand-waving-fill" width="14" height="14" aria-hidden />
            Reach out
          </span>
          <h2 className="g-h2 mx-auto mt-6 max-w-[20ch]">Say hi.</h2>
          <p className="mt-5 text-[1.05rem] text-white/80">
            Sponsoring, mentoring, or just curious.
          </p>
          <a
            href="mailto:hack@davidson.edu"
            className="g-btn mt-10 !bg-white !px-8 !py-4 !text-[0.9rem] !text-[color:var(--g-red)] transition-transform hover:-translate-y-1"
          >
            hack@davidson.edu
          </a>
        </Reveal>
      </div>
    </section>
  );
}
