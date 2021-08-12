module.exports = {
  mode: 'jit',
  purge: ['./**/*.html', './**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '575px',
      md: '768px',
      lg: '992px',
      xl: '1340px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '1rem',
      },
    },
    extend: {
      fontFamily: {
        fancy: ['Great Vibes', 'cursive'],
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        10: '10px',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      zIndex: {
        '-1': '-1',
        10000: '10000',
        10001: '10001',
      },
      spacing: {
        22: '5.5rem',
      },
      inset: {
        '-12.5': '-12.5%',
        87.5: '87.50%',
        125: '125%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
