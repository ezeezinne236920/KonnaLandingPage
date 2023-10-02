/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,}'],
  theme: {
    screens: { xs: '390px', sm: '480px', md: '768px', lg: '976px', xl: '1440px' },
    extend: {
      colors: { blueBgColor: '#020324', blueCardBg: '#0573f1' },
      spacing: {
        '2/25': '4%',
       ' 3/20': '15%',
        '1/10': '10%',
        '3/10': '30%',
        '8/25': '32%',
        '7/20': '35%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      fontSize: {
        xxs: '0.625rem', // Equivalent to 10px
        xxxs: '0.5rem', // Equivalent to 8px
        // Add more custom font sizes as needed
      },
    },
    //
    //
  },                    
  plugins: [],
}
