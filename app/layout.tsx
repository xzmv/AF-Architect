import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alexandrafigueira.pt'),
  title: {
    default: 'Alexandra Figueira | Arquitecta, Cascais, Portugal',
    template: '%s | Alexandra Figueira Arquitecta',
  },
  description:
    'Arquitecta com mais de 20 anos de experiência em projectos residenciais e comerciais em Portugal. Atelier em Cascais.',
  keywords: [
    'arquitecta',
    'architect',
    'arquitectura',
    'architecture',
    'Cascais',
    'Portugal',
    'moradia',
    'projecto arquitectura',
    'atelier de arquitectura',
    'Alexandra Figueira',
    'renovação',
    'remodelação',
    'projecto residencial',
    'Areacor',
    'Estoril',
    'quinta da marinha',
  ],
  authors: [{ name: 'Alexandra Figueira', url: 'https://alexandrafigueira.pt' }],
  creator: 'Alexandra Figueira',
  publisher: 'Alexandra Figueira',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt-PT': '/',
      'en-GB': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    alternateLocale: 'en_GB',
    url: 'https://alexandrafigueira.pt',
    siteName: 'Alexandra Figueira Arquitecta',
    title: 'Alexandra Figueira | Arquitecta, Cascais, Portugal',
    description:
      'Arquitecta com mais de 20 anos de experiência em projectos residenciais e comerciais em Portugal. Atelier em Cascais.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Alexandra Figueira Arquitecta, Cascais, Portugal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexandra Figueira | Arquitecta, Cascais, Portugal',
    description:
      'Arquitecta com mais de 20 anos de experiência em projectos residenciais e comerciais em Portugal.',
    images: ['/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://alexandrafigueira.pt/#person',
      name: 'Alexandra Figueira',
      jobTitle: 'Architect',
      description:
        'Licensed architect with over 20 years of experience in residential and commercial projects in Portugal.',
      url: 'https://alexandrafigueira.pt',
      email: 'af@alexandrafigueira.pt',
      telephone: '+351919650101',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Edifício LACS, Estrada da Malveira Serra 920',
        postalCode: '2750-834',
        addressLocality: 'Cascais',
        addressCountry: 'PT',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidade Lusíada de Lisboa',
      },
      sameAs: ['https://www.linkedin.com/in/alexandra-figueira'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://alexandrafigueira.pt/#website',
      url: 'https://alexandrafigueira.pt',
      name: 'Alexandra Figueira Arquitecta',
      description:
        'Portfolio de arquitectura de Alexandra Figueira, Cascais, Portugal.',
      publisher: { '@id': 'https://alexandrafigueira.pt/#person' },
      inLanguage: ['pt-PT', 'en'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://alexandrafigueira.pt/#service',
      name: 'Alexandra Figueira Arquitecta',
      url: 'https://alexandrafigueira.pt',
      telephone: '+351919650101',
      email: 'af@alexandrafigueira.pt',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Edifício LACS, Estrada da Malveira Serra 920',
        postalCode: '2750-834',
        addressLocality: 'Cascais',
        addressCountry: 'PT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 38.714,
        longitude: -9.422,
      },
      areaServed: { '@type': 'Country', name: 'Portugal' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
