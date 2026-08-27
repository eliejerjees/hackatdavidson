"use client";

import Reveal from "../Reveal";
import { Frame } from "./Placeholders";

// Pictures only. Rounded, edge to edge, a couple tipped for life.
const SHOTS = [
  { icon: "ph:users", span: "col-span-2 row-span-2", tilt: -0.6 },
  { icon: "ph:chalkboard" },
  { icon: "ph:code", tilt: 1 },
  { icon: "ph:pizza", tilt: -1 },
  { icon: "ph:presentation" },
  { icon: "ph:notebook", span: "col-span-2" },
  { icon: "ph:medal" },
  { icon: "ph:microphone-stage", tilt: 0.8 },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-white px-3 py-3 sm:px-4 sm:py-4">
      <Reveal y={20}>
        <div className="grid auto-rows-[clamp(100px,13vw,196px)] grid-cols-4 gap-3 sm:gap-4">
          {SHOTS.map((s, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-[var(--g-r-lg)] ${s.span ?? ""}`}
              style={s.tilt ? { transform: `rotate(${s.tilt}deg)` } : undefined}
            >
              <Frame fill icon={s.icon} className="!rounded-none" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
