"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Light/dark toggle. The active theme is applied to <html> before paint by the
 * inline script in app/layout.tsx (which reads localStorage, falling back to the
 * OS preference), so this button only reads and flips that state. The choice is
 * persisted to localStorage.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable, still toggles for the session */
    }
    setDark(next);
  }

  const label = dark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-surface text-ink transition-colors hover:bg-surfaceHover ${className}`}
    >
      {/* Rendered after mount to avoid a hydration mismatch on the icon. */}
      {dark === null ? (
        <span className="h-[18px] w-[18px]" />
      ) : dark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
