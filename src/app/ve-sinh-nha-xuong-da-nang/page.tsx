import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/data/services'
import { ServicePage } from '@/components/ServicePage'

const SERVICE_SLUG = 've-sinh-nha-xuong-da-nang'

export const metadata: Metadata = {
  title: 'Vệ Sinh Nhà Xưởng Đà Nẵng | Nhà Xanh – Từ 8,000đ/m²',
  description:
    'Vệ sinh nhà xưởng, kho bãi công nghiệp tại Đà Nẵng: xử lý dầu mỡ, bụi, sàn epoxy, máy móc. Thiết bị chuyên dụng. Xuất hóa đơn VAT. Báo giá trong 30 phút.',
  alternates: {
    canonical: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
  },
  openGraph: {
    title: 'Vệ Sinh Nhà Xưởng Đà Nẵng | Nhà Xanh – Từ 8,000đ/m²',
    description: 'Vệ sinh nhà xưởng, kho bãi tại Đà Nẵng. Xử lý dầu mỡ, bụi công nghiệp. Thiết bị chuyên dụng. Báo giá 30 phút.',
    url: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Vệ Sinh Nhà Xưởng Đà Nẵng – Nhà Xanh' }],
  },
}

export default function Page() {
  const service = getServiceBySlug(SERVICE_SLUG)
  if (!service) return notFound()
  return <ServicePage service={service} />
}
