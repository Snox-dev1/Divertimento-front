/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        background: '#2d3436',
        primary: '#ff0086',
        'primary-light': '#ff33a8',
        white: '#ecf0f1',
        secondary: '#60c4e3',
        'primary-dark': '#b70069',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        42: '10.5rem',
        76: '19rem',
        84: '21rem',
        88: '22rem',
        92: '23rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        148: '37rem',
        152: '38rem',
        156: '39rem',
        160: '40rem',
        164: '41rem',
        168: '42rem',
        172: '43rem',
        176: '44rem',
        180: '45rem',
        184: '46rem',
        188: '47rem',
        190: '48rem',
        194: '49rem',
        200: '50rem',
        204: '51rem',
      },
      zIndex: {
        '-1': '-1',
      },
      inset: {
        '2/5': '40%',
      },
      boxShadow: {
        '3xl': '-11px 11px 5px rgba(0, 0, 0, 0.3);',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  variants: {
    extend: {
      gradientColorStops: ['active', 'group-hover'],
      scale: ['active', 'group-hover', 'hover'],
    },
  },
  plugins: [],
};
