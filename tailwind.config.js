/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair-display)"],
        poppins: ["var(--font-poppins)"],
        sourceserif4: ["var(--font-source-serif-4)"],
      },
    },
  },
  plugins: [],
};