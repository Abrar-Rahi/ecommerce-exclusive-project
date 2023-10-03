/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins'],
        'lora': ['Lora'],
        'inter': ['Inter'],
      },
      colors: {
        'reed': '#DB4444',
        'sWhite': '#FAFAFA',
        'orng': '#FFAD33',
        'gren': '#00FF66',
        'secondary': '#F5F5F5',
        'bdrclr': '#D9D9D9',
        'cartBG': '#FFF4F4',
      },
      spacing: {
        '140': '140px',
        '170': '170px',
        '145': '145px',
        '30': '30px',
        '35': '35.5px',
        '87': '87px',
        '67': '67px',
        '75': '75px',
        '270': '270px',
        '250': '250px',
        '230': '230px',
        '120': '120px',
        '150': '150px',
        '206': '206px',
        '233': '233px',
        '284': '284px',
        '300': '300px',
        '470': '470px',
        '425': '425px',
        '324': '324px',
        '40%': '40%',
        '16%': '16%',
        '8%': '8%',
        '21%': '21%',
        '23%': '23%',
        '15%': '15%',
        
        
      },
      letterSpacing: {
        4: '0.04em',
      },
      fontSize: {
        px : '1px',
        54 : '54px',
        32 : '32px',
        6 : '6px',
        110 : '110px',
      },
      maxWidth: {
        'container': '1170px',
      }
    },
  },
  plugins: [],
}

