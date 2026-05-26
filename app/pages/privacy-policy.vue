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
          class="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors duration-300 uppercase tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Quay lại trang chủ</span>
        </NuxtLink>
      </div>

      <!-- Page Header (WOW premium design) -->
      <div class="text-left max-w-3xl mb-16 animate-fade-in select-none">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-shopee-orange border border-orange-500/20 dark:border-orange-500/30 font-black text-[11px] sm:text-[12px] tracking-widest uppercase mb-4 shadow-sm">
          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Cam kết bảo mật tuyệt đối</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-sans font-black tracking-tight text-slate-950 dark:text-white leading-tight">
          CHÍNH SÁCH BẢO MẬT<br />
          <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">PRIVACY POLICY</span>
        </h1>
        <p class="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 mt-4 font-bold leading-relaxed max-w-2xl">
          Hiệu lực từ ngày: 01/01/2026 • Saffi cam kết bảo mật tuyệt đối mọi thông tin cá nhân và dữ liệu giao dịch của bạn với các tiêu chuẩn công nghệ cao cấp nhất.
        </p>
      </div>

      <!-- Main Layout: 2 Columns Asymmetric Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- SIDEBAR TABLE OF CONTENTS (Desktop only) -->
        <aside class="hidden lg:block lg:col-span-3 sticky top-28 self-start bg-slate-50/30 dark:bg-slate-900/10 p-6 rounded-3xl border border-slate-100 dark:border-slate-900">
          <h4 class="text-[11px] sm:text-[12px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Mục lục văn bản</h4>
          <div class="flex flex-col gap-4 border-l border-slate-200 dark:border-slate-800">
            <a 
              v-for="sec in sections" 
              :key="sec.id"
              :href="`#${sec.id}`"
              class="text-[12px] sm:text-[13px] font-bold text-slate-500 dark:text-slate-400 hover:text-shopee-orange dark:hover:text-shopee-orange transition-all duration-300 block select-none pl-4 border-l-2 border-transparent -ml-[1.5px]"
              :class="{ 'text-shopee-orange dark:text-shopee-orange !border-shopee-orange pl-4 font-black': activeSection === sec.id }"
            >
              {{ sec.title }}
            </a>
          </div>
        </aside>

        <!-- DOCUMENT CONTAINER (Kính mờ Glassmorphism) -->
        <div class="lg:col-span-9 rounded-[32px] border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-2xl flex flex-col gap-10 text-left">
          
          <!-- TL;DR Reassurance Alert Box -->
          <div id="tldr-box" class="p-6 rounded-2xl border border-amber-500/10 bg-amber-500/[0.03] dark:bg-amber-500/[0.02] flex items-start gap-4">
            <div class="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex flex-col gap-3 w-full">
              <h4 class="text-[12px] font-black text-slate-950 dark:text-white uppercase tracking-wider">Tóm tắt bảo mật của Saffi (TL;DR)</h4>
              <ul class="flex flex-col gap-3 mt-1">
                <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  <span class="h-5 w-5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span><strong>Thu thập tối thiểu:</strong> Chỉ thu thập thông tin tối thiểu cần thiết để vận hành và trả hoàn tiền.</span>
                </li>
                <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  <span class="h-5 w-5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span><strong>Không thương mại hóa:</strong> Không bán hoặc chia sẻ dữ liệu cho bên thứ ba vì mục đích thương mại.</span>
                </li>
                <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                  <span class="h-5 w-5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span><strong>Mã hóa bảo mật cao:</strong> Toàn bộ kết nối được mã hóa SSL/TLS cao cấp nhất và thông tin rút tiền được bảo mật nghiêm ngặt.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Section 1 -->
          <div id="thu-thap" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                1
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Thông tin thu thập</h3>
            </div>
            <p class="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-4">
              Để cung cấp dịch vụ hoàn tiền tiếp thị liên kết Shopee tối ưu, Saffi thu thập các thông tin sau:
            </p>
            <ul class="flex flex-col gap-3 pl-4">
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span><strong>Thông tin đăng ký tài khoản:</strong> Họ tên, địa chỉ email, số điện thoại dùng để định danh và hỗ trợ thành viên.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span><strong>Thông tin giao dịch & đối soát:</strong> Lịch sử đơn hàng Shopee phát sinh qua liên kết của bạn, trạng thái đơn hàng, hoa hồng tạm tính và lịch sử rút tiền về tài khoản ngân hàng.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span><strong>Thông tin kỹ thuật hệ thống:</strong> Địa chỉ IP, Cookie định danh phiên hoạt động, loại thiết bị và thông tin trình duyệt nhằm chống gian lận và tối ưu hóa hệ thống ghi nhận.</span>
              </li>
            </ul>
          </div>

          <!-- Section 2 -->
          <div id="muc-dich" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                2
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Mục đích sử dụng thông tin</h3>
            </div>
            <p class="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-4">
              Mọi dữ liệu Saffi thu thập chỉ được áp dụng cho các hoạt động hợp pháp phục vụ trực tiếp cho quyền lợi của thành viên:
            </p>
            <ul class="flex flex-col gap-3 pl-4">
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span>Quản lý tài khoản, xác thực danh tính người dùng và bảo mật hệ thống.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span>Tính toán chính xác số tiền hoàn tích lũy, đối soát đơn hàng với Shopee và thực hiện chi trả tiền rút về tài khoản ngân hàng chính chủ.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span>Nâng cấp và cải tiến chất lượng giao diện, thuật toán ghi nhận đơn hàng thông minh của ứng dụng Saffi.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span>Thực hiện nghĩa vụ thuế và báo cáo tài chính pháp luật theo luật pháp Việt Nam hiện hành.</span>
              </li>
            </ul>
          </div>

          <!-- Section 3 -->
          <div id="bao-mat" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                3
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Lưu trữ và bảo mật dữ liệu</h3>
            </div>
            <p class="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              Dữ liệu của bạn được Saffi lưu trữ trên các máy chủ đám mây an toàn, được bảo vệ bằng các lớp tường lửa và giao thức mã hóa dữ liệu cao cấp. Chúng tôi triển khai quy trình phân quyền truy cập nghiêm ngặt để đảm bảo chỉ những nhân viên kỹ thuật có thẩm quyền mới được xử lý dữ liệu phục vụ đối soát.
            </p>
            <p class="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              <strong>Trách nhiệm thành viên:</strong> Bạn có trách nhiệm bảo mật thông tin đăng nhập tài khoản Saffi của mình (bao gồm mật khẩu và mã xác thực nếu có). Saffi miễn trừ trách nhiệm pháp lý đối với bất kỳ thiệt hại nào phát sinh do rò rỉ thông tin bắt nguồn từ sự thiếu cẩn trọng trong bảo mật thiết bị cá nhân của bạn.
            </p>
          </div>

          <!-- Section 4 -->
          <div id="chia-se" class="policy-section-content scroll-mt-24 border-b border-slate-100 dark:border-slate-850/80 pb-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                4
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Chia sẻ thông tin cá nhân</h3>
            </div>
            <p class="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
              Saffi cam kết <strong>không bao giờ bán, trao đổi, cho thuê hoặc chuyển nhượng</strong> thông tin nhận dạng cá nhân của bạn cho bất kỳ đơn vị thứ ba nào vì mục đích thương mại hay quảng cáo.
            </p>
            <p class="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              Chúng tôi chỉ thực hiện cung cấp thông tin cá nhân hoặc lịch sử giao dịch trong trường hợp bắt buộc để tuân thủ pháp luật Việt Nam, hoặc khi nhận được các yêu cầu bằng văn bản hợp pháp từ cơ quan nhà nước có thẩm quyền phục vụ công tác thanh tra.
            </p>
          </div>

          <!-- Section 5 -->
          <div id="quyen-loi" class="policy-section-content scroll-mt-24 pb-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-8 w-8 rounded-lg bg-orange-500/10 text-shopee-orange flex items-center justify-center font-sans font-black text-xs">
                5
              </div>
              <h3 class="text-base font-black text-slate-950 dark:text-white uppercase tracking-wide">Quyền của thành viên</h3>
            </div>
            <p class="text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-4">
              Là thành viên của hệ sinh thái Saffi, bạn có toàn quyền tự quyết đối với dữ liệu cá nhân của mình:
            </p>
            <ul class="flex flex-col gap-3 pl-4">
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span>Quyền được truy cập, kiểm tra và chỉnh sửa trực tiếp thông tin hồ sơ cá nhân trên ứng dụng Saffi.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span>Quyền yêu cầu tạm khóa tài khoản hoặc xóa bỏ vĩnh viễn mọi dữ liệu cá nhân khỏi máy chủ Saffi.</span>
              </li>
              <li class="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                <span class="h-1.5 w-1.5 rounded-full bg-shopee-orange mt-2 shrink-0"></span>
                <span>Mọi khiếu nại, yêu cầu hỗ trợ dữ liệu vui lòng gửi email về hòm thư hỗ trợ chính thức: <a href="mailto:getsaffi@gmail.com" class="text-shopee-orange font-bold hover:underline select-all">getsaffi@gmail.com</a>. Chúng tôi sẽ phản hồi và xử lý nhanh chóng trong vòng tối đa 07 ngày làm việc.</span>
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
  title: "Chính sách bảo mật dữ liệu - Saffi",
  ogTitle: "Chính sách bảo mật dữ liệu - Saffi",
  description: "Chính sách bảo mật thông tin cá nhân và dữ liệu giao dịch đối soát hoàn tiền tự động tại hệ thống Saffi.",
  ogDescription: "Chính sách bảo mật thông tin cá nhân và dữ liệu giao dịch đối soát hoàn tiền tự động tại hệ thống Saffi.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const sections = [
  { id: 'thu-thap', title: '1. Thông tin thu thập' },
  { id: 'muc-dich', title: '2. Mục đích sử dụng' },
  { id: 'bao-mat', title: '3. Lưu trữ & Bảo mật' },
  { id: 'chia-se', title: '4. Chia sẻ thông tin' },
  { id: 'quyen-loi', title: '5. Quyền của thành viên' }
];

const activeSection = ref('thu-thap');

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
