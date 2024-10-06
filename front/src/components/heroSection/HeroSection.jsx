import { useState, useEffect, useContext } from 'react';
import { Text, Box, Grid, Flex, Skeleton, Title } from '@mantine/core';
import Layout from '@/components/LayoutComponent';
//import { useMediaQuery } from '@mantine/hooks';
//import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Markdown from '@/components/Markdown';
import {ButtonComponent} from '@/components/Button';
import { ModalWithReducer } from '@/context/ModalProvider';
import classes from '@/components/heroSection/HeroSection.module.scss';
import { IMAGES_BASE_URL } from '@/api/client';
import Image from 'next/image';
// const DotLottiePlayer = dynamic(() => import('@dotlottie/react-player').then((module) => module.DotLottiePlayer));

function HeroSection(props) {
  const {
    topTitle,
    title,
    top_subtitle,
    subtitle,
    button,
    src,
    // href,
    topTitleColor,
    bg,
    // pyContent,
    titleColor,
    topSubtitleColor,
    subtitleColor,
    lottie,
    image,
    bgFluid
    // beforeSymbol,
    // afterSymbol,
  } = props;
  //   const xLargerScreen = useMediaQuery('(min-width: 88em)');
  // const largerLgScreen = useMediaQuery('(min-width: 90.1em)');
  //const largerMidScreen = useMediaQuery('(min-width: 64em)');
  //const largerSmallScreen = useMediaQuery('(min-width: 37.5em)');
  //const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  //const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  //const midScreen = useMediaQuery('(max-width: 64em) and (min-width: 37.5em)');

  // eslint-disable-next-line no-unused-vars
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      //setShowComponent(true);

      if (window.innerHeight < 500) {
        setShowComponent(false);
      } else {
        setShowComponent(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const { dispatch } = useContext(ModalWithReducer);

  const openDemoRequest = () => {
    dispatch({ type: 'DEMO' });
  };
  const [loadingFile, setloadingFile] = useState(true);

  return (
    <>

        <Layout bgFluid={bgFluid} className={classes.grid} align="center" justify="center">
          <Grid.Col
            span={{ base: 12, md: 8, lg: 6 }}
            //ta={smallerLgScreen ? 'center' : 'left'}
            className={
              classes.colConetnt 
            }
          >

            {title && (
              <Title
              order={1}
       
                mt="xl"
               
              >
               <Markdown text={title} />
              </Title>
            )}
            {subtitle && (
              <Text
                className={classes.subtitle}
                w={{ lg: '90%', md: '90%', sm: '95.5%', xs: '98%' }}
                c={subtitleColor}
                //fz={largerSmallScreen ? 'md' : 'sm'}
                fw="400"
              >
                <Markdown text={subtitle} />
              </Text>
            )}
            {button && (
            <Flex>
            {button?.map((button, index) => (
              <Box key={index} m={'xs'}>
                <ButtonComponent
                  type={button?.type}
                  href={button?.link}
                  title={button?.title}
                  newPage={button?.newPage}
                />
              </Box>
            ))}
          </Flex>
            )}
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 6 }}>
            {!image && (
              <Skeleton
                height="580px"
                width="100%"
                radius="1rem"
                //className={classes.skeleton}
                sx={{  '@media (max-height: 555px)': {
                  height:'400px'
                }, }}
              />
            )}

            {lottie === true ? (
              <Flex
                justify="center"
                className={
                  loadingFile
                    ? classes.hiddenMediaWrapper
                    : classes.mediaWrapper
                }
              >
                <DotLottieReact
                  autoplay
                  loop
                  mode="normal"
                  src={IMAGES_BASE_URL + src}
                  className={classes.innerMediaWrapper}
                  onEvent={(event) => {
                    if (event === PlayerEvents.Ready) {
                      setloadingFile(false);
                    }
                  }}
                />
              </Flex>
            ) : (
              <>
              {
                image ? (
                  <>
                    <Box className={classes.innerMediaImage}
                    >
                        <Image
                          fill
                          src={src}
                          alt={title}
                          priority
                          //onLoad={onLoadingComplete}
                        />
                    
                    </Box>
                  </>
                ) : (
                  <Skeleton
                    w="100%"
                    h="500px"
                    style={{ borderRadius: '85px 10px 0' }}
                  />
                )
              }
              

              </>
            )}
          </Grid.Col>
        </Layout>
  
    </>
  );
}
export {HeroSection}