<template>
  <div class="w-full animate-fade-in-up">
    <!-- Premium Welcome Dashboard Card -->
    <div class="glass-panel rounded-[32px] p-8 md:p-12 shadow-2xl glow-orange text-center relative overflow-hidden transition-all duration-500 border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl">
      <!-- Decorative background blur blobs inside the card (no purple) -->
      <div class="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-shopee-orange/10 dark:bg-shopee-orange/5 blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-3xl pointer-events-none"></div>

      <!-- Brand Identity Brandmark -->
      <div class="flex justify-center mb-6">
        <div class="flex h-20 w-20 items-center justify-center rounded-[24px] bg-shopee-orange shadow-lg shadow-orange-500/30 glow-orange shrink-0 cursor-pointer transition-transform duration-500 hover:rotate-[15deg] select-none group">
          <svg class="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <path d="M16 8a6 6 0 0 0-8 0" />
            <path d="M8 16a6 6 0 0 0 8 0" />
            <path d="M12 6V4" />
            <path d="M12 20v-2" />
          </svg>
        </div>
      </div>

      <!-- Welcome Slogan & Copy -->
      <h1 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight select-none mb-4 transition-colors duration-400">
        Chào mừng bạn đến với <span class="text-shopee-orange">Saffi</span>
      </h1>
      
      <p class="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto mb-8 leading-relaxed transition-colors duration-400">
        Hệ thống quy đổi link mua sắm thông minh. Tự động nhận hoàn tiền và chiết khấu hấp dẫn trực tiếp khi bạn thực hiện mua hàng qua liên kết tiếp thị.
      </p>

      <!-- Key Benefits Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
        <!-- Benefit 1 -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 hover:-translate-y-1 transition-all duration-300 group">
          <div class="h-9 w-9 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 text-orange-500 flex items-center justify-center mb-3">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-sm font-bold text-slate-950 dark:text-white mb-1 group-hover:text-shopee-orange transition-colors">Tốc Độ Siêu Tốc</h3>
          <p class="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">Quy đổi và xuất mã link tiếp thị nhận hoàn tiền chỉ trong 3 giây.</p>
        </div>

        <!-- Benefit 2 -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 hover:-translate-y-1 transition-all duration-300 group">
          <div class="h-9 w-9 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-500 flex items-center justify-center mb-3">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-sm font-bold text-slate-950 dark:text-white mb-1 group-hover:text-emerald-500 transition-colors">Tối Ưu Chiết Khấu</h3>
          <p class="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">Nhận mức chiết khấu hoàn tiền hoa hồng cao nhất thị trường hiện nay, lên đến 95%.</p>
        </div>

        <!-- Benefit 3 -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 hover:-translate-y-1 transition-all duration-300 group">
          <div class="h-9 w-9 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 text-amber-500 flex items-center justify-center mb-3">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-sm font-bold text-slate-950 dark:text-white mb-1 group-hover:text-amber-500 transition-colors">An Toàn Tuyệt Đối</h3>
          <p class="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">Cam kết bảo mật thông tin tài khoản và đối soát đơn hàng minh bạch.</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink
          to="/hoan-tien"
          class="w-full sm:w-auto px-8 py-4 bg-shopee-orange hover:bg-shopee-orange-hover border border-shopee-orange text-white font-bold text-sm tracking-wide uppercase rounded-2xl transition-premium active:scale-98 cursor-pointer shadow-lg shadow-orange-500/20 glow-orange-button flex items-center justify-center gap-2 select-none"
        >
          <span>Mua sắm hoàn tiền ngay</span>
          <svg class="h-4 w-4 shrink-0 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>

        <a
          href="https://shopee.vn"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto px-8 py-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950/60 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm tracking-wide uppercase rounded-2xl transition-premium active:scale-98 cursor-pointer flex items-center justify-center gap-2 select-none"
        >
          <span>Đến Shopee</span>
          <svg class="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Saffi - Mua Sắm & Hoàn Tiền Thông Minh",
  ogTitle: "Saffi - Mua Sắm & Hoàn Tiền Thông Minh",
  description: "Trang chủ hệ thống Saffi. Hỗ trợ mua sắm thông minh và nhận lại tiền chiết khấu hoàn tiền tự động cực kỳ nhanh chóng.",
  ogDescription: "Trang chủ hệ thống Saffi. Hỗ trợ mua sắm thông minh và nhận lại tiền chiết khấu hoàn tiền tự động cực kỳ nhanh chóng.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
/* Smooth and premium transition */
.transition-premium {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
