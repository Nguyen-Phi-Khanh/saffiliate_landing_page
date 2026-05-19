<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 w-full px-4 transition-all duration-500 ease-out"
    :class="[
      isScrolled ? 'pt-2 pb-2 backdrop-blur-sm' : 'pt-4 pb-2'
    ]"
  >
    <div class="mx-auto max-w-7xl">
      <div 
        class="transition-all duration-500 ease-out flex items-center justify-between rounded-full border shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
        :class="[
          isScrolled 
            ? 'px-4 py-2 border-slate-200/50 dark:border-slate-800/50 shadow-slate-900/5 dark:shadow-slate-950/20' 
            : 'px-6 py-3 border-slate-200/80 dark:border-slate-800/85 shadow-slate-900/10 dark:shadow-slate-950/30'
        ]"
      >
        <!-- LEFT REGION: Logo, Dashboard Switch, and Hàng Icon Điều Hướng -->
        <div class="flex items-center gap-1 sm:gap-2">
          
          <!-- Logo Brand -->
          <div class="flex items-center gap-2 mr-2">
            <!-- Brand Icon -->
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-shopee-orange shadow-md glow-orange shrink-0 transition-transform duration-500 hover:rotate-12 select-none">
              <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <path d="M16 8a6 6 0 0 0-8 0" />
                <path d="M8 16a6 6 0 0 0 8 0" />
                <path d="M12 6V4" />
                <path d="M12 20v-2" />
              </svg>
            </div>
            
            <!-- Logo Text -->
            <div class="hidden sm:flex flex-col select-none">
              <span class="font-sans text-[17px] font-black tracking-tight text-slate-900 dark:text-white leading-none">
                S<span class="text-shopee-orange">affiliate</span>
              </span>
              <span class="text-[7.5px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mt-0.5 leading-none">
                CASHBACK & AFFILIATE
              </span>
            </div>
          </div>

          <!-- Phân cách dọc 1 -->
          <div class="hidden md:block h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>

          <!-- Nút Dashboard Cam Tròn Nổi Bật -->
          <button 
            class="flex h-9 w-9 items-center justify-center rounded-full bg-shopee-orange text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer hover:shadow-orange-500/25 shrink-0 group relative" 
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <!-- Tooltip -->
            <div class="absolute top-[135%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-90 group-hover:scale-100 z-50 shrink-0">
              <div class="w-2 h-2 rotate-45 bg-slate-900 dark:bg-slate-800 absolute -top-1 left-1/2 -translate-x-1/2"></div>
              <div class="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-[11px] tracking-wide whitespace-nowrap shadow-xl">
                Dashboard
              </div>
            </div>
          </button>

          <!-- Hàng Icon Điều Hướng (Dành cho PC & iPad) -->
          <div class="hidden md:flex items-center gap-1.5 ml-1">
            <!-- Sparkles Icon -->
            <button class="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group relative" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <!-- Tooltip -->
              <div class="absolute top-[135%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-90 group-hover:scale-100 z-50 shrink-0">
                <div class="w-2 h-2 rotate-45 bg-slate-900 dark:bg-slate-800 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                <div class="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-[11px] tracking-wide whitespace-nowrap shadow-xl">
                  Hoàn Tiền
                </div>
              </div>
            </button>

            <!-- Gift Icon (có thông báo đỏ) -->
            <button class="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 relative group" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0H4m8 0h8m-8 0v13m-8-6h16" />
              </svg>
              <span class="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
              <!-- Tooltip -->
              <div class="absolute top-[135%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-90 group-hover:scale-100 z-50 shrink-0">
                <div class="w-2 h-2 rotate-45 bg-slate-900 dark:bg-slate-800 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                <div class="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-[11px] tracking-wide whitespace-nowrap shadow-xl">
                  Sự Kiện
                </div>
              </div>
            </button>

            <!-- Box Icon -->
            <button class="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group relative" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <!-- Tooltip -->
              <div class="absolute top-[135%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-90 group-hover:scale-100 z-50 shrink-0">
                <div class="w-2 h-2 rotate-45 bg-slate-900 dark:bg-slate-800 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                <div class="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-[11px] tracking-wide whitespace-nowrap shadow-xl">
                  Sản Phẩm
                </div>
              </div>
            </button>

            <!-- Wallet Icon -->
            <button class="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group relative" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <!-- Tooltip -->
              <div class="absolute top-[135%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-90 group-hover:scale-100 z-50 shrink-0">
                <div class="w-2 h-2 rotate-45 bg-slate-900 dark:bg-slate-800 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                <div class="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-[11px] tracking-wide whitespace-nowrap shadow-xl">
                  Doanh Thu
                </div>
              </div>
            </button>

            <!-- Bell Icon -->
            <button class="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group relative" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <!-- Tooltip -->
              <div class="absolute top-[135%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-90 group-hover:scale-100 z-50 shrink-0">
                <div class="w-2 h-2 rotate-45 bg-slate-900 dark:bg-slate-800 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                <div class="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-[11px] tracking-wide whitespace-nowrap shadow-xl">
                  Thông Báo
                </div>
              </div>
            </button>

            <!-- Book Icon -->
            <button class="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group relative" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <!-- Tooltip -->
              <div class="absolute top-[135%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-90 group-hover:scale-100 z-50 shrink-0">
                <div class="w-2 h-2 rotate-45 bg-slate-900 dark:bg-slate-800 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                <div class="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-[11px] tracking-wide whitespace-nowrap shadow-xl">
                  Hướng Dẫn
                </div>
              </div>
            </button>

            <!-- Support Icon -->
            <button class="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group relative" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <!-- Tooltip -->
              <div class="absolute top-[135%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-90 group-hover:scale-100 z-50 shrink-0">
                <div class="w-2 h-2 rotate-45 bg-slate-900 dark:bg-slate-800 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                <div class="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-[11px] tracking-wide whitespace-nowrap shadow-xl">
                  Hỗ Trợ
                </div>
              </div>
            </button>
          </div>

        </div>

        <!-- RIGHT REGION: Rank Badge, Profile Link, Theme Toggle, and User Capsule -->
        <div class="flex items-center gap-2 sm:gap-3">
          
          <!-- Rank Gold Badge -->
          <div 
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-extrabold text-[11px] tracking-widest select-none shrink-0"
            title="Hạng thành viên của bạn"
          >
            <!-- Crown SVG Icon -->
            <svg class="h-3.5 w-3.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 4l3 7h14l3-7-5 4-5-8-5 8-5-4zm17 9H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z" />
            </svg>
            <span>VÀNG</span>
          </div>

          <!-- Link Hồ Sơ -->
          <button class="hidden sm:flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-shopee-orange dark:hover:text-shopee-orange text-xs font-bold transition-all duration-300 cursor-pointer py-1.5 px-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 select-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Hồ sơ</span>
          </button>

          <!-- Light/Dark Theme Switcher (Ẩn trên mobile để tối giản theo mockup) -->
          <button
            @click="toggleTheme"
            class="hidden sm:flex transition-all duration-300 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-500 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/80 cursor-pointer select-none active:scale-95 shrink-0"
            title="Chuyển đổi giao diện"
            type="button"
          >
            <!-- Sun icon when dark mode is active -->
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <!-- Moon icon when light mode is active -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Nút Chuông Thông Báo trên Mobile (Mockup Style) -->
          <button 
            type="button" 
            class="flex sm:hidden h-8 w-8 items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange transition-colors duration-300 cursor-pointer shrink-0 relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="absolute top-1.5 right-1.5 flex h-1.5 w-1.5 rounded-full bg-red-500 ring-1 ring-white dark:ring-slate-900 animate-pulse"></span>
          </button>

          <!-- Phân cách dọc 2 (Ẩn trên mobile) -->
          <div class="hidden sm:block h-5 w-px bg-slate-200 dark:bg-slate-800 mx-1 shrink-0"></div>

          <!-- User Capsule (Better-Auth Session - tối giản không viền/nền và ẩn mũi tên trên mobile) -->
          <div 
            ref="capsuleRef"
            @click="toggleMenu"
            class="flex items-center gap-2 rounded-full border border-transparent sm:border-slate-200 dark:border-transparent sm:dark:border-slate-800 bg-transparent sm:bg-slate-50/50 dark:bg-transparent sm:dark:bg-slate-900/30 p-0 sm:pl-3 sm:pr-2 sm:py-1 select-none hover:border-transparent sm:hover:border-slate-300 dark:hover:border-transparent sm:dark:hover:border-slate-700 transition-colors duration-300 shrink-0 cursor-pointer relative"
          >
            <span class="hidden sm:inline text-xs font-bold text-slate-700 dark:text-slate-200 truncate max-w-[100px] md:max-w-[120px]">
              {{ userName }}
            </span>
            <div class="h-8.5 w-8.5 rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-sm border border-slate-200/50 dark:border-slate-800">
              <img v-if="userAvatar" :src="userAvatar" class="h-full w-full object-cover" referrerpolicy="no-referrer" />
              <div v-else class="h-full w-full bg-[#EC407A] text-white font-black text-sm flex items-center justify-center uppercase select-none">
                {{ firstLetter }}
              </div>
            </div>
            <!-- Arrow Down SVG (Ẩn trên mobile) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="hidden sm:inline h-3 w-3 text-slate-400 dark:text-slate-500 transition-transform duration-300" :class="{ 'rotate-180': isMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>

            <!-- Dropdown Menu Tài khoản -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div 
                v-if="isMenuOpen"
                ref="menuRef"
                @click.stop
                class="absolute right-0 top-[125%] mt-1 w-[290px] bg-white dark:bg-slate-900 rounded-[24px] shadow-2xl border border-slate-100 dark:border-slate-800/80 p-5 flex flex-col origin-top-right z-50 transition-all cursor-default"
              >
                <!-- 1. User Info -->
                <div class="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800/60">
                  <div class="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <img v-if="userAvatar" :src="userAvatar" class="h-full w-full object-cover" referrerpolicy="no-referrer" />
                    <div v-else class="h-full w-full bg-[#EC407A] text-white font-black text-lg flex items-center justify-center uppercase">
                      {{ firstLetter }}
                    </div>
                  </div>
                  <div class="flex flex-col truncate">
                    <span class="font-bold text-slate-800 dark:text-slate-100 text-[15px] leading-tight truncate">
                      {{ userName }}
                    </span>
                    <span class="text-[11px] text-slate-400 dark:text-slate-500 truncate mt-0.5" :title="userEmail">
                      {{ userEmail }}
                    </span>
                  </div>
                </div>

                <!-- 2. Rank Gold Badge -->
                <div class="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800/60">
                  <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-extrabold text-[10px] tracking-widest select-none shrink-0">
                    <svg class="h-3.5 w-3.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 4l3 7h14l3-7-5 4-5-8-5 8-5-4zm17 9H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z" />
                    </svg>
                    <span>VÀNG</span>
                  </div>
                  <span class="text-[10px] font-bold text-slate-400 dark:text-slate-550">Cấp bậc hiện tại</span>
                </div>

                <!-- 3. Navigation Links List -->
                <div class="flex flex-col gap-1 py-3 border-b border-slate-100 dark:border-slate-800/60">
                  <!-- Hồ sơ -->
                  <button class="flex items-center gap-3 w-full p-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300 cursor-pointer select-none text-left group">
                    <div class="h-8.5 w-8.5 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 text-orange-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-shopee-orange dark:group-hover:text-shopee-orange transition-colors duration-300">Hồ sơ</span>
                  </button>

                  <!-- Mời bạn bè -->
                  <button class="flex items-center gap-3 w-full p-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300 cursor-pointer select-none text-left group">
                    <div class="h-8.5 w-8.5 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 text-amber-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 10.742l5.316-2.658m0 0a3 3 0 100-3.368L8.684 7.376m0 2.366a3 3 0 100 4.516l5.316 2.658m0 0a3 3 0 103-3.368M12 8a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-shopee-orange dark:group-hover:text-shopee-orange transition-colors duration-300">Mời bạn bè</span>
                  </button>

                  <!-- Tài chính -->
                  <button class="flex items-center gap-3 w-full p-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300 cursor-pointer select-none text-left group">
                    <div class="h-8.5 w-8.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-shopee-orange dark:group-hover:text-shopee-orange transition-colors duration-300">Tài chính</span>
                  </button>
                </div>

                <!-- 4. Logout Section -->
                <div class="pt-3">
                  <button @click="handleLogout" class="flex items-center gap-3 w-full p-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300 cursor-pointer select-none text-left group">
                    <div class="h-8.5 w-8.5 rounded-xl bg-slate-500/10 dark:bg-slate-500/15 text-slate-400 dark:text-slate-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </div>
                    <span class="text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors duration-300">
                      Đăng xuất
                    </span>
                  </button>
                </div>
              </div>
            </transition>
          </div>

        </div>

      </div>
    </div>
  </header>
  <!-- Spacer to prevent content overlapping due to fixed header -->
  <div class="h-20 w-full pointer-events-none"></div>

  <!-- Mobile Bottom Navigation Bar (Mockup Style - Fixed at Bottom) -->
  <div class="fixed bottom-0 left-0 right-0 z-[100] h-[68px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800/80 flex justify-around items-center px-2 md:hidden pb-safe shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.06)] select-none">
    
    <!-- Tab 1: Home -->
    <button type="button" class="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors active:scale-95 duration-200 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span class="text-[10px] font-bold tracking-tight">Home</span>
    </button>

    <!-- Tab 2: Hoàn Tiền (Active) -->
    <button type="button" class="flex flex-col items-center justify-center gap-1 w-16 h-full text-shopee-orange transition-colors active:scale-95 duration-200 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
      <span class="text-[10px] font-extrabold tracking-tight">Hoàn Tiền</span>
    </button>

    <!-- Tab 3: Đơn hàng -->
    <button type="button" class="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors active:scale-95 duration-200 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
      <span class="text-[10px] font-bold tracking-tight">Đơn hàng</span>
    </button>

    <!-- Tab 4: Tài Chính -->
    <button type="button" class="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors active:scale-95 duration-200 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
      <span class="text-[10px] font-bold tracking-tight">Tài Chính</span>
    </button>

    <!-- Tab 5: Thêm (Có chấm đỏ thông báo) -->
    <button type="button" class="flex flex-col items-center justify-center gap-1 w-16 h-full text-slate-400 dark:text-slate-500 hover:text-shopee-orange dark:hover:text-shopee-orange transition-colors active:scale-95 duration-200 cursor-pointer relative">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <span class="absolute top-2 right-4 flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
      <span class="text-[10px] font-bold tracking-tight">Thêm</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useTheme } from "@/composables/useTheme";
import { authClient } from "@/utils/auth-client";

const { isDark, toggleTheme } = useTheme();
const { data: session } = await authClient.useSession(useFetch);

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const menuRef = ref(null);
const capsuleRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  if (typeof window !== "undefined") {
    isScrolled.value = window.scrollY > 20;
  }
};

const handleClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target) &&
    capsuleRef.value &&
    !capsuleRef.value.contains(event.target)
  ) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("click", handleClickOutside);
  // Initial check
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("click", handleClickOutside);
});

// Dynamic values from Better-Auth Session
const userName = computed(() => {
  return session.value.user.name || "User";
});

const userAvatar = computed(() => {
  return session.value.user.image || "";
});

const firstLetter = computed(() => {
  const name = userName.value;
  return name ? name.charAt(0).toUpperCase() : "U";
});

const userEmail = computed(() => {
  return session.value.user.email || "mailunlockcuakhanh2@gmail.com";
});

const handleLogout = async () => {
  try {
    await authClient.signOut();
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  } catch (error) {
    console.error("Đăng xuất thất bại:", error);
  }
};
</script>

<style scoped>
/* Hover and Premium Transition Utilities */
.transition-premium {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.glow-orange {
  box-shadow: 0 4px 14px 0 rgba(239, 83, 80, 0.2);
}
</style>
