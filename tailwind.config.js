/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/stylesheets/input.css", "./views/*/*ejs", "./views/*ejs"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Nunito'],
      'serif': ['Inter']
    }
  },
  plugins: [],
}

