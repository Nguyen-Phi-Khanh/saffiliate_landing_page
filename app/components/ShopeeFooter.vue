<template>
  <footer class="hidden md:block w-full mt-auto pt-16 pb-8 border-t border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-950 transition-colors duration-500">
    <div class="mx-auto max-w-7xl px-6 md:px-8">
      
      <!-- TOP REGION: 3 Columns Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12">
        
        <!-- COLUMN 1: Brand Logo, Introduction & Socials (Span 5) -->
        <div class="md:col-span-5 flex flex-col gap-5">
          <!-- Logo Brand -->
          <div class="flex items-center gap-2">
            <!-- Brand Icon -->
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-shopee-orange shadow-md glow-orange shrink-0 select-none">
              <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <path d="M16 8a6 6 0 0 0-8 0" />
                <path d="M8 16a6 6 0 0 0 8 0" />
                <path d="M12 6V4" />
                <path d="M12 20v-2" />
              </svg>
            </div>
            
            <!-- Logo Text -->
            <div class="flex flex-col select-none">
              <span class="font-sans text-[17px] font-black tracking-tight text-slate-900 dark:text-white leading-none">
                S<span class="text-shopee-orange">affiliate</span>
              </span>
              <span class="text-[7.5px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mt-0.5 leading-none">
                CASHBACK & AFFILIATE
              </span>
            </div>
          </div>

          <!-- Introduction Text -->
          <p class="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
            Trợ lý mua sắm thông minh giúp bạn hoàn tiền tự động khi mua hàng qua sọp-pi.
          </p>

          <!-- Social Icons Round Buttons -->
          <div class="flex items-center gap-2.5 mt-2">
            <!-- Facebook Button -->
            <a 
              href="#" 
              class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900/60 text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800/80 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0" 
              title="Facebook"
            >
              <svg class="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <!-- Community Button (Users icon) -->
            <a 
              href="#" 
              class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900/60 text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800/80 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0" 
              title="Cộng đồng"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
            <!-- Mail Button -->
            <a 
              href="mailto:getsaffiliate@gmail.com" 
              class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900/60 text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800/80 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0" 
              title="Gửi thư hỗ trợ"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- COLUMN 2: Navigation Links (Span 3) -->
        <div class="md:col-span-3 flex flex-col gap-4">
          <span class="text-xs font-black tracking-widest text-slate-800 dark:text-slate-200 uppercase select-none">
            SAFFILIATE
          </span>
          <div class="flex flex-col gap-3.5">
            <!-- Công cụ hoàn tiền -->
            <a href="#" class="flex items-center gap-2.5 text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:translate-x-1 transition-all duration-300 select-none group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-shopee-orange dark:group-hover:text-shopee-orange transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Công cụ hoàn tiền</span>
            </a>
            <!-- Đơn hàng -->
            <a href="#" class="flex items-center gap-2.5 text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:translate-x-1 transition-all duration-300 select-none group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-shopee-orange dark:group-hover:text-shopee-orange transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Đơn hàng</span>
            </a>
            <!-- Tài chính -->
            <a href="#" class="flex items-center gap-2.5 text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:translate-x-1 transition-all duration-300 select-none group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-shopee-orange dark:group-hover:text-shopee-orange transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>Tài chính</span>
            </a>
            <!-- Hướng dẫn sử dụng -->
            <a href="#" class="flex items-center gap-2.5 text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:translate-x-1 transition-all duration-300 select-none group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-shopee-orange dark:group-hover:text-shopee-orange transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Hướng dẫn sử dụng</span>
            </a>
            <!-- Giới thiệu bạn bè -->
            <a href="#" class="flex items-center gap-2.5 text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:translate-x-1 transition-all duration-300 select-none group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-shopee-orange dark:group-hover:text-shopee-orange transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0H4m8 0h8m-8 0v13m-8-6h16" />
              </svg>
              <span>Giới thiệu bạn bè</span>
            </a>
          </div>
        </div>

        <!-- COLUMN 3: Contact & Support (Span 4) -->
        <div class="md:col-span-4 flex flex-col gap-4">
          <span class="text-xs font-black tracking-widest text-slate-800 dark:text-slate-200 uppercase select-none">
            LIÊN HỆ
          </span>
          <div class="flex flex-col gap-4">
            
            <!-- Email Item -->
            <div class="flex items-center gap-3">
              <div class="h-9 w-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex flex-col select-all">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200 leading-tight">getsaffiliate@gmail.com</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Email hỗ trợ</span>
              </div>
            </div>

            <!-- Hours Item -->
            <div class="flex items-center gap-3">
              <div class="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex flex-col select-none">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200 leading-tight">08:00 - 22:00 hàng ngày</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Giờ hỗ trợ</span>
              </div>
            </div>

            <!-- Fast Withdraw Commitment -->
            <div class="flex items-center gap-3">
              <div class="h-9 w-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="flex flex-col select-none">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200 leading-tight">Rút tiền &lt; 60 phút</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Cam kết xử lý</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- BOTTOM REGION: Copyright and Terms Links -->
      <div class="pt-8 border-t border-slate-100 dark:border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
        <p class="text-[11px] font-bold text-slate-400 dark:text-slate-500 select-none">
          © 2026 SAffiliate. Bản quyền dịch vụ thuộc về SAffiliate Team.
        </p>
        <div class="flex items-center gap-4 text-[11px] font-bold text-slate-400 dark:text-slate-500">
          <a href="#" class="hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors duration-300">Privacy Policy</a>
          <span class="text-slate-200 dark:text-slate-800">|</span>
          <a href="#" class="hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors duration-300">Terms of Service</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
// Footer logic if any
</script>

<style scoped>
.glow-orange {
  box-shadow: 0 4px 14px 0 rgba(239, 83, 80, 0.2);
}
</style>
