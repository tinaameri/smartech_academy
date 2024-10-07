
import {
    defaultVariantColorsResolver,
    parseThemeColor,
    rem,
    rgba,
    darken,
  } from '@mantine/core';
import { IconBorderRadius } from '@tabler/icons-react';
 const variantColorResolver = (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    const parsedColor = parseThemeColor({
      color: input.color || input.theme.primaryColor,
      theme: input.theme,
    });
  
    if (parsedColor.isThemeColor && input.variant === 'primary') {
      return {
        ...defaultResolvedColors,
        color: 'var(--mantine-color-primary-3)',
        hoverColor: 'var(--mantine-color-primary-0)',
        background:'var(--mantine-color-primary-0)',
        hover:'transparent',
        border: `${rem(1)} solid var(--mantine-color-primary-0)`,
      };
    }if (parsedColor.isThemeColor &&  input.variant === 'secondary') {
      return {
        ...defaultResolvedColors,
        color: 'var(--mantine-color-secondary-3)',
        hoverColor: 'var(--mantine-color-secondary-0)',
        background:'var(--mantine-color-secondary-0)',
        hover:'transparent',
        border: `${rem(1)} solid var(--mantine-color-secondary-0)`,
      };
    }
  
    if (parsedColor.isThemeColor && input.variant === 'primaryOutline') {
      return {
        background:'transparent',
        hover: 'var(--mantine-color-primary-0)',
        hoverColor:'#fff',
        border: `${rem(1)} solid var(--mantine-color-primary-0)`,
        color: 'var(--mantine-color-primary-0)',
      };
    }
  

    return defaultResolvedColors;
  };
  export default variantColorResolver;