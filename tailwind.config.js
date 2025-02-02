/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garante que o Tailwind funcione em todo o src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
