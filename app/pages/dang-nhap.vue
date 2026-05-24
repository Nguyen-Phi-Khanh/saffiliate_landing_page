<template>
  <div class="relative min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 overflow-x-hidden transition-colors duration-400 bg-[#F8FAFC] dark:bg-[#090D16]">
    
    <!-- Dotted grid background pattern -->
    <div class="absolute inset-0 dotted-grid pointer-events-none z-0"></div>

    <!-- Radial decorative glow (Slate / Orange) -->
    <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-shopee-orange/5 dark:bg-shopee-orange/8 blur-[120px] pointer-events-none z-0"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/5 dark:bg-amber-500/8 blur-[120px] pointer-events-none z-0"></div>



    <!-- Main Container -->
    <div class="w-full max-w-lg flex flex-col items-center z-10 relative animate-fade-in-up">
      
      <!-- Logo and Branding -->
      <div class="flex flex-col items-center text-center mb-8">
        <!-- Brand Logo Icon -->
        <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-shopee-orange shadow-lg glow-orange shrink-0 mb-4 transition-transform duration-500 hover:rotate-12">
          <!-- Saffi Icon: Orange Rounded Box, Circle with $, chase arrows -->
          <svg class="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <path d="M16 8a6 6 0 0 0-8 0" />
            <path d="M8 16a6 6 0 0 0 8 0" />
            <path d="M12 6V4" />
            <path d="M12 20v-2" />
          </svg>
        </div>
        
        <!-- Logo Text -->
        <h1 class="font-sans text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl transition-colors duration-400">
          S<span class="text-shopee-orange">affiliate</span>
        </h1>
        <p class="text-2xs tracking-widest text-slate-500 dark:text-slate-400 uppercase font-bold mt-0.5 transition-colors duration-400">
          Smart Shopping
        </p>

        <!-- Dynamic Slogan -->
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-200 mt-6 tracking-tight">
          Mua sắm, <span class="bg-gradient-to-r from-shopee-orange to-amber-500 bg-clip-text text-transparent">Hoàn Tiền Thật</span>
        </h2>
        <p class="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 mt-2">
          Tiết kiệm thông minh với mỗi đơn hàng mua sắm online
        </p>
      </div>

      <!-- Core Value Badges (Horizontal marquee scrolling left-to-right) -->
      <div class="w-full max-w-md overflow-hidden mb-8 relative">
        <!-- Fade gradient overlays -->
        <div class="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F8FAFC] dark:from-[#090D16] to-transparent z-10 pointer-events-none transition-colors duration-400"></div>
        <div class="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F8FAFC] dark:from-[#090D16] to-transparent z-10 pointer-events-none transition-colors duration-400"></div>
        
        <div class="flex overflow-hidden select-none py-1 group">
          <!-- Marquee Track 1 -->
          <div class="flex gap-3 shrink-0 pr-3 animate-marquee-left">
            <!-- Badge 1 -->
            <div class="flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Hoàn tiền cực nhanh</span>
            </div>

            <!-- Badge 2 -->
            <div class="flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Mua sắm tiết kiệm</span>
            </div>

            <!-- Badge 3 -->
            <div class="flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Bảo mật tuyệt đối</span>
            </div>

            <!-- Badge 4 -->
            <div class="flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Tích điểm nhanh</span>
            </div>
          </div>

          <!-- Marquee Track 2 (Duplicated for seamless looping) -->
          <div class="flex gap-3 shrink-0 pr-3 animate-marquee-left" aria-hidden="true">
            <!-- Badge 1 -->
            <div class="flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Hoàn tiền cực nhanh</span>
            </div>

            <!-- Badge 2 -->
            <div class="flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Mua sắm tiết kiệm</span>
            </div>

            <!-- Badge 3 -->
            <div class="flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Bảo mật tuyệt đối</span>
            </div>

            <!-- Badge 4 -->
            <div class="flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Tích điểm nhanh</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Login Card -->
      <div class="w-full max-w-md rounded-3xl p-6 md:p-8 glass-panel border border-slate-200/60 dark:border-slate-800/80 shadow-xl bg-white/90 dark:bg-slate-900/90 transition-all duration-400">
        
        <!-- Error Alert (Professional UI) -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform -translate-y-2 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-2 opacity-0"
        >
          <div v-if="errorMessage" class="mb-5 flex items-start gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <div class="flex-1">
              <h4 class="font-bold text-red-800 dark:text-red-200 text-2xs uppercase tracking-wider">Đăng nhập thất bại</h4>
              <p class="text-xs mt-1 leading-relaxed opacity-95">{{ errorMessage }}</p>
            </div>
            <button @click="errorMessage = ''" class="text-red-500 hover:text-red-700 dark:hover:text-red-100 transition-colors p-0.5 rounded-lg hover:bg-red-500/10 cursor-pointer" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </Transition>

        <!-- Google Login Action Button -->
        <div class="mb-6">
          <button
            @click="handleGoogleLogin"
            :disabled="isLoggingIn"
            class="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-shopee-orange dark:hover:border-shopee-orange hover:shadow-md dark:hover:shadow-shopee-orange/5 active:scale-[0.98] transition-premium cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <!-- Google Logo SVG -->
            <svg class="h-6 w-6 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <span class="font-sans text-base font-semibold text-slate-700 dark:text-slate-200">
              {{ isLoggingIn ? "Đang kết nối..." : "Tiếp tục với Google" }}
            </span>
            <!-- Arrow Right Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5 text-slate-400 group-hover:text-shopee-orange group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <!-- Google Recommendation Notice -->
        <p class="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5 mb-6 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-slate-400/80 dark:text-slate-500/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Google là phương thức đăng nhập chính và được khuyến nghị.</span>
        </p>

        <!-- Terms and Conditions Agreement -->
        <p class="text-xs text-slate-400 dark:text-slate-500 text-center leading-relaxed border-b border-slate-200/50 dark:border-slate-800/50 pb-6 mb-6">
          Bằng việc tiếp tục, bạn đồng ý với 
          <a href="#" class="text-shopee-orange dark:text-orange-400 font-semibold hover:underline">Điều khoản & Chính sách</a> 
          của chúng tôi.
        </p>

        <!-- Social Connect Section -->
        <div class="flex flex-col items-center mb-6">
          <span class="text-2xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-4 bg-white dark:bg-[#1E293B] px-3 z-10">
            Kết nối với chúng tôi
          </span>
          <div class="flex items-center justify-center gap-4">
            
            <!-- Icon 1: Group -->
            <a href="#" class="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-blue-600 dark:text-blue-400 shadow-sm hover:shadow-md hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-105 active:scale-95 transition-premium" title="Facebook Group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>

            <!-- Icon 2: Megaphone -->
            <a href="#" class="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 text-orange-600 dark:text-orange-400 shadow-sm hover:shadow-md hover:bg-orange-100 dark:hover:bg-orange-900/40 hover:scale-105 active:scale-95 transition-premium" title="Telegram Channel">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </a>

            <!-- Icon 3: Email Support -->
            <a href="mailto:support@Saffi.com" class="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 shadow-sm hover:shadow-md hover:bg-red-100 dark:hover:bg-red-900/40 hover:scale-105 active:scale-95 transition-premium" title="Email Hỗ trợ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <!-- Icon 4: Website -->
            <a href="#" class="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 shadow-sm hover:shadow-md hover:bg-emerald-100 dark:hover:bg-emerald-900/40 hover:scale-105 active:scale-95 transition-premium" title="Trang chủ Saffi">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { authClient } from "~/utils/auth-client";

// Disable default layout (Nuxt 4 property)
definePageMeta({
  layout: false,
  alias: ["/login"]
});

// SEO Metadata for the login page
useSeoMeta({
  title: "Đăng nhập | Saffi - Mua hàng, Hoàn Tiền Thật",
  ogTitle: "Đăng nhập | Saffi - Mua hàng, Hoàn Tiền Thật",
  description: "Đăng nhập hệ thống Saffi để quy đổi liên kết Shopee nhận cashback chiết khấu cao.",
  ogDescription: "Đăng nhập hệ thống Saffi để quy đổi liên kết Shopee nhận cashback chiết khấu cao.",
  twitterCard: "summary",
});

const route = useRoute();
const errorMessage = ref("");

onMounted(() => {

  // Check for auth errors passed via callback URL params
  if (route.query.error) {
    if (route.query.error === "OAuthCallbackError" || route.query.error === "OAuthError") {
      errorMessage.value = "Không thể kết nối hoặc xác thực với tài khoản Google. Vui lòng thử lại.";
    } else {
      errorMessage.value = "Có lỗi xảy ra trong quá trình xác thực đăng nhập. Vui lòng thử lại.";
    }

    // Xóa tham số error khỏi URL để tránh hiển thị lại khi F5 (làm mới trang)
    const router = useRouter();
    router.replace({ query: { ...route.query, error: undefined } });
  }
});

const isLoggingIn = ref(false);

// Google login integration using better-auth client
const handleGoogleLogin = async () => {
  const config = useRuntimeConfig();
  if (isLoggingIn.value) return;
  errorMessage.value = "";
  isLoggingIn.value = true;

  // Luôn chuyển hướng người dùng về trang chủ sau khi đăng nhập thành công
  const safeRedirectPath = "/";

  // Create a timeout promise to reject after 5 seconds if backend is unresponsive
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("TIMEOUT")), 5000)
  );

  const loginPromise = authClient.signIn.social({
    provider: "google",
    callbackURL: typeof window !== 'undefined' ? window.location.origin + safeRedirectPath : config.public.appURL + safeRedirectPath
  });

  try {
    const res = await Promise.race([loginPromise, timeoutPromise]);
    
    // Check if better-auth returned an error response instead of throwing
    if (res && typeof res === "object" && "error" in res && res.error) {
      console.error("Better-Auth error response:", res.error);
      errorMessage.value = "Không thể kết nối với máy chủ đăng nhập. Vui lòng thử lại!";
      isLoggingIn.value = false;
    }
  } catch (error) {
    console.error("Lỗi đăng nhập Google:", error);
    if (error.message === "TIMEOUT") {
      errorMessage.value = "Máy chủ hiện tại không phản hồi, vui lòng thử lại sau.";
    } else {
      errorMessage.value = "Không thể kết nối với hệ thống đăng nhập. Vui lòng kiểm tra lại đường truyền mạng.";
    }
    isLoggingIn.value = false;
  }
};
</script>

<style scoped>
/* Hidden scrollbar styling for badges slider */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Custom premium transitions */
.transition-premium {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Custom grid dots using CSS background variables */
.dotted-grid {
  background-image: radial-gradient(rgba(148, 163, 184, 0.12) 1.5px, transparent 1.5px);
  background-size: 24px 24px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%);
}

.dark .dotted-grid {
  background-image: radial-gradient(rgba(71, 85, 105, 0.22) 1.5px, transparent 1.5px);
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .6;
  }
}

.text-2xs {
  font-size: 0.78rem;
}

.text-3xs {
  font-size: 0.68rem;
}

.animate-marquee-left {
  animation: scroll-left 12s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.group:hover .animate-marquee-left {
  animation-play-state: paused;
}
</style>
