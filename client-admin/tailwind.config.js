/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
