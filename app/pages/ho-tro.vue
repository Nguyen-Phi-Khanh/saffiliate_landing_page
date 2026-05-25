<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 animate-fade-in">
    <!-- Page Title & Header -->
    <div class="mt-6 text-center max-w-xl mx-auto select-none">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-shopee-orange font-black text-[10px] tracking-wider uppercase mb-3">
        Liên hệ với chúng tôi
      </div>
      <h1 class="text-[30px] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
        Trung Tâm <span class="text-shopee-orange">Hỗ Trợ</span> <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent underline decoration-orange-500/30 decoration-wavy decoration-2">Saffi</span>
      </h1>
      <p class="text-[14px] text-slate-500 dark:text-slate-400 mt-2.5 font-bold leading-relaxed">
        Chúng tôi ở đây để hỗ trợ bạn giải quyết mọi thắc mắc và vấn đề phát sinh trong quá trình mua sắm nhận hoàn tiền.
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
          id="link-support-zalo"
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
          id="link-support-telegram"
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
          <span class="text-[9.5px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Gửi thư điện tử chính thức</span>
          <div class="flex items-center gap-3 select-all">
            <div class="h-9 w-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-xs font-black text-slate-800 dark:text-white leading-none">getsaffi@gmail.com</span>
              <span class="text-[9px] text-slate-400 dark:text-slate-500 mt-1 font-semibold">Đối tác & Hợp tác doanh nghiệp</span>
            </div>
          </div>
        </div>

        <!-- Premium Redirect Card (Von Restorff CTA Focus) -->
        <div class="rounded-3xl border border-orange-500/10 bg-orange-500/[0.02] p-6 shadow-xl flex flex-col gap-4 text-center mt-2 relative overflow-hidden select-none">
          <div class="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-shopee-orange/5 blur-xl pointer-events-none"></div>
          <h4 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Đã giải quyết xong thắc mắc?</h4>
          <p class="text-[10px] text-slate-400 dark:text-slate-500 font-semibold leading-relaxed">
            Click bắt đầu để truy cập ứng dụng <span class="bg-orange-500/10 dark:bg-orange-500/20 text-shopee-orange px-1.5 py-0.5 rounded-md border border-orange-500/20 font-bold inline-block leading-none mx-0.5">Saffi</span> và nhận hoàn tiền hoa hồng ngay bây giờ.
          </p>
          <a
            :href="mainAppURL"
            id="btn-support-start-now"
            class="w-full bg-shopee-orange text-white hover:bg-shopee-orange-hover hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl py-3 font-black text-xs tracking-wider uppercase shadow-lg shadow-orange-500/15 cursor-pointer flex items-center justify-center gap-1.5 select-none"
          >
            <span>Bắt đầu ngay</span>
            <svg class="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
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
              id="input-support-subject"
              class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all cursor-pointer"
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
              id="input-support-phone"
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
              id="input-support-message"
              placeholder="Hãy miêu tả chi tiết vấn đề bạn đang gặp phải (Ví dụ: Yêu cầu đối soát đơn hàng mã SP-XXXX chưa nhận hoa hồng...)"
              class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all font-semibold resize-none"
            ></textarea>
          </div>

          <!-- Alert success -->
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform -translate-y-2 opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
          >
            <div v-if="successMsg" class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2055/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ successMsg }}</span>
            </div>
          </transition>

          <!-- Submit Button -->
          <button
            type="submit"
            id="btn-support-submit"
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

    <!-- FAQ Accordion section relocated from guide page -->
    <div class="max-w-3xl mx-auto mt-20 mb-8 select-none">
      <h2 class="text-center text-[22px] font-black text-slate-900 dark:text-white uppercase tracking-tight select-none">
        Câu Hỏi Thường Gặp <span class="text-shopee-orange">(FAQ)</span>
      </h2>
      <p class="text-center text-slate-400 dark:text-slate-500 text-[11.5px] mt-1 font-bold select-none">Giải đáp mọi thắc mắc của bạn về cơ chế hoàn tiền tự động</p>

      <!-- Accordion Items -->
      <div class="mt-8 flex flex-col gap-3.5">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 overflow-hidden shadow-sm"
        >
          <!-- Accordion Trigger Button -->
          <button
            @click="toggleFAQ(index)"
            type="button"
            class="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-300 cursor-pointer select-none"
          >
            <span>{{ faq.question }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4.5 w-4.5 text-slate-400 dark:text-slate-500 transition-transform duration-300 shrink-0"
              :class="{ 'rotate-180 text-shopee-orange': openFAQ === index }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Accordion Content Height Truncation Panel -->
          <div
            class="transition-all duration-300 ease-in-out overflow-hidden"
            :style="{ maxHeight: openFAQ === index ? '200px' : '0px' }"
          >
            <div class="p-5 pt-0 border-t border-slate-50 dark:border-slate-850 text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold" v-html="faq.answer">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

const config = useRuntimeConfig();
const mainAppURL = config.public.mainAppURL || "#";

useSeoMeta({
  title: "Trung tâm hỗ trợ khách hàng - Saffi",
  ogTitle: "Trung tâm hỗ trợ khách hàng - Saffi",
  description: "Liên hệ trực tiếp với Saffi Team để nhận giải đáp thắc mắc và hỗ trợ kỹ thuật nhanh chóng.",
  ogDescription: "Liên hệ trực tiếp với Saffi Team để nhận giải đáp thắc mắc và hỗ trợ kỹ thuật nhanh chóng.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const subject = ref("link");
const phone = ref("");
const message = ref("");
const isSubmitting = ref(false);
const successMsg = ref("");

const openFAQ = ref(null);
const toggleFAQ = (idx) => {
  openFAQ.value = openFAQ.value === idx ? null : idx;
};

const faqs = [
  {
    question: "Hoàn tiền hoạt động thế nào?",
    answer: "<span class='text-shopee-orange font-bold'>Saffi</span> liên kết trực tiếp với chương trình Shopee Affiliate (Tiếp thị liên kết). Khi bạn mua hàng thông qua link chuyển đổi của chúng tôi, Shopee sẽ chi trả tiền hoa hồng cho <span class='text-shopee-orange font-bold'>Saffi</span>. Chúng tôi trích xuất phần lớn tiền hoa hồng này (lên tới 90%) để trực tiếp hoàn trả vào tài khoản ATM của bạn.",
  },
  {
    question: "Sau bao lâu thì nhận được hoa hồng sau khi đặt mua sản phẩm?",
    answer: "Hệ thống cập nhật hoa hồng 'Chờ duyệt' trong khoảng 5 - 15 phút kể từ lúc bạn thanh toán đặt hàng thành công trên Shopee. Tiền hoàn chính thức khả dụng để rút sau khi đơn hàng được đối soát thành công (khách hàng không bấm trả hàng/hoàn tiền).",
  },
  {
    question: "Tại sao đơn hàng của tôi bị hủy hoặc không nhận được hoàn tiền?",
    answer: "Đơn hàng có thể không được ghi nhận nếu bạn hủy đơn, trả hàng, hoặc sử dụng các trình duyệt bật chặn quảng cáo AdBlock làm mất cookie đối soát của Shopee. Hãy đảm bảo click link chuyển đổi và thực hiện thanh toán đặt hàng ngay lập tức.",
  },
  {
    question: "Có giới hạn số tiền rút tối thiểu không?",
    answer: "Số tiền rút tối thiểu cho mỗi lần rút là 10.000đ. Hệ thống <span class='text-shopee-orange font-bold'>Saffi</span> cam kết hỗ trợ phê duyệt lệnh rút tự động chuyển tiền trực tiếp đến tài khoản ATM của bạn trong vòng chưa đầy 60 phút.",
  },
];

const handleSubmit = () => {
  if (!message.value) return;

  isSubmitting.value = true;
  successMsg.value = "";

  setTimeout(() => {
    isSubmitting.value = false;
    successMsg.value = "Yêu cầu hỗ trợ của bạn đã được gửi thành công! Kỹ thuật viên sẽ phản hồi bạn trong thời gian sớm nhất.";
    
    // Clear form
    message.value = "";
    phone.value = "";

    setTimeout(() => {
      successMsg.value = "";
    }, 4500);
  }, 1200);
};
</script>

<style scoped>
.transition-premium {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
