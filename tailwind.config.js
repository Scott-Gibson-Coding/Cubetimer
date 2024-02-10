/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b79cc",
        secondary: "#f2f2f2",
      },
      textColor: {
        light: "#dfffdf",
        dark: "#000",
      },
    },
  },
  plugins: [],
};
