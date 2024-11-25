/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        c1: '#88ea63',
        c2: '#5aa63d',
        c3: '#0cbdad',
        c4: '#388079',
        empty: '#D9D9D9',
        'nav-active': "#AEF195"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(136, 234, 99, 0) 0%, rgba(136, 234, 99, 0.63) 52%, rgba(136, 234, 99, 1) 100%)',
        'custom-gradient-to-top': 'linear-gradient(0deg, rgba(136, 234, 99, 0) 0%, rgba(136, 234, 99, 0.63) 52%, rgba(136, 234, 99, 1) 100%)',
      },
    },
  },
  plugins: [],
}

