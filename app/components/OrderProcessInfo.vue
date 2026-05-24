<template>
  <div class="rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-xl shadow-slate-900/[0.02] dark:shadow-slate-950/20 mt-8 mb-4">
    <!-- Header -->
    <div class="flex items-center gap-2 mb-8">
      <div class="text-shopee-orange w-5 h-5 flex items-center justify-center rounded-full border border-shopee-orange/30">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 class="text-[15px] font-bold text-slate-800 dark:text-slate-100">Quy trình đơn hàng</h2>
    </div>

    <!-- Timeline -->
    <div class="flex items-start justify-between max-w-3xl mx-auto mb-8 px-1 sm:px-6">
      <!-- Step 1 -->
      <div class="flex flex-col items-center gap-3 w-16 sm:w-20">
        <div class="w-12 h-12 rounded-full bg-shopee-orange flex items-center justify-center text-white shadow-lg shadow-orange-500/20 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>
        <span class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 text-center leading-tight">Mua hàng</span>
      </div>
      
      <!-- Connector 1 -->
      <div class="flex-1 h-12 flex items-center px-1 sm:px-3">
        <div class="h-[2px] w-full bg-gradient-to-r from-shopee-orange to-yellow-400 relative flex items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-slate-300 dark:text-slate-600 bg-white dark:bg-slate-900 w-3 h-3 absolute -right-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      <!-- Step 2 -->
      <div class="flex flex-col items-center gap-3 w-16 sm:w-20">
        <div class="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-lg shadow-yellow-500/20 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 3 4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 text-center leading-tight">Ghi nhận</span>
      </div>

      <!-- Connector 2 -->
      <div class="flex-1 h-12 flex items-center px-1 sm:px-3">
        <div class="h-[2px] w-full bg-gradient-to-r from-yellow-400 to-sky-400 relative flex items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-slate-300 dark:text-slate-600 bg-white dark:bg-slate-900 w-3 h-3 absolute -right-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="flex flex-col items-center gap-3 w-16 sm:w-20">
        <div class="w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
          </svg>
        </div>
        <span class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 text-center leading-tight">Đối soát</span>
      </div>

      <!-- Connector 3 -->
      <div class="flex-1 h-12 flex items-center px-1 sm:px-3">
        <div class="h-[2px] w-full bg-slate-200 dark:bg-slate-700 relative flex items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-slate-300 dark:text-slate-600 bg-white dark:bg-slate-900 w-3 h-3 absolute -right-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="flex flex-col items-center gap-3 w-16 sm:w-20">
        <div class="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        </div>
        <span class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 text-center leading-tight">Duyệt hoàn</span>
      </div>
    </div>

    <!-- Toggle button -->
    <div class="flex justify-center mb-6">
      <button 
        @click="isDetailsOpen = !isDetailsOpen"
        class="flex items-center gap-1.5 text-shopee-orange text-sm font-semibold hover:text-orange-600 transition-colors cursor-pointer"
      >
        <span>Xem chi tiết</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': isDetailsOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <!-- Details Section (Smooth Expand/Collapse) -->
    <div class="grid transition-all duration-500 ease-in-out" :class="isDetailsOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'">
      <div class="overflow-hidden">
        <!-- Grid Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-2">
        <!-- Card 1 -->
        <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/80">
          <div class="w-10 h-10 rounded-full bg-yellow-50 dark:bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 3 4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Thời gian ghi nhận</div>
            <div class="text-sm font-medium text-slate-700 dark:text-slate-200"><span class="text-shopee-orange font-bold">Trong vòng 24h</span></div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/80">
          <div class="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          </div>
          <div>
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Thời gian duyệt hoàn</div>
            <div class="text-sm font-medium text-slate-700 dark:text-slate-200"><span class="text-emerald-500 font-bold">7 - 14 ngày</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- Footer note -->
    <div class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-5">
      Đơn hàng mua qua <span class="font-bold text-slate-700 dark:text-slate-200">Saffi</span> sẽ được tự động ghi nhận. Hãy đảm bảo bạn không bấm link khác (live, video, quảng cáo,...) hoặc chuyển sang link khác khi đang mua sắm.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDetailsOpen = ref(false);
</script>
