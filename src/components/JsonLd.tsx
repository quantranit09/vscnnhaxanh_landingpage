// LocalBusiness schema — load trên mọi trang (đặt trong root layout)
// FAQPage đã được tách ra HomeJsonLd (chỉ homepage) và ServiceSchema (chỉ service pages)
export function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://vscnnhaxanhdanang.com/#business',
    name: 'Nhà Xanh – Vệ Sinh Công Nghiệp Đà Nẵng',
    alternateName: 'Công ty TNHH TM XD DV Nhà Xanh',
    description:
      'Dịch vụ vệ sinh công nghiệp uy tín tại Đà Nẵng: văn phòng, nhà xưởng, sau xây dựng, nhà cửa, định kỳ. Hóa chất xanh chuẩn Châu Âu, an toàn cho trẻ em và vật nuôi.',
    url: 'https://vscnnhaxanhdanang.com',
    telephone: '+84934997265',
    email: 'canhquan.work@gmail.com',
    foundingDate: '2019',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 30 },
    image: [
      'https://vscnnhaxanhdanang.com/og-image.jpg',
      'https://vscnnhaxanhdanang.com/images/hero-team-polishing.jpg',
    ],
    logo: {
      '@type': 'ImageObject',
      url: 'https://vscnnhaxanhdanang.com/images/logo.png',
      width: 200,
      height: 200,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '32 Phú Lộc 14, Thanh Khê',
      addressLocality: 'Đà Nẵng',
      addressRegion: 'Đà Nẵng',
      postalCode: '550000',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.0544,
      longitude: 108.2022,
    },
    areaServed: [
      { '@type': 'City', name: 'Đà Nẵng' },
      { '@type': 'AdministrativeArea', name: 'Hải Châu' },
      { '@type': 'AdministrativeArea', name: 'Thanh Khê' },
      { '@type': 'AdministrativeArea', name: 'Sơn Trà' },
      { '@type': 'AdministrativeArea', name: 'Ngũ Hành Sơn' },
      { '@type': 'AdministrativeArea', name: 'Liên Chiểu' },
      { '@type': 'AdministrativeArea', name: 'Cẩm Lệ' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '₫₫',
    currenciesAccepted: 'VND',
    paymentAccepted: 'Tiền mặt, Chuyển khoản',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '100',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: ['https://www.facebook.com/vesinhcongnghiepnhaxanh'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dịch Vụ Vệ Sinh Công Nghiệp',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vệ sinh văn phòng & tòa nhà' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vệ sinh nhà xưởng & kho bãi' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vệ sinh sau xây dựng' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dọn dẹp nhà cửa & căn hộ' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dọn dẹp định kỳ' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  )
}

// FAQPage schema — chỉ dùng trên homepage (src/app/page.tsx)
// KHÔNG đặt trong layout để tránh duplicate với FAQPage của service pages
export function HomeFaqJsonLd() {
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Nhà Xanh báo giá vệ sinh trong bao lâu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nhà Xanh cam kết phản hồi và báo giá chi tiết trong vòng 30 phút sau khi bạn liên hệ qua hotline hoặc form online, trong giờ làm việc từ 7h-20h.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hóa chất vệ sinh của Nhà Xanh có an toàn cho trẻ em không?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '100% hóa chất của Nhà Xanh đạt chuẩn Châu Âu, hoàn toàn an toàn cho trẻ em, vật nuôi và không gây kích ứng da. Không có mùi hắc hay độc hại.',
        },
      },
      {
        '@type': 'Question',
        name: 'Nhà Xanh phục vụ những khu vực nào tại Đà Nẵng?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nhà Xanh phục vụ toàn bộ các quận tại Đà Nẵng: Hải Châu, Thanh Khê, Sơn Trà, Ngũ Hành Sơn, Liên Chiểu, Cẩm Lệ và Hòa Vang với đội xe 24/7.',
        },
      },
      {
        '@type': 'Question',
        name: 'Giá vệ sinh công nghiệp tại Đà Nẵng là bao nhiêu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Giá tham khảo: vệ sinh văn phòng định kỳ từ 12.000đ/m²/tháng, vệ sinh nhà xưởng từ 8.000đ/m², vệ sinh sau xây dựng từ 15.000đ/m². Nhà Xanh khảo sát miễn phí và báo giá chính xác theo thực tế.',
        },
      },
      {
        '@type': 'Question',
        name: 'Nhà Xanh có cam kết gì nếu khách không hài lòng?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nhà Xanh cam kết 100% hài lòng mới thanh toán. Nếu khách không hài lòng, chúng tôi hoàn tiền 100% hoặc làm lại miễn phí. Cam kết bằng hợp đồng rõ ràng.',
        },
      },
      {
        '@type': 'Question',
        name: 'Nhà Xanh có xuất hóa đơn VAT không?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Có. Nhà Xanh xuất hóa đơn VAT đầy đủ cho doanh nghiệp. Hợp đồng minh bạch về giá cả, phạm vi và thời gian — không phát sinh chi phí ẩn.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
    />
  )
}
