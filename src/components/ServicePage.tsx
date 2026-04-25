import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle2, ChevronRight, Star, ArrowRight, MapPin } from 'lucide-react'
import { Breadcrumb } from '@/components/Breadcrumb'
import { SERVICES, type ServiceData } from '@/data/services'
import { trackPhoneClick } from '@/lib/gtag'

// ─── ContactForm (inline, nhẹ hơn import toàn bộ Contact.tsx) ────────────────
function QuickCTA({ service }: { service: ServiceData }) {
  return (
    <section
      id="lien-he"
      aria-label="Liên hệ báo giá"
      className="py-16 bg-[#2D8B3A] text-white scroll-mt-20"
    >
      <div className="container max-w-3xl text-center">
        <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">
          Báo giá miễn phí trong 30 phút
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Nhận Báo Giá {service.shortName} Ngay
        </h2>
        <p className="text-white/80 mb-8 text-base max-w-xl mx-auto">
          Gọi hotline hoặc để lại số điện thoại — chuyên viên Nhà Xanh sẽ phản hồi trong 30 phút.
          Khảo sát thực tế và tư vấn hoàn toàn miễn phí.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+84934997265"
            onClick={() => trackPhoneClick('tel:+84934997265')}
            className="flex items-center gap-2 bg-white text-[#2D8B3A] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#F5F7F5] transition-colors shadow-lg w-full sm:w-auto justify-center"
          >
            <Phone size={22} />
            Gọi: 0934.997.265
          </a>
          <a
            href="/#lien-he"
            className="flex items-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-semibold hover:border-white transition-colors w-full sm:w-auto justify-center"
          >
            Để lại SĐT gọi lại
            <ArrowRight size={18} />
          </a>
        </div>
        <p className="text-white/60 text-sm mt-6 flex items-center justify-center gap-1.5">
          <Star className="fill-amber-400 text-amber-400" size={14} />
          4.9/5 từ 100+ khách hàng tại Đà Nẵng
        </p>
      </div>
    </section>
  )
}

// ─── Schema.org for Service page ────────────────────────────────────────────
function ServiceSchema({ service }: { service: ServiceData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://vscnnhaxanhdanang.com/${service.slug}#service`,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://vscnnhaxanhdanang.com/#business',
      name: 'Nhà Xanh – Vệ Sinh Công Nghiệp Đà Nẵng',
      telephone: '+84934997265',
    },
    areaServed: { '@type': 'City', name: 'Đà Nẵng' },
    offers: {
      '@type': 'Offer',
      price: service.schemaPrice,
      priceCurrency: 'VND',
      description: service.priceDetail,
    },
    image: `https://vscnnhaxanhdanang.com${service.heroImage}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}

// ─── Main ServicePage component ───────────────────────────────────────────────
export function ServicePage({ service }: { service: ServiceData }) {
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug)

  return (
    <>
      <ServiceSchema service={service} />

      {/* Breadcrumb */}
      <div className="bg-[#F5F7F5] border-b border-gray-100">
        <Breadcrumb items={[{ label: service.shortName }]} />
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        aria-label={`Dịch vụ ${service.name}`}
        className="relative py-16 md:py-24 bg-[#F8FAF9] overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8F3EA] rounded-l-[120px] opacity-50 hidden lg:block" />
        <div className="container relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-800">
                Dịch vụ tại Đà Nẵng
              </span>
            </div>

            {/* H1 — chứa keyword chính */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              {service.heroKeyword.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D8B3A] to-[#5AB645]">
                {service.heroKeyword.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              <strong className="text-emerald-800">{service.tagline}</strong>
              {' '}— {service.priceUnit !== '/gói' ? `${service.price}${service.priceUnit}` : service.price}{' '}
              · Báo giá miễn phí trong 30 phút.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:+84934997265"
                onClick={() => trackPhoneClick('tel:+84934997265')}
                className="flex items-center justify-center gap-2 bg-[#2D8B3A] text-white px-6 py-4 rounded-2xl font-bold text-base shadow-xl shadow-emerald-500/30 hover:bg-[#1E6B2A] hover:-translate-y-0.5 transition-all"
              >
                <Phone size={20} />
                Tư vấn ngay trong 30s
              </a>
              <a
                href="#lien-he"
                className="flex items-center justify-center gap-2 border-2 border-emerald-200 text-emerald-700 px-6 py-4 rounded-2xl font-semibold hover:bg-emerald-50 hover:-translate-y-0.5 transition-all"
              >
                Nhận báo giá miễn phí
                <ChevronRight size={18} />
              </a>
            </div>

            {/* Quick benefits */}
            <div className="grid grid-cols-2 gap-3 border-t border-gray-200 pt-6">
              {service.benefits.slice(0, 4).map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="text-sm text-gray-700 leading-tight">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative h-[380px] md:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src={service.heroImage}
              alt={`${service.name} tại Đà Nẵng – Nhà Xanh`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Price badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-5 py-3 rounded-2xl shadow-xl">
              <p className="text-xs text-gray-500 font-medium">Giá tham khảo</p>
              <p className="text-[#2D8B3A] font-extrabold text-xl leading-tight">
                {service.price}
                <span className="text-sm font-medium text-gray-500 ml-1">{service.priceUnit}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      <section aria-label="Phạm vi dịch vụ" className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            Chúng Tôi Làm Gì Cho Bạn?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Phạm vi dịch vụ {service.shortName.toLowerCase()} của Nhà Xanh tại Đà Nẵng
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0 text-[#2D8B3A]">
                  <CheckCircle2 size={18} className="stroke-[2.5]" />
                </div>
                <span className="text-sm text-gray-700 font-medium leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section aria-label="Quy trình thực hiện" className="py-16 bg-[#F5F7F5]">
        <div className="container max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            Quy Trình {service.shortName}
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Rõ ràng, minh bạch — không bất ngờ trong suốt quá trình
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#2D8B3A] text-white font-extrabold text-xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
                {i < service.process.length - 1 && (
                  <ChevronRight
                    size={20}
                    className="hidden lg:block absolute top-5 -right-4 text-gray-300"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section aria-label="Bảng giá" className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            Giá {service.shortName} Tại Đà Nẵng
          </h2>
          <div className="mt-8 bg-[#F5F7F5] rounded-2xl p-8 border border-gray-100">
            <div className="flex items-end gap-3 mb-4">
              <span className="text-5xl font-black text-[#2D8B3A]">{service.price}</span>
              <span className="text-gray-500 font-medium pb-2 text-lg">{service.priceUnit}</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{service.priceDetail}</p>
            <div className="bg-amber-50 text-amber-800 px-4 py-3 rounded-xl text-sm border border-amber-100">
              <strong>Lưu ý:</strong> Giá trên chỉ mang tính tham khảo. Nhà Xanh luôn{' '}
              <strong>khảo sát miễn phí tận nơi</strong> và báo giá chính xác theo thực tế trước khi ký hợp đồng.
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 bg-[#2D8B3A] text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-[#1E6B2A] transition-colors shadow-lg"
            >
              Đăng Ký Khảo Sát Miễn Phí
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section aria-label="Đánh giá khách hàng" className="py-12 bg-[#F5F7F5]">
        <div className="container max-w-2xl text-center">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Khách Hàng Nói Gì?
          </p>
          <blockquote className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
              &ldquo;{service.testimonial.content}&rdquo;
            </p>
            <footer className="font-bold text-gray-900">
              {service.testimonial.name}
              <span className="text-gray-500 font-normal ml-2 text-sm">
                — {service.testimonial.role}
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section aria-label="Câu hỏi thường gặp" className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="space-y-4">
            {service.faq.map(({ q, a }, i) => (
              <details
                key={i}
                className="group border border-gray-100 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 list-none">
                  <span>{q}</span>
                  <ChevronRight
                    size={18}
                    className="shrink-0 text-gray-400 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREA SERVED ──────────────────────────────────────────────────── */}
      <section aria-label="Khu vực phục vụ" className="py-12 bg-[#F5F7F5]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">
            Khu Vực {service.shortName} Tại Đà Nẵng
          </h2>
          <p className="text-gray-500 text-sm mb-6">Đội xe 24/7 — phủ sóng toàn thành phố</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Hải Châu', 'Thanh Khê', 'Sơn Trà', 'Ngũ Hành Sơn', 'Liên Chiểu', 'Cẩm Lệ', 'Hòa Vang'].map(
              (district) => (
                <span
                  key={district}
                  className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
                >
                  <MapPin size={13} className="text-[#2D8B3A]" />
                  Quận {district}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <QuickCTA service={service} />

      {/* ── OTHER SERVICES ───────────────────────────────────────────────── */}
      <section aria-label="Dịch vụ khác" className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-xl font-extrabold text-gray-900 mb-8 text-center">
            Khám Phá Thêm Dịch Vụ Nhà Xanh
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex flex-col gap-2 p-4 rounded-xl border border-gray-100 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="relative h-28 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={s.heroImage}
                    alt={`${s.name} tại Đà Nẵng`}
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#2D8B3A] transition-colors">
                  {s.shortName}
                </p>
                <p className="text-xs text-[#2D8B3A] font-semibold">
                  {s.price}{s.priceUnit}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
