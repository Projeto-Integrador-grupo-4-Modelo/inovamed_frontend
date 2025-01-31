/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#0D9488",
        tealDark: "#0D9389",
        blue: "#1C74C8",
        blueDark: "#2464E9",
      },
    },
  },
  plugins: [],
};
