'use client'

import { motion } from 'framer-motion'
import { Building2, Factory, HardHat, Home, CalendarCheck, ChevronRight } from 'lucide-react'
import { SectionTitle } from '@/components/ui'

const services = [
  {
    icon: Building2,
    name: 'Vệ Sinh Văn Phòng & Tòa Nhà',
    description:
      'Vệ sinh toàn bộ văn phòng, tòa nhà và tầng hầm. Lau kính, cọ rửa sàn, khử trùng bề mặt tiếp xúc. Phục vụ linh hoạt theo ca hoặc định kỳ hàng tuần.',
    tag: 'Phổ biến nhất',
    tagColor: 'bg-[#2D8B3A] text-white',
  },
  {
    icon: Factory,
    name: 'Vệ Sinh Nhà Xưởng & Kho Bãi',
    description:
      'Xử lý dầu mỡ, bụi công nghiệp và chất thải sản xuất. Thiết bị chuyên dụng cho sàn epoxy, máy móc và kho hàng. Đảm bảo an toàn với hàng hóa trong kho.',
    tag: 'Cho doanh nghiệp',
    tagColor: 'bg-blue-600 text-white',
  },
  {
    icon: HardHat,
    name: 'Vệ Sinh Sau Xây Dựng',
    description:
      'Dọn sạch bụi xi măng, sơn, keo silicon sau công trình xây dựng hoặc cải tạo. Đánh bóng sàn đá, lau kính, vệ sinh thiết bị vệ sinh. Bàn giao trong 24 giờ.',
    tag: null,
    tagColor: '',
  },
  {
    icon: Home,
    name: 'Dọn Dẹp Nhà Cửa & Căn Hộ',
    description:
      'Vệ sinh toàn bộ không gian sống: bếp, phòng ngủ, phòng tắm. Hóa chất xanh an toàn tuyệt đối cho trẻ em và vật nuôi. Phục vụ tại nhà theo giờ thuận tiện.',
    tag: null,
    tagColor: '',
  },
  {
    icon: CalendarCheck,
    name: 'Dọn Dẹp Định Kỳ',
    description:
      'Ký hợp đồng định kỳ theo tuần hoặc tháng — tiết kiệm 20% so với đặt lẻ. Nhân viên cố định, am hiểu không gian của bạn. Xuất hóa đơn VAT đầy đủ.',
    tag: 'Tiết kiệm nhất',
    tagColor: 'bg-amber-500 text-white',
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#5AB645] relative flex flex-col"
            >
              {service.tag && (
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${service.tagColor}`}
                >
                  {service.tag}
                </span>
              )}

              <div className="w-14 h-14 bg-[#2D8B3A]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2D8B3A] transition-colors duration-300">
                <service.icon
                  size={28}
                  className="text-[#2D8B3A] group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug pr-16">
                {service.name}
              </h3>
              <p className="text-[#4A5A4A] text-sm leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              <a
                href="#lien-he"
                className="inline-flex items-center gap-1.5 text-[#2D8B3A] font-semibold text-sm hover:gap-3 transition-all duration-200 mt-auto"
              >
                Báo giá dịch vụ này
                <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-[#4A5A4A] mb-4">
            Không tìm thấy dịch vụ phù hợp? Chúng tôi có thể tùy chỉnh theo yêu cầu của bạn.
          </p>
          <a
            href="tel:0905000000"
            className="inline-flex items-center gap-2 bg-[#2D8B3A] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#1E6B2A] transition-colors shadow-md"
          >
            Gọi tư vấn miễn phí
          </a>
        </motion.div>
      </div>
    </section>
  )
}
