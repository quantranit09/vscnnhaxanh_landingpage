'use client'

import { motion } from 'framer-motion'
import { MapPin, Trophy, ShieldCheck } from 'lucide-react'

const districts = [
  'Hải Châu', 'Thanh Khê', 'Sơn Trà', 'Ngũ Hành Sơn', 
  'Liên Chiểu', 'Cẩm Lệ', 'Hòa Vang'
]

export function About() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2D8B3A] font-bold tracking-wider uppercase text-sm mb-4 block">
              Về Chúng Tôi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Nhà Xanh — Tiêu Chuẩn Nâng Tầm Không Gian Sống
            </h2>
            <div className="space-y-5 text-[#4A5A4A] leading-relaxed mb-8">
              <p>
                Được thành lập với sứ mệnh mang đến môi trường sống và làm việc sạch sẽ, an toàn nhất, 
                <strong> Vệ Sinh Công Nghiệp Nhà Xanh</strong> tự hào là đối tác tin cậy của hàng trăm hộ gia đình và doanh nghiệp tại Đà Nẵng.
              </p>
              <p>
                Chúng tôi không chỉ làm sạch bề mặt, chúng tôi dọn dẹp vi khuẩn, nấm mốc và các tác nhân gây hại bằng hệ thống máy móc thông minh và 100% hóa chất đạt chứng nhận an toàn, thân thiện với môi trường.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                  <Trophy size={20} />
                </div>
                <div className="font-bold text-gray-900">Top Dịch Vụ<br/><span className="text-sm font-normal text-gray-500">Đà Nẵng & Hội An</span></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div className="font-bold text-gray-900">Chứng Nhận An Toàn<br/><span className="text-sm font-normal text-gray-500">Hóa chất Châu Âu</span></div>
              </div>
            </div>
            
            <hr className="border-gray-100 mb-8" />
            
            <h3 className="font-bold border-l-4 border-[#2D8B3A] pl-3 mb-4 text-gray-900">
              Khu vực phục vụ (Đội xe 24/7)
            </h3>
            <div className="flex flex-wrap gap-2">
              {districts.map(d => (
                <span key={d} className="inline-flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-md text-sm text-gray-600">
                  <MapPin size={14} className="text-[#2D8B3A]" />
                  Quận {d}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Mock Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#F5F7F5] relative border border-gray-100 shadow-sm">
              {/* Replace with real image in production */}
              <div className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center p-8 text-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2670&auto=format&fit=crop')" }}>
                 <div className="absolute inset-0 bg-[#2D8B3A]/80 mix-blend-multiply"></div>
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center rotate-12 mb-6 z-10 shadow-xl">
                  <span className="text-[#2D8B3A] font-black text-4xl -rotate-12">NX</span>
                </div>
                <p className="text-white font-bold text-2xl mb-2 z-10">Đội ngũ chuyên nghiệp</p>
                <p className="text-white/90 text-sm max-w-xs z-10">Liên tục đào tạo để mang lại chất lượng phục vụ tốt nhất.</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-[#2D8B3A]">30+</div>
                <div className="text-sm font-semibold text-gray-700 leading-tight">
                  Chuyên viên <br/>vệ sinh lành nghề
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
