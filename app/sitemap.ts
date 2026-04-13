import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alexandrafigueira.pt'
  const now = new Date()

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/#projectos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/#areacor`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/#sobre`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/#contactos`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
