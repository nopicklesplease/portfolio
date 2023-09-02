/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'yellow': '#ffdd18',
        'red': '#ff1f25',
        'darkred': '#de0d2c',
        'blue': '#005cef',
        'lightblue': '#438bff',
        'green': '#28b267',
        // 'green': '#20a39e',
        'offwhite': '#fffbeb',
        // 'orange': '#ffba49',
        'darkgray': '#444444',
        'rightoffgray': '#393939',
        'darkergray': '#2c2c2f',
        'orange': '#ffc03f',
        'purple': '#88589f',
        // 'purple': '#8d6a9f',
        'slategray': '#212124',
        'offgray': '#f0f0f0',
        'lightgray': '#cecece',
        'lightergray': '#e6e6e6',
        'magenta': '#ff48f9',
      },
      spacing:{
        'abouttop': '90px',
        'work': '53.5px',
        'worktop': '95px',
        'contact': '109.85px',
        'contacttop': '130px',
      },
      width:{
        'rightspace': '401px',
        'pic': '321px',
      },
      height:{
        'contactheight': '560px',
      },  
      borderWidth: {
        '50': '10px',
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

