import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          primary: '#e5e7ebs',
        },
        dark: '#222222',
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
} satisfies Config;
