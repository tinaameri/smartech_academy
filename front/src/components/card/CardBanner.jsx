import {
  Box,
  Text,
  Title,
  Grid,
  createStyles,
  Flex,
  Image,
} from '@mantine/core';
import Layout from '@/components/LayoutComponent';
// import { useContext } from 'react';
// import { ModalWithReducer } from '@/context/ModalProvider';
import { useMediaQuery } from '@mantine/hooks';
import { Zoom } from 'react-reveal';
//import Image from 'next/image';

import Heading from '@/components/Heading';
import Markdown from '@/components/Markdown';
import { IMAGES } from '@/utils/constants';

const useStyles = createStyles((theme) => ({
  box: {
    borderRadius: '23px',
    position: 'relative',
    // bottom: '-100px',
    //minHeight: '270px',
    '&:before,&:after': {
      content: "''",
      position: 'absolute',

      backgroundSize: 'cover',

      [theme.fn.smallerThan('xl')]: {
        content: 'unset',
      },
    },

    '&:before': {
      width: '125px',
      height: '125px',
      top: '-40px',
      right: '-40px',
      backgroundImage: `url(${IMAGES}/home/Vector-Banner-left-black.svg)`,
    },
    '&:after': {
      width: '80px',
      height: '79px',
      bottom: '-40px',
      left: '-40px',
      backgroundImage: `url(${IMAGES}/home/Vector-Banner-right.svg)`,
    },
  },
}));

export default function CardBnanner({
  title,
  description,
  image,
  color,
  image_height,
  heading_description,
  heading_title,
  bgBanner,
}) {
  //   const { dispatch } = useContext(ModalWithReducer);
  //   const largerScreen = useMediaQuery('(min-width: 600px)');
  //   const smallerScreen = useMediaQuery('(max-width: 600px)');
  const largerMidScreen = useMediaQuery('(min-width: 64em)'); //(min-1024)lg

  const { classes } = useStyles();

  return (
    <Box bg="#FDFDFD" mb={largerMidScreen && '100px'}>
      <Layout pb="xl" bgLayout="#FDFDFD" fluid="fluid">
        <Heading title={heading_title} description={heading_description} />
      </Layout>

      <Zoom>
        <Layout
          className={`${classes.box}`}
          bgColor={largerMidScreen && bgBanner}
          my={largerMidScreen && '53px'}
          py="xl"
        >
          <Grid.Col xs={12} sm={12} md={8} lg={6} xl={6} m="auto">
            <Flex
              align="center"
              pos="relative"
              px={largerMidScreen && 'md'}
              mih={largerMidScreen ? `${image_height}px` : '300px'}
              w="100%"
            >
              <Image
                //layout='fill'
                fit="contain"
                width="100%"
                height="100%"
                src={image}
                alt={title}
              />
            </Flex>
          </Grid.Col>
          <Grid.Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            m="auto"
            pb={largerMidScreen ? '0' : '100px'}
            px={largerMidScreen && 'md'}
          >
            <Title order={4} color={color} fw="900" align="left">
              {title}
            </Title>
            <Text color={color} align="left" mt="xl">
              <Markdown text={description} />
            </Text>
          </Grid.Col>
        </Layout>
      </Zoom>
    </Box>
  );
}
