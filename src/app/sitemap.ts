import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { tarotCards } from "@/lib/tarotData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://astrotarot.vercel.app";

  // 1. Static Core Pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  // 2. 78 Tarot Cards Pages
  const tarotRoutes = tarotCards.map((card) => ({
    url: `${baseUrl}/cards/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 3. Blog Posts Pages
  const blogPosts = getAllPosts("blog");
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date || Date.now()),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 4. 12 Zodiac Pages
  const signs = [
    "aries", "taurus", "gemini", "cancer", "leo", "virgo",
    "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
  ];
  const zodiacRoutes = signs.map((sign) => ({
    url: `${baseUrl}/zodiac/${sign}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...tarotRoutes, ...blogRoutes, ...zodiacRoutes];
}
