'use client'

import { useState, useEffect } from 'react'
import { Phone, X, Zap } from 'lucide-react'

const MESSAGES = [
  { icon: '⚡', text: 'Ưu đãi hôm nay: Miễn phí khảo sát tận nơi — Không cần đặt cọc' },
  { icon: '🕐', text: 'Phản hồi báo giá trong 30 phút · Đội ngũ luôn sẵn sàng 24/7' },
  { icon: '✅', text: '500+ khách hàng tin dùng · 100% hài lòng mới thanh toán' },
]

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  const [idx, setIdx] = useState(0)
  const [fade, setFade] = useState(true)

  // Rotate messages with fade transition
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % MESSAGES.length)
        setFade(true)
      }, 300)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  if (!visible) return null

  const msg = MESSAGES[idx]

  return (
    <div className="relative bg-[#1a5c27] text-white text-[13px] py-2 px-4 flex items-center justify-center gap-3 min-h-[36px]">
      {/* Left: phone quick-access (desktop) */}
      <a
        href="tel:+84934997265"
        className="hidden sm:flex items-center gap-1.5 text-emerald-200 hover:text-white transition-colors font-semibold shrink-0"
      >
        <Phone size={13} className="fill-emerald-200" />
        0934.997.265
      </a>

      {/* Divider */}
      <span className="hidden sm:block w-px h-4 bg-white/20 shrink-0" />

      {/* Rotating message */}
      <span
        className="text-center font-medium leading-snug transition-opacity duration-300"
        style={{ opacity: fade ? 1 : 0 }}
      >
        <span className="mr-1">{msg.icon}</span>
        {msg.text}
      </span>

      {/* Right: CTA pill (desktop) */}
      <span className="hidden sm:block w-px h-4 bg-white/20 shrink-0" />
      <a
        href="tel:+84934997265"
        className="hidden sm:flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-amber-900 font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full transition-colors shrink-0"
      >
        <Zap size={11} className="fill-amber-900" />
        Gọi ngay
      </a>

      {/* Dismiss */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Đóng thông báo"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1"
      >
        <X size={14} />
      </button>
    </div>
  )
}
