<template>
  <transition name="fade">
    <nav
      v-if="shouldShow"
      aria-label="Breadcrumb"
      class="w-full mb-4 select-none animate-fade-in"
    >
      <ol class="flex items-center flex-wrap gap-2 rounded-2xl bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/60 px-4 py-2.5 shadow-sm text-xs font-bold text-slate-500 dark:text-slate-400">
        <!-- Home Page Link -->
        <li class="flex items-center gap-2">
          <NuxtLink
            to="/"
            class="flex items-center gap-1.5 hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors duration-300 group"
          >
            <!-- Home Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:text-shopee-orange dark:group-hover:text-shopee-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Trang chủ</span>
          </NuxtLink>
        </li>

        <!-- Dynamically generated breadcrumbs -->
        <li
          v-for="(crumb, index) in crumbs"
          :key="crumb.path"
          class="flex items-center gap-2"
        >
          <!-- Separator Slash -->
          <svg class="h-3 w-3 text-slate-300 dark:text-slate-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>

          <!-- Current Page (Last item) -->
          <span
            v-if="index === crumbs.length - 1"
            class="text-shopee-orange dark:text-shopee-orange font-extrabold flex items-center gap-1.5"
          >
            {{ crumb.name }}
          </span>

          <!-- Intermediate Link -->
          <NuxtLink
            v-else
            :to="crumb.path"
            class="hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors duration-300"
          >
            {{ crumb.name }}
          </NuxtLink>
        </li>
      </ol>
    </nav>
  </transition>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Mapping dictionary for Vietnamese breadcrumb naming representation
const labelMap = {
  "hoan-tien": "Hoàn tiền",
  "don-hang": "Đơn hàng",
  "tai-chinh": "Tài chính",
  "ho-so": "Hồ sơ",
  "ca-nhan": "Hồ sơ",
  "huong-dan": "Hướng dẫn",
  "ho-tro": "Hỗ trợ",
  "su-kien": "Sự kiện",
  "san-pham": "Sản phẩm",
  "thong-bao": "Thông báo"
};

// Check if breadcrumb should be shown (hidden on home '/' and auth '/dang-nhap')
const shouldShow = computed(() => {
  const path = route.path;
  return path !== "/" && path !== "/dang-nhap";
});

// Compute active breadcrumb crumbs array list dynamically
const crumbs = computed(() => {
  const fullPath = route.path;
  if (!fullPath || fullPath === "/") return [];

  // Remove trailing slashes and split by slash symbol
  const segments = fullPath.replace(/\/$/, "").split("/").filter(Boolean);
  
  let currentPath = "";
  return segments.map((segment) => {
    currentPath += `/${segment}`;
    
    // Retrieve slug translated title
    const translatedName = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    
    return {
      name: translatedName,
      path: currentPath
    };
  });
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
