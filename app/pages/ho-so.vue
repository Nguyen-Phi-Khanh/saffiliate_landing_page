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
            </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-2">
              <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Địa chỉ email</label>
                <input
                :value="userEmail"
                type="email"
                disabled
                class="w-full rounded-2xl border border-slate-200/40 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/20 px-4 py-3 text-xs text-slate-400 dark:text-slate-550 cursor-not-allowed select-none font-semibold"
              />
              </div>
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
          <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/60">
            <h3 class="text-xs font-black tracking-widest text-slate-800 dark:text-slate-200 uppercase select-none">
              Ngân Hàng Liên Kết Đối Soát
            </h3>
            
            <!-- Toggle Edit Button -->
            <button
              type="button"
              @click="handleEditToggle"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-extrabold tracking-wider transition-all select-none cursor-pointer"
              :class="[
                isEditingBank
                  ? 'text-slate-500 border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-100 dark:hover:bg-slate-900/60'
                  : 'text-shopee-orange border-shopee-orange/20 bg-shopee-orange/5 hover:bg-shopee-orange/10'
              ]"
            >
              <svg v-if="!isEditingBank" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>{{ isEditingBank ? 'HỦY BỎ' : 'CHỈNH SỬA' }}</span>
            </button>
          </div>

          <form @submit.prevent="saveBank" class="mt-6 flex flex-col gap-5">
            <!-- Ngân hàng liên kết (Rộng toàn bộ trên cả mobile và desktop) -->
            <div class="flex flex-col gap-2 relative">
              <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Ngân hàng liên kết</label>
              
              <!-- Custom Searchable Dropdown Trigger Button -->
              <div class="relative">
                <button
                  type="button"
                  :disabled="!isEditingBank || isBankLoading || isUpdatingBank"
                  @click="toggleDropdown"
                  class="w-full flex items-center justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3.5 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all disabled:opacity-50 text-left select-none"
                  :class="[
                    isEditingBank && !isBankLoading && !isUpdatingBank
                      ? 'cursor-pointer'
                      : 'cursor-not-allowed'
                  ]"
                >
                  <div v-if="selectedBankDetails" class="flex items-center gap-2 min-w-0">
                    <span class="font-extrabold text-[10px] text-shopee-orange bg-shopee-orange/5 px-2 py-0.5 rounded-lg border border-shopee-orange/10 shrink-0">
                      {{ selectedBankDetails.shortName || selectedBankDetails.short_name || selectedBankDetails.code }}
                    </span>
                    <span class="truncate text-slate-700 dark:text-slate-300" :title="selectedBankDetails.name">
                      {{ selectedBankDetails.name }}
                    </span>
                  </div>
                  <span v-else class="text-slate-400">Chọn ngân hàng...</span>
                  
                  <!-- Chevron icon -->
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-4 w-4 text-slate-400 transition-transform duration-300 shrink-0" 
                    :class="{ 'rotate-180': isDropdownOpen }"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Invisible Fullscreen Backdrop to close dropdown on click outside -->
                <div v-if="isDropdownOpen" @click="isDropdownOpen = false" class="fixed inset-0 z-40 cursor-default"></div>

                <!-- Dropdown Popover Menu -->
                <transition
                  enter-active-class="transition duration-150 ease-out"
                  enter-from-class="transform scale-95 opacity-0 -translate-y-2"
                  enter-to-class="transform scale-100 opacity-100 translate-y-0"
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="transform scale-100 opacity-100 translate-y-0"
                  leave-to-class="transform scale-95 opacity-0 -translate-y-2"
                >
                  <div 
                    v-if="isDropdownOpen" 
                    class="absolute left-0 right-0 mt-2 z-50 rounded-2xl border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl shadow-slate-900/10 dark:shadow-slate-950/40 p-3 max-h-[300px] flex flex-col gap-2 overflow-hidden animate-fade-in"
                  >
                    <!-- Search Input inside dropdown popover -->
                    <div class="relative shrink-0">
                      <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Tìm theo tên, viết tắt hoặc mã BIN..."
                        class="w-full rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 pl-9 pr-4 py-2.5 text-[11px] text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all"
                      />
                      <div class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>

                    <!-- Scrollable Options List -->
                    <div class="flex-1 overflow-y-auto pr-1 flex flex-col gap-1 select-none">
                      <div
                        v-for="bank in filteredBanks"
                        :key="bank.bin"
                        @click="selectBank(bank.bin)"
                        class="flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 group"
                        :class="{ 'bg-orange-500/[0.03] dark:bg-orange-500/[0.05]': linkedBank === bank.bin }"
                      >
                        <div class="flex items-center gap-2.5 min-w-0">
                          <!-- Short Abbreviation Badge -->
                          <span 
                            class="font-black text-[10px] tracking-tight px-1.5 py-0.5 rounded border transition-colors shrink-0"
                            :class="[
                              linkedBank === bank.bin
                                ? 'text-shopee-orange border-shopee-orange/20 bg-shopee-orange/[0.03]'
                                : 'text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 group-hover:border-slate-300 dark:group-hover:border-slate-700'
                            ]"
                          >
                            {{ bank.shortName || bank.short_name || bank.code }}
                          </span>
                          <div class="min-w-0">
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300 truncate">
                              {{ bank.name }}
                            </p>
                            <span class="text-[8.5px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5 block uppercase tracking-wide select-all">BIN: {{ bank.bin }}</span>
                          </div>
                        </div>

                        <!-- Checkmark icon -->
                        <div v-if="linkedBank === bank.bin" class="shrink-0 text-shopee-orange">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>

                      <!-- Empty filtered result state -->
                      <div v-if="filteredBanks.length === 0" class="py-6 text-center text-slate-400 dark:text-slate-550 text-[10px] font-bold">
                        Không tìm thấy ngân hàng nào khớp
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>

            <!-- Hàng dưới: Số tài khoản & Tên chủ tài khoản (Mobile: xếp chồng, Desktop: song song) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-2">
                <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase sm:h-8 flex items-end pb-1">Số tài khoản</label>
                <input
                  :disabled="!isEditingBank || isBankLoading || isUpdatingBank"
                  v-model="bankAccount"
                  type="text"
                  required
                  placeholder="Nhập số tài khoản ngân hàng..."
                  class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-[11px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase sm:h-8 flex items-end pb-1">Chủ tài khoản (In hoa không dấu)</label>
                <input
                  :disabled="!isEditingBank || isBankLoading || isUpdatingBank"
                  v-model="bankOwner"
                  type="text"
                  required
                  placeholder="Ví dụ: NGUYEN VAN A"
                  class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-shopee-orange/20 focus:border-shopee-orange transition-all uppercase font-black disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
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

            <!-- Submit Button (Trượt hiển thị mượt mà khi bấm Chỉnh sửa) -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-2 opacity-0"
            >
              <button
                v-if="isEditingBank"
                type="submit"
                :disabled="isBankLoading || isUpdatingBank"
                class="self-start px-6 bg-shopee-orange text-white hover:bg-shopee-orange/95 hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl py-3 font-bold text-xs shadow-md shadow-orange-500/10 cursor-pointer disabled:opacity-50 select-none"
              >
                {{ isBankLoading ? 'Đang tải...' : (isUpdatingBank ? 'Đang liên kết...' : 'Liên kết tài khoản') }}
              </button>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { authClient } from "@/utils/auth-client";

useSeoMeta({
  title: "Hồ sơ cá nhân - Saffi",
  ogTitle: "Hồ sơ cá nhân - Saffi",
  description: "Trang cấu hình và bảo mật tài khoản thành viên Saffi.",
  ogDescription: "Trang cấu hình và bảo mật tài khoản thành viên Saffi.",
  ogImage: "/shopee-banner.png",
  twitterCard: "summary_large_image",
});

const { data: session } = await authClient.useSession(useFetch);
const { api } = useAppFetch();
const config = useRuntimeConfig();

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

const linkedBank = ref("970422"); // MB Bank BIN as default
const bankAccount = ref("");
const bankOwner = ref("");
const isEditingBank = ref(false);
const isUpdatingBank = ref(false);
const bankMsg = ref("");

// Backup state for edit rollback
const originalBankId = ref("");
const originalBankAccount = ref("");
const originalBankOwner = ref("");

const handleEditToggle = () => {
  if (isEditingBank.value) {
    // Rollback changes
    linkedBank.value = originalBankId.value;
    bankAccount.value = originalBankAccount.value;
    bankOwner.value = originalBankOwner.value;
    isEditingBank.value = false;
  } else {
    // Backup current state
    originalBankId.value = linkedBank.value;
    originalBankAccount.value = bankAccount.value;
    originalBankOwner.value = bankOwner.value;
    isEditingBank.value = true;
  }
};

const banks = ref([]);
const isBankLoading = ref(true);

const fallbackBanks = [
  { bin: "970422", code: "MB", shortName: "MBBank", name: "Ngân hàng TMCP Quân Đội" },
  { bin: "970436", code: "VCB", shortName: "Vietcombank", name: "Ngân hàng TMCP Ngoại Thương Việt Nam" },
  { bin: "970407", code: "TCB", shortName: "Techcombank", name: "Ngân hàng TMCP Kỹ Thương Việt Nam" },
  { bin: "970416", code: "ACB", shortName: "ACB", name: "Ngân hàng TMCP Á Châu" },
  { bin: "970418", code: "BIDV", shortName: "BIDV", name: "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam" },
];

const fetchBanksList = async () => {
  try {
    const vietQRApiUrl = config.public.vietQRApi || "https://api.vietqr.io/v2";
    const res = await $fetch(`${vietQRApiUrl}/banks`);
    if (res && res.code === "00" && Array.isArray(res.data)) {
      banks.value = res.data;
    }
  } catch (err) {
    console.error("Lỗi khi tải danh sách ngân hàng VietQR:", err);
  }
};

const fetchUserBankAccount = async () => {
  if (!session.value?.user?.id) return;
  isBankLoading.value = true;
  try {
    const res = await api.get(`/bank-account/${session.value.user.id}`);
    if (res.data) {
      linkedBank.value = res.data.bankId;
      bankAccount.value = res.data.accountNo;
      bankOwner.value = res.data.accountName;
    }
  } catch (err) {
    console.error("Lỗi khi lấy thông tin tài khoản ngân hàng:", err);
    // Keep defaults
    linkedBank.value = "970422";
    bankAccount.value = "";
    bankOwner.value = "";
  } finally {
    isBankLoading.value = false;
  }
};

const isDropdownOpen = ref(false);
const searchQuery = ref("");

const toggleDropdown = () => {
  if (!isEditingBank.value || isBankLoading.value || isUpdatingBank.value) return;
  isDropdownOpen.value = !isDropdownOpen.value;
  if (isDropdownOpen.value) {
    searchQuery.value = "";
  }
};

const selectBank = (bin) => {
  linkedBank.value = bin;
  isDropdownOpen.value = false;
};

const filteredBanks = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  const list = banks.value.length > 0 ? banks.value : fallbackBanks;
  if (!query) return list;
  return list.filter(bank => {
    const code = (bank.code || "").toLowerCase();
    const shortName = (bank.shortName || bank.short_name || "").toLowerCase();
    const name = (bank.name || "").toLowerCase();
    const bin = (bank.bin || "").toLowerCase();
    return code.includes(query) || shortName.includes(query) || name.includes(query) || bin.includes(query);
  });
});

const selectedBankDetails = computed(() => {
  const list = banks.value.length > 0 ? banks.value : fallbackBanks;
  return list.find(b => b.bin === linkedBank.value) || null;
});

onMounted(async () => {
  await fetchBanksList();
  await fetchUserBankAccount();
});

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

const saveBank = async () => {
  if (!session.value?.user?.id) return;
  isUpdatingBank.value = true;
  bankMsg.value = "";

  const activeBanksList = banks.value.length > 0 ? banks.value : fallbackBanks;
  const selectedBankObj = activeBanksList.find(b => b.bin === linkedBank.value);
  const bankNameVal = selectedBankObj ? (selectedBankObj.shortName || selectedBankObj.short_name || selectedBankObj.code) : "Ngân hàng";

  try {
    await api.post(`/bank-account/${session.value.user.id}`, {
      bankId: linkedBank.value,
      bankName: bankNameVal,
      accountNo: bankAccount.value.trim(),
      accountName: bankOwner.value.trim().toUpperCase(),
    });

    bankMsg.value = "Đã liên kết tài khoản ngân hàng đối soát mặc định thành công!";
    isEditingBank.value = false;
    setTimeout(() => {
      bankMsg.value = "";
    }, 4000);
  } catch (err) {
    console.error("Lỗi khi cập nhật tài khoản ngân hàng:", err);
    bankMsg.value = "Có lỗi xảy ra: " + (err.message || "Không thể lưu!");
    
    // Roll back changes on failed save
    linkedBank.value = originalBankId.value;
    bankAccount.value = originalBankAccount.value;
    bankOwner.value = originalBankOwner.value;
    isEditingBank.value = false;
  } finally {
    isUpdatingBank.value = false;
  }
};
</script>
