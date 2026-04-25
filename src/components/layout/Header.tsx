"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PhoneLink } from "@/components/ui";

const navLinks = [
  { name: "Dịch vụ", href: "/#dich-vu" },
  { name: "Bảng giá", href: "/#bang-gia" },
  { name: "Đánh giá", href: "/#danh-gia" },
  { name: "Liên hệ", href: "/#lien-he" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Nhà Xanh Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col flex-1 min-w-0 pr-2">
            <div className="text-lg font-extrabold text-[#2D8B3A] leading-tight">
              NHÀ XANH
            </div>
            <div className="text-[9px] sm:text-[10px] text-[#4A5A4A] leading-[1.2] font-medium w-full truncate sm:whitespace-normal">
              CÔNG TY TNHH TM XD DV NHÀ XANH
            </div>
          </div>
        </Link>

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
          {/* Pulsing ring for visual urgency */}
          <div className="relative">
            <span className="absolute -inset-1 rounded-xl bg-emerald-500/20 animate-ping pointer-events-none" />
            <PhoneLink
              href="tel:+84934997265"
              className="relative flex items-center gap-2 bg-[#2D8B3A] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#1E6B2A] transition-colors shadow-lg shadow-emerald-700/30 text-sm"
            >
              <Phone size={16} className="fill-white" />
              <span>Gọi: 0934.997.265</span>
            </PhoneLink>
          </div>
        </div>

        {/* Mobile: phone icon + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <PhoneLink
            href="tel:+84934997265"
            className="p-2 text-[#2D8B3A] hover:bg-emerald-50 rounded-lg transition-colors"
            aria-label="Gọi ngay"
          >
            <Phone size={22} className="fill-[#2D8B3A]" />
          </PhoneLink>
          <button
            className="p-2 text-gray-700 hover:text-[#2D8B3A] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
          <PhoneLink
            href="tel:+84934997265"
            className="flex items-center justify-center gap-2 bg-[#2D8B3A] text-white px-6 py-3.5 rounded-lg font-bold text-base mt-2"
          >
            <Phone size={20} />
            Gọi Ngay: 0934.997.265
          </PhoneLink>
        </div>
      )}
    </header>
  );
}
