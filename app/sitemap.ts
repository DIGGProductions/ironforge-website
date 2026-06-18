import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { SERVICE_SLUGS } from "@/content/services";
import { AREA_SLUGS } from "@/content/areas";
import { POST_SLUGS } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/dot-inspection",
    "/services",
    "/fleet",
    "/contractors",
    "/landscaping",
    "/vehicle-scale",
    "/service-area",
    "/about",
    "/contact",
    "/faq",
    "/blog",
  ];
  const serviceRoutes = SERVICE_SLUGS.map((s) => `/services/${s}`);
  const areaRoutes = AREA_SLUGS.map((s) => `/service-area/${s}`);
  const postRoutes = POST_SLUGS.map((s) => `/blog/${s}`);

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...postRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith("/blog/") ? "yearly" : "monthly",
    priority: path === "" ? 1 : path === "/dot-inspection" ? 0.9 : 0.7,
  }));
}
