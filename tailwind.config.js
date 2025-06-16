/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        primary: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7dd3fc',
          '400': '#38bdf8',
          '500': '#0ea5e9',
          '600': '#0284c7',
          '700': '#0369a1',
          '800': '#075985',
          '900': '#0c4a6e',
          '950': '#082f49',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
  // Add safelist to ensure critical classes are always included
  safelist: [
    'bg-white',
    'bg-black',
    'text-white',
    'text-black',
    'container',
    'mx-auto',
    'px-4',
    'flex',
    'items-center',
    'justify-center',
    'min-h-screen',
    'text-center',
    'font-black',
    'text-5xl',
    'md:text-6xl',
    'lg:text-7xl',
    'mb-12',
    'dark:bg-black',
    'dark:text-white',
    'antialiased'
  ]
}
