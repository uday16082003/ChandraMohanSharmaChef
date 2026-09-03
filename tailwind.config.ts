import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F2",
        foreground: "#18181B",
        card: {
          DEFAULT: "#FFFFFF",
          hover: "#FDFCFA",
        },
        ivory: {
          light: "#FDFCF9",
          DEFAULT: "#FAF7F2",
          dark: "#F0EAE1",
        },
        saffron: {
          light: "#FF7839",
          DEFAULT: "#D95D26",
          dark: "#B84714",
        },
        olive: {
          light: "#3E664E",
          DEFAULT: "#2A4736",
          dark: "#1C3325",
        },
        gold: {
          light: "#F5D485",
          DEFAULT: "#C99224",
          dark: "#996C10",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft-sm": "0 2px 8px rgba(0, 0, 0, 0.04)",
        "soft-md": "0 8px 24px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 16px 40px rgba(0, 0, 0, 0.08)",
        "saffron": "0 10px 30px -5px rgba(217, 93, 38, 0.3)",
      }
    },
  },
  plugins: [],
};
export default config;
