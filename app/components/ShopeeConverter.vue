<template>
  <div class="w-full animate-fade-in-up">
    <!-- Main Converter Card -->
    <div class="glass-panel rounded-3xl p-6 md:p-8 shadow-2xl glow-orange">
      <!-- Title Area inside Card -->
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-400">
          Chuyển Đổi Link <span class="text-shopee-orange">Shopee</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-sm mt-2 font-medium transition-colors duration-400">
          Dán link sản phẩm Shopee của bạn vào bên dưới để mua sắm và nhận hoàn tiền.
        </p>
      </div>

      <!-- Input Form -->
      <div class="space-y-5">
        <div class="relative">
          <!-- Input Field -->
          <input
            v-model="rawUrl"
            type="text"
            placeholder="Dán link Shopee vào đây... (Ví dụ: https://shopee.vn/product/...)"
            class="w-full bg-white dark:bg-slate-950/85 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl py-4 pl-12 pr-12 text-sm font-medium transition-all duration-300 input-focus-glow"
            :class="{
              'border-shopee-orange/50': isValidating && isUrlValid,
              'border-yellow-600/50': isValidating && !isUrlValid && rawUrl.length > 0
            }"
            @input="checkUrlInput"
            @keyup.enter="handleConvert"
            :disabled="isLoading"
          />

          <!-- Input Left Icon (Link SVG) -->
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </span>

          <!-- Clear Button -->
          <button
            v-if="rawUrl"
            @click="handleClear"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-white transition-colors duration-200"
            :disabled="isLoading"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Inline Validation Warning -->
        <transition name="slide-fade">
          <div v-if="isValidating && !isUrlValid && rawUrl.length > 0" class="flex items-center gap-2 text-yellow-600 dark:text-yellow-500 text-xs font-semibold px-2">
            <!-- Warning Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Không nhận dạng được định dạng link. Vui lòng kiểm tra lại.</span>
          </div>
        </transition>

        <!-- Convert Button -->
        <button
          @click="handleConvert"
          :disabled="isLoading || !rawUrl"
          class="w-full transition-premium flex items-center justify-center gap-2 rounded-2xl py-4 font-sans text-sm font-bold uppercase tracking-wider select-none"
          :class="[
            isLoading || !rawUrl
              ? 'bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 cursor-not-allowed shadow-none'
              : 'bg-shopee-orange hover:bg-shopee-orange-hover border border-shopee-orange text-white active:scale-98 cursor-pointer glow-orange-button'
          ]"
        >
          <!-- Loading Spinner -->
          <span v-if="isLoading" class="animate-spin h-5 w-5 border-2 border-white/20 border-t-white rounded-full"></span>
          
          <!-- Normal Icon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          
          <span>{{ isLoading ? 'Đang chuyển đổi...' : 'Lấy link hoàn tiền' }}</span>
        </button>
      </div>

      <!-- Error Message Box -->
      <transition name="slide-fade">
        <div v-if="error" class="mt-6 flex items-start gap-3 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 p-4 text-sm text-red-700 dark:text-red-300 animate-fade-in-up transition-colors duration-400">
          <!-- Error Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 text-red-500 dark:text-red-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 class="font-bold text-red-800 dark:text-red-200 transition-colors duration-400">Đã xảy ra lỗi</h4>
            <p class="mt-1 text-xs text-red-700/90 dark:text-red-300/90 leading-relaxed transition-colors duration-400">{{ error }}</p>
          </div>
        </div>
      </transition>
    </div>

    <!-- Skeleton Loading Screen -->
    <transition name="fade">
      <div v-if="isLoading" class="mt-6 glass-panel rounded-3xl p-6 shadow-xl space-y-4">
        <div class="flex items-center gap-3">
          <div class="shimmer-bg h-10 w-10 rounded-xl"></div>
          <div class="space-y-2 flex-1">
            <div class="shimmer-bg h-4 w-1/3 rounded-md"></div>
            <div class="shimmer-bg h-3 w-1/4 rounded-md"></div>
          </div>
        </div>
        <div class="space-y-2 mt-4">
          <div class="shimmer-bg h-8 w-full rounded-xl"></div>
          <div class="shimmer-bg h-8 w-2/3 rounded-xl"></div>
        </div>
      </div>
    </transition>

    <!-- Converted Result Card Component -->
    <ShopeeResult v-if="resultLink && !isLoading" :link="resultLink" :product-info="productInfo" @reset="handleClear" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useShopeeApi } from "@/composables/useShopeeApi";

const rawUrl = ref("");
const isValidating = ref(false);

const { resultLink, productInfo, isLoading, error, convertUrl, clearStates, validateShopeeUrl } = useShopeeApi();

// Check link validity as user types
const isUrlValid = computed(() => {
  return validateShopeeUrl(rawUrl.value);
});

const checkUrlInput = () => {
  isValidating.value = true;
};

const handleConvert = async () => {
  if (!rawUrl.value || isLoading.value) return;
  isValidating.value = true;
  await convertUrl(rawUrl.value);
};

const handleClear = () => {
  rawUrl.value = "";
  isValidating.value = false;
  clearStates();
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text-2xs {
  font-size: 0.65rem;
}
.text-2xs {
  font-size: 0.65rem;
}
.text-3xs {
  font-size: 0.6rem;
}
</style>
