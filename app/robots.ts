import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Placeholder "coming soon" page — nothing there worth indexing yet.
      disallow: "/2027",
    },
    sitemap: "https://hackatdavidson.com/sitemap.xml",
  };
}
