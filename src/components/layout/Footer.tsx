import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import { PhoneLink } from '@/components/ui'

const services = [
  { name: 'Vệ sinh văn phòng', href: '#dich-vu' },
  { name: 'Vệ sinh nhà xưởng', href: '#dich-vu' },
  { name: 'Vệ sinh sau xây dựng', href: '#dich-vu' },
  { name: 'Dọn dẹp nhà cửa', href: '#dich-vu' },
  { name: 'Dọn dẹp định kỳ', href: '#dich-vu' },
]

export function Footer() {
  return (
    <footer className="bg-[#2D8B3A] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-0.5">
                <Image src="/images/logo.png" alt="Nhà Xanh Logo" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-xl font-extrabold leading-tight">NHÀ XANH</div>
                <div className="text-xs text-white/70 leading-tight">Công ty TNHH TM XD DV Nhà Xanh</div>
              </div>
            </div>
            <p className="text-white/80 font-medium italic mb-3 text-sm">
              &ldquo;Sạch Chuẩn — Nhanh Gọn — An Tâm&rdquo;
            </p>
            <p className="text-white/65 text-sm leading-relaxed">
              Giải pháp vệ sinh công nghiệp toàn diện tại Đà Nẵng. Hóa chất xanh an toàn, đội ngũ chuyên nghiệp.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-bold text-base mb-5">Dịch Vụ</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/75 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#5AB645] rounded-full inline-block shrink-0" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-bold text-base mb-5">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/75 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#5AB645]" />
                <span>32 Phú Lộc 14, Thanh Khê, Đà Nẵng</span>
              </li>
              <li className="flex items-center gap-3 text-white/75 text-sm">
                <Phone size={16} className="shrink-0 text-[#5AB645]" />
                <PhoneLink href="tel:+84934997265" className="hover:text-white font-medium transition-colors">
                  0934.997.265
                </PhoneLink>
              </li>
              <li className="flex items-center gap-3 text-white/75 text-sm">
                <Mail size={16} className="shrink-0 text-[#5AB645]" />
                <a href="mailto:canhquan.work@gmail.com" className="hover:text-white transition-colors">
                  canhquan.work@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75 text-sm">
                <Clock size={16} className="mt-0.5 shrink-0 text-[#5AB645]" />
                <div>
                  <div>Thứ 2 – Thứ 7: 7:00 – 20:00</div>
                  <div>Chủ nhật: 8:00 – 17:00</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/75 text-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 text-[#5AB645]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <a href="https://www.facebook.com/vesinhcongnghiepnhaxanh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Facebook Fanpage
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15 pt-5 pb-24 md:pb-5">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-white/50 text-xs text-center md:text-left">
          <p>© 2025 Công ty TNHH TM XD DV Nhà Xanh. All rights reserved.</p>
          <p>Thiết kế bởi <a href="https://zalo.me/0935426117" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors underline underline-offset-2">Trần Cảnh Quân</a></p>
          <a href="/chinh-sach-bao-mat" className="hover:text-white/80 transition-colors underline underline-offset-2">
            Chính sách bảo mật
          </a>
        </div>
      </div>
    </footer>
  )
}
