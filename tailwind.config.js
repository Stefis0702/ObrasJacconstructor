/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      form:"#FFE3BF",
      navbar:"#2B2D37",
      navbar2:"#FF7B00",
      teal: "#26c4c5",
      fondheader: "#060e4d",

    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'Black': ['Black Ops One'],
    },
    textColor: {
      texto:"black",
      texto2:"#09090b",
      texto3:"#2B2D37",
    },
    plugins: [require('daisyui')],
    
    
  },
 
}

