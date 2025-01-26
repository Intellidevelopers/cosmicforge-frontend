import { transform } from 'typescript';
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily:{
        'open-sans':['Open Sans','sans-serif'],
        'poppins':['Poppins','sans-serif']
      },
      animation:{
        'rotate-and-more':'spin 2s linear infinite'
      },
      keyframes:{
        spin:{
        '0%':{
          transform:'rotate(0deg)',
          opacity:'1'

        },
        '100%':{
          transform:'rotate(360%)',
          opacity:'0'
        }
        }
      }
    },
    

    
    colors:{
      ...colors,
      'splash-page-color-one':'rgba(39, 46, 167, 0.5)',
      'splash-page-color-two':'rgba(39, 46, 167, 0.1)',
      'splash-page-color-three':'rgba(39, 46, 167, 0)',
      'cosmic-primary-color':'rgba(39, 46, 167, 1)'
    }
  },
  plugins: [],
  safelist:['trueGray','lightBlue','warmGray','coolGray','blueGray']
}
