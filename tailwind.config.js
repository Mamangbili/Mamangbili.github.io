/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto Mono"', 'monospace'],
      },
      animation:
      {
        'reverse-spin': 'reverse-spin 6s linear infinite',
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage:
      {
        kotak: "url('https://static-00.iconduck.com/assets.00/playstation-square-icon-256x256-xdm1dai9.png')",
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      }
    },
  },
  plugins: [],
}