/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1d", 
        foreground: "#f1f5f9", 
        formBg: "#1e293b",
        labelColor: "#94a3b8"
      },
    },
  },
  plugins: [],
}