import React from 'react';
import { MediaQuery, Box } from '@mantine/core';
import BottomFooter from '@/components/footer/BottomFooter';
import TopFooter from '@/components/footer/TopFooter';
import AccordionFooter from '@/components/footer/AccordionFooter';

export default function GeneralFooter({
  links,
  trust,
  logo,
  copy_right,
  social,
}) {
  return (
    <Box>
      <footer>
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Box>
            <TopFooter links={links} trust={trust} logo={logo} />
          </Box>
        </MediaQuery>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Box>
            <AccordionFooter links={links} trust={trust} logo={logo} />
          </Box>
        </MediaQuery>
        <BottomFooter copy_right={copy_right} social={social} />
      </footer>
    </Box>
  );
}
