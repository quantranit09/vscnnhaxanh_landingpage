'use client'

import { Phone } from 'lucide-react'

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-4 z-50 pointer-events-none">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0905000000"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto self-end h-[50px] md:h-[60px] w-[50px] md:w-[60px] bg-[#0068FF] text-white rounded-full 
                 shadow-lg flex items-center justify-center hover:bg-[#005AE0] 
                 transition-colors relative lg:w-[60px] hover:w-auto overflow-hidden group 
                 animate-[bounce-small_2s_ease-in-out_infinite]"
        aria-label="Chat Zalo"
      >
        <span className="font-bold text-xl md:text-2xl bg-white text-[#0068FF] w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0">Z</span>
        <span className="font-bold whitespace-nowrap overflow-hidden transition-all duration-300 md:max-w-0 md:group-hover:max-w-[200px] md:group-hover:pl-2 md:group-hover:pr-2 hidden md:inline-block">
          Chat Zalo
        </span>
      </a>

      {/* Phone Button */}
      <div className="pointer-events-auto relative flex items-center self-end">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-[#2D8B3A] rounded-full animate-ping opacity-60"></div>
        <div className="absolute inset-[-10px] bg-[#2D8B3A]/30 rounded-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        
        <a
          href="tel:0905000000"
          className="h-[50px] md:h-[60px] flex items-center bg-[#2D8B3A] border-2 border-white text-white rounded-full 
                   shadow-xl hover:bg-[#1E6B2A] transition-colors relative z-10 px-4 md:px-6"
          aria-label="Gọi ngay"
        >
          <div className="bg-white/20 p-2 rounded-full mr-2 md:mr-3 shrink-0">
            <Phone className="fill-white w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className="font-extrabold text-[15px] md:text-lg tracking-wide whitespace-nowrap">
            0905.000.000
          </span>
        </a>
      </div>
    </div>
  )
}
