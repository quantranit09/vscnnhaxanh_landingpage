# Pitfalls Research — Nhà Xanh Landing Page

## Critical Pitfalls (project-killers)

### P1 — next/Image fails in static export without config
**Problem:** `next/image` throws build errors with `output: 'export'` unless configured correctly.  
**Symptom:** Build fails with "Image Optimization using default loaders is not compatible with `{ output: 'export' }`"  
**Fix:** Use `next-export-optimize-images` package OR set `images: { unoptimized: true }` in `next.config.js` (latter hurts CWV)  
**Phase:** Phase 1 (foundation setup)

### P2 — Formspree CORS/submission errors
**Problem:** Formspree free accounts have domain whitelist requirements. Dev form works, production fails.  
**Fix:** Add production domain to Formspree form settings. Test with actual domain, not localhost.  
**Phase:** Phase 4

### P3 — Vietnamese font rendering broken by font-display
**Problem:** System fonts don't support Vietnamese diacritics properly (đ, ơ, ư, ẫ, etc.). Using `font-display: block` delays render.  
**Fix:** `font-display: swap` + `preconnect` to Google Fonts. Pre-load Be Vietnam Pro with unicode range for Vietnamese.  
**Phase:** Phase 1

### P4 — Static export breaks anchor scroll on Next.js
**Problem:** `<Link href="/#contact">` may not scroll correctly in static export mode.  
**Fix:** Use native `<a href="#contact">` or `document.getElementById().scrollIntoView()` for in-page nav. NOT Next.js `<Link>` for hash links.  
**Phase:** Phase 2

---

## Google Ads Specific Pitfalls

### GA1 — "Giá rẻ nhất Đà Nẵng", "Số 1" claims
**Problem:** Google Ads policy forbids superlative claims without proof.  
**Fix:** Use "Giá hợp lý", "Uy tín", "Chất lượng cao" instead of ranking claims.

### GA2 — Landing page ≠ ad copy
**Problem:** If ad says "Vệ sinh văn phòng Đà Nẵng" but page doesn't prominently show that phrase, Quality Score drops.  
**Fix:** H1 must match primary keyword. Each ad group ideally has dedicated section visible above fold.

### GA3 — Popup on page load
**Problem:** Google penalizes landing pages with intrusive interstitials (popups immediately on load).  
**Fix:** NO popup on load. Floating CTA button is fine. Exit-intent popups are borderline — skip for v1.

### GA4 — Slow mobile load (>3s LCP)
**Problem:** Google Ads "Landing Page Experience" directly impacts ad rank and CPC.  
**Fix:** Target LCP <2.5s on mobile 3G. Audit with Lighthouse before launch.

### GA5 — Missing phone number / contact info
**Problem:** Local service ads require visible phone number. Missing = policy issue + trust drop.  
**Fix:** Hotline in Header (sticky), in Hero, and in Footer. Click-to-call `tel:` links on mobile.

### GA6 — No Privacy Policy link
**Problem:** Google Ads requires privacy policy accessible from landing page.  
**Fix:** Footer link to `/chinh-sach-bao-mat` — even a simple static page is fine.

---

## Vietnamese Market Pitfalls

### VM1 — Chỉ có form, không có hotline
**Problem:** Vietnamese users (especially B2B in Đà Nẵng) strongly prefer calling — forms feel bureaucratic.  
**Fix:** Phone number must be the PRIMARY CTA. Form is secondary.

### VM2 — Giá không có = khách thoát
**Problem:** "Liên hệ để báo giá" with NO reference price = suspicious, khách thoát.  
**Fix:** Show reference table "từ X.000đ/m²" — with clear "giá thực tế sau khảo sát" disclaimer.

### VM3 — Thiếu khu vực phục vụ cụ thể
**Problem:** "Phục vụ toàn quốc" = không tin tưởng cho dịch vụ địa phương.  
**Fix:** Ghi rõ "Phục vụ toàn thành phố Đà Nẵng" và liệt kê quận: Hải Châu, Thanh Khê, Sơn Trà, Ngũ Hành Sơn, Liên Chiểu, Cẩm Lệ, Hòa Vang.

### VM4 — Fake reviews quá lố
**Problem:** Reviews với 5 sao tất cả + ngôn từ quá hoa mỹ = không thật, khách biết ngay.  
**Fix:** Mix 4.8★, 4.5★ reviews. Ngôn từ giản dị, có đề cập vấn đề cụ thể ("vệ sinh sau sửa nhà rất sạch, chỉ có điểm này...").

### VM5 — Google Maps không chính xác
**Problem:** Embed map sai địa chỉ hoặc không có marker = mất trust.  
**Fix:** Tạo Google Business Profile trước, embed từ GBP map. Hoặc dùng tọa độ chính xác.

---

## Technical Pitfalls

### T1 — Zalo widget blocks page render
**Problem:** Zalo chat JavaScript chèn vào `<head>` block FCP lên 1-2 giây.  
**Fix:** Load với `next/script strategy="lazyOnload"` — chỉ load sau khi trang interactive.

### T2 — Google Maps iframe chậm
**Problem:** Google Maps iframe mặc định load tất cả JS của Google = nặng, ảnh hưởng CLS.  
**Fix:** Dùng "lite embed" pattern — show static image, replace bằng iframe chỉ khi user click vào map.

### T3 — Framer Motion trên mobile chậm
**Problem:** Import toàn bộ Framer Motion = 100KB+ JS cho mobile.  
**Fix:** Dùng `LazyMotion` + `domAnimation` (35KB). Disable animations khi `prefers-reduced-motion`.

### T4 — images không có width/height = CLS
**Problem:** Next.js static export cần khai báo width/height cho mọi `<img>` hoặc `<Image>`. Thiếu = layout shift = CLS cao.  
**Fix:** ALWAYS set `width` và `height` props. Dùng `fill` prop với parent `position: relative` cho responsive images.

### T5 — CSS custom properties conflict với Tailwind
**Problem:** Khai báo CSS variables trong `:root` có thể conflict với Tailwind v3's JIT engine.  
**Fix:** Dùng `tailwind.config.js` để extend theme thay vì CSS variables thuần.

### T6 — `trailingSlash: true` cần thiết cho static export
**Problem:** Không có `trailingSlash: true` → `/about` → 404 trên nhiều static hosts (GitHub Pages, S3).  
**Fix:** Set `trailingSlash: true` trong `next.config.js` ngay từ đầu.

---

## Prevention Strategies Summary

| Pitfall | Phase to Address | Priority |
|---------|-----------------|---------|
| next/Image static export | Phase 1 | 🔴 Critical |
| trailingSlash config | Phase 1 | 🔴 Critical |
| Font rendering Vietnamese | Phase 1 | 🟡 High |
| No popup on load | Phase 2 | 🟡 High |
| Phone number PRIMARY CTA | Phase 2 | 🔴 Critical |
| Reference prices visible | Phase 3 | 🟡 High |
| Zalo lazyOnload | Phase 1/4 | 🟡 High |
| Realistic mock reviews | Phase 3 | 🟡 High |
| Google Maps lite embed | Phase 4 | 🟢 Medium |
| Privacy Policy page | Phase 5 | 🟡 High |
| Lighthouse audit before launch | Phase 5 | 🔴 Critical |

## Quality Gates

- [x] Pitfalls are specific to this domain (not generic advice)
- [x] Prevention strategies are actionable
- [x] Phase mapping included for each pitfall
- [x] Google Ads policy risks explicitly called out
