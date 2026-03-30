# Research Summary — Nhà Xanh Landing Page

## Stack: Next.js 15 + Tailwind 3 + Framer Motion + Formspree

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 15 App Router + `output: 'export'` | Static export, SEO via Metadata API, hostable on Vercel |
| Styling | Tailwind CSS 3.4.x | Proven, fast, ecosystem ready |
| Animation | Framer Motion 11 (LazyMotion) | Scroll reveal, lightweight on mobile |
| Forms | Formspree (`@formspree/react`) | No backend needed, free tier OK for launch |
| Fonts | Be Vietnam Pro | Native Vietnamese diacritics, professional |
| Images | next-export-optimize-images | WebP at build time, CWV-safe |
| Icons | Lucide React | Lightweight SVG, tree-shakable |
| Analytics | GA4 | Google Ads conversion tracking required |

## Table Stakes (every cleaning site must have)

1. **Hotline số to + click-to-call** — Primary CTA cho mobile (70%+ traffic)
2. **Zalo floating button** — Kênh số 1 tại VN
3. **Danh sách 5 dịch vụ rõ ràng** với icon
4. **Bảng giá tham khảo** — "từ X đ/m²" — không có = khách thoát
5. **Form báo giá ngắn** — Tên + SĐT + Dịch vụ (≤5 trường)
6. **Social proof** — 100+ khách, reviews, đối tác
7. **Khu vực phục vụ** — Ghi rõ các quận Đà Nẵng
8. **Quy trình 3 bước** — Giảm friction, set expectations
9. **Google Maps** — Trust signal + Local SEO

## Differentiators (Nhà Xanh's competitive edge)

- **Báo giá trong 30 phút** ← strongest conversion driver
- **Hóa chất xanh, an toàn** ← brand alignment với tên "Nhà Xanh"
- **Cam kết hoàn tiền** ← reduces risk, key for B2C
- **Hóa đơn VAT, hợp đồng** ← B2B deal-maker
- **Đội ngũ đồng phục, thẻ nhân viên** ← home entry trust

## Critical Watch Outs

### 🔴 Must fix before launch
1. `next/Image` static export config — use `next-export-optimize-images` or `unoptimized: true`
2. `trailingSlash: true` in `next.config.js`
3. Phone number visible as PRIMARY CTA everywhere
4. Lighthouse LCP <2.5s before pointing Google Ads traffic

### 🟡 Important for Google Ads
1. NO popup on page load (Google Ads policy)
2. Landing page content must match ad keywords
3. Privacy Policy page required
4. No superlative claims ("số 1", "rẻ nhất") without proof
5. Zalo widget must be `lazyOnload` — not blocking render

### 🟢 Quality improvements
1. Realistic mock reviews (not all 5 stars)
2. Google Maps lite embed (not full iframe immediately)
3. Area-served list (specific Đà Nẵng districts)

## Recommended Page Sections Order

```
Header (sticky) → Hero → Services → WhyUs (USPs)
→ HowItWorks → Pricing → Testimonials → Partners
→ About+Stats → ContactForm+Map → Footer
```

## SEO Keywords (Đà Nẵng)

Primary: "vệ sinh công nghiệp đà nẵng"  
Secondary: "vệ sinh văn phòng đà nẵng", "vệ sinh sau xây dựng đà nẵng", "vệ sinh nhà xưởng đà nẵng"  
Long-tail: "công ty vệ sinh uy tín đà nẵng", "dịch vụ dọn dẹp nhà cửa đà nẵng"

## Build Phases Recommended

1. Foundation (Next.js + config + brand tokens + layout)
2. Core sections (Hero, Services, WhyUs, HowItWorks)
3. Trust sections (Pricing, Testimonials, Partners, About)
4. Lead capture + Polish (Form, Map, Animations, Mobile)
5. SEO + Launch (Metadata, Schema, Lighthouse, Deploy)
