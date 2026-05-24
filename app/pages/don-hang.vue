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

      <!-- Orders Table -->
      <div class="mt-6" v-if="filteredOrders.length > 0">
        <div class="overflow-x-auto bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-800/60">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="text-[10px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-100 dark:border-slate-800">
                <th class="p-4 pl-6 whitespace-nowrap w-[20%]">Mã đơn</th>
                <th class="p-4 whitespace-nowrap w-[35%]">Sản phẩm</th>
                <th class="p-4 whitespace-nowrap w-[15%]">Ngày</th>
                <th class="p-4 text-right whitespace-nowrap w-[15%]">Tích lũy</th>
                <th class="p-4 whitespace-nowrap text-center w-[15%]">Trạng thái</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
              <tr 
                v-for="order in filteredOrders"
                :key="order.code"
                class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <!-- Mã đơn -->
                <td class="p-4 pl-6">
                  <div class="flex items-center gap-2.5">
                    <div class="w-6 h-6 rounded bg-[#ff5722]/10 text-[#ff5722] flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3zm7 17H5V8h14v12zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3z"/>
                      </svg>
                    </div>
                    <span class="font-bold text-slate-700 dark:text-slate-200 text-xs">#{{ order.code }}</span>
                  </div>
                </td>
                <!-- Sản phẩm -->
                <td class="p-4">
                  <div class="font-bold text-slate-600 dark:text-slate-300 text-[13px] truncate max-w-[280px]" :title="order.itemName || order.storeName">
                    {{ order.itemName || order.storeName || "Sản phẩm từ Shopee" }}
                  </div>
                </td>
                <!-- Ngày -->
                <td class="p-4">
                  <div class="text-xs text-slate-500 font-medium">
                    {{ order.date }}
                  </div>
                </td>
                <!-- Tích lũy -->
                <td class="p-4 text-right">
                  <div class="flex items-center justify-end gap-1.5 font-black text-emerald-500 text-[13px]">
                    +{{ formatMoney(order.cashbackAmount) }}
                    <span class="w-3.5 h-3.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-[8px] font-bold">đ</span>
                  </div>
                </td>
                <!-- Trạng thái -->
                <td class="p-4 text-center">
                  <span 
                    class="inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    :class="statusStyles[order.status]"
                  >
                    {{ (order.status === 'Completed' || order.status === 'Thành công') ? 'HOÀN THÀNH' : order.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
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

const statusMap = {
  pending: "Pending",
  success: "Completed",
  cancelled: "Cancelled"
};

const headers = useRequestHeaders(['cookie']);
const queryParams = computed(() => ({
  status: statusMap[activeTab.value]
}));

const { data: response } = await useFetch('/api/order', {
  headers,
  query: queryParams,
  watch: [activeTab] // Tự động gọi lại API khi chuyển tab
});

const rawOrders = computed(() => {
  const res = response.value;
  if (!res) return [];
  if (res.data && Array.isArray(res.data.data)) return res.data.data;
  if (Array.isArray(res.data)) return res.data;
  if (Array.isArray(res)) return res;
  return [];
});

const mapOrder = (item) => {
  const order = item.order || item;
  
  // Format date
  let dateStr = "N/A";
  const time = order.orderTime || order.clickTime;
  if (time) {
    const d = new Date(time);
    dateStr = `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth()+1).toString().padStart(2, '0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  }

  // Normalize status cho UI hiển thị đẹp tiếng Việt
  let normStatus = "Chờ duyệt";
  const s = order.orderStatus?.toLowerCase() || "";
  if (s.includes("thành công") || s.includes("completed")) normStatus = "Thành công";
  else if (s.includes("hủy") || s.includes("cancelled")) normStatus = "Đã hủy";

  return {
    code: order.orderId || "N/A",
    storeName: order.shopName || "Shopee",
    itemName: order.itemName,
    date: dateStr,
    purchaseAmount: order.purchaseValue || 0,
    cashbackAmount: order.affiliateNetCommission || 0,
    status: normStatus
  };
};

// Sử dụng trực tiếp orders vì Backend đã filter rồi
const filteredOrders = computed(() => rawOrders.value.map(mapOrder));

const formatMoney = (val) => {
  return val.toLocaleString("vi-VN");
};
</script>
