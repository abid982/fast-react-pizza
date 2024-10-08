/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // pizza: 'Roboto Mono, monospace' --> font-pizza
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      colors: {
        pizza: '#123456',
      },
      fontSize: {
        // huge: ['80rem', { lineHeight: '1' }], --> text-huge
      },
      huge: {
        // dvh --> dynamic viewport height
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
