# Roadmap — Nhà Xanh Landing Page

## Summary

**5 phases** | **38 requirements mapped** | All v1 requirements covered ✓  
**Granularity:** Standard | **Mode:** YOLO | **Parallelization:** Enabled

---

## Phase Overview

| # | Phase | Goal | Requirements | Est. Plans |
|---|-------|------|--------------|------------|
| 1 | Foundation & Config | Next.js project set up, brand configured, SEO infrastructure in place | FOUND-01..04, LAYOUT-01..04, SEO-01..05 | 3 |
| 2 | Core Content Sections | Hero + Services + WhyUs + HowItWorks live and visually complete | HERO-01..04, SVC-01..03, WHY-01..02, HOW-01..02 | 3 |
| 3 | Trust & Pricing Sections | Pricing, Testimonials, Partners, About sections live | PRICE-01..03, TEST-01..03, PART-01..02, ABOUT-01..03 | 2 |
| 4 | Lead Capture & Polish | Contact form working, animations, responsive, mobile-optimized | CONT-01..04, RESP-01..04, ANIM-01..04 | 3 |
| 5 | Performance & Launch | Lighthouse green, Privacy Policy, static build clean, ready to deploy | PERF-01..05, Privacy page | 2 |

---

## Phase 1: Foundation & Config

**Goal:** Next.js project bootstrapped, brand design system ready, layout shell (Header/Footer/Floating CTA) complete, SEO metadata infrastructure in place. Every subsequent phase builds on this stable foundation.

**Requirements:**
- FOUND-01, FOUND-02, FOUND-03, FOUND-04
- LAYOUT-01, LAYOUT-02, LAYOUT-03, LAYOUT-04
- SEO-01, SEO-02, SEO-03, SEO-04, SEO-05

**Plans:**
1. **Project Bootstrap** — `npx create-next-app`, configure `next.config.js` (static export, trailingSlash, image optimization), install all dependencies (Tailwind, Framer Motion, Formspree, Lucide, next-export-optimize-images)
2. **Brand & Design System** — Tailwind config with Nhà Xanh brand colors (`#2D8B3A`, `#5AB645`, white, gray), Be Vietnam Pro font setup with preconnect, CSS custom properties, reusable UI primitives (Button, SectionTitle)
3. **Layout Shell + SEO** — Header (sticky, logo, nav, hotline CTA), Footer (address, hours, social, links), FloatingCTA (Zalo + hotline floating), root metadata (title, description, OG tags, JSON-LD LocalBusiness), sitemap.ts, robots.ts, privacy policy page

**Success Criteria:**
1. `npm run build` completes without errors, outputs `/out` directory with static HTML
2. Header và Footer visible trên 320px mobile và 1440px desktop
3. Floating Zalo/hotline button hiển thị và không che nội dung chính
4. Lighthouse SEO score ≥ 90 (phase 1 baseline — no content yet)
5. `<title>` tag chứa "vệ sinh công nghiệp đà nẵng" khi xem source

**UI Hint:** yes

---

## Phase 2: Core Content Sections

**Goal:** Hero, Services, WhyUs, và HowItWorks sections live với content tiếng Việt thực tế và visual đẹp. Đây là phần quan trọng nhất — 80% conversion xảy ra ở đây.

**Requirements:**
- HERO-01, HERO-02, HERO-03, HERO-04
- SVC-01, SVC-02, SVC-03
- WHY-01, WHY-02
- HOW-01, HOW-02

**Plans:**
1. **Hero Section** — H1 keyword-rich ("Dịch vụ Vệ Sinh Công Nghiệp Đà Nẵng"), tagline "Sạch Chuẩn — Nhanh Gọn — An Tâm", hero visual (gradient bg hoặc placeholder ảnh WebP), dual CTA (gọi ngay + báo giá), badge "100+ khách hàng"
2. **Services Section** — Grid 5 service cards (icon SVG + tên + mô tả 2 câu + CTA link), section ID `#dich-vu`, responsive (1 cột mobile → 2 → 3)
3. **WhyUs + HowItWorks** — 6 USP blocks với Lucide icons (Báo giá 30 phút, Hóa chất xanh, Cam kết hoàn tiền, Đội ngũ chuyên nghiệp, Hóa đơn VAT, Phục vụ Đà Nẵng), quy trình 3 bước với icons và descriptions

**Success Criteria:**
1. Hero visible và đẹp trên Samsung Galaxy S21 (375px) và MacBook 1440px
2. 5 service cards hiển thị đúng content, click CTA scroll đến form
3. 6 USP blocks đầy đủ, icons load đúng
4. 3-step process rõ ràng, không cần giải thích thêm
5. Tất cả text content tiếng Việt chuẩn, không dấu sai

**UI Hint:** yes

---

## Phase 3: Trust & Pricing Sections

**Goal:** Pricing table, Testimonials, Partners, và About sections live với mock data realistic. Hoàn chỉnh phần nội dung persuasion trước khi làm form.

**Requirements:**
- PRICE-01, PRICE-02, PRICE-03
- TEST-01, TEST-02, TEST-03
- PART-01, PART-02
- ABOUT-01, ABOUT-02, ABOUT-03

**Plans:**
1. **Pricing + Partners** — Bảng giá tham khảo 5 dịch vụ (table với giá từ...đến, đơn vị m²/lần/tháng), disclaimer text, CTA "Báo giá ngay" per service; Logo strip 6-8 đối tác mock (sử dụng placeholder icons hoặc tên công ty)
2. **Testimonials + About** — 5 testimonial cards mock (mix 4.5-5 sao, tên + chức vụ + công ty + nội dung realistic tiếng Việt, avatar initials), About section (paragraph giới thiệu Nhà Xanh), animated counters (100+ KH, 5 Dịch Vụ), danh sách quận Đà Nẵng phục vụ

**Success Criteria:**
1. Bảng giá có đủ 5 dịch vụ với giá tham khảo và disclaimer rõ ràng
2. 5 testimonials với Rating stars, tên, chức vụ, nội dung tự nhiên (không quá formal)
3. Counter animation hoạt động khi scroll vào viewport
4. Danh sách 7 quận Đà Nẵng hiển thị đúng
5. Logo strip / partner section không quá trống rỗng

**UI Hint:** yes

---

## Phase 4: Lead Capture, Animations & Mobile Polish

**Goal:** Contact form hoạt động (Formspree), animations scroll reveal, fully mobile-optimized, click-to-call tested.

**Requirements:**
- CONT-01, CONT-02, CONT-03, CONT-04
- RESP-01, RESP-02, RESP-03, RESP-04
- ANIM-01, ANIM-02, ANIM-03, ANIM-04

**Plans:**
1. **Contact Form + Map** — Form Formspree integration (useForm hook), 5 trường (tên, SĐT, dịch vụ dropdown, diện tích, ghi chú), success message sau submit, Google Maps lite embed (static ảnh → iframe on click), hotline + Zalo links bên cạnh form
2. **Animations + Mobile Polish** — Framer Motion `whileInView` scroll reveal cho tất cả sections, animated counter (AboutStats), hover effects trên cards/buttons, `prefers-reduced-motion` respect, mobile responsive audit (320px, 375px, 768px), click-to-call `tel:` link testing, floating button position fixes, iOS input zoom prevention (font-size ≥16px)

**Success Criteria:**
1. Form submit thành công → hiển thị "Cảm ơn! Chúng tôi sẽ liên hệ trong 30 phút" message
2. Click-to-call hoạt động trên iOS Safari và Chrome Android
3. Trang không có layout shift khi scroll (CLS visually clean)
4. Scroll reveal animations smooth, không giật lag trên mid-range Android
5. Form điền comfort trên iPhone SE (375px) — không bị zoom

**UI Hint:** yes

---

## Phase 5: Performance, SEO Audit & Launch

**Goal:** Lighthouse green across all metrics, static build clean, privacy policy page, ready for Google Ads traffic.

**Requirements:**
- PERF-01, PERF-02, PERF-03, PERF-04, PERF-05
- Privacy Policy page (required for Google Ads)

**Plans:**
1. **Performance Optimization** — Lighthouse audit (target: Performance ≥90, SEO 100, Accessibility ≥90), next/image preload hero, WebP conversion cho tất cả images, Zalo/GA4 lazyOnload verification, CLS fixes nếu có, bundle size check (`npm run build` output), `next.config.js` final tuning
2. **SEO Audit + Launch Prep** — JSON-LD validation (Google Rich Results Test), sitemap.xml review, robots.txt check, meta tags final check (title length <60 chars, meta desc <160 chars), Privacy Policy page content (tiếng Việt basic), README với deployment instructions (Vercel), final `next build` clean pass

**Success Criteria:**
1. Lighthouse Performance ≥90, SEO 100, Accessibility ≥90, Best Practices ≥90
2. LCP <2.5s trên mobile emulation (Moto G4 preset)
3. `next build` hoàn thành không có warnings quan trọng
4. `/chinh-sach-bao-mat` page accessible từ footer link
5. JSON-LD validates trên Google Rich Results Test
6. Reviewer có thể chạy `npm run build && npx serve out` và thấy trang live

---

## Requirement Traceability

| REQ-ID | Phase | Plan |
|--------|-------|------|
| FOUND-01 | 1 | Project Bootstrap |
| FOUND-02 | 1 | Brand & Design System |
| FOUND-03 | 1 | Brand & Design System |
| FOUND-04 | 1 | Layout Shell + SEO |
| LAYOUT-01 | 1 | Layout Shell + SEO |
| LAYOUT-02 | 1 | Layout Shell + SEO |
| LAYOUT-03 | 1 | Layout Shell + SEO |
| LAYOUT-04 | 1 | Layout Shell + SEO |
| SEO-01..04 | 1 | Layout Shell + SEO |
| SEO-05 | 1+5 | Privacy Policy (Phase 5) |
| HERO-01..04 | 2 | Hero Section |
| SVC-01..03 | 2 | Services Section |
| WHY-01..02 | 2 | WhyUs + HowItWorks |
| HOW-01..02 | 2 | WhyUs + HowItWorks |
| PRICE-01..03 | 3 | Pricing + Partners |
| TEST-01..03 | 3 | Testimonials + About |
| PART-01..02 | 3 | Pricing + Partners |
| ABOUT-01..03 | 3 | Testimonials + About |
| CONT-01..04 | 4 | Contact Form + Map |
| RESP-01..04 | 4 | Animations + Mobile Polish |
| ANIM-01..04 | 4 | Animations + Mobile Polish |
| PERF-01..05 | 5 | Performance Optimization |

---

*Roadmap created: 2026-03-30*
