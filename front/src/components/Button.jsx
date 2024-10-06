import React from 'react';
import { Button, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

import Link from 'next/link';
 function ButtonComponent({
  type,
  title,
  newPage,
  width,
  href,
  className,
  actionType,
  onClick,
  rightIcon,
  mt,
  mx,
}) {
  return (
    <Button
      mx={mx}
      type={actionType}
      miw={width}
      onClick={onClick}
      mt={mt}
      bg={
        type === 'secondaryArrow' || type === 'secondary'
          ? 'secondary.0'
          : 'transparent'
      }
      color={
        type === 'secondaryArrow' || type === 'secondary'
          ? '#fff'
          : type === 'grayOutline'
          ? 'gray.6'
          : type === 'secondaryOutline'
          ? 'secondary.0'
          : type === 'lightSecondaryOutline' || type === 'secondaryOutlineArrow'
          ? 'secondary.1'
          : ''
      }
      sx={(theme) => ({
        cursor: !href && !onClick && 'unset',
        '&:hover': {
          backgroundColor:
            type === 'secondaryArrow' || type === 'secondary'
              ? theme.colors.secondary[3]
              : type === 'lightSecondaryOutline'
              ? theme.colors.secondary[1]
              : '',
          color:
            type === 'lightSecondaryOutline' ? theme.colors.primary[1] : '',
        },

        padding: '0 20px',
      })}
      className={`${
        type === 'secondaryArrow' ? 'flex-justify-start' : 'flex-center'
      } ${className}`}
      variant={
        type === 'secondaryOutline' ||
        type === 'secondaryOutlineArrow' ||
        type === 'grayOutline' ||
        type === 'lightSecondaryOutline'
          ? 'outline'
          : 'filled'
      }
      rightIcon={
        rightIcon ??
        ((type === 'secondaryArrow' || type === 'secondaryOutlineArrow') &&
     
            <IconArrowLeft size="23px" />
      )
      }
    >
      {href ? (
        <Link href={href} passHref    target={newPage ? '_blank' : '_self'}
        aria-label={title}
        className="link-button">
      
            <Text component="span">{title}</Text>
        
        </Link>
      ) : (
        <Text component="span">{title}</Text>
      )}
    </Button>
  );
}
export {ButtonComponent}