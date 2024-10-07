import React from 'react';
import { Container, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Layout({
  children,
  bgFluid,
  bgLayout,
  fluid,
  align,
  className,
  py,
  pt,
  pb,
  mt,
  mih,
  display,
  dir,
  h,
  fluidClassName,
  justify,
}) {
  const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');

  return (
    <Container
      display={display}
      bg={bgFluid}
      fluid
      py="50px"
      h="100%"
      pos="relative"
      mt={mt}
      sx={{ zIndex: '3' }}
      className={fluidClassName}
    >
      <Container bg={bgLayout} size={midScreen ? 'md' : 'lg'}
      >
      <Grid
      //grow
        gutter="md"
        align={align}
        justify={justify}
        className={className}
        h={h ?? '100%'}
        pos="relative"
        mih={mih}
        px={{ md: 'md', sm: 'md', xs: 'xl' }}
        py={py}
        pt={pt}
        pb={pb}
        dir={dir}
      >
        {children}
      </Grid>
      </Container>
    </Container>
  );
}
