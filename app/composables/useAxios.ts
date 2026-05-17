import axios from "axios";

export function useAxios() {
  const config = useRuntimeConfig();

  // On the browser (client-side), we use '/api' to trigger Nuxt's Nitro dev proxy, bypassing CORS.
  // On the server-side (SSR), we call the backend API directly using public runtime configs.
  const baseURL = process.client ? "/api" : config.public.apiBase;

  const api = axios.create({
    baseURL,
    timeout: 15000,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });

  // Request Interceptor
  api.interceptors.request.use(
    (requestConfig) => {
      // Future authentication token injection can go here
      return requestConfig;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  api.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      // Standardize error formats for easier rendering
      const parsedError = {
        message: error.response?.data?.message || error.message || "Kết nối mạng hoặc API gặp sự cố.",
        status: error.response?.status || 500,
        data: error.response?.data || null,
      };
      return Promise.reject(parsedError);
    }
  );

  return {
    api,
    baseURL,
  };
}
