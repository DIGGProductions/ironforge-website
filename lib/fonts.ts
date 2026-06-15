import localFont from "next/font/local";

// Self-hosted (offline) so the build never depends on Google Fonts at build time.
// Files live in /fonts and come from the @fontsource packages.

// Display: Saira Condensed. Industrial, heavy-duty character.
export const display = localFont({
  src: [
    { path: "../fonts/saira-condensed-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/saira-condensed-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/saira-condensed-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/saira-condensed-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Arial Narrow", "system-ui", "sans-serif"],
});

// Body: Inter.
export const body = localFont({
  src: [
    { path: "../fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

// Utility: JetBrains Mono. Eyebrows, labels, spec rows.
export const mono = localFont({
  src: [
    { path: "../fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const fontVariables = `${display.variable} ${body.variable} ${mono.variable}`;
