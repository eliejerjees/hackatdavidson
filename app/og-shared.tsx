import { ImageResponse } from "next/og";

// Shared by opengraph-image.tsx, twitter-image.tsx, and icon.tsx. Not a
// route itself — Next only treats the exact file-convention names as routes.

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * Fetches a Google Font as raw TrueType bytes for use with ImageResponse.
 * Requesting without a browser-like user agent makes Google's CSS endpoint
 * return a `format('truetype')` src instead of woff2, which is what
 * ImageResponse (Satori) requires.
 */
export async function loadGoogleFont(family: string, weight: number, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);
  if (match) {
    const res = await fetch(match[1]);
    if (res.ok) return res.arrayBuffer();
  }
  throw new Error(`Failed to load font: ${family}`);
}

const TITLE = "HACK@DAVIDSON";
const SUBTITLE = "Davidson College's student tech community";

// Decorative contour-line hint, echoing the homepage hero's sand topography
// — a few offset rings rather than the real procedural canvas.
const RINGS = [
  { size: 820, top: -260, left: -220 },
  { size: 560, top: 220, left: 900 },
  { size: 420, top: -160, left: 760 },
];

export async function renderOgImage() {
  const [archivoBlack, archivoMedium] = await Promise.all([
    loadGoogleFont("Archivo", 900, `${TITLE}@`),
    loadGoogleFont("Archivo", 600, SUBTITLE),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          background: "#d42121",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 50% 46%, rgba(212,33,33,0) 0%, rgba(150,20,20,0.55) 100%)",
          }}
        />

        {RINGS.map((r, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              display: "flex",
              width: r.size,
              height: r.size,
              top: r.top,
              left: r.left,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.16)",
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            top: 56,
            left: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 68,
            height: 68,
            border: "3px solid rgba(255,255,255,0.85)",
          }}
        >
          <span style={{ fontFamily: "Archivo", fontWeight: 900, fontSize: 36, color: "#ffffff" }}>
            @
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "Archivo",
              fontWeight: 900,
              fontSize: 104,
              letterSpacing: -2,
              color: "#ffffff",
              lineHeight: 0.95,
            }}
          >
            {TITLE}
          </span>
          <span
            style={{
              marginTop: 24,
              fontFamily: "Archivo",
              fontWeight: 600,
              fontSize: 30,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {SUBTITLE}
          </span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Archivo", data: archivoBlack, weight: 900, style: "normal" },
        { name: "Archivo", data: archivoMedium, weight: 600, style: "normal" },
      ],
    },
  );
}
