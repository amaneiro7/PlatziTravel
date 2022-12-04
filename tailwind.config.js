/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"], 
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'terciary':"#61AEC9",
    },
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'yosemite': "url('../img/yosemite.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'LA': "url('../img/LA.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'seattle': "url('../img/seattle.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'new_york': "url('../img/new_york.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'norway': "url('../img/norway.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'sydney': "url('../img/sydney.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'miami': "url('../img/miami.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'switzerland': "url('../img/switzerland.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'norway': "url('../img/norway.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'chicago': "url('../img/chicago.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'europe': "url('../img/europe.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'iceland': "url('../img/iceland.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
			  'bali': "url('../img/bali.jpg'), linear-gradient(190deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",			  
      }
    },
  },
  plugins: [],
}
