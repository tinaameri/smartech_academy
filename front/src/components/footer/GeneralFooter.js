import React from 'react';
import { MediaQuery, Box } from '@mantine/core';
import {BottomFooter} from '@/components/footer/BottomFooter';
import {TopFooter} from '@/components/footer/TopFooter';
import {AccordionFooter} from '@/components/footer/AccordionFooter';

  function GeneralFooter({
  links,
  trust,
  logo,
  copy_right,
  social,
}) {
  return (
      <footer>
        <Box visibleFrom="md" >
            <TopFooter links={links} trust={trust} logo={logo} />
          </Box>
      
          <Box hiddenFrom='md'>
            <AccordionFooter links={links} trust={trust} logo={logo} />
          </Box>
        <BottomFooter copy_right={copy_right} social={social} /> 
      </footer>
  );
}
export {GeneralFooter}
