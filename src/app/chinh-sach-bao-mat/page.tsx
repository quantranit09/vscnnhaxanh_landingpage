import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật | Vệ Sinh Công Nghiệp Nhà Xanh Đà Nẵng',
  description: 'Chính sách bảo mật thông tin khách hàng của Vệ Sinh Công Nghiệp Nhà Xanh Đà Nẵng.',
  robots: { index: false, follow: false },
}

export default function ChinhSachBaoMatPage() {
  return (
    <div className="container py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-[#2D8B3A] mb-8">Chính Sách Bảo Mật</h1>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p className="text-sm text-gray-500">Cập nhật lần cuối: 2025</p>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            1. Thông Tin Chúng Tôi Thu Thập
          </h2>
          <p className="mb-3">
            Khi bạn sử dụng trang web và dịch vụ của Vệ Sinh Công Nghiệp Nhà Xanh, chúng tôi có thể thu thập:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Họ tên và số điện thoại (khi bạn điền form báo giá)</li>
            <li>Thông tin về nhu cầu dịch vụ (diện tích, loại hình, địa chỉ)</li>
            <li>Dữ liệu sử dụng trang web (thông qua Google Analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            2. Mục Đích Sử Dụng Thông Tin
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Liên hệ và tư vấn báo giá dịch vụ cho bạn</li>
            <li>Cải thiện chất lượng dịch vụ và trải nghiệm người dùng</li>
            <li>Gửi thông tin khuyến mãi (chỉ khi bạn đồng ý)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            3. Bảo Mật và Chia Sẻ Thông Tin
          </h2>
          <p>
            Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. Dữ liệu không được bán hoặc
            chia sẻ với bên thứ ba ngoại trừ các đối tác dịch vụ được ủy quyền (Formspree để xử lý
            form, Google Analytics để phân tích lưu lượng). Tất cả đối tác này đều tuân thủ các
            tiêu chuẩn bảo mật dữ liệu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            4. Quyền Của Bạn
          </h2>
          <p>
            Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân của mình bất kỳ lúc
            nào bằng cách liên hệ với chúng tôi.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            5. Liên Hệ
          </h2>
          <ul className="space-y-2">
            <li>
              📞 Hotline:{' '}
              <a href="tel:0905000000" className="text-[#2D8B3A] hover:underline font-medium">
                0905-000-000
              </a>
            </li>
            <li>
              📧 Email:{' '}
              <a href="mailto:nhaxanh@gmail.com" className="text-[#2D8B3A] hover:underline">
                nhaxanh@gmail.com
              </a>
            </li>
            <li>📍 Địa chỉ: Đà Nẵng, Việt Nam</li>
          </ul>
        </section>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <a href="/" className="text-[#2D8B3A] hover:underline font-medium flex items-center gap-2">
          ← Quay lại trang chủ
        </a>
      </div>
    </div>
  )
}
