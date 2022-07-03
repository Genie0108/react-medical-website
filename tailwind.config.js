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
        hospitalImg: "url(./assets/hospital.jpg)",
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
