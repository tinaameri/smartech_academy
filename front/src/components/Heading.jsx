import { Title, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
// import { Fade } from 'react-reveal';

function Heading({ title, heading_color, className, pt, xs }) {
  const smallerMdScreen = useMediaQuery('(max-width: 64em)');

  return (
    <>
      {title && (

              <Grid.Col
               
                m="auto"
                align="center"
              >
                <Title
                  h="60px"
                  order={2}
                  ta="center"
                  px={smallerMdScreen ? '10px' : '0'}
                  color={heading_color ?? 'gray.6'}
                >
                  {title}
                </Title>

          {/* </Fade> */}
        </Grid.Col>
      )}
    </>
  );
}
export {Heading}