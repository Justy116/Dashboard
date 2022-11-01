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
      neutralGrey: "#F0F3F6",
      primaryorange: "#FF754C",
      primaryPurple: "#6C5DD3",
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
