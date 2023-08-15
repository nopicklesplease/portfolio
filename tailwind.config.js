/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'yellow': '#ffdd18',
        'red': '#ff1f25',
        'blue': '#005cef',
        'green': '#20a39e',
        'orange': '#ffba49',
        'purple': '#8d6a9f',
        'slategray': '#212124'
      }
    },
    fontFamily: {
      'lato': ['Lato'],
      'open': ['"Open Sans"'],
      'oswald': ['Oswald'],
      'poppins': ['Poppins'],
      'roboto': ['Roboto']
    }
  },
  plugins: [],
  darkMode: 'class',
}

