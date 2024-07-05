/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
  },

  plugins: [],
};
