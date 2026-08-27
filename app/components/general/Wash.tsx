"use client";

/** Soft colour wash. Adds life to a section without drawing an object. */
export default function Wash({
  className = "",
  color = "rgba(30,79,216,.10)",
  size = 620,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at center, ${color}, transparent 68%)`,
      }}
    />
  );
}
