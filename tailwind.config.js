/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "maison-neue": ["Maison Neue"],
      },
      colors: {
        primary: "#ffffff",
        "primary-text": "#1a202c",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
