// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#ff5733", // Add your custom color her
        greenbutten: "#1abc9c",
      },
    },
  },
  plugins: [],
};
