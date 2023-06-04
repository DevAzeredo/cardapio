import type { Config } from 'tailwindcss';
const darkMode = require('tailwindcss-dark-mode');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#333333', // Cor de fundo do tema dark
          text: '#ffffff', // Cor do texto do tema dark
        },
        light: {
          background: '#f5f5f5', // Cor de fundo do tema light
          text: '#000000', // Cor do texto do tema light
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
      textColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-dark-mode')()],
} satisfies Config;
