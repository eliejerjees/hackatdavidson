"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Shot = { src: string; alt: string };

// The curated set — hand-picked for variety (mixed gender, mixed moments:
// building, presenting, awards, closing crowd). THIS is the set to go back
// to if the bulk-added photos below don't work out; nothing here has
// changed since it was picked.
const CURATED: Shot[] = [
  { src: "/assets/gallery/01-big.jpg", alt: "A team talking through their project with a mentor" },
  { src: "/assets/gallery/02.jpg", alt: "Two hackers presenting their project on a laptop" },
  { src: "/assets/gallery/03.jpg", alt: "A team of three smiling next to their project" },
  { src: "/assets/gallery/04.jpg", alt: "Three hackers giving a thumbs up at their laptops" },
  { src: "/assets/gallery/05.jpg", alt: "A host speaking to the room at closing ceremony" },
  { src: "/assets/gallery/06-wide.jpg", alt: "The full group on stage at closing ceremony" },
  { src: "/assets/gallery/07.jpg", alt: "A team celebrating after winning an award" },
  { src: "/assets/gallery/08.jpg", alt: "A group of students collaborating around a laptop" },
  { src: "/assets/gallery/extra-01.jpg", alt: "A mentor talking through a project with two students" },
  { src: "/assets/gallery/extra-02.jpg", alt: "A team presenting their healthcare project, holding a stuffed bear" },
  { src: "/assets/gallery/extra-03.jpg", alt: "A team celebrating with the crowd cheering behind them" },
  { src: "/assets/gallery/extra-04.jpg", alt: "Three students in front of the Hurt Hub mission wall" },
  { src: "/assets/gallery/extra-05.jpg", alt: "A team debating over their laptop mid-build" },
];

// Bulk-added, unreviewed — every other photo from the event folder, dropped
// in just to fill out the rows and see how a fuller loop feels. Not curated
// for content or crop. Safe to delete this whole array (and the
// bonus-*.jpg files in /public/assets/gallery) to go back to CURATED only.
const BONUS: Shot[] = Array.from({ length: 42 }, (_, i) => ({
  src: `/assets/gallery/bonus-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: "A photo from Hack@Davidson",
}));

const ALL_SHOTS: Shot[] = [...CURATED, ...BONUS];

/** `count` tiles starting at `offset`, wrapping and repeating as needed. */
function pickRow(offset: number, count: number): Shot[] {
  return Array.from(
    { length: count },
    (_, i) => ALL_SHOTS[(offset + i) % ALL_SHOTS.length],
  );
}

// Two horizontal rows, alternating direction. Split the pool in half so
// between the two rows every photo shows up somewhere, none repeated.
const HALF = Math.ceil(ALL_SHOTS.length / 2);
const ROWS: { tiles: Shot[]; duration: number; reverse: boolean }[] = [
  { tiles: pickRow(0, HALF), duration: 62, reverse: false },
  { tiles: pickRow(HALF, ALL_SHOTS.length - HALF), duration: 70, reverse: true },
];

export default function Gallery() {
  const [openAt, setOpenAt] = useState<number | null>(null);

  const openShot = useCallback((shot: Shot) => {
    const i = ALL_SHOTS.indexOf(shot);
    setOpenAt(i === -1 ? 0 : i);
  }, []);

  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-1">
      <div className="flex flex-col gap-1">
        {ROWS.map((row, ri) => (
          <Row key={ri} {...row} onOpen={openShot} />
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

function Row({
  tiles,
  duration,
  reverse,
  onOpen,
}: {
  tiles: Shot[];
  duration: number;
  reverse: boolean;
  onOpen: (shot: Shot) => void;
}) {
  // Rendered twice back-to-back so a 0 -> -50% loop is seamless.
  const sequence = useMemo(() => [tiles, tiles], [tiles]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: "clamp(110px, 15vw, 220px)",
        // A tile straddling the left/right edge gets sliced off mid-photo —
        // fading it out instead of hard-cropping it reads as intentional.
        maskImage:
          "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)",
      }}
    >
      <div
        className="g-lane-track flex h-full w-max"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {sequence.map((half, hi) => (
          <div key={hi} className="flex h-full gap-1">
            {half.map((shot, i) => (
              <button
                key={`${hi}-${i}`}
                type="button"
                onClick={() => onOpen(shot)}
                aria-label={`Open photo: ${shot.alt}`}
                className="group relative aspect-square h-full shrink-0 overflow-hidden"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/25 group-hover:opacity-100"
                >
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full text-white shadow-lg"
                    style={{ background: "var(--g-red)" }}
                  >
                    <Icon icon="ph:corners-out-bold" width="18" height="18" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Lightbox({
  shots,
  index,
  onIndex,
  onClose,
}: {
  shots: Shot[];
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
