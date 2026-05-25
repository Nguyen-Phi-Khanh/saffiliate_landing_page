<template>
  <footer class="w-full pt-20 pb-8 border-t border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/80 transition-colors duration-500 relative overflow-hidden select-none">
    
    <!-- Abstract Tech background pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0"></div>
    <div class="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-orange-500/[0.02] blur-3xl pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
      
      <!-- TOP REGION: Bold Typographic Narrative & Slogan -->
      <div class="pb-12 mb-12 border-b border-slate-200/60 dark:border-slate-800/85">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Brutalist massive slogan -->
          <div class="lg:col-span-8">
            <h2 class="text-2xl sm:text-3.5xl font-sans font-black text-slate-950 dark:text-white tracking-tight uppercase leading-none select-none">
              Tiết Kiệm Hơn. Mua Sắm Thông Thái Hơn.<br class="hidden sm:inline" />
              Hoàn Tiền Tự Động Cùng <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Saffi</span>.
            </h2>
            <p class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-3.5">
              Giải pháp tối ưu hoa hồng tiếp thị liên kết Shopee trả thẳng về ATM của bạn
            </p>
          </div>
          <!-- Primary CTA Button -->
          <div class="lg:col-span-4 flex lg:justify-end">
            <a
              :href="mainAppURL"
              class="w-full sm:w-auto px-8 py-4 bg-shopee-orange hover:bg-shopee-orange-hover text-white font-black text-[11px] tracking-widest uppercase rounded-2xl transition-premium active:scale-95 shadow-lg shadow-orange-500/15 glow-orange-button flex items-center justify-center gap-2 select-none group"
            >
              <span>Mua sắm nhận hoàn tiền ngay</span>
              <svg class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- MIDDLE REGION: Asymmetric 3-Column Cyber Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-16">
        
        <!-- COLUMN 1: Brand details & Live Status Widget (Span 4) -->
        <div class="md:col-span-4 flex flex-col gap-6">
          <div class="flex items-center gap-2">
            <!-- Brand Icon -->
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-shopee-orange shadow-md glow-orange shrink-0">
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
            <div class="flex flex-col">
              <span class="font-sans text-[17px] font-black tracking-tight text-slate-900 dark:text-white leading-none">
                S<span class="text-shopee-orange">affi</span>
              </span>
              <span class="text-[7.5px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mt-0.5 leading-none">
                Smart Shopping
              </span>
            </div>
          </div>

          <p class="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-sm font-medium">
            Saffi là trợ lý số tối giản giúp người dùng mua sắm trực tiếp trên Shopee và rút lại lên đến 90% số tiền chiết khấu tiếp thị liên kết một cách minh bạch, an toàn tuyệt đối.
          </p>

          <!-- Status Dashboard Widget -->
          <div class="p-3.5 rounded-2xl border border-slate-200/50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm flex items-center justify-between max-w-sm">
            <span class="text-[9px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Trạng thái hệ thống</span>
            <div class="flex items-center gap-1.5">
              <span class="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span class="h-2 w-2 rounded-full bg-emerald-500 absolute"></span>
              <span class="text-[9px] font-black text-emerald-500 uppercase tracking-wide">Hoạt động</span>
            </div>
          </div>
        </div>

        <!-- COLUMN 2: Staggered Capsule Tags Navigation (Span 4) -->
        <div class="md:col-span-4 flex flex-col gap-6">
          <span class="text-xs font-black tracking-widest text-slate-800 dark:text-slate-200 uppercase">
            Công cụ
          </span>
          <!-- Capsule row style instead of boring list -->
          <div class="flex flex-wrap gap-2.5">
            <!-- Công cụ hoàn tiền -->
            <a 
              :href="`${mainAppURL}/hoan-tien`" 
              class="px-4 py-2.5 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-shopee-orange dark:hover:text-shopee-orange hover:border-shopee-orange/30 dark:hover:border-shopee-orange/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Công cụ hoàn tiền</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <!-- Hướng dẫn sử dụng -->
            <NuxtLink 
              to="/huong-dan" 
              class="px-4 py-2.5 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-shopee-orange dark:hover:text-shopee-orange hover:border-shopee-orange/30 dark:hover:border-shopee-orange/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Hướng dẫn mua sắm</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>

            <!-- Hỗ trợ kỹ thuật -->
            <NuxtLink 
              to="/ho-tro" 
              class="px-4 py-2.5 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-shopee-orange dark:hover:text-shopee-orange hover:border-shopee-orange/30 dark:hover:border-shopee-orange/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Trung tâm hỗ trợ</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Direct Support Email Link -->
          <div class="flex items-center gap-2 mt-2">
            <span class="text-[10px] text-slate-400 font-bold uppercase shrink-0">Email liên hệ:</span>
            <a href="mailto:getsaffi@gmail.com" class="text-xs font-black text-slate-900 dark:text-white hover:text-shopee-orange dark:hover:text-shopee-orange select-all transition-colors">getsaffi@gmail.com</a>
          </div>
        </div>

        <!-- COLUMN 3: Premium Support Channel Cards (Span 4) -->
        <div class="md:col-span-4 flex flex-col gap-6">
          <span class="text-xs font-black tracking-widest text-slate-800 dark:text-slate-200 uppercase">
            Cam Kết Vận Hành
          </span>
          <div class="grid grid-cols-2 gap-4">
            <!-- Card Hours -->
            <div class="p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/20 text-left">
              <div class="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 class="text-[10px] font-black text-slate-950 dark:text-white uppercase">08:00 - 22:00</h4>
              <span class="text-[9px] text-slate-400 dark:text-slate-550 font-bold uppercase mt-0.5 block">Hỗ trợ hàng ngày</span>
            </div>

            <!-- Card SLA -->
            <div class="p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/20 text-left">
              <div class="h-7 w-7 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 class="text-[10px] font-black text-slate-950 dark:text-white uppercase">Dưới 60 Phút</h4>
              <span class="text-[9px] text-slate-400 dark:text-slate-550 font-bold uppercase mt-0.5 block">Xử lý rút tiền</span>
            </div>
          </div>

          <!-- Social channels representation -->
          <div class="flex items-center gap-3">
            <span class="text-[10px] text-slate-400 font-bold uppercase shrink-0">Theo dõi Saffi:</span>
            <div class="flex gap-2">
              <a href="#" class="h-7 w-7 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-shopee-orange dark:hover:bg-shopee-orange hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a href="#" class="h-7 w-7 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-shopee-orange dark:hover:bg-shopee-orange hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- BOTTOM REGION: Copyright and Terms Links -->
      <div class="pt-8 border-t border-slate-200/50 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
        <p class="text-[11px] font-bold text-slate-400 dark:text-slate-500 select-none">
          © 2026 Saffi. Bản quyền dịch vụ thuộc về Saffi Team.
        </p>
        <div class="flex items-center gap-4 text-[11px] font-bold text-slate-400 dark:text-slate-500">
          <NuxtLink to="/privacy-policy" class="hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors duration-300">Privacy Policy</NuxtLink>
          <span class="text-slate-200 dark:text-slate-850">|</span>
          <NuxtLink to="/terms-of-service" class="hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors duration-300">Terms of Service</NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig();
const mainAppURL = config.public.mainAppURL || "#";
</script>

<style scoped>
.transition-premium {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.glow-orange {
  box-shadow: 0 4px 14px 0 rgba(239, 83, 80, 0.2);
}

.glow-orange-button:hover {
  box-shadow: 0 6px 20px 0 rgba(238, 77, 45, 0.35);
}
</style>
