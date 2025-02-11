import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'md' : '768px',
        'lg' : '1280px',
        'xl' : '1920px',
        '2xl' : '2560px',
        '3xl' : '3440px',
      },
      colors: {
        primary: '#0029A2',
        'white-vs': '#F8F8F8',
        'black-vs': '#222222',
        'blue-dark-vs': '#090056',
        'gray-vs': '#A2A2A2',
        'black-bg': '#3C3C3C'
      },
      fontFamily: {
        capriola: ['Capriola', ...fontFamily.sans],
        ovo: ['Ovo', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
export default config;
