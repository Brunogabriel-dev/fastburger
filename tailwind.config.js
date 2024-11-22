/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {'food-image': "url('/src/assets/logoQuikDeli.png')",'food-image-2': "url('/src/assets/bgfood.png')"},
    },
  },
  plugins: [],
}

