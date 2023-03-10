module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  darkMode: "media",
  theme: {
    extend: {
        colors: {
          "custom-dark-blue":"#0e1525",
          "custom-orange":"#f26207",
          "custom-grey": "#8b99ae"
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],

}
