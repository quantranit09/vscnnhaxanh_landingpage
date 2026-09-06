import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/data/services'
import { ServicePage } from '@/components/ServicePage'

const SERVICE_SLUG = 've-sinh-dinh-ky-da-nang'

export const metadata: Metadata = {
  title: {
    absolute: 'Vệ Sinh Định Kỳ Đà Nẵng | Nhà Xanh',
  },
  description:
    'Vệ sinh định kỳ Đà Nẵng theo tuần, tháng cho văn phòng và nhà cửa. Nhân viên cố định, tiết kiệm 20%, xuất hóa đơn VAT. Gọi 0934.997.265.',
  alternates: {
    canonical: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
  },
  openGraph: {
    title: 'Vệ Sinh Định Kỳ Đà Nẵng | Nhà Xanh – Tiết Kiệm 20%',
    description: 'Vệ sinh định kỳ theo tuần/tháng tại Đà Nẵng. Nhân viên cố định. Tiết kiệm 20%. Xuất hóa đơn VAT.',
    url: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Vệ Sinh Định Kỳ Đà Nẵng – Nhà Xanh' }],
  },
}

export default function Page() {
  const service = getServiceBySlug(SERVICE_SLUG)
  if (!service) return notFound()
  return <ServicePage service={service} />
}
