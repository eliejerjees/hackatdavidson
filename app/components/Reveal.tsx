import type { ReactNode } from "react";

/**
 * Everything renders fully visible at load — no scroll-triggered entrance.
 * Kept as a pass-through (rather than deleting every call site) so we can
 * bring an entrance animation back later without touching every section.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
