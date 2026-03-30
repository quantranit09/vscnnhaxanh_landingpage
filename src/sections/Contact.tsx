'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'

const contactInfo = [
  { icon: MapPin, title: 'Địa chỉ', detail: 'Đà Nẵng: 123 Nguyễn Văn Linh, Hải Châu\nHội An: 45 Lý Thường Kiệt, Sơn Phong' },
  { icon: Phone, title: 'Hotline / Zalo', detail: '0905.000.000' },
  { icon: Mail, title: 'Email', detail: 'info@nhaxanh.vn' },
  { icon: Clock, title: 'Giờ hoạt động', detail: '24/7 — Phục vụ cả ngày Lễ, Tết' },
]

export function Contact() {
  const [state, handleSubmit] = useForm("mnnjokwe") // Thay bằng ID Formspree thật
  const [phoneWarning, setPhoneWarning] = useState('')

  return (
    <section id="lien-he" className="py-20 md:py-28 bg-[#2D8B3A]/5 border-t border-emerald-100">
      <div className="container max-w-6xl">
        <SectionTitle
          badge="Liên Hệ Ngay"
          title="Nhận Khảo Sát & Báo Giá Miễn Phí"
          subtitle="Để lại thông tin, chuyên viên của chúng tôi sẽ có mặt tại công trình để khảo sát thực tế."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Left: Info Panel */}
          <div className="lg:col-span-2 bg-[#2D8B3A] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Thông Tin Liên Hệ</h3>
            
            <div className="space-y-8 relative z-10">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <info.icon size={20} className="text-emerald-50" />
                  </div>
                  <div>
                    <h4 className="text-emerald-100/90 text-sm font-medium mb-1">{info.title}</h4>
                    <p className="font-semibold whitespace-pre-line leading-relaxed">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/20 relative z-10">
              <p className="text-sm text-emerald-100/90 italic">
                *Tư vấn kỹ thuật và khảo sát tận nơi là hoàn toàn miễn phí, không bắt buộc sử dụng dịch vụ.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 p-8 md:p-12">
            {state.succeeded ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gửi Yêu Cầu Thành Công!</h3>
                <p className="text-gray-600 max-w-md">
                  Cảm ơn bạn đã quan tâm đến dịch vụ của Nhà Xanh. Chuyên viên của chúng tôi sẽ gọi lại vào số điện thoại của bạn trong thời gian sớm nhất.
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline" 
                  className="mt-8"
                >
                  Gửi yêu cầu khác
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Họ và Tên *</label>
                    <input 
                      id="name" 
                      name="name" 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/20 focus:border-[#2D8B3A] transition-colors"
                      placeholder="Nguyễn Văn A" 
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Số Điện Thoại *</label>
                    <input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/20 focus:border-[#2D8B3A] transition-colors"
                      placeholder="0905 xxx xxx" 
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g,'')
                        if(val.length > 0 && val.length < 10) setPhoneWarning('Số điện thoại cần có đúng 10 chữ số')
                        else setPhoneWarning('')
                      }}
                    />
                    {phoneWarning && <p className="text-amber-500 text-xs">{phoneWarning}</p>}
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Dịch Vụ Quan Tâm</label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/20 focus:border-[#2D8B3A] transition-colors bg-white appearance-none"
                    >
                      <option value="Chưa xác định">-- Chọn dịch vụ --</option>
                      <option value="Vệ sinh văn phòng">Vệ sinh văn phòng định kỳ</option>
                      <option value="Vệ sinh nhà xưởng">Vệ sinh nhà xưởng</option>
                      <option value="Vệ sinh sau xây dựng">Vệ sinh sau xây dựng</option>
                      <option value="Dọn nhà tổng thể">Dọn dẹp nhà cửa tổng thể</option>
                      <option value="Giặt thảm sofa">Giặt thảm / ghế sofa</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="area" className="text-sm font-medium text-gray-700">Diện Tích Ước Tính (m²)</label>
                    <input 
                      id="area" 
                      name="area" 
                      type="number" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/20 focus:border-[#2D8B3A] transition-colors"
                      placeholder="Ví dụ: 100" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Ghi Chú Yêu Cầu (Tùy chọn)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D8B3A]/20 focus:border-[#2D8B3A] transition-colors resize-none text-[16px] md:text-sm"
                    placeholder="Ghi chú thêm về hiện trạng hoặc thời gian mong muốn khảo sát..." 
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full flex items-center justify-center gap-2"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Send size={20} />
                      Nhận Báo Giá Ngay
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                  Thông tin của bạn được bảo mật tuyệt đối theo <a href="/chinh-sach-bao-mat" className="underline hover:text-[#2D8B3A]">chính sách bảo mật</a> của chúng tôi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
