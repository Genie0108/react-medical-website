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
        formImg: "url(./assets/doctor.jpg)",
        videoCard:
          "linear-gradient(to top,rgba(10, 124, 139,1) 30%,rgba(10, 124, 139,0.3)), url(https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-1-1.jpg)",
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
