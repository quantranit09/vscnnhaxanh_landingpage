'use client'

import { motion } from 'framer-motion'
import { Clock, Leaf, Shield, Users, FileCheck, MapPin } from 'lucide-react'
import { SectionTitle } from '@/components/ui'

const usps = [
  {
    icon: Clock,
    title: 'Báo Giá Trong 30 Phút',
    description:
      'Gọi điện hoặc điền form, chúng tôi phản hồi và báo giá chi tiết trong 30 phút trong giờ làm việc. Không chờ đợi, không phiền hà.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Leaf,
    title: 'Hóa Chất Xanh An Toàn',
    description:
      '100% hóa chất đạt chuẩn châu Âu, an toàn tuyệt đối cho trẻ em, vật nuôi và môi trường. Không mùi hắc, không gây kích ứng da.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Shield,
    title: 'Cam Kết Hoàn Tiền',
    description:
      'Không hài lòng với kết quả, chúng tôi hoàn tiền 100% hoặc làm lại miễn phí. Cam kết rõ ràng bằng hợp đồng, không điều khoản mập mờ.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Users,
    title: 'Đội Ngũ Chuyên Nghiệp',
    description:
      '30+ nhân viên được đào tạo bài bản, mặc đồng phục chuyên nghiệp, có kiểm tra lý lịch tư pháp đầy đủ. Yên tâm khi cho vào nhà.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: FileCheck,
    title: 'Hóa Đơn VAT Đầy Đủ',
    description:
      'Xuất hóa đơn VAT đầy đủ cho doanh nghiệp. Hợp đồng minh bạch về giá cả, phạm vi và thời gian hoàn thành — không phát sinh chi phí ẩn.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: MapPin,
    title: 'Phủ Sóng Toàn Đà Nẵng',
    description:
      'Phục vụ toàn bộ 6 quận huyện: Hải Châu, Thanh Khê, Liên Chiểu, Ngũ Hành Sơn, Cẩm Lệ, Sơn Trà. Di chuyển nhanh, đến đúng giờ hẹn.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionTitle
          badge="Tại Sao Chọn Nhà Xanh?"
          title="6 Lý Do Khách Hàng Tin Tưởng Chúng Tôi"
          subtitle="Hơn 5 năm kinh nghiệm tại Đà Nẵng, chúng tôi hiểu rằng sự tin tưởng được xây dựng từ những cam kết cụ thể."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.title}
              variants={itemVariants}
              className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#5AB645] hover:shadow-md transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${usp.iconBg} group-hover:scale-110 transition-transform duration-300`}
              >
                <usp.icon size={24} className={usp.iconColor} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">{usp.title}</h3>
                <p className="text-[#4A5A4A] text-sm leading-relaxed">{usp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust counters */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#F5F7F5] rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '100+', label: 'Khách hàng tin dùng' },
            { number: '5+', label: 'Năm kinh nghiệm' },
            { number: '98%', label: 'Tỷ lệ hài lòng' },
            { number: '30+', label: 'Nhân viên chuyên nghiệp' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[#2D8B3A] mb-1">
                {stat.number}
              </div>
              <div className="text-[#4A5A4A] text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
