<template>
  <div class="w-full animate-fade-in">
    <!-- Page Title & Header -->
    <div class="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 class="text-[30px] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Quản Lý <span class="text-shopee-orange">Đơn Hàng</span>
        </h1>
        <p class="text-[14px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
          Xem thông tin chi tiết và tiến trình hoàn tiền của toàn bộ đơn hàng Shopee của bạn.
        </p>
      </div>
      <!-- Time Range pill -->
      <div class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 text-xs font-bold self-start md:self-auto select-none shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-shopee-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Tháng 05, 2026</span>
      </div>
    </div>

    <!-- Statistics Overview Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      <!-- Card 1: Tổng đơn -->
      <div class="rounded-3xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-5 shadow-lg shadow-slate-900/[0.02] dark:shadow-slate-950/10 hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-300 group">
        <div class="flex items-center justify-between gap-3">
          <span class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Tổng đơn hàng</span>
          <div class="h-9 w-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
        <p class="text-[26px] font-black text-slate-800 dark:text-white mt-3 leading-none">42</p>
        <span class="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5 mt-2">
          <span>+8 đơn mới tuần này</span>
        </span>
      </div>

      <!-- Card 2: Hoàn tiền tích lũy -->
      <div class="rounded-3xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-5 shadow-lg shadow-slate-900/[0.02] dark:shadow-slate-950/10 hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-300 group">
        <div class="flex items-center justify-between gap-3">
          <span class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Hoàn tích lũy</span>
          <div class="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <p class="text-[26px] font-black text-slate-800 dark:text-white mt-3 leading-none">1,381,800đ</p>
        <span class="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5 mt-2">
          <span>Đã hoàn thành đối soát</span>
        </span>
      </div>

      <!-- Card 3: Đang chờ duyệt -->
      <div class="rounded-3xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-5 shadow-lg shadow-slate-900/[0.02] dark:shadow-slate-950/10 hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-300 group">
        <div class="flex items-center justify-between gap-3">
          <span class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Chờ duyệt</span>
          <div class="h-9 w-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <p class="text-[26px] font-black text-slate-800 dark:text-white mt-3 leading-none">98,000đ</p>
        <span class="text-[10px] text-amber-500 font-bold flex items-center gap-0.5 mt-2">
          <span>Chờ Shopee cập nhật</span>
        </span>
      </div>

      <!-- Card 4: Tỷ lệ thành công -->
      <div class="rounded-3xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-5 shadow-lg shadow-slate-900/[0.02] dark:shadow-slate-950/10 hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-300 group">
        <div class="flex items-center justify-between gap-3">
          <span class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Thành công</span>
          <div class="h-9 w-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <p class="text-[26px] font-black text-slate-800 dark:text-white mt-3 leading-none">95.2%</p>
        <span class="text-[10px] text-blue-500 font-bold flex items-center gap-0.5 mt-2">
          <span>Cực kỳ ổn định</span>
        </span>
      </div>
    </div>

    <!-- MAIN BODY: Filters, Search & Table -->
    <div class="rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-xl shadow-slate-900/[0.02] dark:shadow-slate-950/20 mt-8">
      <!-- Search & Filters Container -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <!-- Status Tabs Filters -->
        <div class="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950/60 p-1.5 rounded-2xl border border-slate-200/40 dark:border-slate-800/50 self-start">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            type="button"
            class="px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer"
            :class="[
              activeTab === tab.value
                ? 'bg-shopee-orange text-white shadow-md shadow-orange-500/10'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Search input -->
        <div class="relative max-w-sm w-full">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Tìm mã đơn, tên cửa hàng..."
            class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 pl-10 pr-4 py-2.5 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all"
          />
          <div class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
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
              class="flex h-8.5 w-8.5 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-shopee-orange hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-85 cursor-pointer active:scale-95 transition-all duration-300"
              title="Xem chi tiết"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredOrders.length === 0" class="py-16 flex flex-col items-center justify-center text-center">
          <div class="h-16 w-16 rounded-full bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-85 flex items-center justify-center text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xs font-bold text-slate-700 dark:text-slate-300 mt-4">Không tìm thấy đơn hàng nào</h3>
          <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 max-w-[280px]">
            Hãy thử tìm bằng từ khóa khác hoặc chuyển sang bộ lọc trạng thái khác.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

useSeoMeta({
  title: "Lịch sử đơn hàng - SAffiliate",
  ogTitle: "Lịch sử đơn hàng - SAffiliate",
  description: "Trình theo dõi và quản lý toàn bộ các đơn hàng hoàn tiền từ Shopee.",
  ogDescription: "Trình theo dõi và quản lý toàn bộ các đơn hàng hoàn tiền từ Shopee.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const activeTab = ref("all");
const searchQuery = ref("");

const tabs = [
  { label: "Tất cả", value: "all" },
  { label: "Chờ duyệt", value: "pending" },
  { label: "Thành công", value: "success" },
  { label: "Đã hủy", value: "cancelled" },
];

const statusStyles = {
  "Thành công": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/15",
  "Chờ duyệt": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/15",
  "Đã hủy": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/15",
};

// Mock data representing standard Shopee transactions with premium brands
const orders = [
  {
    code: "SP20260522-8374",
    storeName: "Shopee Mall - Samsung Official",
    date: "22/05/2026 14:30",
    purchaseAmount: 15490000,
    cashbackAmount: 309800,
    status: "Thành công",
  },
  {
    code: "SP20260520-2194",
    storeName: "Lock&Lock Official Store",
    date: "20/05/2026 09:15",
    purchaseAmount: 1250000,
    cashbackAmount: 25000,
    status: "Thành công",
  },
  {
    code: "SP20260519-5501",
    storeName: "Coolmate Store",
    date: "19/05/2026 17:40",
    purchaseAmount: 450000,
    cashbackAmount: 9000,
    status: "Chờ duyệt",
  },
  {
    code: "SP20260515-9921",
    storeName: "Adidas Official Store",
    date: "15/05/2026 11:20",
    purchaseAmount: 2350000,
    cashbackAmount: 47000,
    status: "Đã hủy",
  },
  {
    code: "SP20260511-1052",
    storeName: "Anker Official Mall",
    date: "11/05/2026 21:05",
    purchaseAmount: 890000,
    cashbackAmount: 17800,
    status: "Thành công",
  },
  {
    code: "SP20260508-3011",
    storeName: "Sách Nhã Nam Official",
    date: "08/05/2026 13:50",
    purchaseAmount: 320000,
    cashbackAmount: 6400,
    status: "Thành công",
  },
];

const filteredOrders = computed(() => {
  return orders.filter((order) => {
    // 1. Filter by status tab
    if (activeTab.value === "pending" && order.status !== "Chờ duyệt") return false;
    if (activeTab.value === "success" && order.status !== "Thành công") return false;
    if (activeTab.value === "cancelled" && order.status !== "Đã hủy") return false;

    // 2. Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      const codeMatch = order.code.toLowerCase().includes(query);
      const storeMatch = order.storeName.toLowerCase().includes(query);
      return codeMatch || storeMatch;
    }

    return true;
  });
});

const formatMoney = (val) => {
  return val.toLocaleString("vi-VN") + "đ";
};
</script>
