"use client";

import Link from "next/link";
import Reveal from "../Reveal";
import { Frame } from "./Placeholders";

export default function Sponsors() {
  return (
    <section id="sponsors" className="g-ground-cool scroll-mt-20 rounded-[var(--g-r-xl)]">
      <div className="g-wrap py-16 lg:py-20">
        <Reveal y={22}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="g-h2">Sponsors</h2>
            <Link href="/sponsor" className="g-btn g-btn-solid">
              Become a sponsor
            </Link>
          </div>
        </Reveal>

        <Reveal y={20} delay={0.06}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="g-tile g-tile-lift overflow-hidden bg-white p-3"
              >
                <Frame ratio="16 / 9" icon="ph:placeholder" className="!border-0 !bg-transparent" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
