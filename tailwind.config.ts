import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        disabledOpacity: '0.3',
        radius: {
          small: '3px',
          medium: '6px',
          large: '9px'
        },
        borderWidth: {
          small: '1px',
          medium: '1px',
          large: '2px'
        }
      },

      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            foreground: '#11181C',
            primary: { DEFAULT: '#2ab674' }
          }
        },
        dark: {
          colors: {
            background: '#000000',
            foreground: '#ECEDEE',
            primary: { DEFAULT: '#2ab674' }
          }
        }
      }
    })
  ]
};
export default config;
