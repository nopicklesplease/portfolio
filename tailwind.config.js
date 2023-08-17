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
        'offwhite': '#fffbeb',
        // 'orange': '#ffba49',
        'orange': '#ffc76e',
        'purple': '#8d6a9f',
        'slategray': '#212124',
        'lightgray': '#cecece',
        'lightergray': '#e6e6e6',
        'magenta': '#ff48f9',
      },
      spacing:{
        'abouttop': '85px',
        'work': '53.5px',
        'worktop': '75px',
        'contact': '109.85px',
        'contacttop': '130px',
      },
      borderWidth: {
        '50': '30px',
      }
    },
    fontFamily: {
      'lato': ['Lato'],
      'open': ['"Open Sans"'],
      'tech': ['"Share Tech Mono"'],
      'oswald': ['Oswald'],
      'poppins': ['Poppins'],
      'roboto': ['Roboto']
    },
  },
  plugins: [],
  darkMode: 'class',
}

