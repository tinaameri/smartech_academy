module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '22.5em',
        'mantine-breakpoint-sm': '22.5em',
        'mantine-breakpoint-md': '90%',
        'mantine-breakpoint-lg': '64em',
        'mantine-breakpoint-xl': '64em',
      },
    },
  },
};
