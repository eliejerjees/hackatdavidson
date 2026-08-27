"use client";

import { Icon } from "@iconify/react";

/**
 * Every visual asset on this page is a labeled slot, not a real image.
 * Drop files in /public/assets and swap <Frame> for next/image when ready.
 */
export function Frame({
  label,
  hint,
  ratio = "4 / 3",
  fill = false,
  dark = false,
  icon = "ph:image",
  className = "",
}: {
  label?: string;
  hint?: string;
  ratio?: string;
  /** Stretch to the grid cell instead of holding an aspect ratio. */
  fill?: boolean;
  dark?: boolean;
  icon?: string;
  className?: string;
}) {
  return (
    <div
      className={`g-frame ${fill ? "h-full w-full" : ""} ${
        dark ? "g-frame-dark" : ""
      } ${className}`}
      style={fill ? undefined : { aspectRatio: ratio }}
      role="img"
      aria-label={label ? `Placeholder: ${label}` : "Photo placeholder"}
    >
      <div className="flex flex-col items-center gap-2 px-3">
        <Icon icon={icon} width="26" height="26" aria-hidden />
        {label ? <span className="g-frame-note">{label}</span> : null}
        {hint ? (
          <span className="g-frame-note opacity-60">{hint}</span>
        ) : null}
      </div>
    </div>
  );
}

/** Placeholder wordmark. Swap for the real logo file once it exists. */
export function LogoMark({
  size = 36,
  invert = false,
}: {
  size?: number;
  invert?: boolean;
}) {
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-[9px] font-[family-name:var(--font-archivo)] font-black leading-none"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: invert ? "#ffffff" : "var(--g-red, #d42121)",
        color: invert ? "var(--g-red, #d42121)" : "#ffffff",
        letterSpacing: "-0.02em",
      }}
    >
      H@D
    </span>
  );
}

export function Wordmark({ invert = false }: { invert?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={34} invert={invert} />
      <span className="flex flex-col leading-none">
        <span
          className="g-serif text-[1.15rem] font-bold tracking-tight"
          style={{ color: invert ? "#fff" : "var(--g-ink)" }}
        >
          Hack@Davidson
        </span>
        <span
          className="g-label mt-1 text-[0.55rem]"
          style={{ color: invert ? "rgba(255,255,255,.6)" : "var(--g-muted)" }}
        >
          Davidson College
        </span>
      </span>
    </span>
  );
}
