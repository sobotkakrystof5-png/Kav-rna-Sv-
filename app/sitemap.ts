import type { MetadataRoute } from "next";

const baseUrl = "https://kavarna-svezi.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/nabidka`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/pribeh`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gdpr`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];
}
