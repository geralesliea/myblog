module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'estudiante-banner': "url('/assets/images/Banner-header-proyecto.png')",
      }),
      maxWidth: {
        '1/4': '25%',
        '3/4': '75%',
        '1/2': '50%',
        '190px': '190px'
      },
      fontSize: {
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['20px', '28px'],
        'xl': ['19px', '25px'],
        '4xl': ['30px', '30px'],
        '5xl': ['41px', '41px']
      },
      textColor: {
        'green': '#2dcccd',
        'blue': '#004481',
        'yellow': '#e3342f',
        'black': '#4d4d4d',
        'white': '#ffffff',
        'blue-l': '#004481'
      },
      padding: {
        '5%': '5%',
        '10%': '10%'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
