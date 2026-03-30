# Requirements — Nhà Xanh Landing Page v1

## v1 Requirements

### FOUNDATION — Project Setup & Config
- [x] **FOUND-01**: Project Next.js 15 được khởi tạo với `output: 'export'`, `trailingSlash: true`, và `next-export-optimize-images` cấu hình đúng
- [x] **FOUND-02**: Tailwind CSS 3.4 cấu hình với brand tokens (màu xanh lá Nhà Xanh, font Be Vietnam Pro)
- [x] **FOUND-03**: Be Vietnam Pro load từ Google Fonts với `font-display: swap` và preconnect
- [x] **FOUND-04**: Layout root (Header + Footer + FloatingCTA) được tạo và hiển thị trên mọi màn hình

### LAYOUT — Header & Navigation
- [ ] **LAYOUT-01**: Header sticky hiển thị logo Nhà Xanh + menu điều hướng (smooth scroll đến sections)
- [ ] **LAYOUT-02**: Header chứa hotline rõ ràng, click-to-call (`tel:`) hoạt động trên mobile
- [ ] **LAYOUT-03**: Footer hiển thị địa chỉ, giờ phục vụ, hotline, Zalo, Messenger, copyright
- [ ] **LAYOUT-04**: Floating button Zalo + hotline cố định góc phải màn hình, luôn hiển thị khi scroll

### HERO — Màn hình đầu tiên
- [ ] **HERO-01**: Hero section có H1 chứa keyword "vệ sinh công nghiệp Đà Nẵng" và tagline thương hiệu
- [ ] **HERO-02**: Hero có ảnh/visual minh họa dịch vụ (có thể dùng placeholder ảnh chất lượng cao)
- [ ] **HERO-03**: Hero có 2 CTA: "Gọi ngay [Hotline]" (primary) và "Báo giá miễn phí" (secondary, scroll to form)
- [ ] **HERO-04**: Hiển thị badge/counter "100+ khách hàng tin dùng" hoặc tương đương trên hero

### SERVICES — 5 Dịch vụ
- [ ] **SVC-01**: Grid 5 dịch vụ: Vệ sinh văn phòng, Vệ sinh sau xây dựng, Vệ sinh nhà xưởng, Dọn dẹp nhà cửa, Dọn dẹp định kỳ
- [ ] **SVC-02**: Mỗi service card có icon, tên dịch vụ, mô tả ngắn 2-3 câu, và link CTA
- [ ] **SVC-03**: Section Services có section ID để có thể scroll đến từ nav

### WHY US — Điểm mạnh
- [ ] **WHY-01**: Hiển thị 6 USP với icon: Báo giá 30 phút, Hóa chất xanh, Cam kết hoàn tiền, Đội ngũ chuyên nghiệp, Hóa đơn VAT, Phục vụ toàn Đà Nẵng
- [ ] **WHY-02**: Layout responsive: 2 cột mobile, 3 cột tablet+, 6 items total

### HOW IT WORKS — Quy trình
- [ ] **HOW-01**: Section "Quy trình 3 bước" hiển thị rõ: (1) Liên hệ/Khảo sát miễn phí → (2) Báo giá & Lên kế hoạch → (3) Vệ sinh & Bàn giao
- [ ] **HOW-02**: Mỗi bước có icon, số bước, tiêu đề, mô tả ngắn

### PRICING — Bảng giá tham khảo
- [ ] **PRICE-01**: Bảng giá tham khảo cho 5 dịch vụ với đơn vị (m²/lần, ngày, căn hộ)
- [ ] **PRICE-02**: Có ghi chú rõ "Giá trên là tham khảo. Giá chính xác sau khi khảo sát thực tế"
- [ ] **PRICE-03**: Mỗi dịch vụ có CTA "Báo giá ngay" bên cạnh

### TESTIMONIALS — Đánh giá
- [ ] **TEST-01**: 5 testimonials mock với: tên, chức vụ/loại khách, nội dung đánh giá thực tế, số sao (mix 4.5-5)
- [ ] **TEST-02**: Carousel hoặc grid 3 cột hiển thị testimonials, mobile-friendly
- [ ] **TEST-03**: Testimonials có ảnh avatar placeholder (hoặc initial letter avatar)

### PARTNERS — Đối tác / Khách hàng
- [ ] **PART-01**: Logo strip hiển thị 6-8 logo đối tác mock (placeholder business logos)
- [ ] **PART-02**: Section "Đã phục vụ" với các loại khách hàng: Văn phòng, Khách sạn, Nhà máy, Hộ gia đình

### ABOUT — Giới thiệu
- [ ] **ABOUT-01**: Section giới thiệu ngắn công ty Nhà Xanh (mission, years, approach)
- [ ] **ABOUT-02**: Animated counters: "100+ Khách hàng", "5 Dịch vụ", "Đà Nẵng" service area
- [ ] **ABOUT-03**: Khu vực phục vụ liệt kê rõ các quận: Hải Châu, Thanh Khê, Sơn Trà, Ngũ Hành Sơn, Liên Chiểu, Cẩm Lệ, Hòa Vang

### CONTACT — Form & Bản đồ
- [ ] **CONT-01**: Form báo giá với các trường: Họ tên, Số điện thoại, Loại dịch vụ (dropdown), Diện tích ước tính, Ghi chú (optional)
- [ ] **CONT-02**: Form submit qua Formspree, hiển thị thông báo thành công sau khi gửi
- [ ] **CONT-03**: Google Maps embed hiển thị khu vực Đà Nẵng (lite embed pattern — click to load)
- [ ] **CONT-04**: Hotline số to và Zalo link hiển thị bên cạnh form

### SEO — Tối ưu tìm kiếm
- [ ] **SEO-01**: `<title>` và meta description chứa keyword "vệ sinh công nghiệp Đà Nẵng"
- [ ] **SEO-02**: JSON-LD LocalBusiness schema đúng chuẩn với tên, địa chỉ (Đà Nẵng), phone, areaServed
- [ ] **SEO-03**: OG tags đầy đủ (og:title, og:description, og:image 1200x630)
- [ ] **SEO-04**: `sitemap.xml` và `robots.txt` được generate tự động khi build
- [ ] **SEO-05**: Trang có `/chinh-sach-bao-mat` (Privacy Policy) để dùng với Google Ads

### PERFORMANCE — Tốc độ & CWV
- [ ] **PERF-01**: LCP <2.5s trên mobile (Lighthouse score ≥90 performance)
- [ ] **PERF-02**: CLS <0.1 (tất cả images có width + height, không có layout shift)
- [ ] **PERF-03**: Hero image preloaded với `priority` prop, format WebP
- [ ] **PERF-04**: Zalo widget và GA4 load với `strategy="lazyOnload"`, không block render
- [ ] **PERF-05**: `next build` hoàn thành không có lỗi, output là static files

### RESPONSIVE — Mobile-first
- [ ] **RESP-01**: Tất cả sections responsive trên 320px, 375px, 768px, 1280px
- [ ] **RESP-02**: Click-to-call `tel:` link hoạt động trên iOS và Android
- [ ] **RESP-03**: Floating Zalo/hotline button không che khuất nội dung quan trọng trên mobile
- [ ] **RESP-04**: Form báo giá dễ điền trên mobile (input size ≥16px, không zoom iOS)

### ANIMATION — Micro-interactions
- [ ] **ANIM-01**: Scroll reveal animation trên các sections chính (Framer Motion `whileInView`)
- [ ] **ANIM-02**: Animated number counter cho stats (100+, etc.) khi scroll vào viewport
- [ ] **ANIM-03**: Hover effects trên service cards và buttons
- [ ] **ANIM-04**: Animations disabled cho `prefers-reduced-motion`

---

## v2 Requirements (Deferred)

- Trang đặt lịch online tự động (booking calendar)
- Blog / tin tức vệ sinh
- Multi-language (EN cho khách nước ngoài)
- Hệ thống quản lý lead/CRM tích hợp
- Thanh toán online
- Chatbot AI tư vấn
- Trang riêng cho từng dịch vụ (để chạy nhiều ad group)
- Khu vực riêng cho B2B (landing page doanh nghiệp)

---

## Out of Scope

| Feature | Lý do loại trừ |
|---------|----------------|
| Backend server / API | Landing page thuần static, không cần server |
| User authentication | Không có portal khách hàng trong v1 |
| Online booking tự động | Phức tạp, v2 |
| Blog section | Phân tán focus của landing page v1 |
| Thanh toán online | Không phù hợp B2B cleaning (cần khảo sát trước) |
| Multi-language | Thị trường Đà Nẵng là tiếng Việt chính |
| Live chat (real-time) | Thay bằng Zalo + Hotline |

---

## Traceability

| REQ-ID | Phase | Status |
|--------|-------|--------|
| FOUND-01..04 | Phase 1 | — |
| LAYOUT-01..04 | Phase 1 | — |
| HERO-01..04 | Phase 2 | — |
| SVC-01..03 | Phase 2 | — |
| WHY-01..02 | Phase 2 | — |
| HOW-01..02 | Phase 2 | — |
| PRICE-01..03 | Phase 3 | — |
| TEST-01..03 | Phase 3 | — |
| PART-01..02 | Phase 3 | — |
| ABOUT-01..03 | Phase 3 | — |
| CONT-01..04 | Phase 4 | — |
| SEO-01..05 | Phase 1+5 | — |
| PERF-01..05 | Phase 4+5 | — |
| RESP-01..04 | Phase 4 | — |
| ANIM-01..04 | Phase 4 | — |
