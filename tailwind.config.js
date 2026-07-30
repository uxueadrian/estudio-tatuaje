/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "deep-black": "#0a0a0a",
        "dark-gray": "#1a1a1a",
        "medium-gray": "#2a2a2a",
        "light-gray": "#6b6b6b",
        "pure-white": "#ffffff",
        "off-white": "#f5f5f5",
        gold: "#c9a84c",
        "gold-light": "#d4b85a",
        "gold-dark": "#a88a2d",
        "dark-red": "#8b0000",
        "dark-red-hover": "#a00000",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
