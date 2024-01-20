/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "var(--color-secondary)",
      },
      textColor: {
        desc: "var(--color-mediumgrey)",
        title: "var(--color-lightgrey)",
        subtitle: "var(--color-hardgrey)",
      },
      colors: {
        icon: "var(--color-lightgrey)",
        iconActive: "var(--color-hardgrey)",
        button: "var(--color-danger)",
      },
      fontSize: {
        xsm: "0.6rem",
      },
    },
  },
  plugins: [],
};
