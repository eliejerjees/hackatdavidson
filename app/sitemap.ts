import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hackatdavidson.com";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/sponsor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // /2027 is a placeholder "coming soon" page — left out until it's real.
  ];
}
