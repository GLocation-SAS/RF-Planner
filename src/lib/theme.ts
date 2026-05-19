/**
 * Simple theme management utility to avoid external dependencies.
 * Handles data-theme attribute and localStorage persistence.
 */

export type Theme = "light" | "dark";

export const getStoredTheme = (): Theme | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("rf-planner-theme") as Theme | null;
};

export const setStoredTheme = (theme: Theme) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("rf-planner-theme", theme);
};

export const applyTheme = (theme: Theme) => {
  if (typeof window === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  setStoredTheme(theme);
};

export const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme") as Theme || "light";
  const next = current === "light" ? "dark" : "light";
  applyTheme(next);
};
