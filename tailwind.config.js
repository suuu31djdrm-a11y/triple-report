/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        card: '4px 2px 8px 0 rgba(0, 0, 0, 0.10)',
        'bottom-only': '0 4px 8px 0 rgba(0, 0, 0, 0.10)',
        'top-subtle': '0 -2px 8px -2px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        /* メインカラー: #14228A に統一（旧 1e3a5f は使用しない） */
        primary: { DEFAULT: '#14228A', light: '#C5CAED' },
        score: { low: '#B91C1C', high: '#14228A' },
        scoreBg: '#F9F9FC',
        approved: { DEFAULT: '#166534', light: '#dcfce7' },
      },
    },
  },
  plugins: [],
}
