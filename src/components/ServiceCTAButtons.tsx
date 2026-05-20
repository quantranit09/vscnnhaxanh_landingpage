"use client";

// Tách onClick (trackPhoneClick) ra client component riêng
// để ServicePage.tsx giữ nguyên là Server Component (App Router best practice)

import { Phone, ArrowRight, ChevronRight } from "lucide-react";
import { trackPhoneClick } from "@/lib/gtag";
import Link from "next/link";

interface ServiceCTAButtonsProps {
  phone: string;
  variant?: "hero" | "cta";
}

export function ServiceCTAButtons({
  phone,
  variant = "cta",
}: ServiceCTAButtonsProps) {
  if (variant === "hero") {
    return (
      <>
        <a
          href={phone}
          onClick={() => trackPhoneClick(phone)}
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
      </>
    );
  }

  // variant === 'cta' (dark green CTA section)
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href={phone}
        onClick={() => trackPhoneClick(phone)}
        className="flex items-center gap-2 bg-white text-[#2D8B3A] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#F5F7F5] transition-colors shadow-lg w-full sm:w-auto justify-center"
      >
        <Phone size={22} />
        Gọi: 0934.997.265
      </a>
      <Link
        href="/#lien-he"
        className="flex items-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-semibold hover:border-white transition-colors w-full sm:w-auto justify-center"
      >
        Để lại SĐT gọi lại
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
