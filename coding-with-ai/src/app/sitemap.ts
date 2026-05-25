import { MetadataRoute } from "next";
import { blogsData } from "@/data/blogs";

// 1. Base URL Normalization
const rawBaseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://codingwithai.in";
const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

// 2. Constants for SEO Metadata
const STATIC_LAST_MODIFIED = new Date("2026-05-25"); // Release/Update Date
const LEGAL_LAST_MODIFIED = new Date("2024-12-01");  // UI declared last modified for /legal

/**
 * Safely parses a date string into a Date object.
 */
function parseSafeDate(dateStr?: string, fallback: Date = STATIC_LAST_MODIFIED): Date {
  if (!dateStr) return fallback;
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? fallback : parsed;
}

/**
 * Helper to calculate the date of the newest blog post.
 */
function getLatestBlogDate(): Date {
  if (!blogsData || blogsData.length === 0) return STATIC_LAST_MODIFIED;
  const dates = blogsData.map(blog => parseSafeDate(blog.date).getTime());
  return new Date(Math.max(...dates));
}

/**
 * Normalizes URLs to ensure canonical consistency (no duplicate/trailing slashes).
 */
function normalizeUrl(url: string): string {
  let normalized = url.replace(/([^:]\/)\/+/g, "$1");
  if (normalized.endsWith("/") && normalized.split("/").length > 3) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

/**
 * Deduplicates sitemap entries by URL.
 */
function deduplicateEntries(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seenUrls = new Set<string>();
  return entries.filter((entry) => {
    if (seenUrls.has(entry.url)) {
      return false;
    }
    seenUrls.add(entry.url);
    return true;
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latestBlogDate = getLatestBlogDate();

  // A. Static pages config
  const staticPages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0, lastModified: latestBlogDate },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.6, lastModified: STATIC_LAST_MODIFIED },
    { path: "/membership", changeFrequency: "weekly" as const, priority: 0.9, lastModified: STATIC_LAST_MODIFIED },
    { path: "/projects", changeFrequency: "weekly" as const, priority: 0.8, lastModified: STATIC_LAST_MODIFIED },
    { path: "/ai-tools", changeFrequency: "weekly" as const, priority: 0.8, lastModified: STATIC_LAST_MODIFIED },
    { path: "/blogs", changeFrequency: "daily" as const, priority: 0.8, lastModified: latestBlogDate },
    { path: "/community", changeFrequency: "weekly" as const, priority: 0.7, lastModified: STATIC_LAST_MODIFIED },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.5, lastModified: STATIC_LAST_MODIFIED },
    { path: "/legal", changeFrequency: "monthly" as const, priority: 0.4, lastModified: LEGAL_LAST_MODIFIED },
  ];

  const staticEntries = staticPages.map((route) => ({
    url: normalizeUrl(`${baseUrl}${route.path}`),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // B. Dynamic membership tier routes (/membership/[tier])
  const membershipTiers = ["silver", "gold", "diamond"];
  const membershipEntries = membershipTiers.map((tier) => ({
    url: normalizeUrl(`${baseUrl}/membership/${tier}`),
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // C. Dynamic blog post routes (/blogs/[slug])
  const blogPostEntries = blogsData.map((blog: any) => ({
    url: normalizeUrl(`${baseUrl}/blogs/${blog.slug}`),
    lastModified: parseSafeDate(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Combine and deduplicate
  const allEntries = [
    ...staticEntries,
    ...membershipEntries,
    ...blogPostEntries,
  ];

  return deduplicateEntries(allEntries);
}



