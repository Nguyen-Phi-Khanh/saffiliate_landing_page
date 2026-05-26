<template>
  <div class="w-full relative overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
    
    <!-- Sophisticated Subtle Background Grid Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

    <!-- HERO SECTION: Immersive Asymmetric Digital Flow with Interactive Calculator -->
    <section class="relative w-full pt-12 pb-16 md:pt-20 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 select-none">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Hero text content column -->
        <div class="lg:col-span-7 text-left">
          <!-- Premium Tagline Accent -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 dark:border-orange-500/30 text-shopee-orange font-sans font-black text-[10.5px] tracking-widest uppercase mb-6 animate-fade-in select-none">
            <svg class="h-3.5 w-3.5 animate-pulse text-shopee-orange" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span><span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-black tracking-normal">Saffi</span> - Mua sắm thông minh và tối ưu chi phí</span>
          </div>

          <!-- Massive Typographic Headline -->
          <h1 class="text-4xl sm:text-5xl md:text-6.5xl font-sans font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-6 animate-fade-in-up select-none">
            Mua Sắm Shopee Qua <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent underline decoration-orange-500/30 decoration-wavy decoration-2">Saffi</span><br />
            <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Nhận Hoàn Tiền Thật</span> Đến 90%
          </h1>

          <!-- Compelling Copy -->
          <p class="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 font-sans font-medium mb-8 leading-relaxed animate-fade-in-up select-none">
            Biến mọi liên kết mua sắm thành tiền tích lũy tự động. <span class="bg-orange-500/10 dark:bg-orange-500/20 text-shopee-orange px-2 py-0.5 rounded-lg border border-orange-500/20 font-black inline-block leading-none mx-0.5">Saffi</span> trích trả lại phần lớn chiết khấu hoa hồng tiếp thị liên kết trực tiếp vào tài khoản ngân hàng của bạn. Nhanh chóng, miễn phí và an toàn tuyệt đối.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up">
            <a
              :href="mainAppURL"
              id="btn-hero-start-now"
              class="w-full sm:w-auto px-10 py-4.5 bg-shopee-orange hover:bg-shopee-orange-hover border border-shopee-orange text-white font-sans font-black text-xs tracking-widest uppercase rounded-2xl transition-premium active:scale-95 shadow-xl shadow-orange-500/25 glow-orange-button flex items-center justify-center gap-2 select-none group"
            >
              <span>Bắt đầu ngay</span>
              <svg class="h-4.5 w-4.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <NuxtLink
              to="/huong-dan"
              id="btn-hero-guide"
              class="w-full sm:w-auto px-10 py-4.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-sans font-black text-xs tracking-widest uppercase rounded-2xl transition-premium active:scale-95 flex items-center justify-center gap-2 select-none"
            >
              <span>Xem hướng dẫn</span>
              <svg class="h-4.5 w-4.5 shrink-0 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column: Interactive Cashback Calculator (Differentiates Saffi from caffi.vn completely!) -->
        <div class="lg:col-span-5 relative z-20 animate-fade-in-up">
          <div class="rounded-[32px] border border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl p-6 md:p-8 select-none relative overflow-hidden">
            <!-- Decorative Glow inside calculator -->
            <div class="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-shopee-orange/10 blur-2xl pointer-events-none"></div>

            <div class="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80 mb-6">
              <div class="h-8 w-8 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <svg class="h-4.5 w-4.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Ước Tính Tiền Hoàn Tích Lũy</h3>
            </div>

            <!-- Spending Slider -->
            <div class="flex flex-col gap-3 mb-6">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Chi tiêu Shopee / tháng</span>
                <span class="text-sm font-black text-shopee-orange">{{ formatCurrency(monthlySpend) }}</span>
              </div>
              <input
                v-model="monthlySpend"
                type="range"
                min="500000"
                max="15000000"
                step="500000"
                class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-shopee-orange"
              />
              <div class="flex items-center justify-between text-[9px] text-slate-400 font-bold px-1">
                <span>500K</span>
                <span>5M</span>
                <span>10M</span>
                <span>15M</span>
              </div>
            </div>

            <!-- Result Matrix -->
            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 flex flex-col text-left">
                <span class="text-[9px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">Hoàn lại / tháng</span>
                <span class="text-lg font-black text-emerald-500 tracking-tight leading-none">{{ formatCurrency(monthlyCashback) }}</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850 flex flex-col text-left">
                <span class="text-[9px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">Hoàn lại / năm</span>
                <span class="text-lg font-black text-shopee-orange tracking-tight leading-none">{{ formatCurrency(yearlyCashback) }}</span>
              </div>
            </div>

            <p class="text-[9px] text-slate-400 dark:text-slate-500 font-medium leading-relaxed mt-4 text-center">
              * Ước tính dựa trên tỷ lệ hoàn tiền trung bình 16.8% của thành viên <span class="text-shopee-orange font-bold">Saffi</span> Elite.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- METRICS SECTION: Humble & Accurate Stats Strip -->
    <section class="w-full bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-850 py-12 px-4 sm:px-6 lg:px-8 select-none relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          
          <div class="flex flex-col items-center">
            <span class="text-3xl sm:text-4.5xl font-sans font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-1.5 whitespace-nowrap">100+</span>
            <h3 class="text-[9px] sm:text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">Đơn hàng hoàn tất</h3>
          </div>

          <div class="flex flex-col items-center">
            <span class="text-3xl sm:text-4.5xl font-sans font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-1.5 whitespace-nowrap">2M+</span>
            <h3 class="text-[9px] sm:text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">Hoa hồng chi trả</h3>
          </div>

          <div class="flex flex-col items-center">
            <span class="text-3xl sm:text-4.5xl font-sans font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-1.5 whitespace-nowrap">99%</span>
            <h3 class="text-[9px] sm:text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">Khớp đơn tự động</h3>
          </div>

          <div class="flex flex-col items-center">
            <span class="text-3xl sm:text-4.5xl font-sans font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-1.5 whitespace-nowrap">50+</span>
            <h3 class="text-[9px] sm:text-[10px] font-black tracking-widest text-slate-400 dark:text-slate-500 uppercase">Thành viên thông thái</h3>
          </div>

        </div>
      </div>
    </section>

    <!-- HOW IT WORKS SECTION: 3 Steps to Easy Cashback (Replaces mock deals completely) -->
    <section class="py-20 border-b border-slate-100 dark:border-slate-850 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 select-none animate-fade-in">
      <div class="text-center mb-16">
        <span class="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-shopee-orange font-black text-[9px] tracking-wider uppercase mb-3">Quy trình đơn giản</span>
        <h2 class="text-2xl sm:text-3.5xl font-black text-slate-900 dark:text-white leading-tight uppercase">3 Bước Nhận Hoàn Tiền Siêu Tốc</h2>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold max-w-xl mx-auto leading-relaxed mt-2 uppercase tracking-wide">
          Mua sắm thông thái chưa bao giờ dễ dàng đến thế cùng <span class="text-shopee-orange font-extrabold">Saffi</span>.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        <!-- Connecting Line (Desktop only) -->
        <div class="hidden md:block absolute top-1/2 left-20 right-20 h-0.5 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-emerald-500/20 -translate-y-10 z-0"></div>

        <!-- Step 1 -->
        <div class="p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left relative z-10 group">
          <div class="flex items-center justify-between mb-6">
            <span class="text-4xl font-sans font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">01</span>
            <div class="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h4 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">Copy Link Shopee</h4>
          <p class="text-[12px] sm:text-[13px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
            Sao chép liên kết sản phẩm bạn yêu thích trực tiếp trên ứng dụng Shopee (hoặc bất kỳ trình duyệt nào).
          </p>
        </div>

        <!-- Step 2 -->
        <div class="p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left relative z-10 group">
          <div class="flex items-center justify-between mb-6">
            <span class="text-4xl font-sans font-black bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">02</span>
            <div class="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
          </div>
          <h4 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">Dán & Chuyển đổi</h4>
          <p class="text-[12px] sm:text-[13px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
            Mở Saffi, dán liên kết vừa copy vào ô công cụ. Hệ thống sẽ tự động chuyển đổi thành đường link hoàn tiền thông minh trong 1 giây.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col text-left relative z-10 group">
          <div class="flex items-center justify-between mb-6">
            <span class="text-4xl font-sans font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">03</span>
            <div class="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h4 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-2">Mua sắm & Nhận Tiền</h4>
          <p class="text-[12px] sm:text-[13px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
            Click vào link chuyển đổi để mua hàng trên Shopee. Hoa hồng trích lại lên tới 90% sẽ được cộng vào số dư Saffi để bạn rút về tài khoản ngân hàng bất kỳ lúc nào!
          </p>
        </div>

      </div>
    </section>

    <!-- CORE ADVANTAGES: Layout matrix instead of identical caffi list -->
    <section class="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center select-none">
        
        <!-- Left: Distinct Content Intro -->
        <div class="lg:col-span-5 text-left">
          <h2 class="text-2xl sm:text-4xl font-sans font-black text-slate-950 dark:text-white uppercase tracking-tight mb-4">
            Tại Sao Chọn <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Saffi</span>?
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-6">
            <span class="bg-orange-500/10 dark:bg-orange-500/20 text-shopee-orange px-1.5 py-0.5 rounded-md border border-orange-500/20 font-bold inline-block leading-none mx-0.5">Saffi</span> không phải là một đơn vị bán lẻ. Chúng tôi là trợ lý số thông minh tối giản giúp tối ưu quyền lợi mua sắm trực tuyến của bạn, đảm bảo tính tiện lợi, tỷ lệ chiết khấu vượt trội và quy trình thanh khoản nhanh chóng nhất.
          </p>
          <a
            :href="mainAppURL"
            class="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white dark:text-slate-100 font-sans font-black text-xs tracking-wider uppercase rounded-2xl transition-premium active:scale-95 inline-flex items-center gap-1.5"
          >
            <span>Trải nghiệm ngay</span>
            <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <!-- Right: Modern Showcase Cards Grid -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Card 1 -->
          <div class="p-6 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-xl shadow-slate-900/[0.01]">
            <div class="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">Tỷ Lệ Hoàn Tối Đa</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              Trích trả ngược lên đến 90% chiết khấu trực tiếp cho người mua. Giảm thiểu tối đa chi phí hoa hồng giữ lại.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="p-6 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-xl shadow-slate-900/[0.01]">
            <div class="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">Thanh Khoản Tức Thì</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              Phê duyệt lệnh rút tiền ATMMB Bank, Vietcombank nhanh chóng dưới 60 phút, tối thiểu rút linh hoạt chỉ từ 10.000đ.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="p-6 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-xl shadow-slate-900/[0.01]">
            <div class="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">Tuyệt Đối Minh Bạch</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              Mọi đơn hàng tạm duyệt, trạng thái đối soát và tỷ lệ phần trăm được minh bạch hiển thị rõ ràng trên hệ thống.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="p-6 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-xl shadow-slate-900/[0.01]">
            <div class="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a13.978 13.978 0 003.038 9.025m0 0a13.978 13.978 0 01-3.038-9.025M17 14l3-3m0 0l3 3m-3-3v12" />
              </svg>
            </div>
            <h4 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">Khớp Đơn Tự Động Siêu Tốc</h4>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
              Hệ thống nhận diện thông minh ghi nhận đơn hàng mua sắm thành công của bạn sau tối đa 24h, hạn chế tối đa lỗi thất thoát hoa hồng.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- PREMIUM VIP MEMBERSHIP CARDS: Sleek credit card styling (Differentiates Saffi from caffi.vn's simple ranks!) -->
    <section class="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 select-none">
      <div class="section-header text-center mb-16">
        <h2 class="text-2xl sm:text-4xl font-sans font-black text-slate-950 dark:text-white uppercase tracking-tight mb-2">
          Hạng Thành Viên VIP <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Saffi</span>
        </h2>
        <p class="text-slate-400 dark:text-slate-500 text-xs sm:text-sm font-bold max-w-2xl mx-auto leading-relaxed">
          Tỷ lệ hoàn tiền được nâng cấp dựa trên mức độ hoạt động. Vào <span class="text-shopee-orange font-black">Ngày hội khuyến mại</span> (các ngày sale đôi, ngày 1, 15 và 25), tỷ lệ hoàn tiền được đặc cách **tăng thêm 10%**!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Bronze VIP Card (Silver metallic design) -->
        <div class="relative overflow-hidden rounded-[28px] border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50/90 via-slate-100/70 to-slate-200/80 dark:from-slate-950 dark:to-slate-900 p-6 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-between h-[390px] text-left hover:-translate-y-2.5 transition-all duration-500 group select-none">
          <!-- Ambient lighting reflection sweep on hover -->
          <div class="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full -skew-x-12 transition-transform duration-[1.2s] ease-out group-hover:translate-x-full pointer-events-none z-20"></div>
          
          <!-- Category Badge Tag -->
          <span class="absolute top-5 right-5 px-2.5 py-0.5 rounded-full text-[8.5px] font-black tracking-wider uppercase bg-slate-200/80 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-300/30 dark:border-slate-700/50 z-20">SILVER VIP</span>

          <!-- Card Image Showcase -->
          <div class="flex justify-center items-center py-4 relative z-10">
            <!-- Radial Backlight Glow -->
            <div class="absolute w-32 h-32 rounded-full bg-slate-300/30 dark:bg-slate-800/40 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 group-hover:scale-125 transition-transform duration-700"></div>
            
            <img 
              src="/saffi_silver.png" 
              alt="Saffi Silver Card" 
              class="h-40 sm:h-44 w-auto object-contain drop-shadow-[0_15px_35px_rgba(148,163,184,0.3)] group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-1 transition-all duration-500 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="flex-1 mt-2 relative z-10">
            <h3 class="text-base font-black text-slate-800 dark:text-white leading-none mb-1">Thành Viên Bạc</h3>
            <span class="text-[9.5px] text-slate-400 dark:text-slate-500 font-extrabold uppercase tracking-wide">Mặc định ban đầu</span>
          </div>

          <!-- Benefits overlay -->
          <div class="flex justify-between items-end border-t border-slate-200/80 dark:border-slate-800/80 pt-4 relative z-10">
            <div class="flex flex-col">
              <span class="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Ngày Thường</span>
              <span class="text-lg font-black text-slate-800 dark:text-white">60% Hoàn trả</span>
            </div>
            <div class="flex flex-col text-right">
              <span class="text-[8px] text-shopee-orange font-bold uppercase tracking-wider">Ngày Sale</span>
              <span class="text-lg font-black text-shopee-orange">70% Hoàn trả</span>
            </div>
          </div>
        </div>

        <!-- Gold VIP Card (Gold metallic design) -->
        <div class="relative overflow-hidden rounded-[28px] border border-amber-500/30 dark:border-amber-500/20 bg-gradient-to-br from-amber-500/[0.04] via-amber-500/[0.08] to-yellow-500/[0.03] dark:from-slate-950 dark:to-slate-900 p-6 shadow-xl dark:shadow-[0_20px_50px_rgba(245,158,11,0.05)] flex flex-col justify-between h-[390px] text-left hover:-translate-y-2.5 transition-all duration-500 group select-none">
          <!-- Ambient lighting reflection sweep on hover -->
          <div class="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full -skew-x-12 transition-transform duration-[1.2s] ease-out group-hover:translate-x-full pointer-events-none z-20"></div>

          <!-- Category Badge Tag -->
          <span class="absolute top-5 right-5 px-2.5 py-0.5 rounded-full text-[8.5px] font-black tracking-wider uppercase bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 dark:border-amber-500/20 z-20">GOLD VIP</span>

          <!-- Card Image Showcase -->
          <div class="flex justify-center items-center py-4 relative z-10">
            <!-- Radial Backlight Glow -->
            <div class="absolute w-32 h-32 rounded-full bg-amber-400/30 dark:bg-amber-500/20 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 group-hover:scale-125 transition-transform duration-700"></div>

            <img 
              src="/saffi_gold.png" 
              alt="Saffi Gold Card" 
              class="h-40 sm:h-44 w-auto object-contain drop-shadow-[0_15px_35px_rgba(245,158,11,0.35)] group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-1 transition-all duration-500 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="flex-1 mt-2 relative z-10">
            <h3 class="text-base font-black text-amber-600 dark:text-amber-500 leading-none mb-1">Thành Viên Vàng</h3>
            <span class="text-[9.5px] text-amber-600/70 dark:text-amber-500/60 font-extrabold uppercase tracking-wide">Tối thiểu 10 đơn hàng</span>
          </div>

          <div class="flex justify-between items-end border-t border-amber-500/20 dark:border-amber-500/10 pt-4 relative z-10">
            <div class="flex flex-col">
              <span class="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Ngày Thường</span>
              <span class="text-lg font-black text-slate-800 dark:text-white">70% Hoàn trả</span>
            </div>
            <div class="flex flex-col text-right">
              <span class="text-[8px] text-shopee-orange font-bold uppercase tracking-wider">Ngày Sale</span>
              <span class="text-lg font-black text-shopee-orange">80% Hoàn trả</span>
            </div>
          </div>
        </div>

        <!-- Diamond/Obsidian Infinite VIP Card (Sleek Obsidian/Gold VIP design) -->
        <div class="relative overflow-hidden rounded-[28px] border border-amber-500/30 dark:border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl dark:shadow-[0_20px_50px_rgba(245,158,11,0.06)] flex flex-col justify-between h-[390px] text-left hover:-translate-y-2.5 transition-all duration-500 group select-none">
          <!-- Ambient lighting reflection sweep on hover -->
          <div class="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full -skew-x-12 transition-transform duration-[1.2s] ease-out group-hover:translate-x-full pointer-events-none z-20"></div>

          <!-- Category Badge Tag -->
          <span class="absolute top-5 right-5 px-2.5 py-0.5 rounded-full text-[8.5px] font-black tracking-wider uppercase bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 border border-amber-500/40 dark:border-amber-500/30 z-20">INFINITE VIP</span>

          <!-- Card Image Showcase -->
          <div class="flex justify-center items-center py-4 relative z-10">
            <!-- Radial Backlight Glow -->
            <div class="absolute w-32 h-32 rounded-full bg-amber-500/20 dark:bg-amber-500/10 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 group-hover:scale-125 transition-transform duration-700"></div>

            <img 
              src="/saffi_obsidian.png" 
              alt="Saffi Obsidian Card" 
              class="h-40 sm:h-44 w-auto object-contain drop-shadow-[0_15px_35px_rgba(245,158,11,0.4)] group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-1 transition-all duration-500 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="flex-1 mt-2 relative z-10">
            <h3 class="text-base font-black text-white leading-none mb-1">Thành Viên Tinh Hoa</h3>
            <span class="text-[9.5px] text-amber-500/80 font-extrabold uppercase tracking-wide">Tối thiểu 50 đơn hàng</span>
          </div>

          <div class="flex justify-between items-end border-t border-slate-800/80 pt-4 relative z-10">
            <div class="flex flex-col">
              <span class="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Ngày Thường</span>
              <span class="text-lg font-black text-white">80% Hoàn trả</span>
            </div>
            <div class="flex flex-col text-right">
              <span class="text-[8px] text-shopee-orange font-bold uppercase tracking-wider">Ngày Sale</span>
              <span class="text-lg font-black text-shopee-orange">90% Hoàn trả</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- FAQ SECTION (Replicating caffi.vn Q&A) -->
    <section class="py-20 md:py-24 max-w-3xl mx-auto px-4 select-none relative z-10" id="faq">
      <h2 class="text-center text-2xl sm:text-4xl font-sans font-black text-slate-950 dark:text-white uppercase tracking-tight mb-2">
        Câu Hỏi Thường Gặp
      </h2>
      <p class="text-center text-slate-400 dark:text-slate-500 text-xs sm:text-sm font-bold mb-16">
        Giải đáp chi tiết các băn khoăn thường gặp của thành viên <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-black">Saffi</span>.
      </p>

      <div class="flex flex-col gap-4">
        <!-- FAQ 1 -->
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden shadow-sm"
        >
          <button
            @click="toggleFAQ(index)"
            type="button"
            class="w-full flex items-center justify-between gap-4 p-6 text-left font-sans font-black text-slate-800 dark:text-slate-200 text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-300 cursor-pointer select-none"
          >
            <span>{{ faq.question }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4.5 w-4.5 text-slate-400 dark:text-slate-500 transition-transform duration-300 shrink-0"
              :class="{ 'rotate-180 text-shopee-orange': openFAQ === index }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            class="transition-all duration-300 ease-in-out overflow-hidden"
            :style="{ maxHeight: openFAQ === index ? '200px' : '0px' }"
          >
            <div class="p-6 pt-0 border-t border-slate-50 dark:border-slate-850 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CALL TO ACTION CARD -->
    <section class="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 select-none">
      <div class="relative overflow-hidden rounded-[32px] border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl p-8 md:p-16 text-center shadow-2xl">
        <div class="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-shopee-orange/10 dark:bg-shopee-orange/5 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-3xl pointer-events-none"></div>

        <h2 class="text-2xl sm:text-4xl font-sans font-black text-slate-950 dark:text-white tracking-tight mb-4 animate-pulse">
          Sẵn sàng và bắt đầu tiết kiệm?
        </h2>
        
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold max-w-xl mx-auto mb-8 leading-relaxed uppercase tracking-wider">
          Đăng ký miễn phí, sử dụng nhanh chóng và cùng hàng trăm khách hàng thông thái tại <span class="bg-orange-500/10 dark:bg-orange-500/20 text-shopee-orange px-1.5 py-0.5 rounded-md border border-orange-500/20 font-bold inline-block leading-none mx-0.5">Saffi</span> bắt đầu nhận hoàn tiền tức thì trên mọi liên kết Shopee.
        </p>

        <div class="flex justify-center">
          <a
            :href="mainAppURL"
            id="btn-footer-start-now"
            class="w-full sm:w-auto px-10 py-5 bg-shopee-orange hover:bg-shopee-orange-hover border border-shopee-orange text-white font-sans font-black text-xs tracking-widest uppercase rounded-2xl transition-premium active:scale-95 cursor-pointer shadow-lg shadow-orange-500/20 glow-orange-button flex items-center justify-center gap-2 select-none group"
          >
            <span>Bắt đầu ngay</span>
            <svg class="h-4.5 w-4.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const config = useRuntimeConfig();
const mainAppURL = config.public.mainAppURL || "#";

// Interactive Calculator State
const monthlySpend = ref(3000000);
const monthlyCashback = computed(() => Math.round(monthlySpend.value * 0.168));
const yearlyCashback = computed(() => monthlyCashback.value * 12);

const formatCurrency = (val) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" })
    .format(val)
    .replace("₫", "đ");
};

// FAQ accordion state
const openFAQ = ref(null);
const toggleFAQ = (idx) => {
  openFAQ.value = openFAQ.value === idx ? null : idx;
};

// SEO Best Practices implementation on Home Page
useSeoMeta({
  title: "Saffi - Mua Sắm & Nhận Hoàn Tiền Thật | Chia sẻ 90% Hoa Hồng",
  ogTitle: "Saffi - Mua Sắm & Nhận Hoàn Tiền Thật | Chia sẻ 90% Hoa Hồng",
  description: "Mua sắm Shopee qua Saffi - nhận hoàn tiền mặt thật! Saffi chia lại cho bạn đến 60%-90% hoa hồng tiếp thị liên kết Shopee trả về. Rút tiền nhanh chóng từ 10.000đ.",
  ogDescription: "Mua sắm Shopee qua Saffi - nhận hoàn tiền mặt thật! Saffi chia lại cho bạn đến 60%-90% hoa hồng tiếp thị liên kết Shopee trả về. Rút tiền nhanh chóng từ 10.000đ.",
  ogImage: "/shopee-banner.png",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Saffi - Mua Sắm & Nhận Hoàn Tiền Thật | Chia sẻ 90% Hoa Hồng",
  twitterDescription: "Mua sắm Shopee qua Saffi - nhận hoàn tiền mặt thật! Saffi chia lại cho bạn đến 60%-90% hoa hồng tiếp thị liên kết Shopee trả về.",
});

const faqs = [
  {
    question: "Saffi có phải là sàn thương mại điện tử bán hàng không?",
    answer: "Không, Saffi không phải là sàn thương mại điện tử và chúng tôi không bán lẻ hàng hóa. Saffi là trợ lý số thông minh tối giản hỗ trợ bạn hoàn tiền, giúp bạn tiết kiệm chi phí mua sắm dựa trên cơ chế của chương trình tiếp thị liên kết.",
  },
  {
    question: "Saffi hoạt động như thế nào?",
    answer: "Saffi chia sẻ phần lớn tiền hoa hồng tiếp thị mà Shopee chi trả cho chúng tôi với người mua hàng. Khi bạn mua hàng thành công qua link Saffi, hệ thống ghi nhận hoa hồng và hoàn trả lại đến 90% khoản tiền này cho bạn dưới dạng tiền mặt rút về ngân hàng.",
  },
  {
    question: "Tại sao cần thời gian đối soát trước khi rút hoàn tiền?",
    answer: "Đây là chính sách của sàn Shopee để xác định đơn hàng đã hoàn tất thành công (khách hàng nhận hàng và không có yêu cầu đổi trả hay hoàn tiền). Quá trình đối soát này giúp bảo đảm quyền lợi tài chính hợp pháp giữa sàn, Saffi và bạn.",
  },
  {
    question: "Trường hợp nào đơn hàng không được ghi nhận hoàn tiền?",
    answer: "Đơn hàng có thể không được tính hoa hồng hoàn trả nếu bị xung đột cookie nguồn tiếp thị liên kết (ví dụ: bạn click vào các link quảng cáo, video, livestream khác trên Facebook/Messenger/TikTok trước khi mua). Hãy mở Saffi dán link và mua ngay để được ghi nhận 100%.",
  },
  {
    question: "Dịch vụ của Saffi có an toàn không?",
    answer: "Hoàn toàn an toàn và bảo mật! Bạn vẫn thực hiện quy trình mua sắm, nhận hàng và đổi trả trực tiếp trên ứng dụng Shopee chính chủ với đầy đủ quyền lợi bảo hành. Saffi chỉ hỗ trợ ghi nhận và chia sẻ hoa hồng tiếp thị liên kết.",
  },
];
</script>

<script>
export default {
  name: "IndexPage"
}
</script>

<style scoped>
.transition-premium {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.glow-orange-button:hover {
  box-shadow: 0 6px 22px 0 rgba(238, 77, 45, 0.35);
}

/* Custom styling for standard input range to ensure slickness */
input[type="range"]::-webkit-slider-thumb {
  border-radius: 9999px;
  background-color: #EF4444;
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  transition: transform 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}
</style>
