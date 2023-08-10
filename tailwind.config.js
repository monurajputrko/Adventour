/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes:{
        pulse : {
          "100%" : {
            opacity: '1'
          },
          "0%" : {
            opacity: '1'
          },
          "50%": {
            opacity: '.5'
          }
        }
      } 
    },
  },
  plugins: [require('flowbite/plugin')],
}


