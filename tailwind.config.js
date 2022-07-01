module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ['"Poppins" ', "sans-serif"],
    },
    extend: {
      colors: {
        primary: "var(--c-bg-primary)",
        primaryDark: "var(--c-bg-primaryDark)",
        secondary: "var(--c-bg-secondary)",
        secondaryLight: "var(--c-secondarylight)",
      },
      backgroundImage: {
        hospitalImg: "url(./assets/images/hospital.jpg)",
      },
    },
  },
  plugins: [],
};
