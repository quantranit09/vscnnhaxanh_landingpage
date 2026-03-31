'use client'

import { Phone } from 'lucide-react'

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-3 z-50 pointer-events-none">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0934997265"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto self-end h-[48px] w-[48px] md:h-[56px] md:w-[56px] bg-[#0068FF] text-white rounded-full 
                 shadow-lg flex items-center justify-center hover:bg-[#005AE0] 
                 transition-colors relative group"
        aria-label="Chat Zalo"
      >
        <span className="font-bold text-lg md:text-xl bg-white text-[#0068FF] w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center">Z</span>
        <span className="absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md hidden md:block">
          Chat Zalo
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-gray-900" />
        </span>
      </a>

      {/* Phone Button */}
      <div className="pointer-events-auto relative flex items-center self-end">
        {/* Subtle pulse ring */}
        <div className="absolute inset-[-6px] bg-[#2D8B3A]/20 rounded-full animate-ping opacity-40"></div>
        
        <a
          href="tel:+84934997265"
          className="h-[48px] md:h-[56px] flex items-center bg-[#2D8B3A] border-2 border-white text-white rounded-full 
                   shadow-xl hover:bg-[#1E6B2A] transition-colors relative z-10 px-3 md:px-5"
          aria-label="Gọi ngay"
        >
          <div className="bg-white/20 p-1.5 md:p-2 rounded-full md:mr-2 shrink-0">
            <Phone className="fill-white w-4 h-4 md:w-5 md:h-5" />
          </div>
          {/* Hide phone number text on small mobile, show on md+ */}
          <span className="hidden md:inline font-extrabold text-base tracking-wide whitespace-nowrap">
            0934.997.265
          </span>
        </a>
      </div>
    </div>
  )
}

