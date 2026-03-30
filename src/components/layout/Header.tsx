'use client'

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Dịch vụ', href: '#dich-vu' },
  { name: 'Bảng giá', href: '#bang-gia' },
  { name: 'Đánh giá', href: '#danh-gia' },
  { name: 'Liên hệ', href: '#lien-he' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          {/* Replace img src with real logo when available */}
          <div className="w-10 h-10 bg-[#2D8B3A] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm leading-none">NX</span>
          </div>
          <div>
            <div className="text-lg font-extrabold text-[#2D8B3A] leading-tight">NHÀ XANH</div>
            <div className="text-xs text-[#4A5A4A] leading-tight hidden sm:block">Vệ Sinh Công Nghiệp</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium hover:text-[#2D8B3A] transition-colors duration-200 text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Hotline */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:0905000000"
            className="flex items-center gap-2 bg-[#2D8B3A] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1E6B2A] transition-colors shadow-md text-sm"
          >
            <Phone size={16} />
            <span>0905-000-000</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-[#2D8B3A] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium py-2.5 border-b border-gray-50 hover:text-[#2D8B3A] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0905000000"
            className="flex items-center justify-center gap-2 bg-[#2D8B3A] text-white px-6 py-3.5 rounded-lg font-bold text-base mt-2"
          >
            <Phone size={20} />
            Gọi Ngay: 0905-000-000
          </a>
        </div>
      )}
    </header>
  )
}
