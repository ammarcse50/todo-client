/** @type {import('tailwindcss').Config} */
export default {
  themes: ["light", "dark", "cupcake"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cus: ["Exo 2", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
