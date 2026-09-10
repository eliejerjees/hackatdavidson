import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hack@Davidson",
    short_name: "Hack@Davidson",
    description:
      "Davidson College's student-run tech club — annual hackathon, workshops, and build nights.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d42121",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon", sizes: "64x64", type: "image/png" },
    ],
  };
}
