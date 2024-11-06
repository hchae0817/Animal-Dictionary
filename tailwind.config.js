/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/component/Home.tsx"],
  theme: {
    extend: {
      colors: {
        primary: '#EE9789'
      },
      backgroundImage: {
        'model_s': "url('./src/component/blue.jpeg')"
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'san-serif']
    }
  },
  plugins: [],
}
