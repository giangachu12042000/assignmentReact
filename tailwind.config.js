module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    customForms: (theme) => ({
      default: {
        input: {
          borderRadius: theme("borderRadius.lg"),
          backgroundColor: theme("colors.gray.200"),
          "&:focus": {
            backgroundColor: theme("colors.white"),
          },
        },
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    }),
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "6rem",
      },
    },
    backgroundImage: (theme) => ({
      "footer-texture": "url('/images/bg.jpg')",
    }),
  },
  boxShadow: {
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 255, 0, 0.10)",
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
