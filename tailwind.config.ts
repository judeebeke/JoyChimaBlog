import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'info': '#1fb6ff',
      'primary': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'graydark': '#273444',
      'gray': '#8492a6',
      'graylight': '#d3dce6',
      'black': '#000000',
      'white': '#ffffff',
      'transparent': "#00000000"
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Lora', 'serif'],
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
