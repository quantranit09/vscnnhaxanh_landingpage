export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Vệ Sinh Công Nghiệp Nhà Xanh',
    description:
      'Dịch vụ vệ sinh công nghiệp uy tín tại Đà Nẵng: văn phòng, nhà xưởng, sau xây dựng, nhà cửa, định kỳ. Hóa chất xanh an toàn.',
    telephone: '+84934997265',
    email: 'canhquan.work@gmail.com',
    url: 'https://nhaxanh-danang.vn',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '32 Phú Lộc 14, Thanh Khê',
      addressLocality: 'Đà Nẵng',
      addressCountry: 'VN',
    },
    sameAs: ['https://www.facebook.com/vesinhcongnghiepnhaxanh'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.0544,
      longitude: 108.2022,
    },
    areaServed: {
      '@type': 'City',
      name: 'Đà Nẵng',
    },
    openingHours: ['Mo-Sa 07:00-20:00', 'Su 08:00-17:00'],
    priceRange: '₫₫',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dịch vụ vệ sinh',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Vệ sinh văn phòng' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Vệ sinh nhà xưởng' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Vệ sinh sau xây dựng' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Dọn dẹp nhà cửa' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Dọn dẹp định kỳ' },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
