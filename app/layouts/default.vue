<template>
  <div class="flex flex-col min-h-screen bg-transparent relative overflow-hidden transition-colors duration-400">
    <!-- Premium background decoration glow rings (Absolute Ban on purple, using amber/orange/slate only) -->
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-shopee-orange/5 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none"></div>

    <!-- Header -->
    <ShopeeHeader />

    <!-- Main Content Area -->
    <main class="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10 z-10 relative">
      <!-- Dynamic Breadcrumb Navigation path -->
      <Breadcrumb />
      
      <!-- Inner page contents container -->
      <div class="flex-1 flex flex-col w-full">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <ShopeeFooter />
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

<style scoped>
/* Page container transitions */
</style>
