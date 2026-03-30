# Plan 01-03: Layout Shell + SEO Infrastructure — Summary

## Status: Complete

## What Was Built
- **Header** — sticky top-0 z-50, Nhà Xanh logo placeholder, desktop nav (4 links), mobile hamburger menu (useState), click-to-call hotline `href="tel:0905000000"`
- **Footer** — green bg, 3-column (Brand / Services / Contact), hours, Privacy Policy link, copyright
- **FloatingCTA** — fixed bottom-right, Zalo button (blue, zalo.me link), Phone button (green, animate-pulse)
- **JSON-LD LocalBusiness schema** — name, telephone, address, areaServed (Đà Nẵng), openingHours, 5 services in OfferCatalog
- **Root layout.tsx** — Be Vietnam Pro font variable, full metadata (title, description, keywords, OG, twitter, robots, canonical)
- **sitemap.ts** — 2 URLs (/ and /chinh-sach-bao-mat) with `export const dynamic = 'force-static'`
- **robots.ts** — allow all, sitemap URL, `export const dynamic = 'force-static'`
- **Privacy Policy page** `/chinh-sach-bao-mat` — 5-section Vietnamese content, robots: noindex

## Key Files Created
- `src/components/layout/Header.tsx` — sticky nav (needs 'use client' for mobile menu)
- `src/components/layout/Footer.tsx` — green footer with all contact info
- `src/components/layout/FloatingCTA.tsx` — fixed Zalo + Phone buttons
- `src/components/layout/index.ts` — barrel export
- `src/components/JsonLd.tsx` — LocalBusiness JSON-LD schema
- `src/app/layout.tsx` — complete root layout with metadata and components
- `src/app/sitemap.ts` — XML sitemap (force-static required for Next.js 16 static export)
- `src/app/robots.ts` — robots.txt (force-static required)
- `src/app/chinh-sach-bao-mat/page.tsx` — Privacy Policy (robots: noindex)

## Deviations from Plan
- `export const dynamic = 'force-static'` required on robots.ts and sitemap.ts — Next.js 16 Turbopack requirement for `output: 'export'` mode (not in original plan, discovered at build time — fixed immediately)
- `next-export-optimize-images` not used — incompatible with Next.js 16; using `unoptimized: true` instead
- Hotline placeholder: `0905-000-000` and `0905000000` — user must replace with real number before launch

## Critical Todos Before Launch (Blockers)
- [ ] Replace `0905-000-000` with real hotline in: Header.tsx, Footer.tsx, FloatingCTA.tsx, layout.tsx, JsonLd.tsx
- [ ] Replace `https://zalo.me/0905000000` with real Zalo link in FloatingCTA.tsx
- [ ] Replace `nhaxanh@gmail.com` with real email in Footer.tsx, chinh-sach-bao-mat/page.tsx
- [ ] Update `Đà Nẵng, Việt Nam` with full street address in Footer.tsx, JsonLd.tsx
- [ ] Replace `https://nhaxanh-danang.vn` with actual domain in sitemap.ts, robots.ts, layout.tsx, JsonLd.tsx
- [ ] Add real logo to `public/logo.png` and update Header.tsx logo placeholder

## Verification
- [x] `npm run build` passes — all 5 routes: /, /_not-found, /chinh-sach-bao-mat, /robots.txt, /sitemap.xml
- [x] Header has `sticky`, `z-50`, `tel:` hotline, mobile menu
- [x] Footer has green background, services, contact info, Privacy Policy link
- [x] FloatingCTA is `fixed bottom-6 right-4 z-50`
- [x] `<title>` contains "vệ sinh công nghiệp đà nẵng" in metadata
- [x] JSON-LD LocalBusiness schema with areaServed Đà Nẵng
- [x] Privacy Policy page renders at /chinh-sach-bao-mat
- [x] `lang="vi"` on `<html>` tag

## Self-Check: PASSED
