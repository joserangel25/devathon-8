/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#00873E'
      },
      colors: {
        'primary': '#00873E'
      }
    },
  },
  plugins: [],
}

