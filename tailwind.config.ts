import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050709',
        accent2: '#0f0715',
        accent: '#140c1c',
        primary: '#8750f7',
        secondary: '#2a1454',
      }
    },
  },
  plugins: [],
};
export default config;
