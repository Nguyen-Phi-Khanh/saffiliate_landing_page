<template>
  <div class="flex flex-col gap-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-black text-slate-800 dark:text-slate-100">Tổng quan hệ thống</h2>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Xin chào, chúc bạn một ngày làm việc hiệu quả.</p>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div class="bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-900/[0.02] flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <div class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Tổng Users</div>
          <div class="text-2xl font-black text-slate-800 dark:text-white mt-0.5">1,248</div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-900/[0.02] flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <div class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Đơn thành công</div>
          <div class="text-2xl font-black text-slate-800 dark:text-white mt-0.5">856</div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-900/[0.02] flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-shopee-orange/10 text-shopee-orange flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <div class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Tổng Hoa hồng</div>
          <div class="text-2xl font-black text-slate-800 dark:text-white mt-0.5">42.5M</div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-900/[0.02] flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <div class="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Đơn chờ duyệt</div>
          <div class="text-2xl font-black text-slate-800 dark:text-white mt-0.5">142</div>
        </div>
      </div>
    </div>

    <!-- Main Chart Placeholder -->
    <div class="bg-white dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-900/[0.02] h-96 flex flex-col">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-sm font-bold text-slate-800 dark:text-slate-100">Biểu đồ Doanh thu hoàn tiền</h3>
        <select class="text-xs border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none">
          <option>7 ngày qua</option>
          <option>30 ngày qua</option>
          <option>Năm nay</option>
        </select>
      </div>
      <div class="flex-1 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center">
        <div class="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto text-slate-300 dark:text-slate-700 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          <p class="text-xs font-bold text-slate-400">Đang chờ tích hợp Chart.js / ApexCharts</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin"
});
</script>
