/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'html': 'rgba(255,136,23,0.78)',
        'css': 'rgba(24,127,204,0.78)',
        'js': 'rgba(240,178,9,0.78)',
        'sql': 'rgba(200,0,255,0.78)',
        'java': 'rgba(173,40,40,0.78)',
        'title': '#3E675C',
        'side-bar': '#63A594',
        'main': '#e7e7e7'

      }
    },
  },
  plugins: [],
}

