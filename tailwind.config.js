import { transform } from "typescript";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
  	extend: {
  		fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'rotate-and-more': 'spin 2s linear infinite',
  			flip: 'flipcard 1s linear ',
  			front: 'frontCard',
  			backCard: 'backCard',
  			flow: 'flow .5s linear infinite',
  			rotate: 'spin 0.5s linear infinite',
  			customBounce: 'bounce  1s ease-in',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			spin: {
  				'0%': {
  					transform: 'rotate(0deg)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(360deg)',
  					opacity: '0'
  				}
  			},
  			flipcard: {
  				'100%': {
  					transform: 'rotateY(180deg)'
  				}
  			},
  			frontCard: {
  				'100%': {
  					'background-color': '#f0f0f0',
  					transform: 'rotateY(180deg)'
  				}
  			},
  			backCard: {
  				'100%': {
  					'background-color': '#ccc',
  					transform: 'rotateY(180deg)'
  				}
  			},
  			flow: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(200%)'
  				}
  			},
  			bounce: {
  				'0%': {
  					transform: 'translateY(-25%)',
  					'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
  				},
  				'100%': {
  					transform: 'translateY(-25%)',
  					'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
  				},
  				'50%': {
  					transform: 'none',
  					'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		screens: {
  			xs: {
  				max: ' 390px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	colors: {
            ...colors,
  		'splash-page-color-one': 'rgba(39, 46, 167, 0.5)',
  		'splash-page-color-two': 'rgba(39, 46, 167, 0.1)',
  		'splash-page-color-three': 'rgba(39, 46, 167, 0)',
  		'cosmic-primary-color': 'rgba(39, 46, 167, 1)',
  		'home-slidder-color': 'rgba(254, 254, 254, 1)',
  		'cosmic-color-lightBlue': 'rgba(39, 46, 167, 1)',
  		'cosmic-color-nav-active': 'rgba(39, 46, 167, 0.4)',
  		'cosmic-color-warning-color': 'rgba(168, 23, 23, 1)',
  		'cosmic-color-yellow-color': 'rgba(232, 182, 0, 1)',
  		'cosmic-color-green-color': 'rgba(33, 132, 28, 1)',
  		'cosmic-color-border-color': 'rgba(39, 46, 167, 0.4)',
  		'cosmic-silver-color': 'rgba(232, 182, 0, 1)',
  		'cosmic-light-color-call': 'rgba(39, 46, 167, 0.4)',
  		'cosmic-doc-gradient-1': 'rgba(39, 46, 167, 0.6)',
  		'cosmic-doc-gradient-2': 'rgba(0,0,0,0.2)',
  		'cosmic-doc-gradient-3': 'rgba(0, 0, 0, 0.3)',
  		'cosmic-map-backgroud': 'rgba(3, 3, 3, 0.4)',
  		'cosmic-color-white-light': 'rgba(254, 254, 254, 0.2)',
  		'cosmic-color-landing-1': 'rgba(39, 46, 167, 0.3)',
  		'cosmic-color-landing-2': 'rgba(39, 46, 167, 0.3)',
  		'cosmic-color-white-bacground': 'rgba(254, 254, 254, 0.2)',
  		'cosmic-text-blue': 'rgba(39, 46, 167, 1)',
  		'cosmic-white-light-0.2': 'rgba(254, 254, 254, 0.2)'
  	}
  },
  plugins: [require("tailwindcss-animate")],
  safelist: ["neutral", "sky", "stone", "gray", "slate"],
};
