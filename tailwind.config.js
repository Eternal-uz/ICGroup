module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // container:{
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '1.5rem',
    //     lg: '2rem'
    //   }
    // },
    extend: {
      colors:{
        logo: '#E94A47',
        teal: '#00AE69',
        bgblue: '#3366FF',
        tblue:  '#3366FF99',
        borderColor: '#3366FF',
        tcolor: '#1D1D1F',
        uzs: '#2E5BFF',
        inputActiveColor: '#E0E7FF33'
      },
      fontFamily:{
        OpenSans: 'OpenSans',
        SFProText: 'SFT',
        Rubik: 'Rubik',
        SFProDisplay: 'SFD',
        Poppins: 'Poppins'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
