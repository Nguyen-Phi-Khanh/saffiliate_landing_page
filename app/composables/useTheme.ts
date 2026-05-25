import { ref } from "vue";

export function useTheme() {
  const isDark = useState("theme-is-dark", () => false); // Always light mode by default

  const toggleTheme = () => {
    isDark.value = false;
    updateThemeClass();
  };

  const updateThemeClass = () => {
    if (!process.client) return;

    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    // Always enforce light mode classes
    htmlEl.classList.remove("dark");
    bodyEl.classList.remove("dark");
    localStorage.setItem("theme-mode", "light");
  };

  const initTheme = () => {
    if (!process.client) return;

    isDark.value = false;
    updateThemeClass();
  };

  return {
    isDark,
    toggleTheme,
    initTheme,
  };
}
