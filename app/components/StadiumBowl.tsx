// Flag-stripe stadium bowl (EURO 2024 look): colored wedges fanning from a
// focal point below, clipped to a concave-topped bowl. Abstract patterns,
// not literal flags.

const STRIPE_COLORS = [
  "#e8322b", // red
  "#f7f1e3", // cream
  "#1533d6", // blue
  "#ffcf3f", // gold
  "#16b45a", // green
  "#ff2e88", // pink
  "#0b0f2b", // ink
  "#22d3ee", // cyan
  "#6a2bd6", // purple
];

const N = 46; // number of seating wedges
const W = 1200;
const FOCAL = { x: 600, y: 780 };

// top edge Bézier P0(0,120) P1(600,300) P2(1200,120) → x(t)=1200t
function topPoint(t: number) {
  const x = W * t;
  const y = 120 * ((1 - t) ** 2 + t ** 2) + 300 * 2 * (1 - t) * t;
  return { x, y };
}

export default function StadiumBowl({ className = "" }: { className?: string }) {
  const wedges = Array.from({ length: N }, (_, i) => {
    const a = topPoint(i / N);
    const b = topPoint((i + 1) / N);
    const color = STRIPE_COLORS[i % STRIPE_COLORS.length];
    // pattern flag: every 5th wedge gets a dotted texture
    const patterned = i % 5 === 2;
    return { a, b, color, patterned, i };
  });

  return (
    <svg
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden
    >
      <defs>
        <pattern
          id="dots"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <rect width="14" height="14" fill="#0b0f2b" />
          <circle cx="7" cy="7" r="3.2" fill="#f7f1e3" opacity="0.9" />
        </pattern>
        <linearGradient id="bowlShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      {/* dark base for depth */}
      <rect x="0" y="120" width={W} height="280" fill="#070b22" />

      {/* fanning seating wedges */}
      {wedges.map((w) => (
        <polygon
          key={w.i}
          points={`${w.a.x},${w.a.y} ${w.b.x},${w.b.y} ${FOCAL.x},${FOCAL.y}`}
          fill={w.patterned ? "url(#dots)" : w.color}
        />
      ))}

      {/* shade to seat the bowl into the ground */}
      <polygon
        points={`0,120 ${W},120 ${W},400 0,400`}
        fill="url(#bowlShade)"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* pitch — green ellipse with center circle */}
      <ellipse cx="600" cy="360" rx="240" ry="60" fill="#12a350" />
      <ellipse
        cx="600"
        cy="360"
        rx="240"
        ry="60"
        fill="none"
        stroke="#eafff2"
        strokeWidth="2"
        opacity="0.7"
      />
      <ellipse
        cx="600"
        cy="360"
        rx="46"
        ry="16"
        fill="none"
        stroke="#eafff2"
        strokeWidth="2"
        opacity="0.7"
      />
      {/* Davidson "D" at center of the pitch */}
      <text
        x="600"
        y="372"
        textAnchor="middle"
        fontFamily="var(--font-display), Impact, sans-serif"
        fontSize="34"
        fill="#eafff2"
        opacity="0.85"
      >
        D
      </text>

      {/* rim highlight along the top edge */}
      <path
        d="M0,120 Q600,300 1200,120"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        opacity="0.5"
      />
    </svg>
  );
}
