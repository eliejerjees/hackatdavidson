import { ImageResponse } from "next/og";
import { loadGoogleFont } from "./og-shared";

// Modern icon.tsx convention — browsers prefer this over favicon.ico when
// both exist. Same "@" mark as favicon.ico (regenerate both together;
// swap for the real logo once it exists).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const archivoBlack = await loadGoogleFont("Archivo", 900, "@");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#d42121",
        }}
      >
        <span
          style={{
            fontFamily: "Archivo",
            fontWeight: 900,
            fontSize: 44,
            color: "#ffffff",
          }}
        >
          @
        </span>
      </div>
    ),
    { ...size, fonts: [{ name: "Archivo", data: archivoBlack, weight: 900, style: "normal" }] },
  );
}
