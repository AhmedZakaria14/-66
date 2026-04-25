import { MetadataRoute } from 'next';
import { siteConfig, BLOG_POSTS, SERVICES_LIST } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = siteConfig.domain;

  const staticPages = [
    {
      url: encodeURI(`${domain}`),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: encodeURI(`${domain}/services`),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: encodeURI(`${domain}/portfolio`),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: encodeURI(`${domain}/about`),
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: encodeURI(`${domain}/contact`),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: encodeURI(`${domain}/privacy`),
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: encodeURI(`${domain}/terms`),
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: encodeURI(`${domain}/blog`),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  const blogPages = BLOG_POSTS.map((post) => ({
    url: encodeURI(`${domain}/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const servicePages = SERVICES_LIST.map((service) => ({
    url: encodeURI(`${domain}/services/${service.id}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...servicePages];
}
