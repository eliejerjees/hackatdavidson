// Transition between country scenes: a dashed flight route with a plane
// traveling along it, over a gradient that blends the two adjacent palettes.

export default function RouteDivider({
  from,
  to,
  route,
  flip = false,
}: {
  from: string; // top color (previous scene)
  to: string; // bottom color (next scene)
  route: string; // e.g. "LONDON → TOKYO"
  flip?: boolean; // arc up vs down
}) {
  const path = flip
    ? "M40,150 C300,40 900,40 1160,150"
    : "M40,50 C300,160 900,160 1160,50";

  return (
    <div
      aria-hidden
      className="relative h-[22vh] min-h-[150px] w-full overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    >
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          id={`route-${route.replace(/\W/g, "")}`}
          d={path}
          fill="none"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="3"
          strokeDasharray="2 14"
          strokeLinecap="round"
          className="anim-dash"
        />
        {/* start + end pins */}
        <circle cx="40" cy={flip ? 150 : 50} r="9" fill="var(--color-hd-gold)" stroke="#0b0f2b" strokeWidth="3" />
        <circle cx="1160" cy={flip ? 150 : 50} r="9" fill="var(--color-hd-red)" stroke="#0b0f2b" strokeWidth="3" />

        {/* traveling plane */}
        <g>
          <g transform="translate(-16,-16)">
            <text fontSize="30" fill="#fff">
              ✈
            </text>
          </g>
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#route-${route.replace(/\W/g, "")}`} />
          </animateMotion>
        </g>
      </svg>

      {/* Passport-stamp route label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          className="stamp-mark bg-white/10 px-4 py-2 text-[0.7rem] text-white backdrop-blur-sm"
          style={{ borderColor: "rgba(255,255,255,0.9)" }}
        >
          ✦ {route} ✦
        </span>
      </div>
    </div>
  );
}
