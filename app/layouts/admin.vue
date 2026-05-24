<template>
  <div class="flex h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden relative">
    <!-- Premium background decoration -->
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <!-- Sidebar -->
    <aside class="w-64 h-full border-r border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl flex flex-col z-20">
      <div class="h-16 flex items-center px-6 border-b border-slate-200/50 dark:border-slate-800/50 shrink-0">
        <NuxtLink to="/admin/orders" class="flex items-center gap-2 cursor-pointer">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-shopee-orange to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="font-black text-[15px] leading-tight">Saffi</span>
            <span class="text-[9px] font-bold text-slate-500 tracking-widest uppercase">Workspace</span>
          </div>
        </NuxtLink>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto scrollbar-hide">
        <NuxtLink 
          to="/admin"
          class="flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-bold transition-all duration-300"
          :class="[
            $route.path === '/admin' || $route.path === '/admin/' 
              ? 'bg-shopee-orange text-white shadow-md shadow-orange-500/20' 
              : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-800 dark:hover:text-slate-200'
          ]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Tổng quan
        </NuxtLink>

        <NuxtLink 
          to="/admin/orders"
          class="flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-bold transition-all duration-300"
          :class="[
            $route.path.includes('/admin/orders') 
              ? 'bg-shopee-orange text-white shadow-md shadow-orange-500/20' 
              : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-800 dark:hover:text-slate-200'
          ]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Đơn hàng (Orders)
        </NuxtLink>
        
        <div class="px-4 py-3 rounded-2xl text-[13px] font-bold text-slate-400 dark:text-slate-600 cursor-not-allowed flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Người dùng (Users)
        </div>
      </nav>
      
      <div class="p-4 shrink-0 border-t border-slate-200/50 dark:border-slate-800/50">
        <NuxtLink to="/" class="flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          Về trang User
        </NuxtLink>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col h-full overflow-hidden relative z-10">
      <header class="h-16 flex items-center justify-between px-8 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl shrink-0">
        <h1 class="text-[17px] font-black text-slate-800 dark:text-slate-100">Hệ thống quản trị nội bộ</h1>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold text-xs cursor-pointer border border-slate-300 dark:border-slate-700">
            A
          </div>
        </div>
      </header>
      
      <div class="flex-1 overflow-y-auto scrollbar-hide p-8">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useTheme } from "@/composables/useTheme";

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>
