import { createTheme } from '@mantine/core';
import variantColorResolver from './button';

export const theme = createTheme({
  fontFamily: 'Yekan Bakh, sans-serif',
  //defaultRadius: '16px',
  variantColorResolver,

  radius: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },

  colors: {
    primary: [
      '#35A6B4',
      '#2E919E',
      '#E1F2F4',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
    ],
    secondary: [
      '#F25921',
      '#C13C0B',
      '#FFB38F',
      '#FFECDD',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
    ], third: [
      '#132D5C',
      '#1F4282',
      '#0F244A',
      '#132D5C',
      '#132D5C',
      '#132D5C',
      '#132D5C',
      '#132D5C',
      '#132D5C',
      '#132D5C',
    ], fourth: [
      '#8E56DC',
      '#2EAB91',
      '#E64C96',
      '#4B3DF7',
      '#E84A4A',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
    ],
    gray: [
      '#F5F7FB',
      '#EAEEF6',
      '#BCC9E2',
      '#A9B5CB',
      '#96A1B5',
      '#8D97AA',
      '#717988',
      '#555A66',
      '#42464F',
      '#42464F',
    ],

  },

  headings: {
    fontFamily: 'Yekan Bakh, sans-serif',
    fontWeight: 650,
    sizes: {
      h1: {
        fontSize: '34px',
        '@media (min-width: 768px)': { fontSize: '80px' },

      },
      h2: {
        fontSize: '28px',
        '@media (min-width: 768px)': { fontSize: '36px' },
        '@media (min-width: 1024px)': { fontSize: '44px' },
      },
    },
  },
});
