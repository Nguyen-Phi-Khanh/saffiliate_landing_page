<template>
  <div class="w-full animate-fade-in">
    <!-- Page Title & Header -->
    <div class="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 class="text-[30px] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Quản Lý <span class="text-shopee-orange">Đơn Hàng</span>
        </h1>
        <p class="text-[14px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
          Xem thông tin chi tiết và tiến trình hoàn tiền của toàn bộ đơn hàng của bạn.
        </p>
      </div>
    </div>

    <!-- Order Process Info Component -->
    <OrderProcessInfo />

    <!-- MAIN BODY: Filters, Search & Table -->
    <div class="rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-xl shadow-slate-900/[0.02] dark:shadow-slate-950/20 mt-8">
      <!-- Filters Container -->
      <div class="flex items-center">
        <!-- Status Tabs Filters -->
        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950/60 p-1.5 rounded-2xl border border-slate-200/40 dark:border-slate-800/50">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            type="button"
            class="px-4 py-2 flex items-center gap-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer"
            :class="[
              activeTab === tab.value
                ? 'bg-shopee-orange text-white shadow-md shadow-orange-500/10'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            ]"
          >
            <span v-html="tab.icon" class="flex items-center justify-center"></span>
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Info Box for Pending Tab -->
      <div v-if="activeTab === 'pending'" class="mt-5 rounded-2xl bg-orange-50/50 dark:bg-orange-500/5 border border-orange-100/60 dark:border-orange-500/20 p-4">
        <div class="flex items-start gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-shopee-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
              <span class="font-bold text-slate-800 dark:text-slate-100">Chờ hoàn:</span> đơn đã ghi nhận hoàn tiền, đang đợi sàn xác nhận hết thời gian hủy, đổi trả. Với Sộp-pe, hãy bấm Đã nhận hàng trong app để được hoàn sớm nhất.
            </p>
          </div>
        </div>
      </div>

      <!-- Orders List (Neomorphic Cards - Responsive & alive) -->
      <div class="mt-6 flex flex-col gap-4">
        <div
          v-for="order in filteredOrders"
          :key="order.code"
          class="group rounded-2xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/20 dark:bg-slate-900/20 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/[0.01]"
        >
          <!-- Left Info: Store & Code -->
          <div class="flex items-start gap-3.5">
            <!-- Icon -->
            <div class="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-black text-slate-800 dark:text-slate-100">{{ order.storeName }}</span>
                <span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9.5px] font-bold select-all tracking-wider">{{ order.code }}</span>
              </div>
              <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-bold">{{ order.date }}</p>
            </div>
          </div>

          <!-- Middle Info: Price details -->
          <div class="flex items-center gap-6 sm:gap-12 flex-wrap sm:flex-nowrap">
            <!-- Order Price -->
            <div class="flex flex-col">
              <span class="text-[9.5px] text-slate-400 dark:text-slate-500 font-extrabold uppercase tracking-wide">Giá trị mua</span>
              <span class="text-xs font-extrabold text-slate-700 dark:text-slate-200 mt-0.5">{{ formatMoney(order.purchaseAmount) }}</span>
            </div>

            <!-- Cashback commissions -->
            <div class="flex flex-col">
              <span class="text-[9.5px] text-slate-400 dark:text-slate-500 font-extrabold uppercase tracking-wide">Hoàn tiền</span>
              <span class="text-xs font-black text-shopee-orange mt-0.5">+{{ formatMoney(order.cashbackAmount) }}</span>
            </div>
          </div>

          <!-- Right: Status and Details Button -->
          <div class="flex items-center justify-between sm:justify-end gap-3.5 border-t sm:border-t-0 pt-3.5 sm:pt-0 border-slate-100 dark:border-slate-800/40">
            <!-- Pill status -->
            <span
              class="px-3 py-1.5 rounded-full text-[10px] font-black tracking-wide uppercase select-none shrink-0"
              :class="statusStyles[order.status]"
            >
              {{ order.status }}
            </span>

            <!-- Arrow button link -->
            <button
              type="button"
              class="flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-shopee-orange hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-85 cursor-pointer active:scale-95 transition-all duration-300"
              title="Xem chi tiết">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredOrders.length === 0" class="py-16 flex flex-col items-center justify-center text-center">
          <template v-if="activeTab === 'pending'">
            <div class="relative">
              <div class="h-16 w-16 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-shopee-orange shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div class="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-shopee-orange flex items-center justify-center text-white border-2 border-white dark:border-slate-900 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
              </div>
            </div>
            <h3 class="text-[17px] font-black text-slate-800 dark:text-slate-100 mt-5">Đừng bỏ lỡ cơ hội hoàn tiền!</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-2.5 max-w-[320px] font-medium leading-relaxed">
              Hãy bắt đầu <b>mua sắm qua Saffi</b> để tích điểm hoàn tiền ngay cho đơn mua sắm của bạn.
            </p>
            <NuxtLink to="/hoan-tien" class="mt-6 inline-flex items-center gap-2 bg-shopee-orange text-white px-6 py-3 rounded-xl font-bold text-[13px] shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              LẤY LINK HOÀN TIỀN NGAY
            </NuxtLink>
          </template>
          
          <template v-else>
            <div class="h-16 w-16 rounded-full bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-85 flex items-center justify-center text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xs font-bold text-slate-700 dark:text-slate-300 mt-4">Không tìm thấy đơn hàng nào</h3>
            <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 max-w-[280px]">
              Chưa có đơn hàng nào trong trạng thái này.
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

useSeoMeta({
  title: "Lịch sử đơn hàng - Saffi",
  ogTitle: "Lịch sử đơn hàng - Saffi",
  description: "Trình theo dõi và quản lý toàn bộ các đơn hàng hoàn tiền từ Shopee.",
  ogDescription: "Trình theo dõi và quản lý toàn bộ các đơn hàng hoàn tiền từ Shopee.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const activeTab = ref("pending");

const tabs = [
  { 
    label: "Chờ duyệt", 
    value: "pending", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  },
  { 
    label: "Thành công", 
    value: "success", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  },
  { 
    label: "Đã hủy", 
    value: "cancelled", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  },
];

const statusStyles = {
  "Thành công": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/15",
  "Chờ duyệt": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/15",
  "Đã hủy": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/15",
};

// Hiện tại danh sách đơn hàng đang trống (để hiển thị Empty State)
const orders = [];

const filteredOrders = computed(() => {
  return orders.filter((order) => {
    // 1. Filter by status tab
    if (activeTab.value === "pending" && order.status !== "Chờ duyệt") return false;
    if (activeTab.value === "success" && order.status !== "Thành công") return false;
    if (activeTab.value === "cancelled" && order.status !== "Đã hủy") return false;

    return true;
  });
});

const formatMoney = (val) => {
  return val.toLocaleString("vi-VN") + "đ";
};
</script>
