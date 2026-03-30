'use client'

import { motion } from 'framer-motion'
import { Building, Factory, Landmark, Store, Warehouse, Hospital, FileText, Info } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'

const pricingData = [
  { service: 'Vệ sinh văn phòng định kỳ', price: 'Từ 12,000đ', unit: '/ m² / tháng', pop: true },
  { service: 'Vệ sinh nhà xưởng', price: 'Từ 8,000đ', unit: '/ m²', pop: false },
  { service: 'Vệ sinh sau xây dựng', price: 'Từ 15,000đ', unit: '/ m²', pop: false },
  { service: 'Dọn dẹp nhà cửa tổng thể', price: 'Từ 1,200,000đ', unit: '/ gói', pop: false },
  { service: 'Giặt thảm / ghế sofa', price: 'Từ 15,000đ', unit: '/ m² hoặc cái', pop: false },
]

const partners = [
  { name: 'TechCom', icon: Building },
  { name: 'VinaFactory', icon: Factory },
  { name: 'DaNang Center', icon: Landmark },
  { name: 'MegaMart', icon: Store },
  { name: 'Logistics VN', icon: Warehouse },
  { name: 'City Hospital', icon: Hospital },
]

export function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-5xl">
        <SectionTitle
          badge="Bảng Giá"
          title="Chi Phí Minh Bạch, Cạnh Tranh"
          subtitle="Chúng tôi cung cấp dịch vụ chất lượng cao với mức giá hợp lý nhất tại thị trường Đà Nẵng."
        />

        {/* Pricing Table */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F5F7F5] text-gray-900 border-b border-gray-200">
                  <th className="p-4 md:p-6 font-bold">Dịch Vụ Vệ Sinh</th>
                  <th className="p-4 md:p-6 font-bold whitespace-nowrap">Mức Giá Tham Khảo</th>
                  <th className="p-4 md:p-6 font-bold hidden sm:table-cell">Đơn Vị</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pricingData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 md:p-6 font-medium text-gray-900 flex items-center gap-3">
                      {item.service}
                      {item.pop && (
                        <span className="hidden md:inline-block bg-orange-100 text-orange-600 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                          Hot
                        </span>
                      )}
                    </td>
                    <td className="p-4 md:p-6 text-[#2D8B3A] font-bold whitespace-nowrap">
                      {item.price}
                      <span className="sm:hidden text-gray-500 font-normal text-sm ml-1">
                        {item.unit}
                      </span>
                    </td>
                    <td className="p-4 md:p-6 text-gray-500 hidden sm:table-cell whitespace-nowrap">
                      {item.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="flex items-start gap-3 bg-amber-50 text-amber-800 p-4 rounded-xl mb-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Info size={20} className="shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Lưu ý:</strong> Bảng giá trên chỉ mang tính chất tham khảo. Giá thực tế phụ thuộc vào tình trạng công trình, mức độ cần làm sạch và yêu cầu cụ thể. Nhà Xanh luôn <strong>khảo sát miễn phí tận nơi</strong> trước khi báo giá chính xác.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="text-center mb-24">
          <Button href="#lien-he" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <FileText size={20} />
            Đăng Ký Khảo Sát Miễn Phí
          </Button>
        </div>

        {/* Partners Strip */}
        <div className="border-t border-gray-100 pt-16">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Được Tin Tưởng Bởi Hơn 50+ Doanh Nghiệp Tại Đà Nẵng
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 hover:text-[#2D8B3A] transition-colors cursor-default">
                <partner.icon size={36} strokeWidth={1.5} />
                <span className="text-xs font-bold tracking-wider">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
