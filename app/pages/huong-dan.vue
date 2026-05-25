<template>
  <div class="w-full relative overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 min-h-screen">
    
    <!-- Immersive Background Grids -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-8 relative z-10">
      
      <!-- Page Title & Header (WOW premium design) -->
      <div class="text-center max-w-3xl mx-auto select-none mb-16 animate-fade-in">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-shopee-orange border border-orange-500/20 dark:border-orange-500/30 font-black text-[10px] tracking-widest uppercase mb-4 shadow-sm animate-pulse">
          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span>Cẩm nang sử dụng Saffi</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-sans font-black tracking-tight text-slate-950 dark:text-white leading-tight">
          Bốn Bước Đơn Giản Nhận<br class="sm:hidden" />
          <span class="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Hoàn Tiền 90%</span>
        </h1>
        <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 font-bold leading-relaxed max-w-2xl mx-auto">
          Chỉ cần 1 lần sao chép liên kết sản phẩm, Saffi sẽ tự động tối ưu chiết khấu hoa hồng và hoàn trả trực tiếp vào ví ngân hàng của bạn.
        </p>
      </div>

      <!-- 4-Step Immersive Grid Timeline -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-6">
        
        <!-- Animated Connecting Background Flow for Desktop Layout -->
        <div class="hidden lg:block absolute top-[150px] left-[12%] right-[12%] h-0.5 bg-[linear-gradient(to_right,rgba(238,77,45,0.1),rgba(238,77,45,0.4),rgba(238,77,45,0.1))] pointer-events-none z-0"></div>

        <!-- Step Cards loop -->
        <div
          v-for="(step, idx) in steps"
          :key="idx"
          class="rounded-[32px] border border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md p-8 shadow-2xl hover:border-orange-500/25 transition-premium group relative z-10 flex flex-col items-start text-left select-none overflow-hidden h-[340px]"
        >
          <!-- Neon Grid Glow effect inside card -->
          <div class="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-orange-500/[0.03] group-hover:bg-orange-500/[0.08] blur-2xl transition-all duration-500 pointer-events-none"></div>

          <!-- Step Number Large Glowing Badge -->
          <div class="text-[64px] font-sans font-black leading-none bg-gradient-to-br from-slate-200/50 to-slate-200/10 dark:from-slate-800/40 dark:to-slate-800/5 bg-clip-text text-transparent absolute top-4 right-6 group-hover:from-orange-500/15 group-hover:to-orange-500/5 transition-all duration-500 select-none">
            0{{ idx + 1 }}
          </div>

          <!-- Step Icon Box -->
          <div class="h-14 w-14 rounded-2xl bg-orange-500/10 text-shopee-orange flex items-center justify-center shrink-0 mb-8 border border-orange-500/10 group-hover:scale-110 group-hover:bg-orange-500/15 transition-all duration-300 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" :d="step.icon" />
            </svg>
          </div>

          <!-- Card Content details -->
          <h3 class="text-sm font-black text-slate-950 dark:text-white uppercase tracking-wider mb-3 leading-none select-none">
            {{ step.title }}
          </h3>
          <p class="text-[12px] text-slate-550 dark:text-slate-400 font-semibold leading-relaxed" v-html="step.desc"></p>
        </div>

      </div>

      <!-- Prominent Call-to-action redirect container -->
      <div class="mt-20 text-center select-none animate-fade-in-up">
        <div class="p-8 md:p-12 rounded-[40px] border border-slate-200/60 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/20 backdrop-blur-sm max-w-4xl mx-auto relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8 text-left shadow-2xl">
          
          <div class="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-orange-500/5 blur-3xl pointer-events-none"></div>

          <div>
            <h3 class="text-lg md:text-xl font-sans font-black text-slate-950 dark:text-white uppercase leading-tight select-none">
              Sẵn sàng bắt đầu tiết kiệm?
            </h3>
            <p class="text-[12px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mt-1.5 max-w-md">
              Truy cập ngay ứng dụng Saffi để chuyển đổi liên kết và nhận lại chiết khấu hoa hồng Shopee khủng ngay lập tức.
            </p>
          </div>

          <a
            :href="mainAppURL"
            id="btn-guide-start-now"
            class="w-full sm:w-auto px-10 py-4.5 bg-shopee-orange hover:bg-shopee-orange-hover text-white font-sans font-black text-xs tracking-widest uppercase rounded-2xl transition-premium active:scale-95 shadow-xl shadow-orange-500/25 glow-orange-button flex items-center justify-center gap-2 select-none shrink-0 group"
          >
            <span>Bắt đầu hoàn tiền</span>
            <svg class="h-4.5 w-4.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const mainAppURL = config.public.mainAppURL || "#";

useSeoMeta({
  title: "Hướng dẫn mua sắm hoàn tiền - Saffi",
  ogTitle: "Hướng dẫn mua sắm hoàn tiền - Saffi",
  description: "Cẩm nang hướng dẫn các bước mua hàng Shopee để được hoàn tiền tự động chiết khấu cao 100% tại hệ thống Saffi.",
  ogDescription: "Cẩm nang hướng dẫn các bước mua hàng Shopee để được hoàn tiền tự động chiết khấu cao 100% tại hệ thống Saffi.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const steps = [
  {
    title: "1. Sao chép link",
    desc: "Sao chép đường dẫn (link) sản phẩm bạn đang quan tâm hoặc muốn đặt mua trên ứng dụng Shopee (hoặc website Shopee.vn).",
    icon: "M8.684 10.742l5.316-2.658m0 0a3 3 0 100-3.368L8.684 7.376m0 2.366a3 3 0 100 4.516l5.316 2.658m0 0a3 3 0 103-3.368M12 8a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "2. Chuyển đổi link",
    desc: "Mở ứng dụng <span class='text-shopee-orange font-bold'>Saffi</span>, dán đường dẫn sản phẩm vừa copy vào thanh công cụ để tự động mã hóa thành link hoàn tiền tối ưu.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 6.571M21.11 3v5h-5.06",
  },
  {
    title: "3. Tiến hành đặt hàng",
    desc: "Hệ thống sẽ chuyển tiếp sang Shopee. Bạn chỉ cần thêm sản phẩm vào giỏ hàng và tiến hành thanh toán đặt hàng như bình thường.",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
  {
    title: "4. Nhận hoàn tiền",
    desc: "Sau khi đơn hàng đối soát thành công (khách hàng không đổi trả), số tiền chiết khấu hoàn trả lên đến 90% sẽ cộng thẳng vào ví <span class='text-shopee-orange font-bold'>Saffi</span> và rút về ATM.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];
</script>

<style scoped>
.transition-premium {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.transition-premium:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 35px -10px rgba(238, 77, 45, 0.08);
}
.glow-orange-button:hover {
  box-shadow: 0 6px 22px 0 rgba(238, 77, 45, 0.35);
}
</style>
