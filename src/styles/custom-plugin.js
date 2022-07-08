const plugin = require("tailwindcss/plugin");

const highOpacity = 0.87;
const highOpacityHex = "DE";
const medOpacity = 0.6;
const medOpacityHex = "99";
const lowOpacity = 0.38;
const lowOpacityHex = "61";

module.exports = plugin(function ({
  addBase,
  addComponents,
  addUtilities,
  theme,
}) {
  /* reference: https://www.joshwcomeau.com/css/custom-css-reset/ */
  addBase({
    /* GLOBAL LAYOUTS */
    body: {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      fontSize: theme("fontSize.lg"),
    },
    "#app": {
      minHeight: "100vh",
    },
    /* DEFAULT COLORS */
    ".light": {
      "--default-color": theme("colors.gray.950"),
      "--default-bg": theme("colors.gray.100"),
      color: "var(--default-color)",
      background: "var(--default-bg)",
    },
    ".dark": {
      "--default-color": theme("colors.gray.100"),
      "--default-bg": theme("colors.gray.900"),
      color: "var(--default-color)",
      background: "var(--default-bg)",
    },
    main: {
      width: "min(95%, 800px)",
      paddingBottom: theme("spacing[16]"),
    },
    /* TYPOGRAPHY */
    h1: {
      fontSize: theme("fontSize.4xl"),
      fontWeight: theme("fontWeight.bold"),
      marginTop: theme("spacing[8]"),
      marginBottom: theme("spacing[16]"),
    },
    h2: {
      fontSize: theme("fontSize.3xl"),
      fontWeight: theme("fontWeight.bold"),
      marginTop: theme("spacing[12]"),
      marginBottom: theme("spacing[6]"),
    },
    h3: {
      fontSize: theme("fontSize.2xl"),
      fontWeight: theme("fontWeight.bold"),
      marginTop: theme("spacing[8]"),
      marginBottom: theme("spacing[4]"),
    },
    p: {
      marginBottom: theme("spacing[8]"),
    },
  });

  addUtilities({
    /* FOR DEBUGGING */
    ".debug": {
      border: "1px solid red",
    },
    /* STATUSES WITH COLORS */
    ".clickable-transparent": {
      opacity: medOpacity,
      "&:hover": {
        opacity: highOpacity,
      },
      "&:active": {
        opacity: 1,
      },
    },
    ".disabled": {
      cursor: "default",
      opacity: lowOpacity,
    },
    ".click": {
      color: "var(--click-color, var(--default-color))",
      borderColor: "var(--click-color, var(--default-color))",
      background: "var(--click-bg)" /* transparent by default */,
      "--click-hover-bg": theme("colors.gray.200"),
      "--click-active-bg": theme("colors.gray.300"),
      ".dark &": {
        "--click-hover-bg": theme("colors.gray.800"),
        "--click-active-bg": theme("colors.gray.700"),
      },
      "&:hover": {
        background: "var(--click-hover-bg)",
      },
      "&:active": {
        background: "var(--click-active-bg)",
      },
    },
    ".click-filled": {
      color: "var(--default-bg)",
      border: "none",
      background: "var(--click-color, var(--default-color))",
      "--click-hover-bg": theme("colors.gray.800"),
      "--click-active-bg": theme("colors.gray.700"),
      ".dark &": {
        "--click-hover-bg": theme("colors.gray.200"),
        "--click-active-bg": theme("colors.gray.300"),
      },
    },
    ".click.click-primary": {
      "--click-color": theme("colors.primary.600"),
      "--click-hover-bg": theme("colors.primary.100"),
      "--click-active-bg": theme("colors.primary.200"),
      ".dark &": {
        "--click-color": theme("colors.primary.400"),
        "--click-hover-bg": theme("colors.primary.900") + medOpacityHex,
        "--click-active-bg": theme("colors.primary.900"),
      },
    },
    ".click.click-secondary": {
      "--click-color": theme("colors.secondary.600"),
      "--click-hover-bg": theme("colors.secondary.100"),
      "--click-active-bg": theme("colors.secondary.200"),
      ".dark &": {
        "--click-color": theme("colors.secondary.400"),
        "--click-hover-bg": theme("colors.secondary.900") + medOpacityHex,
        "--click-active-bg": theme("colors.secondary.900"),
      },
    },
    ".click.click-red": {
      "--click-color": theme("colors.red.600"),
      "--click-hover-bg": theme("colors.red.100"),
      "--click-active-bg": theme("colors.red.200"),
      ".dark &": {
        "--click-color": theme("colors.red.400"),
        "--click-hover-bg": theme("colors.red.900") + medOpacityHex,
        "--click-active-bg": theme("colors.red.900"),
      },
    },
    ".click.click-amber": {
      "--click-color": theme("colors.amber.600"),
      "--click-hover-bg": theme("colors.amber.100"),
      "--click-active-bg": theme("colors.amber.200"),
      ".dark &": {
        "--click-color": theme("colors.amber.400"),
        "--click-hover-bg": theme("colors.amber.900") + medOpacityHex,
        "--click-active-bg": theme("colors.amber.900"),
      },
    },
    ".click.click-green": {
      "--click-color": theme("colors.green.600"),
      "--click-hover-bg": theme("colors.green.100"),
      "--click-active-bg": theme("colors.green.200"),
      ".dark &": {
        "--click-color": theme("colors.green.400"),
        "--click-hover-bg": theme("colors.green.900") + medOpacityHex,
        "--click-active-bg": theme("colors.green.900"),
      },
    },

    ".click-filled.click-primary": {
      "--click-color": theme("colors.primary.500"),
      "--click-hover-bg": theme("colors.primary.400"),
      "--click-active-bg": theme("colors.primary.300"),
      ".dark &": {
        "--click-color": theme("colors.primary.400"),
        "--click-hover-bg": theme("colors.primary.500"),
        "--click-active-bg": theme("colors.primary.600"),
      },
    },
    ".click-filled.click-secondary": {
      "--click-color": theme("colors.secondary.600"),
      "--click-hover-bg": theme("colors.secondary.500"),
      "--click-active-bg": theme("colors.secondary.400"),
      ".dark &": {
        "--click-color": theme("colors.secondary.400"),
        "--click-hover-bg": theme("colors.secondary.500"),
        "--click-active-bg": theme("colors.secondary.600"),
      },
    },
    ".click-filled.click-red": {
      "--click-color": theme("colors.red.600"),
      "--click-hover-bg": theme("colors.red.500"),
      "--click-active-bg": theme("colors.red.400"),
      ".dark &": {
        "--click-color": theme("colors.red.400"),
        "--click-hover-bg": theme("colors.red.500"),
        "--click-active-bg": theme("colors.red.600"),
      },
    },
    ".click-filled.click-amber": {
      "--click-color": theme("colors.amber.600"),
      "--click-hover-bg": theme("colors.amber.500"),
      "--click-active-bg": theme("colors.amber.400"),
      ".dark &": {
        "--click-color": theme("colors.amber.400"),
        "--click-hover-bg": theme("colors.amber.500"),
        "--click-active-bg": theme("colors.amber.600"),
      },
    },
    ".click-filled.click-green": {
      "--click-color": theme("colors.green.600"),
      "--click-hover-bg": theme("colors.green.500"),
      "--click-active-bg": theme("colors.green.400"),
      ".dark &": {
        "--click-color": theme("colors.green.400"),
        "--click-hover-bg": theme("colors.green.500"),
        "--click-active-bg": theme("colors.green.600"),
      },
    },
  });

  addComponents({
    ".btn": {
      padding: theme("spacing[2]"),
      paddingLeft: theme("spacing[4]"),
      paddingRight: theme("spacing[4]"),
      fontWeight: theme("fontWeight.semibold"),
      borderRadius: "0.375rem",
      transitionDuration: theme("transitionDuration.DEFAULT"),
      transitionProperty:
        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity",
      transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
    },
    ".btn-icon": {
      paddingLeft: theme("spacing[2]"),
      paddingRight: theme("spacing[2]"),
    },
  });
});
