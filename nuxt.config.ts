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
  },

  // Server-side route rules (Proxying /api calls to backend to completely bypass browser CORS)
  routeRules: {
    "/api/**": {
      proxy: "http://localhost:3030/api/**",
    },
  },

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3030/api", // fallback value, NUXT_PUBLIC_API_BASE in .env takes precedence
    },
  },
});
