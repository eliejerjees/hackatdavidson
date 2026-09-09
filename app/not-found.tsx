import type { Metadata } from "next";
import Link from "next/link";
import SandTopography from "./components/general/SandTopography";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="site-general">
      <div
        className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 text-center"
        style={{ background: "var(--g-red)" }}
      >
        {/* --- The sand: procedural contours, pushed by the cursor --- */}
        <SandTopography className="pointer-events-none absolute inset-0 h-full w-full" />

        {/* Warm centre so the text always has a ground */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(46% 40% at 50% 46%, rgba(212,33,33,.72), transparent 72%)",
          }}
        />

        <a
          href="/"
          aria-label="Hack@Davidson"
          className="absolute left-6 top-7 z-10 flex items-center sm:left-10 sm:top-7"
        >
          <span
            className="grid h-10 w-10 place-items-center border-2 font-[family-name:var(--font-archivo)] text-[0.72rem] font-black text-white"
            style={{ borderColor: "rgba(255,255,255,.7)" }}
          >
            H@D
          </span>
        </a>

        <div className="relative z-10">
          <h1
            className="font-[family-name:var(--font-archivo)] font-extrabold uppercase text-white"
            style={{
              fontSize: "clamp(4rem, 20vw, 13rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
            }}
          >
            404
          </h1>
          <p
            className="mt-4 text-[1.05rem]"
            style={{ color: "rgba(255,255,255,.85)" }}
          >
            This page doesn&apos;t exist. Let&apos;s get you back.
          </p>
          <Link href="/" className="g-btn g-btn-invert mt-8">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
