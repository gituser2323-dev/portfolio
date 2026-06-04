import { MetadataRoute } from "next";
import { notion } from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl ="https://speedupinfotech.com";

  /* ---------------- STATIC PAGES ---------------- */

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/placements`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  /* ---------------- BLOGS FROM NOTION ---------------- */

  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
  });

  const blogUrls: MetadataRoute.Sitemap = response.results
    .map((post: any) => {
      const slug =
        post.properties.Slug?.rich_text?.[0]?.plain_text;

      if (!slug) return null;

      return {
        url: `${baseUrl}/blogs/${slug}`,
        lastModified: new Date(post.last_edited_time),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    })
    .filter(Boolean) as MetadataRoute.Sitemap;

  /* ---------------- FINAL SITEMAP ---------------- */

  return [...staticPages, ...blogUrls];
}