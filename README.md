# Vệ Sinh Công Nghiệp Nhà Xanh - Landing Page

Dự án Landing Page tối ưu hóa chuyển đổi, được xây dựng dựa trên thiết kế chuẩn UI/UX cho doanh nghiệp B2B & B2C, hiệu suất Load siêu nhanh (Core Web Vitals >= 90), và hoàn toàn có thể chạy chiến dịch Google Ads.

## 🛠 Tech Stack
- Frontend Framework: **Next.js 16 (App Router)**
- Styling: **Tailwind CSS v4** (CSS-first)
- Animations: **Framer Motion**
- Icons: **Lucide React**
- Form Handling: **@formspree/react**
- Building & Bundling: Static Export Mode (`output: 'export'`) & Fast Refresh với Webpack/Turbopack

---

## 🚀 Hướng Dẫn Chạy Cục Bộ (Local Development)

### Yêu Cầu Môi Trường
- Node.js >= 20
- npm hoặc yarn

### Các Bước Cài Đặt

1. **Cài dependencies:**
```bash
yarn install
# hoặc npm install
```

2. **Chạy Dev Server:**
```bash
yarn dev
```
Truy cập `http://localhost:3000` trên trình duyệt.

3. **Build thành bản Production:**
```bash
npm run build
```
Lệnh trên sẽ xuất ra thư mục `out/` lưu trữ toàn bộ file HTML, CSS tĩnh (SSG). Có thể test server Build bằng:
```bash
npx serve out
```

---

## ⚙️ Hướng Dẫn Tích Hợp Form (Formspree)

Form liên hệ đã được làm sẵn Component và Logic, nhưng bạn cần tài khoản Formspree để nhận mail khi khách điền thông tin.

1. Vào [Formspree.io](https://formspree.io/) tạo 1 tài khoản (Miễn phí 50 submits/tháng).
2. Tạo New Project -> Create Form (Endpoint tên "Contact").
3. Copy **Form ID** (Chuỗi khoảng 8 kí tự ví dụ: `xqkkwepz`).
4. Mở file `src/sections/Contact.tsx`.
5. Tìm đoạn:
```tsx
const [state, handleSubmit] = useForm("mnnjokwe") // Thay bằng ID Formspree thật
```
6. Paste ID ở Bước 3 vào đó là xong!

---

## 🌐 Hướng Dẫn Triển Khai (Deploy)

Dự án đã sử dụng chế độ `Export Static` chuẩn chỉnh. Khuyến khích Deploy lên **Vercel**, **Netlify**, hoặc **GitHub Pages**.

### Deploy Lên Vercel (Khuyên Dùng)
1. Đẩy Code lên Github cá nhân.
2. Vào Vercel.com, Import Github Repository.
3. Phần Settings giữ hệt các thông số mặc định.
4. Bấm `Deploy` (Vercel sẽ tự chạy `npm run build` và host folder `out`).

### Gắn Mã Theo Dõi (Google Analytics 4 / Google Ads)
Nếu bạn chạy Ads và muốn gắn G-tag Analytics, hãy mở file `src/app/layout.tsx`. Kéo xuống phía dưới `<JsonLd />` đã có sẵn skeleton comment cho GA4. Chỉ cần tháo comment `...` và lắp Mã G-tag thật của bạn vào. 
Luôn dùng `<Script strategy="lazyOnload">` để không làm trì trệ tốc độ tải trang nha! 

--- 

_Author: Hỗ trợ tự động qua Agent._
