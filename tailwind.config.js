module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        normal: ['Mali', 'sans-serif'],
        display: ['Gorditas', 'serif'],
      },
      colors: {
        primary: '#005251',
        'primary-light': '#006160',
        accent: '#00AAAA',
        'accent-light': '#02D0D0',
        dark: '#615F5F',
        light: '#FFFAFA',
        neutral: '#CACACA',
      },
    },
  },
  plugins: [],
};
