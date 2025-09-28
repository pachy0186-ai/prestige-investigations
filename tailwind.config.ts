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
        prestige: {
          black: "#0A0A0A",
          gold: "#F5C518",
          gray: "#6B7280",
          white: "#FFFFFF",
          paper: "#111111"
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.12)",
        'gold': '0 4px 14px 0 rgba(245, 197, 24, 0.25)',
        'gold-lg': '0 10px 25px -3px rgba(245, 197, 24, 0.3)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.8)), url('/images/prestige_banner.webp')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
