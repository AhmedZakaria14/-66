import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'نجارة أبو ثابت',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0D0804',
    theme_color: '#8B4513',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
