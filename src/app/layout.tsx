import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import Script from 'next/script'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'
import { FloatingCTA } from '@/components/layout'
import { JsonLd } from '@/components/JsonLd'
import './globals.css'

// ─── TRACKING IDs ─────────────────────────────────────────────────────────────
const GTM_ID      = 'GTM-K6DGNWC5'     // Google Tag Manager Container ID
const GA4_ID      = 'G-PSXK2E5C55'     // Google Analytics 4
const GOOGLE_ADS_ID = 'AW-11498445959' // Google Ads Conversion ID
// Formspree Form ID: xbdpyjdg (dùng trong Contact.tsx)
// ──────────────────────────────────────────────────────────────────────────────

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-be-vietnam-pro',
})

export const metadata: Metadata = {
  title: 'Công ty TNHH TM XD DV Nhà Xanh | Dịch vụ vệ sinh Đà Nẵng',
  description:
    'Dịch vụ vệ sinh công nghiệp uy tín tại Đà Nẵng: văn phòng, nhà xưởng, sau xây dựng, nhà cửa, định kỳ. Hóa chất xanh an toàn. Báo giá nhanh. Hotline: 0934.997.265',
  keywords: [
    'vệ sinh công nghiệp đà nẵng',
    'dịch vụ vệ sinh văn phòng đà nẵng',
    'vệ sinh nhà xưởng đà nẵng',
    'vệ sinh sau xây dựng đà nẵng',
    'dọn dẹp nhà cửa đà nẵng',
    'công ty vệ sinh uy tín đà nẵng',
  ],
  openGraph: {
    title: 'Công ty TNHH TM XD DV Nhà Xanh | Vệ Sinh Công Nghiệp Đà Nẵng',
    description:
      'Dịch vụ vệ sinh công nghiệp uy tín tại Đà Nẵng. Báo giá trong 30 phút. Hóa chất xanh an toàn.',
    locale: 'vi_VN',
    type: 'website',
    siteName: 'Công ty TNHH TM XD DV Nhà Xanh',
    url: 'https://vscnnhaxanhdanang.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Công ty TNHH TM XD DV Nhà Xanh | Vệ Sinh chuyên nghiệp',
    description:
      'Dịch vụ vệ sinh công nghiệp uy tín tại Đà Nẵng. Báo giá trong 30 phút.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://vscnnhaxanhdanang.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={beVietnamPro.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End GTM noscript */}
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <JsonLd />

        {/* ── Google Tag Manager ── */}
        {/* GTM-K6DGNWC5 quản lý: GA4 (G-PSXK2E5C55) + Google Ads (AW-11498445959) */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* ── Google Tag (gtag.js) — GA4 + Google Ads xác minh domain ── */}
        {/* Cần thiết để Google Ads detect tag trên website */}
        <Script
          id="gtag-js"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        {/* ── END Scripts ── */}
      </body>
    </html>
  )
}
