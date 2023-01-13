/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: '#1E1F2B',
        myGreen: '#2BA386'
      },
    },
  },
  plugins: [],
}
