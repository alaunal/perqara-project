/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {

    extend: {
      fontFamily: {
        display: ['"Montserrat"', "sans-serif"],
        body: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        primary: "#FF0000",
        maroon: "#E74C3C",
        body: "#1E232B",
        header: "#292E35",
        input: "#24282E",
        footer: "#15191E",
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '9/14': '9 / 14',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
