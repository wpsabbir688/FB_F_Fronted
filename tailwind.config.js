/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
  'xs': '400px',
  'sm': '576px',
  'md': '768px',
  'lg': '992px',
  'xl': '1200px',
  '2xl': '1400px',
  '3xl': '1600px',
  '4xl': '1920px'
},

      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-50deg)' },
          '50%': { transform: 'rotate(50deg)' },
        },
      },
      animation: {
        'sway': 'sway 10s ease-in-out infinite',
      },



    },
  },

   
 
  plugins: [],
}

