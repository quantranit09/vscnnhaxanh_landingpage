import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import Script from 'next/script'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'
import { FloatingCTA } from '@/components/layout'
import { JsonLd } from '@/components/JsonLd'
import './globals.css'

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
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <JsonLd />
        
        {/* Third-party Script Skeletons: 
            Dán mã Google Analytics / Zalo / Facebook Pixel ở đây.
            Sử dụng strategy="lazyOnload" (để không bị dính error PageSpeed / Lighthouse FCP block)
        */}
        {/* 
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        */}
      </body>
    </html>
  )
}
