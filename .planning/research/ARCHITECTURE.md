# Architecture Research — SEO & Google Ads Optimized Landing Page

## Page Structure (Component Hierarchy)

```
app/
  layout.tsx          ← Root layout: fonts, GA4, Zalo widget, global meta
  page.tsx            ← Main page: assembles all sections
  globals.css         ← Tailwind + custom CSS variables (brand colors)
  
components/
  layout/
    Header.tsx        ← Logo + nav + hotline CTA (sticky)
    Footer.tsx        ← Address, hours, social, copyright
    FloatingCTA.tsx   ← Zalo + hotline floating buttons (mobile sticky)
    
  sections/
    Hero.tsx          ← H1 + tagline + before/after + primary CTAs
    Services.tsx      ← 5 service cards with icons
    WhyUs.tsx         ← 6 USP blocks with icons (differentiators)
    HowItWorks.tsx    ← 3-step process (Liên hệ → Khảo sát → Vệ sinh)
    Pricing.tsx       ← Reference price table + disclaimer
    Testimonials.tsx  ← 5 mock reviews with avatar/name/company
    Partners.tsx      ← Client logo strip (mock)
    About.tsx         ← Company intro + stats (100+ KH, X năm)
    ContactForm.tsx   ← Form báo giá + map embed
    
  ui/
    Button.tsx        ← Reusable CTA button variants
    SectionTitle.tsx  ← Consistent heading style
    ServiceCard.tsx   ← Icon + title + description card
    TestimonialCard.tsx
    CounterStats.tsx  ← Animated number counter (100+, etc.)

public/
  images/            ← Optimized WebP images (hero, services, before/after)
  logo.png           ← Nhà Xanh logo
  favicon.ico
```

## SEO Architecture

### Metadata (next/metadata API)
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Vệ Sinh Công Nghiệp Nhà Xanh Đà Nẵng | Báo giá trong 30 phút',
  description: 'Dịch vụ vệ sinh công nghiệp uy tín tại Đà Nẵng: văn phòng, nhà xưởng, sau xây dựng, nhà cửa. Đội ngũ chuyên nghiệp, hóa chất xanh an toàn. Gọi ngay: 0xxx-xxx-xxx',
  keywords: ['vệ sinh công nghiệp đà nẵng', 'vệ sinh văn phòng đà nẵng', 'vệ sinh nhà xưởng đà nẵng'],
  openGraph: {
    title: 'Nhà Xanh — Vệ Sinh Công Nghiệp Đà Nẵng',
    description: '...',
    images: ['/images/og-image.jpg'], // 1200x630px
    locale: 'vi_VN',
    type: 'website',
  },
  alternates: { canonical: 'https://nhaxanh-danang.vn' },
  robots: { index: true, follow: true },
}
```

### JSON-LD LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vệ Sinh Công Nghiệp Nhà Xanh",
  "description": "Dịch vụ vệ sinh công nghiệp tại Đà Nẵng",
  "telephone": "0xxx-xxx-xxx",
  "email": "nhaxanh@...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Đà Nẵng",
    "addressCountry": "VN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 16.0544, "longitude": 108.2022 },
  "areaServed": "Đà Nẵng",
  "openingHours": "Mo-Sa 07:00-20:00",
  "priceRange": "₫₫",
  "image": "https://nhaxanh-danang.vn/logo.png"
}
```

### Sitemap + Robots
```typescript
// app/sitemap.ts → generates /sitemap.xml at build time
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://nhaxanh-danang.vn', lastModified: new Date() }]
}

// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://nhaxanh-danang.vn/sitemap.xml' }
}
```

## Google Ads Landing Page Score Requirements

| Requirement | Target | Implementation |
|-------------|--------|----------------|
| **Relevance** | Match ad keywords | H1 + meta must contain target keywords |
| **Transparency** | Clear business info | Address, phone, hours visible in footer |
| **Navigability** | Easy to find info | Sticky nav + smooth scroll anchors |
| **Mobile experience** | Mobile-first UX | Tailwind responsive, LCP<2.5s mobile |
| **Loading speed** | Core Web Vitals Green | See CWV targets below |
| **Privacy policy** | Must be accessible | Footer link to /chinh-sach-bao-mat |

### Policy Compliance for Vietnamese Service Ads
- No misleading claims ("rẻ nhất", "số 1 Đà Nẵng" without proof)
- Must have real contact info (phone, address)
- Landing page content must match ad copy closely
- No popup on page load

## Core Web Vitals Targets (2025)

| Metric | Target | Acceptable | Strategy |
|--------|--------|------------|----------|
| **LCP** | <1.8s | <2.5s | Preload hero image, WebP format, CDN |
| **INP** | <100ms | <200ms | Minimize JS, defer non-critical, lazy load |
| **CLS** | <0.05 | <0.1 | Always set image dimensions, avoid dynamic inserts |
| **FCP** | <1.0s | <1.8s | Inline critical CSS, font preconnect |
| **TTFB** | <400ms | <800ms | Static files on CDN (Vercel Edge) |

### Key Performance Strategies
1. **Images**: All WebP, lazy loaded below fold, `priority` prop on hero image only
2. **Fonts**: `font-display: swap`, preconnect to fonts.googleapis.com
3. **JS**: Defer Zalo widget, GA4 gtag, Framer Motion lazy-loaded
4. **CSS**: Tailwind purges unused classes — output CSS typically <30KB
5. **Static**: `output: 'export'` → pure static files, served from CDN edge

## Build Order (Phase Dependencies)

```
Phase 1: Foundation
  ├── Next.js project init + Tailwind config
  ├── Brand config (colors, fonts, spacing tokens)
  ├── Layout: Header + Footer + FloatingCTA
  └── SEO: metadata, sitemap, robots, JSON-LD

Phase 2: Core Content Sections
  ├── Hero (highest conversion impact — do first)
  ├── Services grid
  ├── WhyUs / USPs
  └── HowItWorks (3 steps)

Phase 3: Conversion + Trust
  ├── Pricing table
  ├── Testimonials (mock data)
  ├── Partners logo strip (mock data)
  └── About + stats counter

Phase 4: Lead Capture + Polish
  ├── Contact form (Formspree integration)
  ├── Google Maps embed
  ├── Animations (Framer Motion scroll reveal)
  └── Mobile optimization + CWV audit

Phase 5: SEO + Launch Prep
  ├── Meta tags audit
  ├── JSON-LD validation
  ├── Lighthouse audit (CWV green)
  └── Static build + deploy
```

## Quality Gates

- [x] Component boundaries clearly defined
- [x] Data flow direction explicit (static → mock data → Formspree)
- [x] Build order accounts for dependencies
- [x] Google Ads requirements mapped to implementation
- [x] CWV targets specific with strategies
