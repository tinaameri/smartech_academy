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
  gutter
}) {
  const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');

  return (
    <Container
      display={display}
      bg={bgFluid}
      fluid
      h="100%"
py="100px"
      pos="relative"
      mt={mt}
      sx={{ zIndex: '3' }}
      className={fluidClassName}
    >
      <Container bg={bgLayout} size={midScreen ? 'md' : 'lg'}
      >
      <Grid
      //grow
        gutter={gutter ?? "md"}
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
