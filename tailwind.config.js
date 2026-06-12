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
        // Primary
        primary: '#c0c1ff',
        'on-primary': '#1000a9',
        'primary-container': '#8083ff',
        'on-primary-container': '#0d0096',
        
        // Secondary
        secondary: '#5de6ff',
        'on-secondary': '#00363e',
        'secondary-container': '#00cbe6',
        'on-secondary-container': '#00515d',
        
        // Surface
        surface: '#0b1326',
        'on-surface': '#dae2fd',
        'surface-variant': '#2d3449',
        'on-surface-variant': '#c7c4d7',
        'surface-container': '#171f33',
        'surface-container-low': '#131b2e',
        'surface-container-high': '#222a3d',
        'surface-container-highest': '#2d3449',
        
        // Error
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        
        // Outline
        outline: '#908fa0',
        'outline-variant': '#464554',
        
        // Background
        background: '#0b1326',
        'on-background': '#dae2fd',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        'full': '9999px',
      },
      spacing: {
        'touch': '48px',
      },
    },
  },
  plugins: [],
}
