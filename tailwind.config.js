module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        purple: {
          DEFAULT: '#b09be8',
        },
        red: {
          DEFAULT: '#f18986',
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
