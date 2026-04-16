"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PhoneLink } from "@/components/ui";

const navLinks = [
  { name: "Dịch vụ", href: "#dich-vu" },
  { name: "Bảng giá", href: "#bang-gia" },
  { name: "Đánh giá", href: "#danh-gia" },
  { name: "Liên hệ", href: "#lien-he" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
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
          <PhoneLink
            href="tel:+84934997265"
            className="flex items-center gap-2 bg-[#2D8B3A] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1E6B2A] transition-colors shadow-md text-sm"
          >
            <Phone size={16} />
            <span>0934.997.265</span>
          </PhoneLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-[#2D8B3A] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
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
