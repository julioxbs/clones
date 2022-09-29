/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        elevationShadow2: '0px 2px 0px #000000',
        elevationShadow4: '0px 4px 0px #000000',
        elevationShadow1: '0px 2px 0px #0000001a',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}