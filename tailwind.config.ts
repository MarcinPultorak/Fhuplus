import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      neutral: colors.neutral,
      gray: colors.gray,
      red: colors.red,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
    darkMode: false,
  },
  plugins: [],
};
export default config;
