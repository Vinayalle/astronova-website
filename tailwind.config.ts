import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customViolet: '#642C8F',
        customPurple: '#642C8F',
        customOrange: '#642C8F',
      }
    },
  },
  plugins: [],
}

export default config

