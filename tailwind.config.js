/** @type {import('tailwindcss').Config} */
export default {
  themes: ["light", "dark", "cupcake"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
