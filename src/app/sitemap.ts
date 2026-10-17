import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { occasions } from "@/data/occasions";

const base = process.env.SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; change: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, change: "weekly" },
    { path: "/boutique", priority: 0.9, change: "daily" },
    { path: "/cartes", priority: 0.7, change: "monthly" },
    { path: "/mariages", priority: 0.7, change: "monthly" },
    { path: "/collaborations", priority: 0.6, change: "monthly" },
    { path: "/ateliers", priority: 0.5, change: "monthly" },
    { path: "/occasions", priority: 0.7, change: "weekly" },
    { path: "/notre-histoire", priority: 0.5, change: "monthly" },
    { path: "/contact", priority: 0.5, change: "yearly" },
    { path: "/legal/mentions-legales", priority: 0.2, change: "yearly" },
    { path: "/legal/confidentialite", priority: 0.2, change: "yearly" },
    { path: "/legal/cgv", priority: 0.2, change: "yearly" },
    { path: "/legal/cookies", priority: 0.2, change: "yearly" },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: now,
      changeFrequency: r.change,
      priority: r.priority,
    })),
    ...products
      .filter((p) => p.available)
      .map((p) => ({
        url: `${base}/boutique/${p.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
    ...occasions.map((o) => ({
      url: `${base}/occasions/${o.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}