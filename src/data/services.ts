// Single source of truth cho tất cả service pages.
// Update file này = tất cả pages tự update.

export interface ServiceData {
  slug: string
  shortName: string
  name: string
  tagline: string
  heroKeyword: string
  metaTitle: string
  metaDescription: string
  ogImage: string
  heroImage: string
  price: string
  priceUnit: string
  priceDetail: string
  description: string
  benefits: string[]
  process: { title: string; desc: string }[]
  faq: { q: string; a: string }[]
  schemaPrice: string
  testimonial: { name: string; role: string; content: string }
}

export const SERVICES: ServiceData[] = [
  {
    slug: 've-sinh-van-phong-da-nang',
    shortName: 'Vệ Sinh Văn Phòng',
    name: 'Vệ Sinh Văn Phòng & Tòa Nhà',
    tagline: 'Môi trường làm việc sạch sẽ — nhân viên năng suất hơn',
    heroKeyword: 'Vệ Sinh Văn Phòng Đà Nẵng',
    metaTitle: 'Vệ Sinh Văn Phòng Đà Nẵng | Nhà Xanh – Từ 12,000đ/m²',
    metaDescription:
      'Dịch vụ vệ sinh văn phòng chuyên nghiệp tại Đà Nẵng: lau kính, cọ sàn, khử trùng bề mặt, giặt thảm. Phục vụ theo ca hoặc định kỳ. Báo giá trong 30 phút. Hotline: 0934.997.265',
    ogImage: '/og-image.jpg',
    heroImage: '/images/service-office.webp',
    price: 'Từ 12,000đ',
    priceUnit: '/m²/tháng',
    priceDetail:
      'Giá định kỳ theo hợp đồng tháng. Đặt lẻ từ 15,000đ/m². Tòa nhà > 1,000m² có chiết khấu đặc biệt.',
    description:
      'Nhà Xanh cung cấp dịch vụ vệ sinh văn phòng và tòa nhà chuyên nghiệp tại toàn bộ các quận Đà Nẵng. Đội ngũ 30+ nhân viên được đào tạo bài bản, trang bị máy móc hiện đại: máy hút bụi công nghiệp, máy lau sàn tự động, hóa chất xanh chuẩn Châu Âu. Không làm gián đoạn hoạt động văn phòng — phục vụ theo ca sáng sớm, tối hoặc cuối tuần theo yêu cầu.',
    benefits: [
      'Lau kính mặt tiền, vách ngăn kính trong suốt',
      'Cọ rửa và đánh bóng sàn đá, gạch, gỗ',
      'Khử trùng bề mặt bàn phím, tay nắm cửa, thang máy',
      'Vệ sinh WC, phòng bếp, phòng họp',
      'Hút bụi thảm và giặt thảm theo yêu cầu',
      'Dọn dẹp khu vực hành lang, tầng hầm, bãi xe',
    ],
    process: [
      { title: 'Khảo sát & Báo giá', desc: 'Nhân viên đến khảo sát thực tế, đo diện tích, đánh giá hiện trạng và gửi báo giá chi tiết trong 30 phút.' },
      { title: 'Ký hợp đồng', desc: 'Ký hợp đồng rõ ràng với đầy đủ cam kết về chất lượng, thời gian, giá cả. Xuất hóa đơn VAT đầy đủ.' },
      { title: 'Thi công', desc: 'Đội vệ sinh đến đúng giờ, thi công theo quy trình chuẩn, không làm ảnh hưởng hoạt động văn phòng.' },
      { title: 'Nghiệm thu', desc: 'Bạn kiểm tra và nghiệm thu trực tiếp. 100% hài lòng mới thanh toán — cam kết bằng hợp đồng.' },
    ],
    faq: [
      { q: 'Vệ sinh văn phòng tại Đà Nẵng giá bao nhiêu?', a: 'Giá tham khảo từ 12,000đ/m²/tháng cho hợp đồng định kỳ, hoặc từ 15,000đ/m² cho đặt lẻ. Giá thực tế phụ thuộc vào diện tích, tần suất và yêu cầu cụ thể. Nhà Xanh khảo sát thực tế và báo giá chính xác miễn phí.' },
      { q: 'Có thể vệ sinh ngoài giờ làm việc không?', a: 'Có. Nhà Xanh phục vụ linh hoạt theo ca: sáng sớm (6h-8h), buổi tối (sau 18h) hoặc cuối tuần — không làm gián đoạn hoạt động văn phòng của bạn.' },
      { q: 'Hóa chất vệ sinh có an toàn không?', a: 'Toàn bộ hóa chất của Nhà Xanh đạt chuẩn Châu Âu, không độc hại, không mùi hắc, an toàn cho nhân viên văn phòng, trẻ em và vật nuôi.' },
      { q: 'Nhà Xanh có xuất hóa đơn VAT không?', a: 'Có. Nhà Xanh xuất hóa đơn VAT đầy đủ cho doanh nghiệp. Hợp đồng minh bạch, không phát sinh chi phí ẩn.' },
      { q: 'Vệ sinh văn phòng bao lâu thì xong?', a: 'Tùy diện tích. Văn phòng 200m² thường hoàn thành trong 2-3 giờ. Tòa nhà lớn sẽ chia ca để đảm bảo chất lượng. Nhà Xanh cam kết đúng lịch đã hẹn.' },
    ],
    schemaPrice: '12000',
    testimonial: {
      name: 'Chị Thu Hương',
      role: 'Quản lý VP, Hải Châu',
      content: 'Đội ngũ Nhà Xanh làm việc rất kỹ. Kính văn phòng sáng bóng, thảm giặt xong không bị ẩm mùi. Sẽ ký hợp đồng dài hạn.',
    },
  },
  {
    slug: 've-sinh-nha-xuong-da-nang',
    shortName: 'Vệ Sinh Nhà Xưởng',
    name: 'Vệ Sinh Nhà Xưởng & Kho Bãi',
    tagline: 'Xử lý dầu mỡ, bụi công nghiệp — thiết bị chuyên dụng',
    heroKeyword: 'Vệ Sinh Nhà Xưởng Đà Nẵng',
    metaTitle: 'Vệ Sinh Nhà Xưởng Đà Nẵng | Nhà Xanh – Từ 8,000đ/m²',
    metaDescription:
      'Vệ sinh nhà xưởng, kho bãi công nghiệp tại Đà Nẵng: xử lý dầu mỡ, bụi, sàn epoxy, máy móc. Thiết bị chuyên dụng. Xuất hóa đơn VAT. Báo giá trong 30 phút.',
    ogImage: '/og-image.jpg',
    heroImage: '/images/service-kitchen-restaurant.webp',
    price: 'Từ 8,000đ',
    priceUnit: '/m²',
    priceDetail:
      'Giá theo diện tích thực tế, mức độ ô nhiễm và loại bề mặt. Hợp đồng định kỳ hàng tháng giảm 15%.',
    description:
      'Vệ sinh nhà xưởng và kho bãi đòi hỏi thiết bị chuyên dụng và quy trình khác hoàn toàn so với văn phòng. Nhà Xanh trang bị máy hút công nghiệp áp lực cao, máy rửa sàn tự động, dung môi tẩy dầu mỡ chuyên dụng đạt chuẩn an toàn. Phục vụ các nhà máy, khu công nghiệp KCN Hòa Khánh, Liên Chiểu, Đà Nẵng IT Park và các kho bãi logistics.',
    benefits: [
      'Xử lý bụi công nghiệp, mạt kim loại, phoi tiện',
      'Tẩy dầu mỡ sàn epoxy, sàn bê tông không trầy',
      'Vệ sinh máy móc, dây chuyền sản xuất bằng hóa chất an toàn',
      'Dọn dẹp kho hàng, giá kệ, khu vực đóng gói',
      'Vệ sinh nhà vệ sinh, phòng thay đồ công nhân',
      'Xử lý rác thải sản xuất theo đúng quy định',
    ],
    process: [
      { title: 'Khảo sát thực tế', desc: 'Chuyên viên đến đánh giá mức độ ô nhiễm, loại bề mặt, yêu cầu đặc thù của từng nhà xưởng.' },
      { title: 'Lên phương án', desc: 'Lập kế hoạch vệ sinh chi tiết: thiết bị sử dụng, hóa chất, số nhân lực, thời gian thi công.' },
      { title: 'Thi công', desc: 'Đội vệ sinh chuyên dụng thực hiện theo quy trình chuẩn công nghiệp, đảm bảo an toàn hàng hóa.' },
      { title: 'Bàn giao', desc: 'Nghiệm thu từng khu vực. Cam kết hài lòng 100% trước khi thanh toán. Xuất hóa đơn VAT ngay.' },
    ],
    faq: [
      { q: 'Vệ sinh nhà xưởng Đà Nẵng bao nhiêu tiền?', a: 'Giá từ 8,000đ/m² tùy mức độ ô nhiễm và loại bề mặt. Kho sạch giá thấp hơn kho dầu mỡ nặng. Nhà Xanh khảo sát thực tế và báo giá chính xác miễn phí.' },
      { q: 'Nhà Xanh có xử lý sàn epoxy bị dầu mỡ không?', a: 'Có. Nhà Xanh sử dụng dung môi tẩy dầu mỡ chuyên dụng kết hợp máy chà sàn áp lực cao, phục hồi sàn epoxy sạch bóng không trầy xước.' },
      { q: 'Có thể vệ sinh trong khi nhà xưởng vẫn hoạt động không?', a: 'Tùy từng khu vực. Nhà Xanh có thể phối hợp vệ sinh theo từng khu vực luân phiên hoặc ca đêm/cuối tuần để không gián đoạn sản xuất.' },
      { q: 'Hóa chất vệ sinh có ảnh hưởng đến hàng hóa trong kho không?', a: 'Không. Tất cả hóa chất của Nhà Xanh đạt chuẩn an toàn, không ăn mòn, không bay hơi độc hại. Chúng tôi che phủ bảo vệ hàng hóa trước khi thi công.' },
    ],
    schemaPrice: '8000',
    testimonial: {
      name: 'Anh Tuấn Anh',
      role: 'Quản lý Kho, Ngũ Hành Sơn',
      content: 'Dọn dẹp kho bãi công nghiệp rất chuyên nghiệp, máy móc hiện đại. Có xuất hóa đơn VAT đầy đủ, nhanh chóng cho công ty.',
    },
  },
  {
    slug: 've-sinh-sau-xay-dung-da-nang',
    shortName: 'Vệ Sinh Sau Xây Dựng',
    name: 'Vệ Sinh Sau Xây Dựng & Cải Tạo',
    tagline: 'Bàn giao mặt bằng sạch bóng trong 24 giờ',
    heroKeyword: 'Vệ Sinh Sau Xây Dựng Đà Nẵng',
    metaTitle: 'Vệ Sinh Sau Xây Dựng Đà Nẵng | Nhà Xanh – Từ 15,000đ/m²',
    metaDescription:
      'Vệ sinh sau xây dựng, sau cải tạo tại Đà Nẵng: tẩy xi măng, sơn, keo silicon, đánh bóng sàn đá. Bàn giao trong 24h. Từ 15,000đ/m². Hotline: 0934.997.265',
    ogImage: '/og-image.jpg',
    heroImage: '/images/service-post-construction.webp',
    price: 'Từ 15,000đ',
    priceUnit: '/m²',
    priceDetail:
      'Giá tùy mức độ bẩn và loại công trình. Căn hộ thông thường từ 15,000đ/m². Công trình nặng xi măng có giá riêng sau khảo sát.',
    description:
      'Sau xây dựng hoặc cải tạo, bụi xi măng, vệt sơn, keo silicon ngấm vào từng ngóc ngách. Nhà Xanh chuyên xử lý các loại vết bẩn này bằng hóa chất tẩy rửa chuyên dụng và máy đánh bóng sàn chuyên nghiệp. Cam kết bàn giao mặt bằng sạch bóng trong 24 giờ, sẵn sàng đưa vào sử dụng ngay.',
    benefits: [
      'Tẩy bụi xi măng, vôi trên tường và sàn',
      'Xử lý vệt sơn, keo silicon trên kính và gạch',
      'Đánh bóng sàn đá cẩm thạch, granite, gạch bóng kính',
      'Vệ sinh thiết bị vệ sinh, bồn tắm, lavabo mới lắp',
      'Lau kính, cửa nhôm, khung nhôm toàn bộ công trình',
      'Dọn sạch vật liệu xây dựng thừa theo yêu cầu',
    ],
    process: [
      { title: 'Tiếp nhận & Khảo sát', desc: 'Chuyên viên đến khảo sát mức độ bẩn, loại vết bẩn, diện tích để lên kế hoạch và báo giá chính xác.' },
      { title: 'Thi công theo khu vực', desc: 'Bắt đầu từ trên xuống: trần → tường → cửa → sàn. Đảm bảo không gây trầy xước bề mặt mới.' },
      { title: 'Đánh bóng & Hoàn thiện', desc: 'Đánh bóng sàn đá, lau kính, khử mùi xi măng. Kiểm tra lại từng khu vực trước khi bàn giao.' },
      { title: 'Bàn giao 24h', desc: 'Cam kết bàn giao trong 24 giờ kể từ khi bắt đầu. Bạn nghiệm thu — hài lòng 100% mới thanh toán.' },
    ],
    faq: [
      { q: 'Vệ sinh sau xây dựng tại Đà Nẵng bao nhiêu tiền?', a: 'Giá từ 15,000đ/m² cho căn hộ thông thường sau cải tạo nhẹ. Công trình nhiều xi măng, keo silicon có mức giá riêng sau khảo sát thực tế. Nhà Xanh báo giá miễn phí trong 30 phút.' },
      { q: 'Bao lâu hoàn thành một căn hộ sau xây dựng?', a: 'Căn hộ 70-100m² thường hoàn thành trong 1 ngày (8-10 tiếng). Nhà Xanh cam kết bàn giao trong 24 giờ kể từ khi bắt đầu thi công.' },
      { q: 'Có xử lý được keo silicon trên kính không?', a: 'Có. Nhà Xanh sử dụng dung môi tẩy silicone chuyên dụng kết hợp dao cạo kính chuyên nghiệp, loại bỏ hoàn toàn keo mà không trầy kính.' },
      { q: 'Sàn đá mới có thể đánh bóng ngay được không?', a: 'Được, nhưng cần đảm bảo xi măng đã khô hoàn toàn (thường 7-14 ngày sau lát). Nhà Xanh sẽ đánh giá và tư vấn thời điểm phù hợp khi khảo sát.' },
    ],
    schemaPrice: '15000',
    testimonial: {
      name: 'Anh Quốc Bảo',
      role: 'Chủ nhà, Liên Chiểu',
      content: 'Mới xây nhà xong bụi kinh khủng mà gọi các bạn qua dọn 1 ngày là vào ở được luôn. Mức giá rất hợp lý.',
    },
  },
  {
    slug: 'don-dep-nha-can-ho-da-nang',
    shortName: 'Dọn Dẹp Nhà & Căn Hộ',
    name: 'Dọn Dẹp Nhà Cửa & Căn Hộ',
    tagline: 'Hóa chất xanh an toàn — cho trẻ em & vật nuôi',
    heroKeyword: 'Dọn Dẹp Nhà Căn Hộ Đà Nẵng',
    metaTitle: 'Dọn Dẹp Nhà Căn Hộ Đà Nẵng | Nhà Xanh – Từ 1,200,000đ/gói',
    metaDescription:
      'Dịch vụ dọn dẹp nhà cửa, căn hộ tại Đà Nẵng: bếp, phòng ngủ, phòng tắm. Hóa chất xanh an toàn cho trẻ em và vật nuôi. Phục vụ theo giờ tại nhà. Hotline: 0934.997.265',
    ogImage: '/og-image.jpg',
    heroImage: '/images/service-apartment.webp',
    price: 'Từ 1,200,000đ',
    priceUnit: '/gói',
    priceDetail:
      'Gói cơ bản 1,200,000đ (đến 70m²). Gói nâng cao có thêm giặt thảm, lau máy lạnh. Đặt theo giờ từ 150,000đ/giờ.',
    description:
      'Dịch vụ dọn dẹp nhà cửa và căn hộ của Nhà Xanh chú trọng đặc biệt đến sự an toàn cho gia đình bạn. 100% hóa chất đạt chuẩn Châu Âu, không độc hại, an toàn tuyệt đối cho trẻ nhỏ và vật nuôi. Nhân viên nữ chuyên nghiệp, có kiểm tra lý lịch tư pháp, trang phục gọn gàng lịch sự. Phục vụ tại nhà theo giờ hoặc theo gói toàn bộ.',
    benefits: [
      'Vệ sinh bếp: hút mùi, bếp từ, tủ lạnh trong ngoài',
      'Lau dọn phòng ngủ, thay drap giường theo yêu cầu',
      'Khử trùng phòng tắm, WC sạch bóng',
      'Lau kính cửa, cửa sổ, vệ sinh mành rèm',
      'Hút bụi thảm, sofa, ghế vải',
      'Lau sàn toàn bộ nhà bằng hóa chất an toàn',
    ],
    process: [
      { title: 'Đặt lịch dễ dàng', desc: 'Gọi hotline hoặc nhắn Zalo, chốt lịch ngay trong ngày. Phục vụ cả buổi tối và cuối tuần.' },
      { title: 'Nhân viên đến đúng giờ', desc: 'Nhân viên nữ chuyên nghiệp, mặc đồng phục, mang đầy đủ dụng cụ và hóa chất an toàn.' },
      { title: 'Dọn dẹp theo danh sách', desc: 'Làm theo checklist từng phòng, không bỏ sót. Bạn có thể theo dõi và yêu cầu thêm bất kỳ lúc nào.' },
      { title: 'Kiểm tra & thanh toán', desc: 'Bạn kiểm tra từng khu vực. Hài lòng mới thanh toán. Nhân viên dọn dẹp dụng cụ gọn gàng trước khi ra về.' },
    ],
    faq: [
      { q: 'Dọn dẹp nhà tại Đà Nẵng giá bao nhiêu?', a: 'Gói cơ bản từ 1,200,000đ cho căn hộ đến 70m², bao gồm bếp, phòng ngủ, phòng tắm, sàn nhà. Đặt theo giờ từ 150,000đ/giờ. Giá thực tế báo sau khi trao đổi về yêu cầu cụ thể.' },
      { q: 'Nhân viên dọn nhà có đáng tin cậy không?', a: 'Tất cả nhân viên của Nhà Xanh đều qua kiểm tra lý lịch tư pháp, được đào tạo bài bản và mặc đồng phục nhận diện. Chúng tôi chịu trách nhiệm toàn bộ về tài sản trong nhà bạn.' },
      { q: 'Tôi có cần ở nhà khi dọn không?', a: 'Không bắt buộc, nhưng nên có người ở nhà lần đầu tiên. Sau khi quen nhau, nhiều khách hàng để chìa khóa hoặc đặt lịch khi không có ở nhà.' },
      { q: 'Hóa chất có an toàn cho trẻ em không?', a: '100% an toàn. Hóa chất của Nhà Xanh đạt chuẩn Châu Âu, không độc hại, không gây kích ứng. Trẻ em và vật nuôi có thể vào nhà ngay sau khi dọn xong.' },
    ],
    schemaPrice: '1200000',
    testimonial: {
      name: 'Cô Tuyết',
      role: 'Cư dân, Sơn Trà',
      content: 'Mấy em làm việc có tâm lắm. Lau dọn từng ngóc ngách, khu vực bếp dính nhiều dầu mỡ đều sạch bong. Lần sau cô lại gọi.',
    },
  },
  {
    slug: 've-sinh-dinh-ky-da-nang',
    shortName: 'Vệ Sinh Định Kỳ',
    name: 'Dịch Vụ Vệ Sinh Định Kỳ',
    tagline: 'Hợp đồng tháng — tiết kiệm 20%, nhân viên cố định',
    heroKeyword: 'Vệ Sinh Định Kỳ Đà Nẵng',
    metaTitle: 'Vệ Sinh Định Kỳ Đà Nẵng | Nhà Xanh – Tiết Kiệm 20%',
    metaDescription:
      'Dịch vụ vệ sinh định kỳ theo tuần, tháng tại Đà Nẵng cho văn phòng và nhà cửa. Nhân viên cố định, tiết kiệm 20% so với đặt lẻ. Xuất hóa đơn VAT. Hotline: 0934.997.265',
    ogImage: '/og-image.jpg',
    heroImage: '/images/service-periodic-house.webp',
    price: 'Từ 12,000đ',
    priceUnit: '/m²/tháng',
    priceDetail:
      'Hợp đồng định kỳ tiết kiệm 20% so với đặt lẻ. Tần suất: 1-2 lần/tuần hoặc 2-4 lần/tháng tùy nhu cầu.',
    description:
      'Dịch vụ vệ sinh định kỳ của Nhà Xanh dành cho cả văn phòng lẫn nhà ở muốn duy trì không gian sạch sẽ thường xuyên. Ký hợp đồng theo tuần hoặc tháng, được phân công nhân viên cố định am hiểu không gian, tiết kiệm 20% so với đặt lẻ và xuất hóa đơn VAT đầy đủ. Không cần lo lắng về việc đặt lịch mỗi lần — Nhà Xanh tự nhớ lịch cho bạn.',
    benefits: [
      'Tiết kiệm 20% chi phí so với đặt dịch vụ lẻ',
      'Nhân viên cố định hiểu rõ không gian và yêu cầu của bạn',
      'Tự động nhắc lịch, không cần gọi lại mỗi lần',
      'Linh hoạt điều chỉnh tần suất theo mùa vụ',
      'Xuất hóa đơn VAT đầy đủ hàng tháng',
      'Ưu tiên phục vụ khi có nhu cầu đột xuất',
    ],
    process: [
      { title: 'Tư vấn & Ký hợp đồng', desc: 'Tư vấn tần suất phù hợp, ký hợp đồng rõ ràng với giá cố định cả năm, không điều chỉnh giá ngoài hợp đồng.' },
      { title: 'Phân công nhân viên cố định', desc: 'Nhân viên được phân công sẽ am hiểu không gian và yêu cầu đặc thù của bạn sau 1-2 lần phục vụ.' },
      { title: 'Phục vụ đúng lịch', desc: 'Nhà Xanh tự theo dõi lịch và nhắc nhở trước 24h mỗi lần phục vụ. Bạn không cần gọi lại.' },
      { title: 'Báo cáo & Hóa đơn hàng tháng', desc: 'Cuối tháng gửi báo cáo số lần phục vụ và xuất hóa đơn VAT đầy đủ.' },
    ],
    faq: [
      { q: 'Vệ sinh định kỳ tại Đà Nẵng có lợi hơn đặt lẻ như thế nào?', a: 'Hợp đồng định kỳ giúp tiết kiệm 20% so với đặt từng lần, có nhân viên cố định quen không gian, tự động nhắc lịch và xuất hóa đơn VAT gộp cuối tháng — tiện lợi hơn nhiều cho doanh nghiệp.' },
      { q: 'Tần suất vệ sinh định kỳ thế nào là phù hợp?', a: 'Văn phòng nhỏ (< 200m²): 1 lần/tuần. Văn phòng lớn hoặc có nhiều người: 2-3 lần/tuần. Nhà ở: 2-4 lần/tháng. Nhà Xanh tư vấn miễn phí tần suất phù hợp nhất.' },
      { q: 'Có thể thay đổi ngày giờ hoặc tần suất trong hợp đồng không?', a: 'Có. Hợp đồng cho phép điều chỉnh linh hoạt theo mùa vụ hoặc nhu cầu thực tế. Chỉ cần thông báo trước 48h.' },
      { q: 'Nếu không hài lòng với nhân viên định kỳ thì sao?', a: 'Nhà Xanh sẽ phân công nhân viên khác ngay lập tức theo yêu cầu, không ảnh hưởng đến hợp đồng. Sự hài lòng của bạn là ưu tiên số một.' },
    ],
    schemaPrice: '12000',
    testimonial: {
      name: 'Chị Mai Lan',
      role: 'Chủ shop, Thanh Khê',
      content: 'Hóa chất mùi dễ chịu, không bị hắc như mấy chỗ trước đây. Điểm cộng lớn là các bạn vệ sinh kính mặt tiền cửa hàng cực kỳ sạch.',
    },
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
