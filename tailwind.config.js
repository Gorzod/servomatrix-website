/** @type {import('tailwindcss').Config} */
export default {
  // Class-based dark mode: particles component checks html.classList.contains("dark")
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
