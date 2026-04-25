import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/data/services'
import { ServicePage } from '@/components/ServicePage'

const SERVICE_SLUG = 've-sinh-sau-xay-dung-da-nang'

export const metadata: Metadata = {
  title: 'Vệ Sinh Sau Xây Dựng Đà Nẵng | Nhà Xanh – Từ 15,000đ/m²',
  description:
    'Vệ sinh sau xây dựng, sau cải tạo tại Đà Nẵng: tẩy xi măng, sơn, keo silicon, đánh bóng sàn đá. Bàn giao trong 24h. Từ 15,000đ/m². Hotline: 0934.997.265',
  alternates: {
    canonical: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
  },
  openGraph: {
    title: 'Vệ Sinh Sau Xây Dựng Đà Nẵng | Nhà Xanh – Bàn Giao 24h',
    description: 'Vệ sinh sau xây dựng, cải tạo tại Đà Nẵng. Tẩy xi măng, đánh bóng sàn đá. Bàn giao trong 24h.',
    url: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Vệ Sinh Sau Xây Dựng Đà Nẵng – Nhà Xanh' }],
  },
}

export default function Page() {
  const service = getServiceBySlug(SERVICE_SLUG)
  if (!service) return notFound()
  return <ServicePage service={service} />
}
