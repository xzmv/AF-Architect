import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://alexandrafigueira.pt/sitemap.xml',
    host: 'https://alexandrafigueira.pt',
  }
}
