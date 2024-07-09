/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust for your file extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
