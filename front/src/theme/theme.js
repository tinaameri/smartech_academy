import { createTheme,Button,Title } from '@mantine/core';
import buttonClasses from '@/theme/button.module.scss'
import headlinesClasses from '@/theme/headlines.module.scss'

export const theme = createTheme({
  fontFamily: 'Yekan Bakh, sans-serif',
  //defaultRadius: '16px',
  media: {
    mobile:`@media (min-width: 1024px)`
  },

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
  components: {
    Button: Button.extend({
      classNames: buttonClasses,
    }), 
    Title: Title.extend({
      classNames: headlinesClasses,
    }),
  
    
  }, 
  headings: {
    fontFamily: 'Yekan Bakh, sans-serif',
    fontWeight: 650,
 
  },
});
