import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { caseStudies } from "@/content/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["", "/work", "/privacy", "/terms"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
  }));

  // Only published case studies have a detail page.
  const studyRoutes = caseStudies
    .filter((s) => s.status === "published")
    .map((s) => ({
      url: `${siteUrl}/work/${s.slug}`,
      lastModified,
    }));

  return [...staticRoutes, ...studyRoutes];
}
