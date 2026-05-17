import { ref } from "vue";

export function useTheme() {
  const isDark = ref(true); // Default to dark mode since it's the premium default

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateThemeClass();
  };

  const updateThemeClass = () => {
    if (!process.client) return;

    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    if (isDark.value) {
      htmlEl.classList.add("dark");
      bodyEl.classList.add("dark");
      localStorage.setItem("theme-mode", "dark");
    } else {
      htmlEl.classList.remove("dark");
      bodyEl.classList.remove("dark");
      localStorage.setItem("theme-mode", "light");
    }
  };

  const initTheme = () => {
    if (!process.client) return;

    // Check localStorage preference
    const savedTheme = localStorage.getItem("theme-mode");
    
    if (savedTheme) {
      isDark.value = savedTheme === "dark";
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      isDark.value = systemPrefersDark;
    }

    updateThemeClass();
  };

  return {
    isDark,
    toggleTheme,
    initTheme,
  };
}
