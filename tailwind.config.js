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
        'rotate-and-more':'spin 2s linear infinite',
        'flip':'flipcard 1s linear ',
        'front':'frontCard',
        'backCard':'backCard',
        rotate:'spin 0.5s linear infinite'
      },
      keyframes:{
        spin:{
        '0%':{
          transform:'rotate(0deg)',
          opacity:'1'

        },
        '100%':{
          transform:'rotate(360deg)',
          opacity:'0'
        }
        },
        flipcard:{
        
        '100%':{
          transform:'rotateY(180deg)',
       
        }
        },
        frontCard:{
         
            '100%':{
  'background-color':'#f0f0f0',
  transform:'rotateY(180deg)'
            }
             
          
        },
        backCard:{
          '100%':{
'background-color':'#ccc',
transform:'rotateY(180deg)'
          }
           
        }
      }
    },
    

    
    colors:{
      ...colors,
      'splash-page-color-one':'rgba(39, 46, 167, 0.5)',
      'splash-page-color-two':'rgba(39, 46, 167, 0.1)',
      'splash-page-color-three':'rgba(39, 46, 167, 0)',
      'cosmic-primary-color':'rgba(39, 46, 167, 1)',
      'home-slidder-color':'rgba(254, 254, 254, 1)',
      'cosmic-color-lightBlue':'rgba(39, 46, 167, 1)',
      'cosmic-color-nav-active':'rgba(39, 46, 167, 0.4)',
      'cosmic-color-warning-color':'rgba(168, 23, 23, 1)'
    }
  },
  plugins: [],
  safelist:['trueGray','lightBlue','warmGray','coolGray','blueGray']
}
