/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      '2xs': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '576px',
      // => @media (min-width: 576px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container:{
      padding:{
        '2xs':'1rem',
        'xs':'1.5rem',
        'sm': '2rem',
        'md': '2.75rem',
        'lg': '2rem',
        'xl': '1rem',
        '2xl': '1rem',
      }
    },
    colors:{
      'accent':'#A18A68',
      'white':'#FFFFFF',
      'black':'#000000',
      'dark-gray':'#707070',
      'gray':'#D8D8D8',
      'light-gray':'#EFEFEF',
      'error':'#D82700',
    },
    fontFamily:{
      DM:['DM Sans', 'sans-serif'],
      Stencil:['Allerta Stencil', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
