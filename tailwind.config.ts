import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "28px",
      screens: { "2xl": "1180px" },
    },
    extend: {
      colors: {
        "forge-black": "#0D0F12",
        "steel-900": "#121519",
        "steel-800": "#16191E",
        "steel-700": "#1C2026",
        "steel-600": "#262B33",
        line: "#2E343D",
        gold: "#D4A24E",
        "gold-bright": "#E8C078",
        "gold-deep": "#9C6B2E",
        text: "#E7E9EC",
        muted: "#A2A8B0",
        ink: "#15171A",
        paper: "#F4F1EA",
        "paper-2": "#FBF9F4",
        card: "#FFFFFF",
        "ink-muted": "#4A4E55",
        bronze: "#7E5520",
        "bronze-strong": "#6E4A16",
        "line-2": "#DCD4C4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        h1: ["clamp(2.7rem, 5.8vw, 4.7rem)", { lineHeight: "0.96", letterSpacing: "0.005em" }],
        h2: ["clamp(1.9rem, 3.6vw, 2.7rem)", { lineHeight: "1.0", letterSpacing: "0.01em" }],
        h3: ["1.3rem", { lineHeight: "1.15" }],
        eyebrow: ["11px", { lineHeight: "1.2", letterSpacing: "0.2em" }],
      },
      maxWidth: {
        wrap: "1180px",
      },
      borderRadius: {
        btn: "3px",
        card: "6px",
        plate: "6px",
      },
      backgroundImage: {
        metal: "linear-gradient(180deg,#F0D08A 0%,#E8C078 16%,#D4A24E 50%,#A9742F 100%)",
      },
      boxShadow: {
        plate: "0 30px 60px -28px rgba(0,0,0,.8), 0 1px 0 rgba(255,255,255,.03) inset",
        "gold-glow": "0 8px 22px -10px rgba(212,162,78,.7)",
      },
      transitionTimingFunction: {
        rise: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
