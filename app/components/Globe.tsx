// Stylized rotating globe — abstract continents, wireframe meridians.
// Pure CSS animation, safe to server-render.

export default function Globe({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Rotating globe"
    >
      <defs>
        <radialGradient id="ocean" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#3fa0ff" />
          <stop offset="55%" stopColor="#1c5cf0" />
          <stop offset="100%" stopColor="#0a1a8c" />
        </radialGradient>
        <clipPath id="sphere">
          <circle cx="100" cy="100" r="88" />
        </clipPath>
      </defs>

      {/* Glow ring */}
      <circle cx="100" cy="100" r="94" fill="var(--color-hd-cyan)" opacity="0.18" />
      <circle cx="100" cy="100" r="88" fill="url(#ocean)" />

      <g clipPath="url(#sphere)">
        {/* Rotating landmasses + meridians */}
        <g
          className="anim-spin-slow"
          style={{ transformOrigin: "100px 100px" }}
        >
          {/* abstract continent blobs */}
          <path
            d="M40 70 q22 -18 44 -6 q14 8 6 26 q-10 20 -32 16 q-26 -4 -18 -36z"
            fill="#16b45a"
          />
          <path
            d="M120 52 q26 -6 34 14 q6 20 -14 30 q-22 8 -30 -12 q-8 -26 10 -32z"
            fill="#16b45a"
          />
          <path
            d="M70 120 q20 -10 34 8 q10 16 -8 30 q-22 12 -36 -8 q-10 -22 10 -30z"
            fill="#0f9a4c"
          />
          <path
            d="M150 120 q16 4 14 24 q-4 16 -22 12 q-14 -6 -8 -24 q4 -14 16 -12z"
            fill="#16b45a"
          />
          {/* gold desert accent */}
          <path
            d="M100 96 q16 -4 20 10 q2 12 -12 14 q-14 0 -14 -12 q0 -10 6 -12z"
            fill="var(--color-hd-gold)"
            opacity="0.9"
          />
        </g>

        {/* wireframe meridians (static shell) */}
        <g fill="none" stroke="#bfe0ff" strokeWidth="1" opacity="0.35">
          <ellipse cx="100" cy="100" rx="30" ry="88" />
          <ellipse cx="100" cy="100" rx="62" ry="88" />
          <ellipse cx="100" cy="100" rx="88" ry="30" />
          <ellipse cx="100" cy="100" rx="88" ry="62" />
          <line x1="100" y1="12" x2="100" y2="188" />
          <line x1="12" y1="100" x2="188" y2="100" />
        </g>
      </g>

      {/* rim + highlight */}
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        opacity="0.65"
      />
      <ellipse cx="72" cy="66" rx="26" ry="16" fill="#fff" opacity="0.18" />
    </svg>
  );
}
