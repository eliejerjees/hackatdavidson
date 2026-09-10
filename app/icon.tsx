import { ImageResponse } from "next/og";
import { AT_MARK_RED } from "./og-shared";

// Modern icon.tsx convention — browsers prefer this over favicon.ico when
// both exist. Same "@" mark as favicon.ico (regenerate both together;
// swap for the real logo once it exists). No background fill, so it sits
// on the browser's own tab color.
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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={AT_MARK_RED} width={64} height={64} />
      </div>
    ),
    size,
  );
}
