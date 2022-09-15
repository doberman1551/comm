/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        'bg_image': "url('/img/bgImage1.svg')"
      },
      fontFamily: {
        myfont: ['Futura'],
        sans: ['Futura', 'sans-serif'],
      },
      colors:{
        primary:"#8338EC",
        lightPink:"#D1BCE3"
      }
    },
  },
  plugins: [],
}
