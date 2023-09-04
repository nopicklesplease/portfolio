/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'yellow': '#ffdd18',
        'red': '#ff1f25',
        'darkred': '#e70008',
        // 'darkred': '#de0d2c',
        'blue': '#005cef',
        'lightblue': '#438bff',
        'green': '#28b267',
        // 'green': '#20a39e',
        'offwhite': '#fffbeb',
        // 'orange': '#ffba49',
        'darkgray': '#454545',
        'rightoffgray': '#393939',
        'darkergray': '#191919',
        'orange': '#ffc03f',
        'purple': '#8b5ea2',
        // 'purple': '#8d6a9f',
        'slategray': '#212124',
        'offgray': '#f0f0f0',
        'lightgray': '#cecece',
        'lightergray': '#e6e6e6',
        'magenta': '#ff48f9',
      },
      spacing:{
        'abouttop': '95px',
        'work': '53.5px',
        'worktop': '82px',
        'contact': '109.85px',
        'contacttop': '135px',
      },
      width:{
        'rightspace': '401px',
        'medrightspace': '305px',
        'smrightspace': '293px',
        'pic': '321px',
        'content': '100%',
        '50': '10px',
      },
      height:{
        'contactheight': '560px',
      },  
      borderWidth: {
        '50': '10px',
      },
      screens:{
        '1150px': '1150px',
        '900px': '900px'
      },
      flex:{
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%'
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

