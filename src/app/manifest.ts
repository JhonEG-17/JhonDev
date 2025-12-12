// d:\Documents\GitHub\jhon-dev\src\app\manifest.ts
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JhonDev | Desarrollador Web',
    short_name: 'JhonDev',
    description: 'Desarrollador Web experto en React, Next.js y TypeScript.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030014', // Color oscuro acorde a tu tema espacial
    theme_color: '#030014',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
