import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://kavarna-svezi.cz/sitemap.xml",
    host: "https://kavarna-svezi.cz",
  };
}
