<template>
  <div class="w-full animate-fade-in">
    <!-- Page Title & Header -->
    <div class="mt-6 text-center max-w-2xl mx-auto">
      <h1 class="text-[30px] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
        Hướng Dẫn <span class="text-shopee-orange">Mua Sắm</span> Hoàn Tiền
      </h1>
      <p class="text-[14px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium leading-relaxed">
        Chỉ với 4 bước đơn giản, bạn sẽ tiết kiệm được tới 20% chi phí cho mỗi đơn hàng mua sắm trên Shopee.
      </p>
    </div>

    <!-- 4-Step Visual Timeline / Narrative Layout -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 relative">
      <!-- Background Connecting Line for Desktop -->
      <div class="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-100 dark:bg-slate-800/80 -translate-y-12 z-0"></div>

      <!-- Step Cards -->
      <div
        v-for="(step, idx) in steps"
        :key="idx"
        class="rounded-3xl border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 p-6 shadow-lg shadow-slate-900/[0.01] dark:shadow-slate-950/10 hover:border-slate-200 dark:hover:border-slate-700 hover:scale-[1.02] transition-all duration-300 z-10 group"
      >
        <!-- Step Icon & Number -->
        <div class="flex items-center justify-between gap-3">
          <div class="h-12 w-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 font-black text-lg group-hover:scale-110 transition-transform duration-300">
            {{ idx + 1 }}
          </div>
          <!-- Tiny SVG Icon representation -->
          <div class="text-slate-300 dark:text-slate-700 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" :d="step.icon" />
            </svg>
          </div>
        </div>

        <h3 class="text-xs font-black text-slate-800 dark:text-slate-100 mt-5 uppercase tracking-wider">{{ step.title }}</h3>
        <p class="text-[11.5px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-semibold">{{ step.desc }}</p>
      </div>
    </div>

    <!-- Accordion FAQ section -->
    <div class="max-w-3xl mx-auto mt-16">
      <h2 class="text-center text-[22px] font-black text-slate-900 dark:text-white uppercase tracking-tight">
        Câu Hỏi Thường Gặp <span class="text-shopee-orange">(FAQ)</span>
      </h2>
      <p class="text-center text-slate-400 dark:text-slate-500 text-[11.5px] mt-1 font-bold">Giải đáp mọi thắc mắc của bạn về cơ chế hoàn tiền tự động</p>

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
            class="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] hover:bg-slate-50 dark:hover:bg-slate-85/40 transition-colors duration-300 cursor-pointer select-none"
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
            class="transition-all duration-300 ease-in-out"
            :style="{ maxHeight: openFAQ === index ? '200px' : '0px' }"
          >
            <div class="p-5 pt-0 border-t border-slate-50 dark:border-slate-800/50 text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

useSeoMeta({
  title: "Hướng dẫn sử dụng - Saffi",
  ogTitle: "Hướng dẫn sử dụng - Saffi",
  description: "Cẩm nang hướng dẫn các bước mua hàng Shopee để được hoàn tiền tự động 100% tại Saffi.",
  ogDescription: "Cẩm nang hướng dẫn các bước mua hàng Shopee để được hoàn tiền tự động 100% tại Saffi.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const openFAQ = ref(null);

const toggleFAQ = (idx) => {
  openFAQ.value = openFAQ.value === idx ? null : idx;
};

const steps = [
  {
    title: "1. Sao chép link",
    desc: "Sao chép đường dẫn (link) sản phẩm bạn muốn mua trên ứng dụng Shopee (hoặc website Shopee).",
    icon: "M8.684 10.742l5.316-2.658m0 0a3 3 0 100-3.368L8.684 7.376m0 2.366a3 3 0 100 4.516l5.316 2.658m0 0a3 3 0 103-3.368M12 8a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "2. Chuyển đổi link",
    desc: "Truy cập Saffi, dán link sản phẩm vừa copy vào thanh công cụ để tự động quy đổi sang link hoàn tiền.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 6.571M21.11 3v5h-5.06",
  },
  {
    title: "3. Tiến hành mua hàng",
    desc: "Bấm vào nút mua hàng để chuyển sang ứng dụng Shopee, thêm sản phẩm vào giỏ và đặt hàng như bình thường.",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
  {
    title: "4. Nhận hoàn tiền",
    desc: "Sau 5 - 15 phút đặt hàng thành công, hoa hồng hoàn tiền tạm duyệt sẽ tự động cập nhật vào ví tài chính của bạn.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const faqs = [
  {
    question: "Hoàn tiền hoạt động thế nào?",
    answer: "Saffi liên kết trực tiếp với Shopee Affiliate (Tiếp thị liên kết). Khi bạn mua hàng thông qua link chuyển đổi của chúng tôi, Shopee sẽ chi trả tiền hoa hồng tiếp thị cho Saffi. Chúng tôi trích xuất phần lớn tiền hoa hồng này (lên tới 90%) để trực tiếp hoàn lại vào tài khoản ví của bạn.",
  },
  {
    question: "Sau bao lâu thì nhận được hoa hồng sau khi mua hàng?",
    answer: "Hệ thống sẽ cập nhật tự động hoa hồng 'Chờ duyệt' trong 7-14 ngày kể từ lúc bạn thanh toán hoặc đặt hàng thành công trên Shopee. Tiền hoàn chính thức khả dụng để rút sau khi đơn hàng được đối soát thành công (khách hàng không bấm trả hàng hoàn tiền).",
  },
  {
    question: "Tại sao đơn hàng của tôi bị hủy hoặc không nhận được hoàn tiền?",
    answer: "Đơn hàng có thể không được ghi nhận hoàn tiền nếu bạn trả hàng hoàn tiền, hủy đơn hàng, hoặc sử dụng các trình duyệt bật chặn quảng cáo AdBlock làm mất cookie đối soát của Shopee. Hãy đảm bảo click link chuyển đổi và đặt hàng ngay lập tức trên app Shopee sạch.",
  },
  {
    question: "Có giới hạn số tiền rút tối thiểu không?",
    answer: "Số tiền tối thiểu cho mỗi lần thực hiện lệnh rút tiền là 10,000đ. Hệ thống của chúng tôi cam kết phê duyệt lệnh rút tự động và chuyển tiền đến tài khoản MB Bank, Vietcombank, Techcombank,... trong vòng chưa đầy 60 phút.",
  },
];
</script>
