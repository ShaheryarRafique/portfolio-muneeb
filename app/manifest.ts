import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hafiz Muneeb - Qur\'an Learning',
    short_name: 'Hafiz Muneeb',
    description: 'Learn Qur\'an recitation with Tajwīd, Maqāmāt, and Adhān training from Hafiz Muneeb',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
