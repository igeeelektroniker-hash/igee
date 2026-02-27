import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        darkprimary: "var(--color-darkprimary)",
        secondary: "var(--color-secondary)",
        midnight: "var(--color-midnight_text)",
        muted: "var(--color-muted)",
        error: "var(--color-error)",
        warning: "var(--color-warning)",
        lightgrey: "var(--color-light_grey)",
        grey: "var(--color-grey)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        darkmode: "var(--color-darkmode)",
        darklight: "var(--color-darklight)",
        darkborder: "var(--color-dark_border)",
        dark: "var(--color-dark)",
        dustGray: "var(--color-dustGray)"
      },
      boxShadow: {
        panel: "0 10px 30px -16px rgba(38, 50, 56, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
