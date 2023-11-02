/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Hanken:['Hanken Grotesk', 'sans-serif']
      },

      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
    },
    
  },
  plugins: [],
}