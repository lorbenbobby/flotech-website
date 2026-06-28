import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces (theme tokens; see app/globals.css :root / .dark)
        bg: "rgb(var(--bg) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",
        line: "var(--hairline)",
        // Translucent surfaces that flip with the theme
        surface: "var(--surface-1)",
        surface2: "var(--surface-2)",
        surfaceHover: "var(--surface-hover)",
        hairline: "var(--hairline)",
        // Text
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        // Brand (constant across themes)
        blue: "rgb(var(--blue) / <alpha-value>)",
        cyan: "rgb(var(--cyan) / <alpha-value>)",
        violet: "rgb(var(--violet) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,108,255,0.20), 0 0 40px -8px rgba(34,211,238,0.35)",
        card: "0 24px 60px -24px rgba(0,0,0,0.7)",
        ring: "0 0 0 1px rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #3b6cff 0%, #22d3ee 100%)",
        "brand-soft":
          "linear-gradient(135deg, rgba(59,108,255,0.16) 0%, rgba(34,211,238,0.16) 100%)",
        grid: "linear-gradient(to right, rgba(120,150,210,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,150,210,0.07) 1px, transparent 1px)",
      },
      keyframes: {
        "grid-pan": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-44px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "grid-pan": "grid-pan 8s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
