import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
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
  title: 'Vệ Sinh Công Nghiệp Nhà Xanh Đà Nẵng | Báo Giá Trong 30 Phút',
  description:
    'Dịch vụ vệ sinh công nghiệp uy tín tại Đà Nẵng: văn phòng, nhà xưởng, sau xây dựng, nhà cửa, định kỳ. Hóa chất xanh an toàn. Báo giá nhanh. Hotline: 0905-000-000',
  keywords: [
    'vệ sinh công nghiệp đà nẵng',
    'dịch vụ vệ sinh văn phòng đà nẵng',
    'vệ sinh nhà xưởng đà nẵng',
    'vệ sinh sau xây dựng đà nẵng',
    'dọn dẹp nhà cửa đà nẵng',
    'công ty vệ sinh uy tín đà nẵng',
  ],
  openGraph: {
    title: 'Vệ Sinh Công Nghiệp Nhà Xanh | Đà Nẵng',
    description:
      'Dịch vụ vệ sinh công nghiệp uy tín tại Đà Nẵng. Báo giá trong 30 phút. Hóa chất xanh an toàn.',
    locale: 'vi_VN',
    type: 'website',
    siteName: 'Nhà Xanh Vệ Sinh Công Nghiệp',
    url: 'https://nhaxanh-danang.vn',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vệ Sinh Công Nghiệp Nhà Xanh Đà Nẵng',
    description:
      'Dịch vụ vệ sinh công nghiệp uy tín tại Đà Nẵng. Báo giá trong 30 phút.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://nhaxanh-danang.vn',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <JsonLd />
      </body>
    </html>
  )
}
