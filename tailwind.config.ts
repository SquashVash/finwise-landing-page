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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",
      },
      keyframes: {
        infiniteScroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        infiniteScrollReverse: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' }
        },
      },
      animation: {
        'infiniteScroll': 'infiniteScroll 20s linear infinite',
        'infiniteScrollReverse': 'infiniteScrollReverse 20s linear infinite',
      },
    },    
  },
  plugins: [],
};

export default config;
