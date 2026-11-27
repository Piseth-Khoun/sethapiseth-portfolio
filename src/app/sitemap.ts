import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sethapiseth.vercel.app";
  return ["", "/about", "/projects", "/services", "/contact", "/cv"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-11-27"),
  }));
}
