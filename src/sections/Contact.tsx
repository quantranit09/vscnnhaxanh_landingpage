'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight, Star } from 'lucide-react'
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
  const [btnPulse, setBtnPulse] = useState(false)
  const submitRef = useRef<HTMLDivElement>(null)

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '')
    if (val.length > 0 && val.length < 10) {
      setPhoneWarning('Số điện thoại thường có đúng 10 chữ số')
    } else {
      setPhoneWarning('')
    }
    // Auto-pulse & scroll when phone is valid
    if (val.length === 10) {
      setBtnPulse(true)
      setTimeout(() => setBtnPulse(false), 1800)
      submitRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

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
                src="/images/building-exterior-curve.webp" 
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
                <Image src="/images/logo.webp" alt="Nhà Xanh Logo" width={48} height={48} className="w-full h-full object-contain" />
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
              <>
                {/* ── PRIMARY: Direct call block ── */}
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-5 mb-6 text-center">
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-2">
                    Cách nhanh nhất
                  </p>
                  <a
                    href="tel:+84934997265"
                    className="group inline-flex items-center justify-center gap-3 text-[#2D8B3A] hover:text-[#1E6B2A] transition-colors"
                  >
                    <div className="relative">
                      <span className="absolute -inset-2 rounded-full bg-emerald-300/40 animate-ping" />
                      <Phone size={26} className="fill-[#2D8B3A] relative z-10" />
                    </div>
                    <span className="text-3xl font-black tracking-tight group-hover:underline underline-offset-4">
                      0934.997.265
                    </span>
                  </a>
                  <p className="text-xs text-emerald-600 font-medium mt-2">
                    Phản hồi ngay trong 30 giây · Miễn phí 100%
                  </p>
                </div>

                {/* ── Divider ── */}
                <div className="flex items-center gap-4 mb-5">
                  <hr className="flex-1 border-gray-200" />
                  <span className="text-gray-400 text-sm font-medium px-1">hoặc để lại số, chúng tôi gọi lại</span>
                  <hr className="flex-1 border-gray-200" />
                </div>

                {/* ── SECONDARY: Form ── */}
                <form onSubmit={handleSubmit} className="space-y-4">

                <div className="mb-6">
                  <h3 className="text-[26px] font-extrabold text-gray-900 mb-1.5 tracking-tight">Để lại số điện thoại</h3>
                  <p className="text-gray-500 text-[14px]">Chúng tôi gọi lại trong vòng 30 giây. Miễn phí tư vấn.</p>
                </div>

                {/* Phone — the only required field */}
                <div className="relative group">
                  <div className="rounded-2xl bg-gray-50/50 border-2 border-gray-200 px-5 py-4 focus-within:bg-white focus-within:border-[#2D8B3A] focus-within:ring-4 focus-within:ring-[#2D8B3A]/10 transition-all duration-200">
                    <label htmlFor="phone" className="block text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-1.5">
                      Số Điện Thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="numeric"
                      className="w-full bg-transparent border-none p-0 text-2xl font-bold text-gray-900 focus:ring-0 placeholder:text-gray-300 placeholder:font-normal tracking-wide"
                      placeholder="0934 xxx xxx"
                      onChange={onPhoneChange}
                    />
                  </div>
                  {phoneWarning && (
                    <p className="text-amber-500 text-xs mt-1.5 ml-2 font-medium">{phoneWarning}</p>
                  )}
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1.5 ml-2 font-medium" />
                </div>


                {state.errors && state.errors.getFormErrors().length > 0 && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm border border-red-100 flex items-start gap-3 mt-4">
                    <div className="mt-0.5"><CheckCircle2 size={16} className="text-red-500" /></div>
                    <span><span className="font-bold">Lỗi:</span> Không thể kết nối.</span>
                  </div>
                )}

                <div ref={submitRef} className="pt-6 relative">
                  {/* Pulse ring when ready to submit */}
                  {btnPulse && (
                    <span className="absolute inset-0 rounded-2xl animate-ping bg-[#2D8B3A]/30 pointer-events-none" />
                  )}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className={`w-full h-[60px] flex items-center justify-center gap-2 rounded-2xl text-base font-bold shadow-xl transition-all
                      ${ btnPulse
                        ? 'shadow-[#2D8B3A]/50 scale-[1.02]'
                        : 'shadow-[#2D8B3A]/20 hover:shadow-[#2D8B3A]/30 hover:-translate-y-0.5'
                      }`}
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
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
