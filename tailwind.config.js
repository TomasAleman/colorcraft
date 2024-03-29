/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    mode: 'jit',
    theme: {
      extend: {
        fontFamily:{
          roboto: ['Roboto', 'sans-serif']
        },
        colors: {

        },
        transitionTimingFunction: {
          'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
        },
      },
      fontSize: {
        xs: '0.5rem',
        sm: '0.8rem',
        md: '1rem',
        base: '1.2rem',
        lg: '2rem',
        xl: '3.7rem',
        '2xl': '4rem',
        '3xl': '5rem',
        '4xl': '6rem',
        '5xl': '8rem',
      },
    },
    plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  };
  