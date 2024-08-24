import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xsm': '320px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',

      'xmd': '880px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'starsGrey': '#5F6368',
      'starspurpleLight': '#6A0F8E',
      'starspink':'#fc538d',
      'starspurpleDark':'#8d62f4',
      'starsBlack': '#121212',
      'starsWhite': '#FFFFFF'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-circular)']
      },
      boxShadow: {
        'custom': '0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2)',
      }
    },
  },
  plugins: [require("daisyui")]
};
export default config;
