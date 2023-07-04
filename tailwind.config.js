/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        f0eac7: '#f0eac7',
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
}