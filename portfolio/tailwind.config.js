/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{ //adding colors to the platform
        primary:"#FFFFFF",
        secondary:"#000000",
        baseprimary:"#00bfff",
    },
    fontFamily:{

      poppins: ['Poppins', 'sans-serif'],
      russoone: ['Russo One', 'sans-serif'],
      kdamThmorPro: ['Kdam Thmor Pro', 'sans-serif'],
      lorniasolid:['Londrina Solid', 'sans-serif'],
      bebasneue:['Bebas Neue', 'sans-serif'],
      bricolagegrotesque:['Bricolage Grotesque', 'sans-serif'],
      kanit:['Kanit', 'sans-serif'],
      dmsans:['DM Sans', 'sans-serif'],
      londrina:['Londrina Solid', 'sans-serif'],
      atma:['Atma', 'sans serif']

    },
    
    },
  },
  plugins: [],
}

