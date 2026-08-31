"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

// The visible mosaic. Swap any file in /public/assets/gallery to replace a
// shot — the layout (span, big vs. wide) is keyed to slot position, not
// filename.
const GRID = [
  { src: "/assets/gallery/01-big.jpg", alt: "A team talking through their project with a mentor", span: "col-span-2 row-span-2" },
  { src: "/assets/gallery/02.jpg", alt: "Two hackers presenting their project on a laptop" },
  { src: "/assets/gallery/03.jpg", alt: "A team of three smiling next to their project" },
  { src: "/assets/gallery/04.jpg", alt: "Three hackers giving a thumbs up at their laptops" },
  { src: "/assets/gallery/05.jpg", alt: "A host speaking to the room at closing ceremony" },
  { src: "/assets/gallery/06-wide.jpg", alt: "The full group on stage at closing ceremony", span: "col-span-2" },
  { src: "/assets/gallery/07.jpg", alt: "A team celebrating after winning an award" },
  { src: "/assets/gallery/08.jpg", alt: "A group of students collaborating around a laptop" },
];

// Not shown in the mosaic, but part of the same set — reachable by swiping
// past the last grid photo in the viewer.
const EXTRAS = [
  { src: "/assets/gallery/extra-01.jpg", alt: "A mentor talking through a project with two students" },
  { src: "/assets/gallery/extra-02.jpg", alt: "A team presenting their healthcare project, holding a stuffed bear" },
  { src: "/assets/gallery/extra-03.jpg", alt: "A team celebrating with the crowd cheering behind them" },
  { src: "/assets/gallery/extra-04.jpg", alt: "Three students in front of the Hurt Hub mission wall" },
  { src: "/assets/gallery/extra-05.jpg", alt: "A team debating over their laptop mid-build" },
];

const ALL_SHOTS = [...GRID, ...EXTRAS];

export default function Gallery() {
  const [openAt, setOpenAt] = useState<number | null>(null);

  return (
    <section id="gallery" className="scroll-mt-20 bg-white px-3 py-3 sm:px-4 sm:py-4">
      <div className="grid auto-rows-[clamp(100px,13vw,196px)] grid-cols-4 gap-3 sm:gap-4">
        {GRID.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenAt(i)}
            aria-label={`Open photo: ${s.alt}`}
            className={`group relative overflow-hidden rounded-[var(--g-r-lg)] ${s.span ?? ""}`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/25 group-hover:opacity-100"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-[color:var(--g-ink)] shadow-lg">
                <Icon icon="ph:magnifying-glass-plus-bold" width="20" height="20" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {openAt !== null ? (
        <Lightbox
          shots={ALL_SHOTS}
          index={openAt}
          onIndex={setOpenAt}
          onClose={() => setOpenAt(null)}
        />
      ) : null}
    </section>
  );
}

function Lightbox({
  shots,
  index,
  onIndex,
  onClose,
}: {
  shots: typeof ALL_SHOTS;
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const count = shots.length;
  const go = useCallback(
    (delta: number) => onIndex((index + delta + count) % count),
    [index, count, onIndex],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, onClose]);

  const shot = shots[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full text-white transition-colors hover:bg-white/15"
      >
        <Icon icon="ph:x-bold" width="22" height="22" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-white transition-colors hover:bg-white/15 sm:left-5"
      >
        <Icon icon="ph:caret-left-bold" width="24" height="24" />
      </button>

      <div
        className="relative aspect-[4/3] w-full max-w-[min(90vw,1100px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes="90vw"
          className="rounded-[var(--g-r-md)] object-contain"
          priority
          unoptimized
        />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-white transition-colors hover:bg-white/15 sm:right-5"
      >
        <Icon icon="ph:caret-right-bold" width="24" height="24" />
      </button>

      <span className="g-mono absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
        {index + 1} / {count}
      </span>
    </div>
  );
}
