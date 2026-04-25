import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/data/services'
import { ServicePage } from '@/components/ServicePage'

const SERVICE_SLUG = 've-sinh-dinh-ky-da-nang'

export const metadata: Metadata = {
  title: 'Vệ Sinh Định Kỳ Đà Nẵng | Nhà Xanh – Tiết Kiệm 20%',
  description:
    'Dịch vụ vệ sinh định kỳ theo tuần, tháng tại Đà Nẵng cho văn phòng và nhà cửa. Nhân viên cố định, tiết kiệm 20% so với đặt lẻ. Xuất hóa đơn VAT. Hotline: 0934.997.265',
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
