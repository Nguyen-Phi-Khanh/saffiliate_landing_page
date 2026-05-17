<template>
  <footer class="w-full mt-auto px-4 py-8 border-t border-slate-200/60 dark:border-slate-900/60 bg-slate-50/60 dark:bg-slate-950/40 transition-colors duration-400">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
        <!-- Brand Info -->
        <div class="flex flex-col items-center gap-1 md:items-start">
          <span class="font-sans text-sm font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-400">
            S<span class="text-shopee-orange">Affiliate</span> Converter
          </span>
          <p class="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-400">© 2026 SAffiliate. Tất cả quyền được bảo lưu.</p>
        </div>

        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap justify-center gap-3">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 px-3 py-1 text-2xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 transition-colors duration-400">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Nuxt 3.x
          </span>
          <span class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 px-3 py-1 text-2xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 transition-colors duration-400">
            <span class="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
            Tailwind v4
          </span>
          <span class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 px-3 py-1 text-2xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 transition-colors duration-400">
            <span class="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            Elysia API
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer logic if any
</script>

<style scoped>
.text-2xs {
  font-size: 0.65rem;
}
</style>
