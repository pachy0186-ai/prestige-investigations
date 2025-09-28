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
          navy: "#0B2A6F",
          gold: "#FACC15",
          white: "#FFFFFF",
          paper: "#111111",
          // Text colors for better contrast
          'text-dark': "#1E293B",    // slate-800 for light backgrounds
          'text-darker': "#0F172A",  // slate-900 for maximum contrast
          'text-light': "#F8FAFC",   // slate-50 for dark backgrounds
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'base': ['16px', '1.6'],
        'lg': ['18px', '1.7'],
        'xl': ['20px', '1.7'],
        '2xl': ['24px', '1.4'],
        '3xl': ['30px', '1.3'],
        '4xl': ['36px', '1.2'],
        '5xl': ['48px', '1.1'],
        '6xl': ['60px', '1.0'],
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.12)",
        'gold': '0 4px 14px 0 rgba(250, 204, 21, 0.25)',
        'gold-lg': '0 10px 25px -3px rgba(250, 204, 21, 0.3)',
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
