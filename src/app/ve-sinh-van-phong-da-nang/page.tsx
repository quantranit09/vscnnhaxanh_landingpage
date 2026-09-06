import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/data/services'
import { ServicePage } from '@/components/ServicePage'

const SERVICE_SLUG = 've-sinh-van-phong-da-nang'

export const metadata: Metadata = {
  title: {
    absolute: 'Vệ Sinh Văn Phòng Đà Nẵng | Nhà Xanh',
  },
  description:
    'Vệ sinh văn phòng Đà Nẵng: lau kính, cọ sàn, khử trùng, giặt thảm. Phục vụ theo ca hoặc định kỳ, báo giá miễn phí trong 30 phút.',
  alternates: {
    canonical: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
  },
  openGraph: {
    title: 'Vệ Sinh Văn Phòng Đà Nẵng | Nhà Xanh – Từ 12,000đ/m²',
    description:
      'Vệ sinh văn phòng, tòa nhà tại Đà Nẵng: lau kính, cọ sàn, khử trùng. Phục vụ theo ca. Báo giá 30 phút. Hotline: 0934.997.265',
    url: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Vệ Sinh Văn Phòng Đà Nẵng – Nhà Xanh' }],
  },
}

export default function Page() {
  const service = getServiceBySlug(SERVICE_SLUG)
  if (!service) return notFound()
  return <ServicePage service={service} />
}
