import { Phone, Mail, Clock, MapPin } from 'lucide-react'

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
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">NX</span>
              </div>
              <div>
                <div className="text-xl font-extrabold leading-tight">NHÀ XANH</div>
                <div className="text-xs text-white/70 leading-tight">Vệ Sinh Công Nghiệp</div>
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
                <span>Đà Nẵng, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3 text-white/75 text-sm">
                <Phone size={16} className="shrink-0 text-[#5AB645]" />
                <a href="tel:0905000000" className="hover:text-white font-medium transition-colors">
                  0905-000-000
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/75 text-sm">
                <Mail size={16} className="shrink-0 text-[#5AB645]" />
                <a href="mailto:nhaxanh@gmail.com" className="hover:text-white transition-colors">
                  nhaxanh@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75 text-sm">
                <Clock size={16} className="mt-0.5 shrink-0 text-[#5AB645]" />
                <div>
                  <div>Thứ 2 – Thứ 7: 7:00 – 20:00</div>
                  <div>Chủ nhật: 8:00 – 17:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15 py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-xs">
          <p>© 2025 Vệ Sinh Công Nghiệp Nhà Xanh Đà Nẵng. All rights reserved.</p>
          <a href="/chinh-sach-bao-mat" className="hover:text-white/80 transition-colors underline underline-offset-2">
            Chính sách bảo mật
          </a>
        </div>
      </div>
    </footer>
  )
}
