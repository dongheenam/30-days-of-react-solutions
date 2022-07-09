const plugin = require("tailwindcss/plugin");

const highOpacity = 0.87;
const highOpacityHex = "DE";
const mdOpacity = 0.6;
const mdOpacityHex = "99";
const lowOpacity = 0.38;
const lowOpacityHex = "61";

module.exports = plugin(function ({ addBase, theme }) {
  /* reference: https://www.joshwcomeau.com/css/custom-css-reset/ */
  addBase({
    /* DEFAULT COLORS */
    ".light": {
      "--default-color": theme("colors.gray.900"),
      "--default-bg": theme("colors.gray.50"),
      color: "var(--default-color)",
      background: "var(--default-bg)",
    },
    ".dark": {
      "--default-color": theme("colors.gray.100"),
      "--default-bg": theme("colors.gray.950"),
      color: "var(--default-color)",
      background: "var(--default-bg)",
    },
  });
});
