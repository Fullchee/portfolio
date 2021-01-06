const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["Major Mono Display", ...defaultTheme.fontFamily.mono],
        display: ["Comfortaa"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
