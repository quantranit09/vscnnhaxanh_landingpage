'use client'

import { motion } from 'framer-motion'
import { Phone, FileSignature, CheckCircle, ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/ui'

const steps = [
  {
    step: '01',
    icon: Phone,
    title: 'Liên Hệ & Nhận Báo Giá',
    description:
      'Gọi hotline hoặc điền form online. Nhân viên tư vấn liên hệ lại trong 30 phút, khảo sát thực tế nếu cần và gửi báo giá chi tiết, minh bạch đến bạn.',
    highlight: 'Phản hồi trong 30 phút',
  },
  {
    step: '02',
    icon: FileSignature,
    title: 'Ký Hợp Đồng & Lên Lịch',
    description:
      'Ký hợp đồng rõ ràng với đầy đủ điều khoản bảo đảm quyền lợi hai bên. Lên lịch thi công linh hoạt theo thời gian của bạn — kể cả buổi tối hoặc cuối tuần.',
    highlight: 'Lịch linh hoạt 7 ngày/tuần',
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Thi Công & Nghiệm Thu',
    description:
      'Đội ngũ đến đúng giờ, thi công theo quy trình chuẩn, dọn dẹp toàn bộ dụng cụ sau khi hoàn thành. Bạn nghiệm thu trực tiếp — hài lòng 100% mới thanh toán.',
    highlight: 'Hài lòng mới thanh toán',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F7F5]">
      <div className="container">
        <SectionTitle
          badge="Quy Trình"
          title="Chỉ 3 Bước Đơn Giản"
          subtitle="Từ lúc liên hệ đến khi không gian của bạn sạch bóng — quy trình rõ ràng, không phức tạp, không bất ngờ."
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-8 left-[20%] right-[20%] h-0.5 hidden lg:block"
            style={{
              background: 'linear-gradient(90deg, #2D8B3A 0%, #5AB645 50%, #2D8B3A 100%)',
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#2D8B3A] rounded-full flex items-center justify-center shadow-lg z-10 relative">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#5AB645] text-white text-xs font-black rounded-full flex items-center justify-center z-20">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-[#4A5A4A] text-sm leading-relaxed mb-4 max-w-xs">
                  {step.description}
                </p>

                <span className="inline-block bg-[#2D8B3A]/10 text-[#2D8B3A] text-xs font-semibold px-3 py-1.5 rounded-full">
                  ✓ {step.highlight}
                </span>

                {/* Arrow on mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-6 text-[#2D8B3A]">
                    <ArrowRight size={24} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA banner */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 bg-[#2D8B3A] text-white px-8 py-6 rounded-2xl shadow-xl">
            <div className="text-left">
              <div className="font-bold text-xl mb-1">Sẵn sàng bắt đầu?</div>
              <div className="text-white/80 text-sm">
                Liên hệ ngay — nhân viên tư vấn phản hồi trong 30 phút
              </div>
            </div>
            <a
              href="tel:+84934997265"
              className="shrink-0 bg-white text-[#2D8B3A] px-7 py-3.5 rounded-xl font-bold hover:bg-[#F5F7F5] transition-colors whitespace-nowrap shadow-sm"
            >
              Gọi: 0934.997.265
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
