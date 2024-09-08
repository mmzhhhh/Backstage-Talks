/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        creamYellow:'#f6e0a4;',
        pink:'#ff608c',
        white:'#fff',
        teal:'#00c1b5',
        yellow:'#ffbe00',
        red:'#e30512',
        orange:'#ff651a',
        blue:'#1d3fbb',
        dark:'#251d20',
      }
    },
  },
  safelist:[
    'bg-creamYellow',
    'bg-pink',
    'bg-white',
    'bg-teal',
    'bg-orange',
    'bg-yellow',
    'bg-blue',
    'bg-red',
  ],
  plugins: [],
}

