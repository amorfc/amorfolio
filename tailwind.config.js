/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#525252",
      secondary: "#414141",
      ternary: "#313131",
      danger: "#CA3E47",
    },
    boxShadow: {
      "neu-primary": ["20px 20px 60px #414141", "-20px -20px 60px #525252"],
    },
  },
  plugins: [],
};
