import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/icon",
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  },

  build: {
    transpile: ['@vue/devtools-core', '@vue/devtools-kit']
  },

  runtimeConfig: {
    public: {
      mainAppURL: process.env.NUXT_PUBLIC_MAIN_APP_URL,
    },
  },

  // for cloudflare pages
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  }
});
