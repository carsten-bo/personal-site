const disabledCss = {
  "code::before": false,
  "code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  pre: false,
  code: false,
  'pre code': false,
  'code::before': false,
  'code::after': false
}

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
        "custom-dark-blue": "#0e1525",
        "custom-orange": "#f26207",
        "custom-grey": "#8b99ae"
      },
      typography: {
        default: {
          css: {
            DEFAULT: { css: disabledCss },
            sm: { css: disabledCss },
            lg: { css: disabledCss },
            xl: { css: disabledCss },
            '2xl': { css: disabledCss },
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],

}
