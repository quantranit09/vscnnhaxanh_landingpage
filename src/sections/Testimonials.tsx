'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, StarHalf } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'

const testimonials = [
  {
    name: 'Chị Thu Hương',
    role: 'Quản lý VP, Hải Châu',
    content: 'Đội ngũ Nhà Xanh làm việc rất kỹ. Kính văn phòng sáng bóng, thảm giặt xong không bị ẩm mùi. Sẽ ký hợp đồng dài hạn.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Anh Quốc Bảo',
    role: 'Chủ nhà, Liên Chiểu',
    content: 'Sạch sẽ, nhanh gọn. Mình mới xây nhà xong bụi kinh khủng mà gọi các bạn qua dọn 1 ngày là vào ở được luôn. Mức giá rất hợp lý.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Chị Mai Lan',
    role: 'Chủ shop, Thanh Khê',
    content: 'Hóa chất mùi dễ chịu, không bị hắc như mấy chỗ trước đây. Điểm cộng lớn là các bạn vệ sinh kính mặt tiền cửa hàng cực kỳ sạch.',
    rating: 4.5,
    avatar: 'https://i.pravatar.cc/150?img=43'
  },
  {
    name: 'Anh Tuấn Anh',
    role: 'Quản lý Kho, Ngũ Hành Sơn',
    content: 'Dọn dẹp kho bãi công nghiệp rất chuyên nghiệp, máy móc hiện đại. Đặc biệt là có xuất hóa đơn VAT đầy đủ, nhanh chóng cho công ty.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Cô Tuyết',
    role: 'Cư dân, Sơn Trà',
    content: 'Mấy em làm việc có tâm lắm. Lau dọn từng ngóc ngách, khu vực bếp dính nhiều dầu mỡ đều sạch bong. Lần sau cô lại gọi.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
]

function renderStars(rating: number) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} size={16} className="fill-amber-400 text-amber-400" />)
    } else if (i - 0.5 === rating) {
      stars.push(<StarHalf key={i} size={16} className="fill-amber-400 text-amber-400" />)
    } else {
      stars.push(<Star key={i} size={16} className="text-gray-300" />)
    }
  }
  return <div className="flex gap-1 mb-4">{stars}</div>
}

export function Testimonials() {
  return (
    <section id="danh-gia" className="py-20 md:py-28 bg-[#F5F7F5]">
      <div className="container">
        <SectionTitle
          badge="Khách hàng nói gì?"
          title="Đánh Giá Chân Thực Về Nhà Xanh"
          subtitle="Hơn 100+ khách hàng tại Đà Nẵng đã trải nghiệm và hài lòng với chất lượng vệ sinh của chúng tôi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {testimonials.map((review, i) => (
            <motion.div
              key={i}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${
                i === 3 || i === 4 ? 'lg:col-span-1 md:col-span-2 lg:col-start-auto' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {renderStars(review.rating)}
              <p className="text-gray-700 italic mb-6 leading-relaxed flex-grow">
                &ldquo;{review.content}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                {review.avatar ? (
                  <Image src={review.avatar} alt={review.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-emerald-50 shadow-sm" unoptimized />
                ) : (
                  <div className="w-12 h-12 bg-[#2D8B3A]/10 text-[#2D8B3A] rounded-full flex items-center justify-center font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Summary Box */}
          <motion.div
            className="bg-[#2D8B3A] p-8 rounded-2xl text-white flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mt-10 -mr-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -mb-10 -ml-10"></div>
            <div className="text-5xl font-black mb-2 relative z-10">4.9/5</div>
            <div className="flex gap-1 mb-4 relative z-10">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="fill-white text-white" />
              ))}
            </div>
            <p className="text-emerald-100 font-medium relative z-10">Trung bình đánh giá từ 100+ khách hàng tại Đà Nẵng</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
