import { create } from "zustand";

type ThemeStoreType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStoreType>((set) => {
  return {
    theme: "dark",
    toggleTheme: () =>
      set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  };
});
