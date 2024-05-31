/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}', 
  
  ],
  theme: {
    
    fontFamily: {
      primary:"generalFont",
      header:"headerFont",
     
    },
    borderRadius :{
      'headerBox':'56% 44% 61% 39% / 34% 75% 25% 66%  ',
      'full': '9999px',
    },
    extend: {
    
      colors: {
        'txtP':'#3a3d53',
        'headerBG':'linear-gradient(#f8d5d3, rgba(248, 213, 211, 0));',
        'orangeLight': '#ffe8e7',
        'headingTxt': '#181b2e',
        'headingBg':'#f9d7d5',
        'body': '#3a3d53',
        'orange': '#fe5621',
        'mainBg':'rgb(210, 237, 255)',
        'bottomMainBg':'rgb(238, 242, 209)',

        
      },
      keyframes:{
        spinPic:{
          '0%':{transform:'rotate(0deg)'},
          '100%':{transform:'rotate(360deg)'},
        },
        profilePic:{
          '0':{borderRadius:'40% 50% 70% 40% / 40% 40% 60% 50%'},
          '30%':{borderRadius:'70% 30% 40% 50% / 30% 40% 70% 70%'},
          '60%':{borderRadius:'100% 60% 60% 100% / 100% 100% 70%'},
         '100%':{borderRadius:'40% 60% 50% 30% / 40% 40% 60% 20%'},
        }
      },
      animation:{
        animeSpin:'spinPic 10s linear infinite  forwards',
        profilePic:'profilePic 3s linear infinite ',
      },
      backgroundImage:{
        'header':"url('/src/img/mahla/h1.png')",
      },
    },
  },
  plugins: [],
}




