module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      darkGrey: "#808191",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
  ],
};
