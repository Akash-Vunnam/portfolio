/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          light: '#f5f7fa',
          dark: '#1e293b',
          gray: '#64748b',
        }
      }
    },
  },
  plugins: [],
}
