<template>
  <div class="w-full relative overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 min-h-screen select-none">
    
    <!-- Immersive Background Grids -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
    <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-orange-500/[0.02] blur-3xl pointer-events-none"></div>

    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-16 relative z-10">
      
      <!-- Go Back Home Button -->
      <div class="mb-10 animate-fade-in">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center gap-2 text-[11px] font-bold text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors duration-300 uppercase tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Quay lại trang chủ</span>
        </NuxtLink>
      </div>

      <!-- Page Header (WOW premium design) -->
      <div class="text-left max-w-3xl mb-16 animate-fade-in select-none">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-shopee-orange border border-orange-500/20 dark:border-orange-500/30 font-black text-[10px] tracking-widest uppercase mb-4 shadow-sm">
          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Điều khoản & Quy định vận hành</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-sans font-black tracking-tight text-slate-950 dark:text-white leading-tight">
          ĐIỀU KHOẢN SỬ DỤNG<br />
          <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">TERMS OF SERVICE</span>
        </h1>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-4 font-bold leading-relaxed max-w-2xl">
          Hiệu lực từ ngày: 01/01/2026 • Chào mừng bạn đến với Saffi. Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ toàn bộ các quy định và chính sách minh bạch dưới đây.
        </p>
      </div>

      <!-- Main Layout: 2 Columns Asymmetric Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- SIDEBAR TABLE OF CONTENTS (Desktop only) -->
        <aside class="hidden lg:block lg:col-span-3 sticky top-28 self-start bg-slate-50/30 dark:bg-slate-900/10 p-6 rounded-3xl border border-slate-100 dark:border-slate-900">
          <h4 class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Mục lục văn bản</h4>
          <div class="flex flex-col gap-4 border-l border-slate-200 dark:border-slate-800">
            <a 
              v-for="sec in sections" 
              :key="sec.id"
              :href="`#${sec.id}`"
              class="text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-shopee-orange dark:hover:text-shopee-orange transition-all duration-300 block select-none pl-4 border-l-2 border-transparent -ml-[1.5px]"
              :class="{ 'text-shopee-orange dark:text-shopee-orange !border-shopee-orange pl-4 font-black': activeSection === sec.id }"
            >
              {{ sec.title }}
            </a>
          </div>
        </aside>

        <!-- DOCUMENT CONTAINER (Kính mờ Glassmorphism) -->
        <div class="lg:col-span-9 rounded-[32px] border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-2xl flex flex-col gap-10 text-left">
          
          <!-- TL;DR Reassurance Alert Box -->
          <div id="tldr-box" class="p-6 rounded-2xl border border-orange-500/10 bg-orange-500/[0.03] dark:bg-orange-500/[0.01] flex items-start gap-4">
            <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex flex-col gap-1">
              <h4 class="text-xs font-black text-slate-950 dark:text-white uppercase tracking-wider">Tóm tắt điều khoản Saffi (TL;DR)</h4>
              <p class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                Chúng tôi cung cấp dịch vụ hoàn tiền tiếp thị liên kết Shopee siêu tốc: (1) Rút tiền cam kết xử lý **dưới 60 phút**, (2) Thành viên được chia sẻ lên đến **90% hoa hồng**, (3) Duy trì hạng 90 ngày hoạt động, (4) Bạn phải tự chịu trách nhiệm bảo mật thông tin tài khoản ngân hàng và thiết bị đăng nhập.
              </p>
            </div>
          </div>

          <h2 class="text-lg font-black text-slate-950 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-850 pb-2 -mb-4">I. ĐIỀU KHOẢN SỬ DỤNG (TERMS OF SERVICE)</h2>

          <!-- Điều 1 -->
          <div id="dieu-1" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                1
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Điều 1. Định nghĩa</h3>
            </div>
            <ul class="flex flex-col gap-4">
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>Nền tảng:</strong> Saffi.vn (sau đây gọi tắt là "Saffi") là dịch vụ hỗ trợ tiếp thị liên kết hoàn tiền thông minh dành cho người mua sắm do Saffi Team phát triển và quản lý.
              </li>
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>Đối tác:</strong> Các sàn thương mại điện tử (Shopee) và các chương trình tiếp thị liên kết trung gian hợp tác với Saffi.
              </li>
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>Người dùng / Thành viên:</strong> Cá nhân đăng ký tài khoản và sử dụng Saffi. Hệ thống phân hạng VIP gồm:
                <ul class="flex flex-col gap-2 pl-4 mt-2">
                  <li class="flex items-center gap-2">
                    <span class="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                    <span><strong>Hạng Bạc (Silver):</strong> Mặc định ngay sau khi đăng ký tài khoản mới thành công.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    <span><strong>Hạng Vàng (Gold):</strong> Đạt tối thiểu 10 đơn hàng hoàn thành trên hệ thống.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-white"></span>
                    <span><strong>Hạng Tinh Hoa (Obsidian):</strong> Đạt tối thiểu 50 đơn hàng hoàn thành trên hệ thống.</span>
                  </li>
                </ul>
              </li>
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>Ngày hội khuyến mại:</strong> Các ngày số đôi (1/1, 2/2, 3/3...), ngày 1, ngày 15 và ngày 25 hàng tháng.
              </li>
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>Hoa hồng thực nhận:</strong> Khoản tiền hoa hồng thực tế Saffi nhận được từ đối tác liên kết sau khi đã khấu trừ các khoản phí nền tảng liên quan khi đơn hàng của người dùng được xác nhận hợp lệ.
              </li>
            </ul>
          </div>

          <!-- Điều 2 -->
          <div id="dieu-2" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                2
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Điều 2. Chính sách chia sẻ hoa hồng hoàn tiền</h3>
            </div>
            <p class="text-[12px] text-slate-550 dark:text-slate-400 font-semibold leading-relaxed mb-4">
              Thành viên Saffi được chia sẻ lại số tiền tích lũy theo tỷ lệ % hoa hồng thực nhận từ đối tác (không tính trực tiếp trên giá trị sản phẩm):
            </p>
            <ul class="flex flex-col gap-3 pl-4 mb-4">
              <li class="flex items-start gap-2.5 text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span><strong>Thành viên Bạc:</strong> Hoàn trả 70% vào Ngày hội khuyến mại; 60% vào ngày thường.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span><strong>Thành viên Vàng:</strong> Hoàn trả 80% vào Ngày hội khuyến mại; 70% vào ngày thường.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[12px] text-slate-500 dark:text-slate-400 font-semibold-leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span><strong>Thành viên Tinh Hoa (Obsidian):</strong> Hoàn trả 90% vào Ngày hội khuyến mại; 80% vào ngày thường.</span>
              </li>
            </ul>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              <strong>DUY TRÌ HẠNG:</strong> Nếu tài khoản thành viên không phát sinh bất kỳ đơn hàng được ghi nhận mới nào trong vòng 90 ngày liên tiếp, hệ thống Saffi sẽ tự động điều chỉnh thứ hạng VIP của bạn về mức mặc định là Rank Bạc.
            </p>
          </div>

          <!-- Điều 3 -->
          <div id="dieu-3" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                3
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Điều 3. Giới hạn trách nhiệm</h3>
            </div>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              Saffi đóng vai trò là giải pháp công nghệ trung gian kết nối tiếp thị liên kết. Chúng tôi không phải là người bán hàng, do đó hoàn toàn miễn trừ trách nhiệm đối với chất lượng hàng hóa, chính sách bảo hành, hoàn trả, đổi hàng hoặc khiếu nại sản phẩm trên Shopee.
            </p>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              Việc đối soát ghi nhận đơn hàng hoàn tiền phụ thuộc hoàn toàn vào hệ thống kỹ thuật của đối tác Shopee. Saffi không chịu trách nhiệm đối với các đơn hàng không được ghi nhận do xung đột nguồn cookie, người dùng sử dụng trình chặn quảng cáo, hoặc không tuân thủ quy trình sao chép chuyển đổi link của Saffi.
            </p>
          </div>

          <!-- Điều 4 -->
          <div id="dieu-4" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                4
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Điều 4. Quy định thanh toán & Rút tiền</h3>
            </div>
            <ul class="flex flex-col gap-3 pl-4">
              <li class="flex items-start gap-2.5 text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span>Số dư hoàn tiền tích lũy chỉ được thanh toán sau khi Saffi đã thực tế nhận được tiền đối soát chi trả thành công từ phía đối tác Shopee.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span>Trạng thái đơn hàng "Đang đối soát" thể hiện đơn hàng hợp lệ đang chờ đối tác duyệt tiền (thời gian duyệt đơn từ 30 - 60 ngày theo quy định chung của Shopee).</span>
              </li>
              <li class="flex items-start gap-2.5 text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span><strong>Hạn mức rút tiền tối đa:</strong> 20.000.000 VNĐ/tháng đối với mỗi tài khoản thành viên để đảm bảo an toàn giao dịch.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span><strong>Cam kết SLA:</strong> Saffi cam kết xử lý và chuyển tiền rút về thẻ ngân hàng chính chủ của thành viên trong vòng <strong>dưới 60 phút</strong> kể từ khi có yêu cầu hợp lệ trong khung giờ hoạt động (08:00 - 22:00 hàng ngày).</span>
              </li>
            </ul>
          </div>

          <!-- Điều 5 -->
          <div id="dieu-5" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                5
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Điều 5 - 7. Thuế & Quy định vận hành</h3>
            </div>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              <strong>Điều 5 (Thuế):</strong> Saffi thực hiện đầy đủ nghĩa vụ thuế doanh nghiệp/nền tảng đối với phần thu nhập giữ lại. Người dùng có trách nhiệm tự kê khai và thực hiện nộp Thuế thu nhập cá nhân (TNCN) theo quy định của pháp luật Việt Nam khi tổng số tiền hoàn nhận được vượt quá 2.000.000 VNĐ/tháng.
            </p>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              <strong>Điều 6 (Minh bạch dữ liệu):</strong> Toàn bộ dữ liệu đơn hàng, tính toán số dư và lịch sử giao dịch thanh toán rút tiền đều được lưu trữ đầy đủ, minh bạch trên hệ thống cơ sở dữ liệu của Saffi tuân thủ tuyệt đối quy định pháp luật Việt Nam.
            </p>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              <strong>Điều 7 (Quyền từ chối thanh toán):</strong> Saffi có quyền tạm ngưng đối soát, phong tỏa số dư hoặc từ chối thực hiện lệnh rút tiền nếu phát hiện tài khoản có dấu hiệu gian lận, đầu cơ đơn ảo, lạm dụng lỗi hệ thống hoặc vi phạm nghiêm trọng các điều khoản quy định.
            </p>
          </div>

          <!-- Điều 8 -->
          <div id="dieu-8" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                8
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Điều 8 - 10. Quản lý tài khoản & Tham gia</h3>
            </div>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              <strong>Điều 8 (Chấm dứt tài khoản):</strong> Chúng tôi có quyền khóa vĩnh viễn tài khoản của người dùng mà không cần bồi thường số dư tích lũy nếu phát hiện hành vi: tạo đơn ảo hàng loạt, spam hệ thống, sử dụng phần mềm can thiệp trái phép hoặc bôi nhọ uy tín thương hiệu Saffi.
            </p>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              <strong>Điều 9 (Thay đổi điều khoản):</strong> Saffi bảo lưu quyền được thay đổi, bổ sung hoặc điều chỉnh tỷ lệ chia sẻ hoa hồng hoàn tiền vào bất cứ lúc nào phù hợp với biến động chính sách của Shopee. Mọi thay đổi sẽ được công bố công khai trước trên website/ứng dụng Saffi.
            </p>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              <strong>Điều 10 (Điều kiện tham gia):</strong> Dịch vụ chỉ dành cho các cá nhân từ đủ 18 tuổi trở lên, có đầy đủ năng lực hành vi dân sự theo quy định của pháp luật Việt Nam. Người dùng tham gia tự nguyện và đồng ý với các rủi ro vận hành kỹ thuật được nêu.
            </p>
          </div>

          <!-- Điều 11 -->
          <div id="dieu-11" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                11
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Điều 11. Hỗ trợ & Tiếp nhận khiếu nại</h3>
            </div>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              Mọi yêu cầu đối soát lại đơn hàng bị thất lạc, khiếu nại lệnh rút tiền hoặc các lỗi kỹ thuật phát sinh trong quá trình mua sắm vui lòng gửi về email chính thức của ban hỗ trợ: <a href="mailto:getsaffi@gmail.com" class="text-shopee-orange font-bold hover:underline">getsaffi@gmail.com</a>.
            </p>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              Yêu cầu khiếu nại hợp lệ cần nêu rõ: Họ tên thành viên, email đăng ký tài khoản, nội dung cần đối soát kèm hình ảnh/bằng chứng giao dịch (Mã đơn hàng Shopee, lịch sử chuyển khoản...). Thời gian xử lý khiếu nại tối đa là trong vòng 07 ngày làm việc kể từ ngày tiếp nhận đủ hồ sơ hợp lệ.
            </p>
          </div>

          <!-- Điều 12 -->
          <div id="dieu-12" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                12
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Điều 12 - 14. Bản quyền & Luật áp dụng</h3>
            </div>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              <strong>Điều 12 (Sở hữu trí tuệ):</strong> Toàn bộ giao diện, hình ảnh thiết kế, mã nguồn, nội dung tài liệu và logo nhận diện thương hiệu của Saffi thuộc sở hữu độc quyền của Saffi Team. Nghiêm cấm sao chép, chỉnh sửa, phân phối hoặc khai thác thương mại dưới mọi hình thức khi chưa có sự đồng ý bằng văn bản từ chúng tôi.
            </p>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              <strong>Điều 13 (Bảo mật tài khoản):</strong> Người dùng tự chịu trách nhiệm bảo vệ thông tin đăng nhập của mình. Nếu phát hiện hoặc nghi ngờ tài khoản bị xâm nhập trái phép, cần ngay lập tức thay đổi mật khẩu và liên hệ email hỗ trợ của Saffi để khóa tài khoản khẩn cấp.
            </p>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              <strong>Điều 14 (Luật áp dụng):</strong> Bản điều khoản sử dụng này được xây dựng hoàn toàn bằng tiếng Việt và được giải thích, điều chỉnh theo hệ thống pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.
            </p>
          </div>

          <h2 class="text-lg font-black text-slate-950 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-850 pb-2 -mb-4 mt-4">II. CHÍNH SÁCH MIỄN TRỪ TRÁCH NHIỆM (DISCLAIMER)</h2>

          <!-- Disclaimer Section -->
          <div id="disclaimer" class="policy-section-content scroll-mt-24 pb-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                Dis
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Quy định miễn trừ trách nhiệm</h3>
            </div>
            <ul class="flex flex-col gap-4">
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>1. Giới hạn cam kết thu nhập:</strong> Saffi chỉ chia sẻ lại tỷ lệ phần trăm dựa trên số hoa hồng đối soát thực tế nhận được từ đối tác liên kết. Chúng tôi không cam kết hoặc bảo đảm bất kỳ mức lợi nhuận cố định hay chắc chắn nào cho người dùng khi tham gia dịch vụ.
              </li>
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>2. Trách nhiệm kỹ thuật:</strong> Saffi miễn trừ trách nhiệm trong các trường hợp dịch vụ bị gián đoạn, lỗi kết nối Internet, máy chủ bị tấn công từ chối dịch vụ (DDoS), hoặc các sự cố kỹ thuật ngoài tầm kiểm soát và các trường hợp bất khả kháng theo quy định pháp luật.
              </li>
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>3. Hoạt động của bên thứ ba:</strong> Saffi hoàn toàn không chịu trách nhiệm đối với nội dung quảng cáo sản phẩm, hình ảnh hiển thị trên Shopee, chính sách bán hàng hoặc bất kỳ tranh chấp thương mại nào giữa người mua và các nhà bán hàng bên thứ ba trên sàn TMĐT.
              </li>
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>4. Giải quyết tranh chấp:</strong> Trong trường hợp phát sinh tranh chấp phát sinh ngoài mong muốn giữa Saffi và người dùng, các bên ưu tiên giải quyết thông qua thương lượng hòa giải. Nếu không thể đạt được tiếng nói chung, vụ việc sẽ được đưa ra giải quyết tại Tòa án có thẩm quyền nơi đặt trụ sở vận hành chính của Saffi Team tại Việt Nam.
              </li>
              <li class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <strong>5. Bản chất dịch vụ:</strong> Saffi hoạt động với tư cách là giải pháp hỗ trợ hoàn tiền mua sắm tự động thông minh. Chúng tôi không phải là tổ chức tài chính tín dụng, không cung cấp các dịch vụ đầu tư tài chính, đầu cơ hoặc nhận ủy thác vốn dưới bất kỳ hình thức nào.
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

useSeoMeta({
  title: "Điều khoản dịch vụ & Miễn trừ trách nhiệm - Saffi",
  ogTitle: "Điều khoản dịch vụ & Miễn trừ trách nhiệm - Saffi",
  description: "Điều khoản sử dụng, chính sách chia sẻ hoa hồng hoàn tiền và giới hạn trách nhiệm pháp lý khi sử dụng Saffi.",
  ogDescription: "Điều khoản sử dụng, chính sách chia sẻ hoa hồng hoàn tiền và giới hạn trách nhiệm pháp lý khi sử dụng Saffi.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const sections = [
  { id: 'dieu-1', title: 'Điều 1. Định nghĩa Saffi' },
  { id: 'dieu-2', title: 'Điều 2. Tỷ lệ hoàn tiền' },
  { id: 'dieu-3', title: 'Điều 3. Giới hạn trách nhiệm' },
  { id: 'dieu-4', title: 'Điều 4. Rút tiền dưới 60 phút' },
  { id: 'dieu-5', title: 'Điều 5-7. Thuế & Gian lận' },
  { id: 'dieu-8', title: 'Điều 8-10. Khóa tài khoản' },
  { id: 'dieu-11', title: 'Điều 11. Hỗ trợ khiếu nại' },
  { id: 'dieu-12', title: 'Điều 12-14. Bản quyền & Luật' },
  { id: 'disclaimer', title: 'II. Miễn trừ trách nhiệm' }
];

const activeSection = ref('dieu-1');

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, {
    rootMargin: '-20% 0px -50% 0px'
  });

  const sectionEls = document.querySelectorAll('.policy-section-content');
  sectionEls.forEach((el) => observer.observe(el));

  onUnmounted(() => {
    sectionEls.forEach((el) => observer.unobserve(el));
  });
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
