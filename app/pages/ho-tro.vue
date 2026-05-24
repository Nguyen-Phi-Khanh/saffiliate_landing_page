<template>
  <div class="w-full animate-fade-in">
    <!-- Page Title & Header -->
    <div class="mt-6 text-center max-w-xl mx-auto">
      <h1 class="text-[30px] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
        Trung Tâm <span class="text-shopee-orange">Hỗ Trợ</span>
      </h1>
      <p class="text-[14px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium leading-relaxed">
        Chúng tôi ở đây để hỗ trợ bạn giải quyết mọi vấn đề phát sinh trong quá trình đối soát hoàn tiền và rút ví.
      </p>
    </div>

    <!-- MAIN TWO SECTION COLUMNS -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
      
      <!-- COLUMN Left: Direct Contact Channels (Span 5) -->
      <div class="lg:col-span-5 flex flex-col gap-5">
        <h3 class="text-xs font-black tracking-widest text-slate-800 dark:text-slate-200 uppercase select-none pb-2">
          Kênh Liên Hệ Nhanh
        </h3>

        <!-- Zalo Box -->
        <a
          href="https://zalo.me"
          target="_blank"
          class="rounded-3xl border border-blue-500/10 bg-blue-500/[0.02] dark:bg-slate-900/40 p-5 shadow-lg shadow-slate-900/[0.01] hover:border-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-between gap-4 group"
        >
          <div class="flex items-start gap-4">
            <!-- Icon Zalo representation -->
            <div class="h-11 w-11 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 font-extrabold text-xs select-none">
              Zalo
            </div>
            <div>
              <h4 class="text-xs font-black text-slate-800 dark:text-slate-100 group-hover:text-blue-500 transition-colors">Hỗ trợ Zalo OA</h4>
              <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-semibold leading-relaxed">
                Nhắn tin trực tiếp với tổng đài viên Chăm sóc khách hàng.
              </p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-300 dark:text-slate-700 group-hover:text-blue-500 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <!-- Telegram Box -->
        <a
          href="https://t.me"
          target="_blank"
          class="rounded-3xl border border-sky-500/10 bg-sky-500/[0.02] dark:bg-slate-900/40 p-5 shadow-lg shadow-slate-900/[0.01] hover:border-sky-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-between gap-4 group"
        >
          <div class="flex items-start gap-4">
            <!-- Icon Telegram representation -->
            <div class="h-11 w-11 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0 font-extrabold text-xs select-none">
              Tele
            </div>
            <div>
              <h4 class="text-xs font-black text-slate-800 dark:text-slate-100 group-hover:text-sky-500 transition-colors">Telegram Bot 24/7</h4>
              <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-semibold leading-relaxed">
                Tra cứu tự động tiến độ đơn hàng và đối soát hoa hồng tức thì.
              </p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-300 dark:text-slate-700 group-hover:text-sky-500 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <!-- Email Box -->
        <div class="rounded-3xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-5 shadow-lg shadow-slate-900/[0.01] flex flex-col gap-3">
          <span class="text-[9.5px] font-extrabold text-slate-400 dark:text-slate-550 uppercase tracking-wider block">Gửi thư điện tử chính thức</span>
          <div class="flex items-center gap-3 select-all">
            <div class="h-9 w-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-xs font-black text-slate-800 dark:text-white leading-none">getsaffi@gmail.com</span>
              <span class="text-[9px] text-slate-400 dark:text-slate-550 mt-1 font-semibold">Đối tác & Hợp tác doanh nghiệp</span>
            </div>
          </div>
        </div>
      </div>

      <!-- COLUMN Right: Direct Support Message Form (Span 7) -->
      <div class="lg:col-span-7 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-xl shadow-slate-900/[0.02] dark:shadow-slate-950/20">
        <h3 class="text-xs font-black tracking-widest text-slate-800 dark:text-slate-200 uppercase select-none pb-4 border-b border-slate-100 dark:border-slate-800/60">
          Gửi Yêu Cầu Hỗ Trợ Trực Tiếp
        </h3>

        <form @submit.prevent="handleSubmit" class="mt-6 flex flex-col gap-5">
          <!-- Subject Select -->
          <div class="flex flex-col gap-2">
            <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Chủ đề cần hỗ trợ</label>
            <select
              v-model="subject"
              class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all"
            >
              <option value="link">Lỗi quy đổi link hoàn tiền</option>
              <option value="checkout">Lỗi đối soát hoa hồng đơn hàng</option>
              <option value="withdraw">Lỗi rút tiền ví tài chính</option>
              <option value="feedback">Góp ý nâng cấp dịch vụ</option>
              <option value="biz">Hợp tác kinh doanh</option>
            </select>
          </div>

          <!-- Phone (Optional) -->
          <div class="flex flex-col gap-2">
            <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Số điện thoại liên lạc</label>
            <input
              v-model="phone"
              type="tel"
              placeholder="Nhập số điện thoại để chúng tôi gọi lại..."
              class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all font-semibold"
            />
          </div>

          <!-- Message Description -->
          <div class="flex flex-col gap-2">
            <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Nội dung chi tiết</label>
            <textarea
              v-model="message"
              required
              rows="5"
              placeholder="Hãy miêu tả chi tiết vấn đề bạn đang gặp phải (Ví dụ: Đơn hàng SP20260522-8374 mua lúc 14:30 chưa được ghi nhận tạm duyệt...)"
              class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all font-semibold resize-none"
            ></textarea>
          </div>

          <!-- Alert updated -->
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform -translate-y-2 opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
          >
            <div v-if="successMsg" class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ successMsg }}</span>
            </div>
          </transition>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting || !message"
            class="w-full bg-shopee-orange text-white hover:bg-shopee-orange/95 hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl py-3.5 font-bold text-xs shadow-lg shadow-orange-500/15 cursor-pointer disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 select-none"
          >
            <svg v-if="isSubmitting" class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ isSubmitting ? 'Đang gửi thông tin...' : 'Gửi Yêu Cầu Hỗ Trợ' }}</span>
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

useSeoMeta({
  title: "Trung tâm hỗ trợ - Saffi",
  ogTitle: "Trung tâm hỗ trợ - Saffi",
  description: "Liên hệ trực tiếp với Saffi Team để được giải đáp và hỗ trợ kỹ thuật nhanh chóng.",
  ogDescription: "Liên hệ trực tiếp với Saffi Team để được giải đáp và hỗ trợ kỹ thuật nhanh chóng.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const subject = ref("link");
const phone = ref("");
const message = ref("");
const isSubmitting = ref(false);
const successMsg = ref("");

const handleSubmit = () => {
  if (!message.value) return;

  isSubmitting.value = true;
  successMsg.value = "";

  setTimeout(() => {
    isSubmitting.value = false;
    successMsg.value = "Yêu cầu hỗ trợ của bạn đã được gửi đi! Kỹ thuật viên sẽ liên lạc với bạn sớm nhất.";
    
    // Clear textarea
    message.value = "";
    phone.value = "";

    setTimeout(() => {
      successMsg.value = "";
    }, 4500);
  }, 1200);
};
</script>
