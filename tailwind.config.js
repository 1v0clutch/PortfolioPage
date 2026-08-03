/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        'bg-card': '#1e293b',
        'bg-hover': '#263347',
        accent: '#38bdf8',
        'accent-2': '#818cf8',
        text: '#e2e8f0',
        muted: '#94a3b8',
        border: 'rgba(255,255,255,0.07)'
      },
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif']
      },
      borderRadius: {
        'custom': '14px'
      }
    },
  },
  plugins: [],
}
