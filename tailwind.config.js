/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from DESIGN_SYSTEM.md
        'kulachi-rose': '#D4A5A5',
        'kulachi-sand': '#F5E6D3',
        'kulachi-gold': '#C9A962',
        'kulachi-charcoal': '#333333',
        'kulachi-offwhite': '#FAF9F8',
        'kulachi-dusty': '#B0A4A4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
