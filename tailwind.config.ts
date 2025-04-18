module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'fadeIn': 'fadeIn 0.3s ease-in-out',
          'fadeOut': 'fadeOut 0.3s ease-in-out',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
          fadeIn: {
            '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
            '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          },
          fadeOut: {
            '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
            '100%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          },
        },
      },
    },
    plugins: [],
  }