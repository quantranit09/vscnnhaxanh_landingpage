'use client'

import { motion } from 'framer-motion'
import { Phone, FileText, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui'

const badges = [
  { icon: CheckCircle, text: '100+ khách hàng tin dùng' },
  { icon: Star, text: 'Đánh giá 5⭐ tại Đà Nẵng' },
]

const highlights = [
  'Báo giá trong 30 phút',
  'Hóa chất xanh, an toàn cho trẻ em',
  'Cam kết hoàn tiền nếu không hài lòng',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">
      {/* Green right panel (desktop) */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-1/2 hidden md:block"
        style={{
          background: 'linear-gradient(135deg, #2D8B3A 0%, #1E6B2A 50%, #5AB645 100%)',
        }}
        aria-hidden="true"
      />
      {/* Decorative circles */}
      <div
        className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-10 hidden md:block"
        style={{ background: '#5AB645' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-40 w-44 h-44 rounded-full opacity-10 hidden md:block"
        style={{ background: '#ffffff' }}
        aria-hidden="true"
      />

      <div className="container relative z-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Social proof */}
          <motion.div
            className="flex flex-wrap gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-1.5 bg-[#2D8B3A]/10 text-[#2D8B3A] text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                <badge.icon size={12} />
                {badge.text}
              </span>
            ))}
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Vệ Sinh Công Nghiệp{' '}
            <span className="text-[#2D8B3A]">Chuyên Nghiệp</span>{' '}
            tại Đà Nẵng
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-[#4A5A4A] font-medium mb-6 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            &ldquo;Sạch Chuẩn — Nhanh Gọn — An Tâm&rdquo;
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-[#4A5A4A] text-lg mb-6 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Dịch vụ vệ sinh văn phòng, nhà xưởng, sau xây dựng và nhà cửa tại Đà Nẵng.
            Đội ngũ 30+ nhân viên được đào tạo bài bản, dùng hóa chất xanh nhập khẩu châu Âu.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            className="space-y-2.5 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[#4A5A4A]">
                <CheckCircle size={18} className="text-[#2D8B3A] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          {/* Dual CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              href="tel:0905000000"
              size="lg"
              className="justify-center text-base font-bold"
            >
              <Phone size={20} />
              Gọi Ngay — 0905-000-000
            </Button>
            <Button
              href="#lien-he"
              variant="outline"
              size="lg"
              className="justify-center text-base"
            >
              <FileText size={20} />
              Nhận Báo Giá Miễn Phí
            </Button>
          </motion.div>

          {/* Micro-trust */}
          <motion.p
            className="mt-5 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            ✓ Phản hồi trong 30 phút &nbsp;·&nbsp; ✓ Báo giá chi tiết, minh bạch &nbsp;·&nbsp; ✓ Không ràng buộc
          </motion.p>
        </motion.div>

        {/* Right: Stats panel (desktop) */}
        <motion.div
          className="hidden md:flex flex-col items-center justify-center text-white"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5 w-full max-w-xs">
            {[
              { number: '100+', label: 'Khách hàng' },
              { number: '5+', label: 'Năm kinh nghiệm' },
              { number: '30+', label: 'Nhân viên' },
              { number: '98%', label: 'Tỷ lệ hài lòng' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 text-center"
              >
                <div className="text-4xl font-extrabold mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Service tags */}
          <div className="mt-8 space-y-3 w-full max-w-xs">
            {[
              'Văn phòng & Tòa nhà',
              'Nhà xưởng & Kho bãi',
              'Nhà ở & Căn hộ',
            ].map((svc) => (
              <div
                key={svc}
                className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3"
              >
                <CheckCircle size={18} className="text-[#5AB645] shrink-0" />
                <span className="text-sm font-medium">{svc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
