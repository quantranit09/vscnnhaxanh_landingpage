<!-- GSD:project-start source:PROJECT.md -->
## Project

**Vệ Sinh Công Nghiệp Nhà Xanh — Landing Page**

Landing page cho **Công ty Vệ Sinh Công Nghiệp Nhà Xanh**, hoạt động tại Đà Nẵng. Mục tiêu chính: tạo leads (hotline click-to-call + form báo giá + Zalo/Messenger), xây dựng thương hiệu uy tín, và trình bày dịch vụ rõ ràng cho cả khách hàng B2B (văn phòng, nhà xưởng, công trình) lẫn B2C (hộ gia đình).

**Core Value:** **Biến mọi lượt truy cập thành cuộc gọi hoặc liên hệ** — trang phải nhanh, thuyết phục, và có CTA nổi bật ở mọi scroll position.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommended Stack
| Tool | Version | Rationale | Confidence |
|------|---------|-----------|------------|
| Next.js | 15.x (App Router) | Static export + RSC + Metadata API = best SEO baseline for 2025 | High |
| React | 19.x | Required by Next.js 15, Server Components reduce client JS | High |
| Tailwind CSS | 3.4.x | v4 still has rough ecosystem edges w/ Next.js; v3 is proven stable | High |
| Framer Motion | 11.x | Best scroll animations for React, tree-shakable, lazy-loadable | High |
| Be Vietnam Pro | Google Fonts | Designed for Vietnamese diacritics, professional, modern | High |
| @formspree/react | 2.x | No-backend form handling, free tier (50 submissions/mo), spam protection | High |
| next-export-opt-images | 2.x | Build-time image optimization for static export (Next/Image won't work without) | High |
| Lucide React | latest | Lightweight SVG icons, tree-shakable | High |
| Google Analytics 4 | — | Required to track Google Ads conversions | High |
## Key Decisions
### 1. Next.js 15 App Router + `output: 'export'`
- `next.config.js`: `output: 'export'`, `trailingSlash: true`
- Generates pure static HTML — hostable on Vercel, Netlify, GitHub Pages, any CDN
- App Router gives Metadata API (`generateMetadata`) for per-section SEO control
- **Caveat:** No dynamic routes, no server-side APIs — fine for a landing page
### 2. Tailwind CSS v3 (not v4)
- Tailwind v4 has breaking changes with PostCSS/Next.js integration as of Q1 2025
- v3.4 is battle-tested, huge plugin ecosystem (typography, forms, animate)
- Plenty fast enough for a landing page build
### 3. Formspree over EmailJS
- Formspree has dedicated React library (`useForm` hook) — cleaner integration
- Better spam protection (reCAPTCHA built-in on paid, hCaptcha on free)
- Free: 50 submissions/month — sufficient for initial launch
- Upgrade path clear if lead volume grows
### 4. Framer Motion for animations
- `whileInView` prop for scroll reveal — zero config needed
- Lazy load for mobile: `import { motion, LazyMotion, domAnimation }` pattern
- Avoid heavy animations on mobile (detect via `useReducedMotion`)
### 5. Zalo Chat Widget
- Load via `next/script` with `strategy="lazyOnload"` — does NOT block render
- Wrap in `'use client'` component, load only after page is interactive
- **Do not** use inline `<script>` in layout — will block FCP
### 6. next/Image in static export
- Set `unoptimized: true` globally OR use `next-export-optimize-images`
- `next-export-optimize-images` generates WebP at build time — better performance
- Always use `width` + `height` props to prevent CLS
## What NOT to Use
| Tool | Why NOT |
|------|---------|
| Tailwind CSS v4 | PostCSS integration fragile w/ Next.js 15 as of March 2025 |
| Material UI / Ant Design | Too heavy, large JS bundle, slow CWV |
| Pages Router | Legacy — new projects use App Router |
| React Hook Form | Overkill for 1 form — Formspree's `useForm` is sufficient |
| GSAP (free tier) | License restrictions; Framer Motion is better for this use case |
| AOS (Animate on Scroll) | jQuery-era library, not React-native |
## Version Pinning (package.json)
## Quality Gates
- [x] Versions are current for Q1 2025
- [x] Rationale explains WHY, not just WHAT
- [x] Anti-patterns called out with reasoning
- [x] Confidence levels assigned
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
