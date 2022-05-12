module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: {
          light: '#35373B',
          dark: '#27292D',
          card: '#969696',
        },
        textColor: {
          white: '#fff',
          light: '#C5C7CA',
          dark: '#6B6C70',
          placeholder: '#7F8084',
        },
        button: {
          blue: '#4A96FF',
        },
        background: {
          dark: '#e5e5e5',
          light: '#27292D',
          newPost: '#191920',
        },
      },
      container: {
        screens: {
          sm: '375px',
          xl: '700px',
        },
      },
    },
  },
  plugins: [],
}
