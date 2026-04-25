import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/data/services'
import { ServicePage } from '@/components/ServicePage'

const SERVICE_SLUG = 'don-dep-nha-can-ho-da-nang'

export const metadata: Metadata = {
  title: 'Dọn Dẹp Nhà Căn Hộ Đà Nẵng | Nhà Xanh – Từ 1,200,000đ/gói',
  description:
    'Dịch vụ dọn dẹp nhà cửa, căn hộ tại Đà Nẵng: bếp, phòng ngủ, phòng tắm. Hóa chất xanh an toàn cho trẻ em và vật nuôi. Phục vụ theo giờ tại nhà. Hotline: 0934.997.265',
  alternates: {
    canonical: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
  },
  openGraph: {
    title: 'Dọn Dẹp Nhà Căn Hộ Đà Nẵng | Nhà Xanh – Hóa Chất Xanh An Toàn',
    description: 'Dọn dẹp nhà, căn hộ tại Đà Nẵng. Hóa chất xanh an toàn cho trẻ em. Phục vụ tại nhà theo giờ.',
    url: `https://vscnnhaxanhdanang.com/${SERVICE_SLUG}`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Dọn Dẹp Nhà Căn Hộ Đà Nẵng – Nhà Xanh' }],
  },
}

export default function Page() {
  const service = getServiceBySlug(SERVICE_SLUG)
  if (!service) return notFound()
  return <ServicePage service={service} />
}
