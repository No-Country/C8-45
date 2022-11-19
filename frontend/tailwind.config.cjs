/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        title: ['Lexend', 'sans-serif'],
      },
      backgroundImage: {
        wavePattern: "url('/src/assets/heroBack.svg')",
      },
    },
    fontWeight: { bold: 700 },
  },
  plugins: [],
};
