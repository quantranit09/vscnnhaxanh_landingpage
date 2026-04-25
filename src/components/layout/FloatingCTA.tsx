'use client'

import { useEffect, useState } from 'react'
import { Phone, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { PhoneLink } from '@/components/ui'

export function FloatingCTA() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* ─── DESKTOP & TABLET: Floating Bottom Right ─── */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col gap-3 z-50 pointer-events-none">

        {/* Back to Top – desktop */}
        <button
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
          className={`pointer-events-auto self-end w-[44px] h-[44px] rounded-full bg-white border border-gray-200
                     shadow-lg flex items-center justify-center text-gray-600 hover:text-[#2D8B3A] hover:border-[#2D8B3A]
                     hover:-translate-y-1 transition-all duration-300
                     ${showTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
        >
          <ChevronUp size={20} strokeWidth={2.5} />
        </button>

        {/* Zalo Button */}
        <a
          href="https://zalo.me/0934997265"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto self-end h-[56px] w-[56px] rounded-full 
                   shadow-xl flex items-center justify-center hover:scale-105
                   transition-transform relative group overflow-hidden"
          aria-label="Chat Zalo"
        >
          <Image 
            src="/images/Logo-Zalo-Arc.webp" 
            alt="Chat Zalo" 
            fill
            className="object-cover"
          />
          <span className="absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md">
            Chat Zalo
            <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-gray-900" />
          </span>
        </a>

        {/* Phone Button */}
        <div className="pointer-events-auto relative flex items-center self-end">
          <div className="absolute inset-[-6px] bg-[#2D8B3A]/20 rounded-full animate-ping opacity-40"></div>
          <PhoneLink
            href="tel:+84934997265"
            className="h-[56px] flex items-center bg-[#2D8B3A] border-2 border-white text-white rounded-full
                     shadow-2xl hover:bg-[#1E6B2A] transition-colors relative z-10 px-5 group overflow-hidden"
            aria-label="Gọi ngay"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out" />
            <div className="bg-white/20 p-2 rounded-full mr-2 shrink-0">
              <Phone className="fill-white w-5 h-5" />
            </div>
            <div className="flex flex-col justify-center text-left py-1 ml-1 pr-1">
              <span className="font-black text-[15px] tracking-wide leading-tight">0934.997.265</span>
              <span className="font-semibold text-[12px] text-white/90 leading-tight mt-0.5">Tư vấn miễn phí • Phản hồi 30s</span>
            </div>
          </PhoneLink>
        </div>
      </div>

      {/* ─── MOBILE: Back to Top (floats above the CTA bar) ─── */}
      <button
        onClick={scrollToTop}
        aria-label="Lên đầu trang"
        className={`md:hidden fixed right-3 z-[51] w-[42px] h-[42px] rounded-full bg-white border border-gray-200
                   shadow-lg flex items-center justify-center text-gray-500 active:scale-95 transition-all duration-300
                   ${showTop ? 'opacity-100 bottom-[82px]' : 'opacity-0 bottom-[70px] pointer-events-none'}`}
        style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
      >
        <ChevronUp size={20} strokeWidth={2.5} />
      </button>

      {/* ─── MOBILE: “Hiện đang hoạt động” status pill ─── */}
      <div className="md:hidden fixed bottom-[76px] left-3 z-[51] flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        ĐANG PHỤC VỤ
      </div>

      {/* ─── MOBILE: Fixed Footer Full Width ─── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-100 p-3 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <PhoneLink
          href="tel:+84934997265"
          className="flex-1 relative overflow-hidden rounded-[18px] bg-gradient-to-l from-[#2D8B3A] to-[#45a352] text-white flex items-center justify-center shadow-lg shadow-[#2D8B3A]/40 active:scale-95 transition-transform"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
          <div className="bg-white/20 p-2 rounded-full mr-2.5 shadow-sm shrink-0">
            <Phone size={18} className="fill-white" />
          </div>
          <div className="flex flex-col items-start leading-tight relative z-10">
            <span className="font-black text-[14px] tracking-wide drop-shadow-md">0934.997.265 — Gọi Ngay</span>
            <span className="font-medium text-[11px] text-emerald-100 mt-0.5">Tư vấn miễn phí • Phản hồi 30s</span>
          </div>
        </PhoneLink>
        <a
          href="https://zalo.me/0934997265"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[52px] h-[52px] shrink-0 relative rounded-[18px] overflow-hidden shadow-md active:scale-95 transition-transform"
          aria-label="Chat Zalo"
        >
          <Image src="/images/Logo-Zalo-Arc.webp" alt="Zalo" fill className="object-cover" />
        </a>
      </div>
    </>
  )
}
