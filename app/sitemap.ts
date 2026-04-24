import { MetadataRoute } from 'next';
import { siteConfig, BLOG_POSTS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = siteConfig.domain;

  const staticPages = [
    {
      url: `${domain}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${domain}/خدماتنا`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${domain}/أعمالنا`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${domain}/عن-الشركة`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${domain}/اتصل-بنا`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${domain}/المدونة`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${domain}/المدونة/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
