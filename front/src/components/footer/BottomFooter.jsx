import { Box, Container, Text, Flex } from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';
import Social from '@/components/Social';

 function BottomFooter({ copy_right, social }) {
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  const largerXlgScreen = useMediaQuery('(min-width: 88em)');

  return (
    <Box bg="third.2" pb={smallerLgScreen ? '0' : '16px'} mih="90px">
      <Container
        size={largerXlgScreen ? '1300px' : 'md'}
        pos="relative"
        sx={{ zIndex: '999' }}
      >
        <Flex
          direction={smallerLgScreen && 'column'}
          align="center"
          justify={smallerLgScreen ? 'center' : 'space-between'}
          order={smallerLgScreen && 1}
          pt={smallerLgScreen ? 'xl' : '20px'}
        >
          <Text
            fz="sm"
            c="gray.2"
            ta={smallerLgScreen && 'center'}
            pt={smallerLgScreen && 'sm'}
            px={smallerLgScreen && 'lg'}
            component='div'
            dangerouslySetInnerHTML={{ __html: copy_right }}
          />
          <Social social={social} position="footer" />
        </Flex>
      </Container>
    </Box>
  );
}
export {BottomFooter}
