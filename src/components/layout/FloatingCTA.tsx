'use client'

import { Phone } from 'lucide-react'

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-center gap-3">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0905000000"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat Zalo với Nhà Xanh"
        aria-label="Chat Zalo Nhà Xanh"
        className="w-14 h-14 bg-[#0068FF] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
        style={{ boxShadow: '0 4px 20px rgba(0,104,255,0.4)' }}
      >
        <span className="font-black text-xs leading-none tracking-tight">Zalo</span>
      </a>

      {/* Phone Button — pulsing */}
      <a
        href="tel:0905000000"
        title="Gọi ngay 0905-000-000"
        aria-label="Gọi ngay cho Nhà Xanh"
        className="w-14 h-14 bg-[#2D8B3A] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 animate-pulse hover:animate-none"
        style={{ boxShadow: '0 4px 20px rgba(45,139,58,0.5)' }}
      >
        <Phone size={26} />
      </a>
    </div>
  )
}
