import { ImageResponse } from "next/og";
import { AT_MARK_WHITE } from "./og-shared";

// Modern icon.tsx convention — browsers prefer this over favicon.ico when
// both exist. Same "@" mark as favicon.ico (regenerate both together;
// swap for the real logo once it exists).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={AT_MARK_WHITE} width={44} height={44} />
      </div>
    ),
    size,
  );
}
