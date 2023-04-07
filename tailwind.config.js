/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        khulabold: ["KHULA BOLD", "sans-serif"],
        khulaXbold: ["KHULA EXTRABOLD", "sans-serif"],
        khulalight: ["KHULA LIGHT", "sans-serif"],
        khulareg: ["KHULA REGULAR", "sans-serif"],
        khulasemi: ["KHULA SEMIBOLD", "sans-serif"],
        caramel: ["CARAMEL", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/public/images/Checklist.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require('flowbite/plugin')],
};
// COMMENT