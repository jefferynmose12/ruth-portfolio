/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baskervville: ["Baskervville", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "black-text": "rgba(0, 0, 0, 1)",
        "dark-orange": "#B85600",
        "fade-grey": "#3F3E3E",
        "medium-grey": "rgba(71, 71, 71, 1)",
        "light-grey-border": "rgba(227, 227, 227, 1)",
        "light-pink": "#FFE7CA",
      },
    },
  },
  plugins: [],
};
