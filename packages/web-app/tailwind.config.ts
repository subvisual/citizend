import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nohemi: ['var(--font-nohemi)'],
      },
      gridTemplateColumns: {
        footer: 'repeat(2, minmax(0, 31rem))',
      },
      backgroundImage: {
        'background-desktop': 'url("/background-desktop.png")',
        'background-mobile': 'url("/background-mobile.png")',
        'background-footer-desktop': 'url("/background-footer-desktop.svg")',
      },
      fontSize: {
        sm: ['0.875rem', '1.5rem'],
        '3.5xl': ['2rem', '3.5rem'],
        '5.5xl': ['3.25rem', '3.75rem'],
        '5.75xl': ['3.5rem', '5rem'],
      },
      lineHeight: {
        '14': '3.5rem',
        '18': '4.5rem',
        '20': '5rem',
      },
      colors: {
        'mono-50': '#FFF',
        'mono-200': '#D5DBE8',
        'mono-400': '#7891B5',
        'mono-300': '#DADFED',
        'mono-800': '#536580',
        'mono-900': '#1A2330',
        'mono-950': '#0B1018',
        'blue-100': '#DAE4FF',
        'blue-400': '#527AFF',
        'blue-500': '#3865FD',
        'blue-600': '#1E40F2',
        'green-500': '#38FC50',
        'red-700': '#D6043E',
        'yellow-500': '#FCC738',
      },
      spacing: {
        '17': '4.25rem',
        '27': '6.75rem',
        '31': '7.75rem',
        '280': '70rem',
      },
      boxShadow: {
        'projects-table': '0px 4px 16px 0px #DADFED',
        banner: '0px 10px 30px 0px #0B1018',
      },
      borderRadius: {
        '2.5xl': '1.125rem',
        md: '0.3125rem',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
