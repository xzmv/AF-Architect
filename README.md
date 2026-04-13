# Alexandra Figueira — Arquitecta

Portfolio website for architect Alexandra Figueira, based in Cascais, Portugal.

## Stack

- **Framework** — Next.js 14 (App Router, TypeScript)
- **Styling** — Tailwind CSS v3
- **Animations** — Framer Motion v11
- **Fonts** — Cormorant Garamond + Inter (via `next/font/google`)
- **Icons** — Lucide React

## Features

- One-page SPA with smooth anchor navigation
- Bilingual (PT / EN) with live `lang` attribute update
- Project image carousels with crossfade transitions
- In-page project modal
- Fully responsive (mobile-first)
- SEO: Metadata API, JSON-LD structured data (Person + WebSite + ProfessionalService), Open Graph, sitemap, robots
- Zero border-radius design system — clean, neutral palette

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/           # Next.js App Router pages, layout, SEO files
components/    # UI components, layout, sections
context/       # Language context
data/          # Project data and translations
lib/           # TypeScript types
public/        # Static assets (images)
```

## Contact

[linkedin.com/in/alexandrafigueira2022](https://www.linkedin.com/in/alexandrafigueira2022)
