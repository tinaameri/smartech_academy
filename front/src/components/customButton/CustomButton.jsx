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
 function CustomButton  ({
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
})  {
  if (href) {
    return (
        <Button
          component={Link} 
          href={href}
          target={newPage ? '_blank' : '_self'}
          display={display}
          mt={mt}
          size={size}
          className={className}
          variant={variant}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          type={type}
          width={width}
          action={actionType}
          px={px}
          ml={ml}
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
        mt={mt}
        size={size}
        className={className}
        variant={variant}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        type={type}
        width={width}
        ml={ml}
        px={px}
          fw='550'
          fz="md"

      >
        {title}
      </Button>
    );
  }
};

export  {CustomButton};
