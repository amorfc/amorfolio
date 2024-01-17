/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#525252",
        secondary: "#414141",
        ternary: "#313131",
        danger: "#CA3E47",
        hardgrey: "#666666",
        mediumgrey: "#7F7F7F",
        lightgrey: "#999999",
      },
    },
  },
  plugins: [],
};
