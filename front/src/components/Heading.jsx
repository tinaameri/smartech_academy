import { Title, Grid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Markdown from './Markdown';
// import { Fade } from 'react-reveal';

function Heading({ title, description, heading_color, className, pt, xs }) {
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
      {description &&
        <Grid.Col
        span={{base:12}}
        mx="auto"
          align="center"
          mb="xl"
          >
          <Text component='div'>
            <Markdown text={description} />
          </Text>
        </Grid.Col>

      }
    </>
  );
}
export { Heading }