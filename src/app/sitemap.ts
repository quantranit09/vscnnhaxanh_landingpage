import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://vscnnhaxanhdanang.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2025-04-25'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ve-sinh-van-phong-da-nang`,
      lastModified: new Date('2025-04-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ve-sinh-nha-xuong-da-nang`,
      lastModified: new Date('2025-04-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ve-sinh-sau-xay-dung-da-nang`,
      lastModified: new Date('2025-04-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/don-dep-nha-can-ho-da-nang`,
      lastModified: new Date('2025-04-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ve-sinh-dinh-ky-da-nang`,
      lastModified: new Date('2025-04-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/chinh-sach-bao-mat`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
