'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight, Star } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'

const contactInfo = [
  { icon: MapPin, title: 'Địa chỉ', detail: '32 Phú Lộc 14, Thanh Khê, Đà Nẵng' },
  { icon: Phone, title: 'Hotline & Zalo', detail: '0934.997.265' },
  { icon: Mail, title: 'Email', detail: 'canhquan.work@gmail.com' },
  { icon: Clock, title: 'Giờ hoạt động', detail: 'Phục vụ 24/7 (Cả Lễ, Tết)' },
]

export function Contact() {
  const [state, handleSubmit] = useForm("xbdpyjdg")
  const [phoneWarning, setPhoneWarning] = useState('')

  return (
    <section className="py-20 md:py-28 bg-[#FAFCFB] border-t border-emerald-50">
      <div className="container max-w-[1200px]">
        <SectionTitle
          badge="Liên Hệ Ngay"
          title="Trao Đổi Với Chuyên Viên"
          subtitle="Khảo sát tận nơi và tư vấn giải pháp làm sạch hoàn toàn miễn phí. Đội ngũ Nhà Xanh sẽ có mặt chỉ sau 30 phút."
        />

        <div className="grid lg:grid-cols-5 bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
          
          {/* Left: Info Panel (Image + Overlay) */}
          <div className="lg:col-span-2 relative p-10 md:p-12 xl:p-14 text-white overflow-hidden flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/building-exterior-curve.jpg" 
                alt="Công trình vệ sinh Nhà Xanh" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#164a22]/90 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D13] via-[#0A3D13]/60 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/30 shadow-xl overflow-hidden p-0.5 relative">
                <Image src="/images/logo.png" alt="Nhà Xanh Logo" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4 leading-tight">Giải pháp vệ sinh<br/>chuyên nghiệp.</h3>
              <p className="text-emerald-50/80 mb-12 text-sm leading-relaxed max-w-sm">
                Nhà Xanh tự hào mang đến môi trường sống và làm việc trong lành nhất cho hơn 500+ khách hàng tại Đà Nẵng.
              </p>
              
              <div className="space-y-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <info.icon size={22} className="text-emerald-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-emerald-100/70 text-xs font-bold uppercase tracking-wider mb-1.5">{info.title}</h4>
                      <p className="font-medium whitespace-pre-line leading-snug text-white/95 text-[15px]">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Ultra-Modern Form */}
          <div id="lien-he" className="lg:col-span-3 p-8 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-center scroll-mt-24">
            {state.succeeded ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-24 h-24 bg-emerald-50 text-[#2D8B3A] rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 size={48} className="stroke-[2.5]" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Tuyệt Vời!</h3>
                <p className="text-gray-500 mb-10 leading-relaxed text-[17px]">
                  Yêu cầu của bạn đã được ghi nhận. Chuyên viên Nhà Xanh sẽ liên hệ với bạn trong ít phút tới.
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline" 
                  size="lg"
                  className="rounded-2xl border-2 hover:bg-gray-50 h-14 px-8 font-semibold"
                >
                  <ArrowRight className="mr-2 rotate-180" size={18} />
                  Quay lại biểu mẫu
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="mb-10">
                  <h3 className="text-[28px] font-extrabold text-gray-900 mb-3 tracking-tight">Gửi Yêu Cầu</h3>
                  <p className="text-gray-500 text-[15px]">Mọi thông tin đều được bảo mật. Báo giá hoàn toàn miễn phí.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="relative group">
                    <div className="rounded-2xl bg-gray-50/50 border border-gray-200 px-5 py-3 focus-within:bg-white focus-within:border-[#2D8B3A] focus-within:ring-4 focus-within:ring-[#2D8B3A]/10 transition-all duration-200">
                      <label htmlFor="name" className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                        Họ và Tên <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        className="w-full bg-transparent border-none p-0 text-[16px] md:text-sm font-semibold text-gray-900 focus:ring-0 placeholder:text-gray-300 placeholder:font-medium"
                        placeholder="Nguyễn Văn A" 
                      />
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1.5 ml-2 font-medium absolute" />
                  </div>
                  
                  {/* Phone Input */}
                  <div className="relative group">
                    <div className="rounded-2xl bg-gray-50/50 border border-gray-200 px-5 py-3 focus-within:bg-white focus-within:border-[#2D8B3A] focus-within:ring-4 focus-within:ring-[#2D8B3A]/10 transition-all duration-200">
                      <label htmlFor="phone" className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                        Số Điện Thoại <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        required 
                        className="w-full bg-transparent border-none p-0 text-[16px] md:text-sm font-semibold text-gray-900 focus:ring-0 placeholder:text-gray-300 placeholder:font-medium"
                        placeholder="0934 xxx xxx" 
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g,'')
                          if(val.length > 0 && val.length < 10) setPhoneWarning('Số điện thoại thường có đúng 10 chữ số')
                          else setPhoneWarning('')
                        }}
                      />
                    </div>
                    {phoneWarning && <p className="text-amber-500 text-xs mt-1.5 ml-2 font-medium absolute">{phoneWarning}</p>}
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1.5 ml-2 font-medium absolute" />
                  </div>
                </div>


                {/* Message Textarea */}
                <div className="rounded-2xl bg-gray-50/50 border border-gray-200 px-5 py-4 focus-within:bg-white focus-within:border-[#2D8B3A] focus-within:ring-4 focus-within:ring-[#2D8B3A]/10 transition-all duration-200 mt-3">
                  <label htmlFor="message" className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Yêu Cầu Chi Tiết (Tùy chọn)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3}
                    className="w-full bg-transparent border-none p-0 text-[16px] md:text-sm font-semibold text-gray-900 focus:ring-0 resize-none placeholder:text-gray-300 placeholder:font-medium leading-relaxed"
                    placeholder="Ghi chú thêm về hiện trạng hoặc thời gian mong muốn khảo sát..." 
                  ></textarea>
                </div>

                {state.errors && state.errors.getFormErrors().length > 0 && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm border border-red-100 flex items-start gap-3 mt-4">
                    <div className="mt-0.5"><CheckCircle2 size={16} className="text-red-500" /></div>
                    <span><span className="font-bold">Lỗi:</span> Không thể kết nối.</span>
                  </div>
                )}

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-[60px] flex items-center justify-center gap-2 rounded-2xl text-base font-bold shadow-xl shadow-[#2D8B3A]/20 hover:shadow-[#2D8B3A]/30 hover:-translate-y-0.5 transition-all"
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Yêu Cầu Gọi Lại Ngay
                        <Phone size={18} className="ml-1" />
                      </>
                    )}
                  </Button>
                </div>
                
                <p className="text-[14px] text-center text-gray-700 font-semibold mt-5 flex items-center justify-center gap-1.5">
                  <Star className="text-amber-500 fill-amber-500" size={16} /> 500+ khách hàng đã tin dùng dịch vụ
                </p>
                <p className="text-[12px] text-center text-gray-400 font-medium mt-2">
                  Dữ liệu được xử lý an toàn theo <a href="/chinh-sach-bao-mat" className="underline underline-offset-2 hover:text-[#2D8B3A] transition-colors">chính sách bảo mật</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
