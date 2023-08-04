/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E3A03C',
        secondary: '#9747FF',
        cardBg: '#232B34',
        navBg: '#112A44',
        bgColor: "#1C2025"
      },
    },
  },
  plugins: [],
}