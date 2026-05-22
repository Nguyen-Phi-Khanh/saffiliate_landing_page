<template>
  <div class="w-full max-w-4xl mx-auto animate-fade-in">
    <!-- Page Title & Header -->
    <div class="mt-6">
      <h1 class="text-[30px] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
        Hồ Sơ <span class="text-shopee-orange">Cá Nhân</span>
      </h1>
      <p class="text-[14px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
        Cấu hình thông tin tài khoản cá nhân và liên kết ngân hàng đối soát mặc định.
      </p>
    </div>

    <!-- MAIN GRID layout -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8 items-start">
      <!-- COLUMN Left: Profile Summary Avatar (Span 4) -->
      <div class="md:col-span-4 rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-xl shadow-slate-900/[0.02] dark:shadow-slate-950/20 text-center flex flex-col items-center">
        <!-- Avatar Photo Container -->
        <div class="h-24 w-24 rounded-full overflow-hidden flex items-center justify-center border-4 border-slate-100 dark:border-slate-800 shadow-md relative group select-none">
          <img v-if="userAvatar" :src="userAvatar" class="h-full w-full object-cover" referrerpolicy="no-referrer" />
          <div v-else class="h-full w-full bg-[#EC407A] text-white font-black text-3xl flex items-center justify-center uppercase">
            {{ firstLetter }}
          </div>
        </div>

        <h3 class="text-sm font-black text-slate-800 dark:text-slate-100 mt-4 truncate max-w-full leading-tight">{{ userName }}</h3>
        <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 truncate max-w-full font-bold select-all">{{ userEmail }}</p>

        <!-- Rank badge -->
        <div class="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-extrabold text-[10px] tracking-widest select-none shadow-sm">
          <svg class="h-3.5 w-3.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 4l3 7h14l3-7-5 4-5-8-5 8-5-4zm17 9H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z" />
          </svg>
          <span>THÀNH VIÊN VÀNG</span>
        </div>

        <!-- Account Metrics -->
        <div class="w-full mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/60 grid grid-cols-2 gap-4">
          <div class="text-center">
            <span class="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Ngày tham gia</span>
            <span class="text-xs font-black text-slate-700 dark:text-slate-200 block mt-1">12/04/2026</span>
          </div>
          <div class="text-center">
            <span class="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Cấp bậc tích lũy</span>
            <span class="text-xs font-black text-slate-700 dark:text-slate-200 block mt-1">Cấp 4</span>
          </div>
        </div>
      </div>

      <!-- COLUMN Right: Settings Forms (Span 8) -->
      <div class="md:col-span-8 flex flex-col gap-6">
        <!-- Section 1: User Settings Form -->
        <div class="rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-xl shadow-slate-900/[0.02] dark:shadow-slate-950/20">
          <h3 class="text-xs font-black tracking-widest text-slate-800 dark:text-slate-200 uppercase select-none pb-4 border-b border-slate-100 dark:border-slate-800/60">
            Thông Tin Tài Khoản
          </h3>

          <form @submit.prevent="saveProfile" class="mt-6 flex flex-col gap-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-2">
                <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Họ và tên</label>
                <input
                  v-model="profileName"
                  type="text"
                  required
                  class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all font-semibold"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Số điện thoại</label>
                <input
                  v-model="profilePhone"
                  type="tel"
                  placeholder="Nhập số điện thoại..."
                  class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all font-semibold"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Địa chỉ email</label>
              <input
                :value="userEmail"
                type="email"
                disabled
                class="w-full rounded-2xl border border-slate-200/40 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/20 px-4 py-3 text-xs text-slate-400 dark:text-slate-550 cursor-not-allowed select-none font-semibold"
              />
            </div>

            <!-- Profile updated alerts -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
            >
              <div v-if="profileMsg" class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ profileMsg }}</span>
              </div>
            </transition>

            <button
              type="submit"
              :disabled="isUpdatingProfile"
              class="self-start px-6 bg-shopee-orange text-white hover:bg-shopee-orange/95 hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl py-3 font-bold text-xs shadow-md shadow-orange-500/10 cursor-pointer disabled:opacity-50 select-none"
            >
              {{ isUpdatingProfile ? 'Đang lưu...' : 'Lưu thay đổi' }}
            </button>
          </form>
        </div>

        <!-- Section 2: Default bank linkage -->
        <div class="rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-xl shadow-slate-900/[0.02] dark:shadow-slate-950/20">
          <h3 class="text-xs font-black tracking-widest text-slate-800 dark:text-slate-200 uppercase select-none pb-4 border-b border-slate-100 dark:border-slate-800/60">
            Ngân Hàng Liên Kết Đối Soát
          </h3>

          <form @submit.prevent="saveBank" class="mt-6 flex flex-col gap-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-2">
                <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Ngân hàng liên kết</label>
                <select
                  v-model="linkedBank"
                  class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all"
                >
                  <option value="MB">MB Bank (Ngân hàng Quân Đội)</option>
                  <option value="VCB">Vietcombank (Ngân hàng Ngoại Thương)</option>
                  <option value="TCB">Techcombank (Ngân hàng Kỹ Thương)</option>
                  <option value="ACB">ACB (Ngân hàng Á Châu)</option>
                  <option value="BIDV">BIDV (Ngân hàng Đầu tư & Phát triển)</option>
                </select>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Số tài khoản</label>
                <input
                  v-model="bankAccount"
                  type="text"
                  required
                  placeholder="Nhập số tài khoản ngân hàng..."
                  class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all font-semibold"
                />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Tên chủ tài khoản (Chữ in hoa không dấu)</label>
              <input
                v-model="bankOwner"
                type="text"
                required
                placeholder="Ví dụ: NGUYEN VAN A"
                class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all uppercase font-black"
              />
            </div>

            <!-- Bank link alerts -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
            >
              <div v-if="bankMsg" class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ bankMsg }}</span>
              </div>
            </transition>

            <button
              type="submit"
              :disabled="isUpdatingBank"
              class="self-start px-6 bg-shopee-orange text-white hover:bg-shopee-orange/95 hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl py-3 font-bold text-xs shadow-md shadow-orange-500/10 cursor-pointer disabled:opacity-50 select-none"
            >
              {{ isUpdatingBank ? 'Đang liên kết...' : 'Liên kết tài khoản' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { authClient } from "@/utils/auth-client";

useSeoMeta({
  title: "Hồ sơ cá nhân - SAffiliate",
  ogTitle: "Hồ sơ cá nhân - SAffiliate",
  description: "Trang cấu hình và bảo mật tài khoản thành viên SAffiliate.",
  ogDescription: "Trang cấu hình và bảo mật tài khoản thành viên SAffiliate.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const { data: session } = await authClient.useSession(useFetch);

const userName = computed(() => session.value?.user?.name || "User");
const userAvatar = computed(() => session.value?.user?.image || "");
const userEmail = computed(() => session.value?.user?.email || "mailunlockcuakhanh2@gmail.com");

const firstLetter = computed(() => {
  const name = userName.value;
  return name ? name.charAt(0).toUpperCase() : "U";
});

// Settings Input States
const profileName = ref(userName.value);
const profilePhone = ref("0968123456");
const isUpdatingProfile = ref(false);
const profileMsg = ref("");

const linkedBank = ref("MB");
const bankAccount = ref("9999888899");
const bankOwner = ref("NGUYEN PHI KHANH");
const isUpdatingBank = ref(false);
const bankMsg = ref("");

const saveProfile = () => {
  isUpdatingProfile.value = true;
  profileMsg.value = "";
  
  setTimeout(() => {
    isUpdatingProfile.value = false;
    profileMsg.value = "Cập nhật hồ sơ tài khoản thành công!";
    setTimeout(() => {
      profileMsg.value = "";
    }, 4000);
  }, 1000);
};

const saveBank = () => {
  isUpdatingBank.value = true;
  bankMsg.value = "";

  setTimeout(() => {
    isUpdatingBank.value = false;
    bankMsg.value = "Đã liên kết tài khoản ngân hàng đối soát mặc định thành công!";
    setTimeout(() => {
      bankMsg.value = "";
    }, 4000);
  }, 1000);
};
</script>
