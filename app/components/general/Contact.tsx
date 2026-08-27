"use client";

import { Icon } from "@iconify/react";
import Reveal from "../Reveal";
import Wash from "./Wash";

export default function Contact() {
  return (
    <section
      id="contact"
      className="g-ground-red relative scroll-mt-20 overflow-hidden rounded-t-[var(--g-r-xl)]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Wash size={720} color="rgba(255,255,255,.18)" className="left-[-16%] top-1/2 -translate-y-1/2" />
        <Wash size={520} color="rgba(255,255,255,.14)" className="right-[-10%] bottom-[-30%]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal y={24}>
          <span
            className="g-pill"
            style={{ background: "rgba(255,255,255,.2)", color: "#fff" }}
          >
            <Icon icon="ph:hand-waving-fill" width="13" height="13" aria-hidden />
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
            <Icon icon="ph:arrow-up-right-bold" width="16" height="16" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
