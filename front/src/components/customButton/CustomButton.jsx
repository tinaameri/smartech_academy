import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  darken,
} from '@mantine/core';import { buttonsConfig } from './buttonsConfig';
import Link from 'next/link';
const variantColorResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `${rem(1)} solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};
const CustomButton = ({
  children,
  title,
  actionType,
  buttonConfig = buttonsConfig.primaryBtn,
  display,
  padding,
  size,
  href,
  className,
  rightIcon,
  leftIcon,
  width,
  type,
  mt,
  h,
  px,
  //isLink = false,
  onClick,
  ml,
  newPage,
  variant
}) => {
  if (href) {
    return (
        <Button
          component={Link} 
          href={href}
          target={newPage ? '_blank' : '_self'}
          display={display}
          p={'9px 32px'}
          mt={mt}
          size={size}
          className={className}
          variant={variant}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          type={type}
          width={width}
          action={actionType}
          h={'48px'}
          px={px}
          ml={ml}
          radius={'xs'}
          fw='550'
          fz="md"
        
        >
          {title ?? children}
        </Button>
    );
  } else {
    return (
      <Button
        onClick={onClick}
        display={display}
        action={actionType}
        p={'9px 32px'}
        mt={mt}
        size={size}
        className={className}
        variant={variant}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        type={type}
        width={width}
        h={'48px'}
        ml={ml}
        px={px}
        radius={'xl'}
          fw='550'
          fz="md"

      >
        {title}
      </Button>
    );
  }
};

export default CustomButton;
