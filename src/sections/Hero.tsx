'use client'

import Image from 'next/image'
import { Phone, ArrowRight, CheckCircle2, Star, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui'
import { trackPhoneClick } from '@/lib/gtag'

const highlights = [
  'Báo giá siêu tốc trong 30 phút',
  'Hóa chất xanh, chuẩn an toàn',
  '100% hài lòng mới thanh toán',
]

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-[#F8FAF9] overflow-hidden pt-16 lg:pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8F3EA] rounded-l-[120px] transform translate-x-12 opacity-50 hidden lg:block" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#5AB645]/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2D8B3A]/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-6 lg:py-0">
        
        {/* Left Content — NO Framer Motion, pure CSS */}
        <div className="max-w-xl animate-[fadeInLeft_0.8s_ease-out_both]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-4 lg:mb-8 animate-[fadeIn_0.6s_ease-out_0.2s_both]">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-800">Dịch vụ vệ sinh #1 tại Đà Nẵng</span>
          </div>

          <h1 className="text-[2rem] sm:text-5xl lg:text-[4rem] font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-4 lg:mb-6">
            Dịch Vụ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D8B3A] to-[#5AB645]">
              Vệ Sinh Công Nghiệp
            </span>{' '}
            Tại Đà Nẵng
          </h1>

          <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
            <strong className="text-emerald-800 font-semibold">Nhà Xanh — &quot;Sạch Chuẩn, Nhanh Gọn, An Tâm&quot;</strong>. Lựa chọn hàng đầu cho văn phòng, nhà xưởng và căn hộ tại Đà Nẵng.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8 lg:mb-10">
            <Button 
              href="tel:+84934997265" 
              size="lg" 
              onClick={trackPhoneClick}
              className="h-14 px-8 text-base shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-shadow rounded-2xl"
            >
              <Phone size={20} className="mr-2" />
              Gọi Ngay 0934.997.265
            </Button>
            <Button 
              href="#lien-he" 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-base border-2 border-emerald-100 bg-white hover:bg-emerald-50 text-emerald-700 hover:text-emerald-800 rounded-2xl"
            >
              Nhận Báo Giá Miễn Phí
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          {/* Social Proof & Features */}
          <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-8 mt-4">
            {highlights.map((text, i) => (
              <div 
                key={i} 
                className="flex items-start gap-3 animate-[fadeInUp_0.5s_ease-out_both]"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600 mt-0.5">
                  <CheckCircle2 size={14} className="stroke-[3]" />
                </div>
                <span className="text-sm font-medium text-gray-700 leading-tight">{text}</span>
              </div>
            ))}
            <div className="flex items-start gap-3 animate-[fadeInUp_0.5s_ease-out_0.7s_both]">
              <div className="bg-amber-100 p-1.5 rounded-full text-amber-600 mt-0.5">
                <Star size={14} className="stroke-[3] fill-amber-500" />
              </div>
              <span className="text-sm font-medium text-gray-700 leading-tight">Được đánh giá 5/5 sao</span>
            </div>
          </div>
        </div>

        {/* Right Content - Visuals — NO Framer Motion */}
        <div className="relative lg:h-[650px] w-full mt-10 lg:mt-0 animate-[fadeIn_1s_ease-out_both]">
          {/* Main Image Container */}
          <div className="relative w-full h-[400px] lg:h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <div className="absolute inset-0 bg-emerald-900/10 z-10 mix-blend-overlay"></div>
            <Image 
              src="/images/hero-team-polishing.jpg" 
              alt="Dịch vụ vệ sinh công nghiệp Đà Nẵng chuyên nghiệp - Đội ngũ Nhà Xanh" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
          </div>

          {/* Floating Card 1 - Experience */}
          <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-12 bg-white p-5 rounded-3xl shadow-xl flex items-center gap-4 md:gap-5 border border-emerald-50 z-30 hover:-translate-y-2 transition-transform cursor-default animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2D8B3A] to-[#5AB645] rounded-2xl flex items-center justify-center text-white font-extrabold text-xl md:text-2xl shadow-inner">
              5+
            </div>
            <div>
              <p className="text-xs md:text-sm text-gray-500 font-medium">Kinh Nghiệm</p>
              <p className="text-gray-900 font-bold text-base md:text-lg">Năm Trong Ngành</p>
            </div>
          </div>

          {/* Floating Card 2 - Stats */}
          <div className="absolute top-8 -right-4 md:top-12 md:-right-8 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-3xl shadow-xl flex items-center gap-3 md:gap-4 border border-white/50 z-30 hover:-translate-y-2 transition-transform cursor-default animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden`}>
                  <Image src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Khách hàng" width={40} height={40} className="w-full h-full object-cover" unoptimized />
                </div>
              ))}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-[10px] md:text-xs">
                100+
              </div>
            </div>
            <div className="pr-2 hidden sm:block">
              <p className="text-gray-900 font-bold text-xs md:text-sm">Khách Hàng</p>
              <div className="flex text-amber-500">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
              </div>
            </div>
          </div>

          {/* Sparkles effect */}
          <Sparkles className="absolute top-1/4 left-1/4 text-white opacity-60 z-20 animate-pulse pointer-events-none" size={24} />
          <Sparkles className="absolute bottom-1/3 right-1/4 text-white opacity-40 z-20 animate-bounce pointer-events-none" size={16} />
        </div>

      </div>
    </section>
  )
}
