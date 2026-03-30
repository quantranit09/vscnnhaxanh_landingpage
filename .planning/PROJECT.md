# Vệ Sinh Công Nghiệp Nhà Xanh — Landing Page

## What This Is

Landing page cho **Công ty Vệ Sinh Công Nghiệp Nhà Xanh**, hoạt động tại Đà Nẵng. Mục tiêu chính: tạo leads (hotline click-to-call + form báo giá + Zalo/Messenger), xây dựng thương hiệu uy tín, và trình bày dịch vụ rõ ràng cho cả khách hàng B2B (văn phòng, nhà xưởng, công trình) lẫn B2C (hộ gia đình).

## Core Value

**Biến mọi lượt truy cập thành cuộc gọi hoặc liên hệ** — trang phải nhanh, thuyết phục, và có CTA nổi bật ở mọi scroll position.

## Context

- **Thương hiệu:** Vệ Sinh Công Nghiệp Nhà Xanh
- **Slogan (đề xuất):** "Sạch Chuẩn — Nhanh Gọn — An Tâm"
- **Địa bàn hoạt động:** Thành phố Đà Nẵng (toàn thành phố)
- **Màu sắc thương hiệu:** Xanh lá (#2D8B3A primary, #5AB645 secondary), Trắng sạch (#FFFFFF), Xám nhẹ (#F5F7F5)
- **Logo:** Có sẵn (ngôi nhà xanh + lá cây + chữ NHÀ XANH)
- **Ngôn ngữ:** Tiếng Việt
- **Số khách hàng đã phục vụ:** 100+

## Target Users

### Primary — B2B
- Quản lý văn phòng, tòa nhà văn phòng tại Đà Nẵng
- Chủ nhà máy, nhà xưởng, kho bãi (khu CN Hòa Khánh, Khu CN An Đồn...)
- Chủ thầu xây dựng (cần vệ sinh sau xây dựng)
- Quản lý khách sạn, resort, khu du lịch
- Chuỗi cửa hàng, siêu thị

**Nhu cầu:** Hợp đồng dài hạn, báo giá nhanh, đảm bảo chất lượng đồng đều, có hóa đơn VAT

### Secondary — B2C
- Hộ gia đình cần dọn dẹp tổng thể, dọn định kỳ
- Người vừa nhận nhà mới sau xây dựng / sửa chữa
- Chủ căn hộ, nhà trọ cần vệ sinh trước khi cho thuê

**Nhu cầu:** Đặt lịch linh hoạt, giá rõ ràng, tin tưởng người lạ vào nhà

## Services (5 nhóm)

| # | Dịch vụ | Target | Đặc điểm |
|---|---------|--------|-----------|
| 1 | Vệ sinh văn phòng | B2B | Định kỳ hoặc 1 lần, có thể ngoài giờ hành chính |
| 2 | Vệ sinh sau xây dựng | B2B/B2C | Cao điểm, cần thiết bị chuyên dụng |
| 3 | Vệ sinh nhà xưởng / nhà máy | B2B | Quy mô lớn, hợp đồng dài hạn |
| 4 | Dọn dẹp nhà cửa | B2C | Linh hoạt, tin tưởng là yếu tố chính |
| 5 | Dọn dẹp định kỳ | B2B/B2C | Gói tháng/quý, ưu đãi hơn dịch vụ 1 lần |

## CTAs & Contact

- **Primary CTA:** Click-to-call (Hotline nổi bật, sticky trên mobile)
- **Secondary CTAs:** Form báo giá (họ tên, SĐT, loại dịch vụ, diện tích, ghi chú) + Zalo + Messenger
- **Floating action:** Nút Zalo/Hotline floating cố định góc phải màn hình

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Export:** `output: 'export'` — static HTML/CSS/JS, không cần server
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Be Vietnam Pro — đẹp, hiện đại, tiếng Việt chuẩn)
- **Images:** Next/Image với placeholder
- **Form:** React Hook Form (client-side) + mailto / Formspree / Google Sheets (không cần backend)
- **SEO:** next/metadata, sitemap, robots.txt, JSON-LD (LocalBusiness schema)
- **Animation:** Framer Motion (nhẹ, scroll reveal)
- **Hosting:** Vercel (recommended) hoặc bất kỳ static host

## Content Strategy

- **Pricing:** Bảng giá tham khảo (theo m²/công trình điển hình) + ghi chú "Giá chi tiết sau khảo sát thực tế"
- **Social Proof:** 100+ khách hàng, 5 testimonials (mock realistic), logo đối tác (mock)
- **USP Focus:** Hóa chất xanh an toàn, đội ngũ chuyên nghiệp, báo giá trong 30 phút, phục vụ toàn Đà Nẵng
- **Trust signals:** Cam kết hoàn tiền nếu không hài lòng, bảo hiểm rủi ro, hóa đơn VAT

## Page Structure (Single Page)

1. **Header:** Logo + Nav + CTA hotline sticky
2. **Hero:** Tagline mạnh + ảnh trước/sau + CTA double (Gọi ngay + Báo giá)
3. **Services:** 5 dịch vụ với icon + mô tả ngắn + CTA
4. **USPs:** 4–6 điểm khác biệt (icon + text)
5. **How it works:** 3 bước đơn giản (Liên hệ → Khảo sát → Vệ sinh)
6. **Pricing:** Bảng giá tham khảo theo dịch vụ
7. **Testimonials:** 5 đánh giá mock (có ảnh avatar, tên, công ty)
8. **Partners/Clients:** Logo đối tác mock
9. **About:** Giới thiệu công ty ngắn + con số (100+ KH, X năm, ...)
10. **Contact Form + Map:** Form báo giá + Google Maps embed (Đà Nẵng)
11. **Footer:** Địa chỉ, giờ phục vụ, social links, copyright

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Trang load nhanh (<3s trên 3G mobile)
- [ ] Mobile-first, responsive hoàn toàn
- [ ] CTA click-to-call hoạt động trên mobile
- [ ] Form báo giá gửi được (Formspree hoặc mailto)
- [ ] Zalo floating button
- [ ] Bảng giá tham khảo rõ ràng
- [ ] SEO cơ bản: title, meta description, OG tags, LocalBusiness schema
- [ ] Trang có thể build sang static files (`next build && next export`)
- [ ] Màu sắc, font nhất quán theo thương hiệu Nhà Xanh
- [ ] Content tiếng Việt chuẩn, thuyết phục

### Out of Scope

- Backend server / database — không cần cho v1
- Trang đặt lịch online tự động — v2
- Multi-language (EN) — v2
- Blog / tin tức — v2
- Hệ thống quản lý booking — v2
- Thanh toán online — v2

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js static export | SEO tốt, host mọi nơi, free | — Confirmed |
| Tailwind CSS | Nhanh, nhất quán, dễ maintain | — Confirmed |
| Single page (không multi-page) | Landing page tập trung, không phân tán attention | — Confirmed |
| Formspree cho form | Không cần backend, miễn phí tier | — Pending |
| Mock data cho testimonials + partners | Chưa có data thật, cần placeholder realistic | — Confirmed |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-30 after initialization*
