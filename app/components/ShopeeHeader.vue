<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-6 lg:px-8 pt-3.5 pb-2"
  >
    <div class="mx-auto max-w-7xl">
      <div 
        class="transition-[background-color,border-color,box-shadow] duration-500 ease-out flex items-center justify-between rounded-full border bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-5 py-2.5"
        :class="[
          isScrolled 
            ? 'border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-slate-900/5 dark:shadow-slate-950/20' 
            : 'border-slate-200/80 dark:border-slate-800/85 shadow-xl shadow-slate-900/10 dark:shadow-slate-950/30'
        ]"
      >
        <!-- LEFT REGION: Logo & Navigation Links -->
        <div class="flex items-center gap-1 sm:gap-2">
          
          <!-- Logo Brand -->
          <NuxtLink to="/" class="flex items-center mr-4 cursor-pointer group shrink-0">
            <img 
              src="/saffi_logo.png" 
              alt="Saffi Logo" 
              class="h-11 sm:h-13 md:h-15 w-auto object-contain transition-all duration-500 group-hover:scale-[1.03] select-none filter dark:brightness-110" 
              fetchpriority="high"
              decoding="async"
            />
          </NuxtLink>

          <!-- Phân cách dọc -->
          <div class="hidden md:block h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

          <!-- Navigation Menu (Dành cho PC & iPad) -->
          <div class="hidden md:flex items-center gap-1">
            <!-- Trang chủ -->
            <NuxtLink 
              to="/"
              class="px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 relative group"
              :class="[
                route.path === '/'
                  ? 'text-shopee-orange'
                  : 'text-slate-500 dark:text-slate-400 hover:text-shopee-orange dark:hover:text-shopee-orange'
              ]"
            >
              <span>Trang chủ</span>
              <span 
                class="absolute bottom-1.5 left-4 right-4 h-0.5 bg-shopee-orange rounded-full transform transition-transform duration-300"
                :class="route.path === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
              ></span>
            </NuxtLink>

            <!-- Hướng dẫn -->
            <NuxtLink 
              to="/huong-dan"
              class="px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 relative group"
              :class="[
                route.path === '/huong-dan'
                  ? 'text-shopee-orange'
                  : 'text-slate-500 dark:text-slate-400 hover:text-shopee-orange dark:hover:text-shopee-orange'
              ]"
            >
              <span>Hướng dẫn</span>
              <span 
                class="absolute bottom-1.5 left-4 right-4 h-0.5 bg-shopee-orange rounded-full transform transition-transform duration-300"
                :class="route.path === '/huong-dan' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
              ></span>
            </NuxtLink>

            <!-- Hỗ trợ -->
            <NuxtLink 
              to="/ho-tro"
              class="px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 relative group"
              :class="[
                route.path === '/ho-tro'
                  ? 'text-shopee-orange'
                  : 'text-slate-500 dark:text-slate-400 hover:text-shopee-orange dark:hover:text-shopee-orange'
              ]"
            >
              <span>Hỗ trợ</span>
              <span 
                class="absolute bottom-1.5 left-4 right-4 h-0.5 bg-shopee-orange rounded-full transform transition-transform duration-300"
                :class="route.path === '/ho-tro' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'"
              ></span>
            </NuxtLink>
          </div>

        </div>

        <!-- RIGHT REGION: Main CTA Button -->
        <div class="flex items-center gap-3">
          
          <!-- Primary Pulsing Glowing CTA Button -->
          <a
            :href="mainAppURL"
            class="px-5 py-2.5 bg-shopee-orange hover:bg-shopee-orange-hover text-white font-bold text-xs tracking-wide uppercase rounded-full transition-premium active:scale-95 shadow-md shadow-orange-500/20 glow-orange-button flex items-center gap-1.5 select-none"
          >
            <span>Bắt đầu ngay</span>
            <svg class="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

        </div>

      </div>
    </div>
  </header>
  <!-- Spacer to prevent content overlapping due to fixed header -->
  <div class="h-20 w-full pointer-events-none"></div>

  <!-- Mobile Bottom Navigation Bar (Fixed at Bottom for Mobile View) -->
  <div class="fixed bottom-0 left-0 right-0 z-[100] h-[68px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800/80 flex justify-around items-center px-2 md:hidden pb-safe shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.06)] select-none">
    
    <!-- Tab 1: Trang chủ -->
    <NuxtLink 
      to="/" 
      class="flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors active:scale-95 duration-200 cursor-pointer"
      :class="[
        route.path === '/'
          ? 'text-shopee-orange font-extrabold'
          : 'text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange'
      ]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" :stroke-width="route.path === '/' ? '2.2' : '2'">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span class="text-[10px] tracking-tight">Trang chủ</span>
    </NuxtLink>

    <!-- Tab 2: Hướng dẫn -->
    <NuxtLink 
      to="/huong-dan" 
      class="flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors active:scale-95 duration-200 cursor-pointer"
      :class="[
        route.path === '/huong-dan'
          ? 'text-shopee-orange font-extrabold'
          : 'text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange'
      ]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" :stroke-width="route.path === '/huong-dan' ? '2.2' : '2'">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
      <span class="text-[10px] tracking-tight">Hướng dẫn</span>
    </NuxtLink>

    <!-- Tab 3: Hỗ trợ -->
    <NuxtLink 
      to="/ho-tro" 
      class="flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors active:scale-95 duration-200 cursor-pointer"
      :class="[
        route.path === '/ho-tro'
          ? 'text-shopee-orange font-extrabold'
          : 'text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange'
      ]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" :stroke-width="route.path === '/ho-tro' ? '2.2' : '2'">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <span class="text-[10px] tracking-tight">Hỗ trợ</span>
    </NuxtLink>

    <!-- Tab 4: Bắt đầu ngay (Main App redirect) -->
    <a 
      :href="mainAppURL" 
      class="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors active:scale-95 duration-200 cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5 text-shopee-orange animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
      <span class="text-[10px] font-bold text-shopee-orange">Bắt đầu ngay</span>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const config = useRuntimeConfig();
const mainAppURL = config.public.mainAppURL || "#";

const isScrolled = ref(false);
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (typeof window !== "undefined") {
        isScrolled.value = window.scrollY > 40;
      }
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<script>
export default {
  name: "ShopeeHeader"
}
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
