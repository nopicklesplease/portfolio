/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'yellow': '#ffdf18',
        'red': '#fe1f25',
        'darkred': '#d50008',
        'offred': '#a30005',
        // 'darkred': '#de0d2c',
        'blue': '#005cec',
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
        'offgray': '#f6f6f6',
        'lightgray': '#cecece',
        'lightergray': '#e6e6e6',
        'magenta': '#ff48f9',
      },
      spacing:{
        'abouttop': '95px',
        'work': '55.5px',
        'worktop': '89px',
        'contact': '103.6px',
        'contacttop': '145px',
        'themepb600': '17px',
        'themepb500': '15px',
        'themepb450': '13px',
        'themepb400': '10px',
        'themepb360': '7px',
        'nav': '.25rem',
      },
      width:{
        'rightspace': '401px',
        'medrightspace': '305px',
        'smrightspace': '293px',
        'pic': '321px',
        'bigpic': '500px',
        'content': '100%',
        '50': '9px',
        '290px': '290px',
        'aboutwidth': '210.5px',
      },
      height:{
        'contactheight': '560px',
      },  
      borderWidth: {
        '50': '10px',
        '100': '18px',
      },
      screens:{
        '1150px': '1150px',
        '915px': '915px',
        '960px': '960px',
        '840px': '840px',
        '880px': '880px',
        '790px': '790px',
        '600px': '600px',
        '380px': '380px',
      },
      flex:{
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%'
      },
      fontSize:{
        'header': '12rem',
        'pointninefive': '.95rem',
        'airHeader': '4rem',
        'desktopHeader': '5.25rem'
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

