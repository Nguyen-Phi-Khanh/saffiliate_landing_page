<template>
  <header class="sticky top-0 z-50 w-full px-4 py-3 md:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="glass-panel transition-premium flex items-center justify-between rounded-2xl px-6 py-3 shadow-lg">
        <!-- Logo and Branding -->
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-shopee-orange shadow-md glow-orange shrink-0">
            <!-- Sleek Shopping Bag SVG Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-sans text-xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-2xl transition-colors duration-400">
                S<span class="text-shopee-orange">Affiliate</span>
              </span>
              <span class="hidden rounded-full bg-shopee-orange/10 px-2.5 py-0.5 text-2xs font-semibold tracking-wider text-shopee-orange uppercase md:inline-block border border-shopee-orange/20 transition-colors duration-400">
                Nuxt 3 PRO
              </span>
            </div>
            <p class="hidden text-3xs text-slate-500 dark:text-slate-400 md:block mt-0.5 font-medium transition-colors duration-400">Shopee Product Link Converter</p>
          </div>
        </div>

        <!-- Navigation Status / Actions -->
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Backend Online Status Badge -->
          <div class="flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-400">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span class="hidden sm:inline font-medium">API Connected</span>
            <span class="inline sm:hidden font-medium">API</span>
          </div>

          <!-- Light/Dark Mode Switcher -->
          <button
            @click="toggleTheme"
            class="transition-premium flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer select-none active:scale-95 transition-colors duration-400"
            title="Chuyển đổi giao diện"
            type="button"
          >
            <!-- Sun icon when dark mode is active -->
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <!-- Moon icon when light mode is active -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- External link icon -->
          <a
            href="https://shopee.vn"
            target="_blank"
            class="transition-premium flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-shopee-orange dark:hover:bg-shopee-orange text-slate-600 dark:text-slate-300 hover:text-white border border-slate-200 dark:border-slate-700 hover:border-shopee-orange shadow-sm transition-colors duration-400"
            title="Đi tới Shopee"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useTheme } from "@/composables/useTheme";

const { isDark, toggleTheme } = useTheme();
</script>

<style scoped>
.text-2xs {
  font-size: 0.65rem;
}
.text-3xs {
  font-size: 0.6rem;
}
</style>
