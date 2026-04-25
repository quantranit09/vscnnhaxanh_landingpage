'use client'

import { motion } from 'framer-motion'
import { Building2, Factory, HardHat, Home, CalendarCheck, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { PhoneLink, SectionTitle } from '@/components/ui'
import Image from 'next/image'

const services = [
  {
    icon: Building2,
    name: 'Vệ Sinh Văn Phòng & Tòa Nhà',
    description:
      'Vệ sinh toàn bộ văn phòng, tòa nhà và tầng hầm. Lau kính, cọ rửa sàn, khử trùng bề mặt tiếp xúc. Phục vụ linh hoạt theo ca hoặc định kỳ hàng tuần.',
    tag: 'Phổ biến nhất',
    tagColor: 'bg-[#2D8B3A] text-white',
    image: '/images/service-office.jpg',
    slug: 've-sinh-van-phong-da-nang',
  },
  {
    icon: Factory,
    name: 'Vệ Sinh Nhà Xưởng & Kho Bãi',
    description:
      'Xử lý dầu mỡ, bụi công nghiệp và chất thải sản xuất. Thiết bị chuyên dụng cho sàn epoxy, máy móc và kho hàng. Đảm bảo an toàn với hàng hóa.',
    tag: 'Cho doanh nghiệp',
    tagColor: 'bg-blue-600 text-white',
    image: '/images/service-kitchen-restaurant.jpg',
    slug: 've-sinh-nha-xuong-da-nang',
  },
  {
    icon: HardHat,
    name: 'Vệ Sinh Sau Xây Dựng',
    description:
      'Dọn sạch bụi xi măng, sơn, keo silicon sau công trình xây dựng hoặc cải tạo. Đánh bóng sàn đá, lau kính, vệ sinh thiết bị vệ sinh. Bàn giao trong 24 giờ.',
    tag: null,
    tagColor: '',
    image: '/images/service-post-construction.jpg',
    slug: 've-sinh-sau-xay-dung-da-nang',
  },
  {
    icon: Home,
    name: 'Dọn Dẹp Nhà Cửa & Căn Hộ',
    description:
      'Vệ sinh toàn bộ không gian sống: bếp, phòng ngủ, phòng tắm. Hóa chất xanh an toàn tuyệt đối cho trẻ em và vật nuôi. Phục vụ tại nhà theo giờ.',
    tag: null,
    tagColor: '',
    image: '/images/service-apartment.jpg',
    slug: 'don-dep-nha-can-ho-da-nang',
  },
  {
    icon: CalendarCheck,
    name: 'Dọn Dẹp Định Kỳ',
    description:
      'Ký hợp đồng định kỳ theo tuần hoặc tháng — tiết kiệm 20% so với đặt lẻ. Nhân viên cố định, am hiểu không gian của bạn. Xuất hóa đơn VAT.',
    tag: 'Tiết kiệm nhất',
    tagColor: 'bg-amber-500 text-white',
    image: '/images/service-periodic-house.jpg',
    slug: 've-sinh-dinh-ky-da-nang',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
  return (
    <section id="dich-vu" className="py-20 md:py-28 bg-[#F5F7F5]">
      <div className="container">
        <SectionTitle
          badge="Dịch Vụ"
          title="Giải Pháp Vệ Sinh Toàn Diện"
          subtitle="Từ văn phòng, nhà xưởng đến nhà cửa — chúng tôi có giải pháp phù hợp cho từng nhu cầu của bạn tại Đà Nẵng."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 relative flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                {service.tag && (
                  <span
                    className={`absolute top-4 right-4 z-10 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${service.tagColor}`}
                  >
                    {service.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-0"></div>
                <Image 
                  src={service.image} 
                  alt={`${service.name} tại Đà Nẵng – Nhà Xanh`} 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Icon Floating */}
                <div className="absolute -top-8 left-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-emerald-50 text-[#2D8B3A] group-hover:bg-[#2D8B3A] group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3 leading-snug">
                  {service.name}
                </h3>
                <p className="text-[#4A5A4A] text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#2D8B3A] font-bold text-sm hover:gap-4 transition-all duration-300 mt-auto bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl w-fit"
                >
                  Xem chi tiết & báo giá
                  <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white p-6 sm:p-4 sm:pr-6 rounded-2xl shadow-sm border border-emerald-100 max-w-3xl mx-auto">
            <div className="flex -space-x-3 sm:ml-2">
              <Image src="https://i.pravatar.cc/100?img=1" alt="Nhân viên" width={48} height={48} className="w-12 h-12 rounded-full border-2 border-white object-cover" unoptimized />
              <Image src="https://i.pravatar.cc/100?img=5" alt="Nhân viên" width={48} height={48} className="w-12 h-12 rounded-full border-2 border-white object-cover" unoptimized />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
                30+
              </div>
            </div>
            <div className="text-left">
              <p className="text-gray-900 font-bold mb-1">Không tìm thấy dịch vụ phù hợp?</p>
              <p className="text-[#4A5A4A] text-sm">Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ khảo sát và tư vấn giải pháp đo ni đóng giày cho bạn.</p>
            </div>
            <PhoneLink
              href="tel:+84934997265"
              className="mt-4 sm:mt-0 shrink-0 inline-flex items-center gap-2 bg-[#2D8B3A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1E6B2A] transition-colors shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
            >
              Gọi Tư Vấn Ngay
            </PhoneLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
