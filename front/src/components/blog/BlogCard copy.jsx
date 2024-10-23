import {
  Card,
  Flex,
  Text,
  Title,
  Box,
  Grid,
  Loader,
  
} from '@mantine/core';
import Link from 'next/link';
import { TxtLoader } from '@/components/blog/Loader';
import { useState } from 'react';
// import Zoom from 'react-reveal/Zoom';
import { IMAGES_BASE_URL } from '@/api/client';
import { getSlugPost } from '@/utils/helpers';
import Image from 'next/image';

export default function BlogCard(props) {
  const {
    title,
    categories,
    date,
    slug,
    img,
    latestTxt,
    latestImg,
    imgHeight,
    imgRadius,
    orderImg,
    imgAlign,
    dateDisplay,
    marginLeftImg,
    marginRightImg,
  } = props;
  //let options = { year: 'numeric', month: 'long', day: 'numeric' };
  //let postDate = new Date(date).toLocaleDateString('fa-IR', options);
  let postDate = new Date(date).toLocaleDateString('fa', {
    dateStyle: 'medium',
  });
  const [loadingPost, setLoadingPost] = useState(false);
  const toggleLoader = () => {
    setLoadingPost(true);

    setTimeout(() => setLoadingPost(false), 2300);
  };
  return (
    // <Zoom>
      <Card
        padding="24px 17px 5px 17px"
        bg="white"
        radius="24px"
        mt="md"
        onClick={() => toggleLoader()}
        style={(theme) => ({
          border: `1px solid ${theme.colors.gray[2]}`,
          borderRadius: '15px',
          '&:hover .mantine-rtl-Title-root': {
            color: theme.colors.secondary[0],
          },
          boxShadow: '0px 15px 30px 0px #0000000D',
        })}
      >
        <Link href={'/blog/post/' + getSlugPost(slug)} passHref aria-label={title}>
          
            <Grid>
              <Grid.Col
              span={{base:12}}
                // xs={12}
                // sm={12}
                // md={latestImg ?? 12}
                // lg={latestImg ?? 12}
                // xl={latestImg ?? 12}
                ta={imgAlign ?? 'center'}
                py="0"
                order={orderImg}
                h={imgHeight ?? '175px'}
                mb="17px"
              >
                <Box
                  mb="20px"
                  height={imgHeight ?? '175px'}
                  sx={{
                    //overflow: 'hidden',
                    borderRadius: imgRadius,
                    boxShadow: '0px 15px 30px 0px #0000000D',
                  }}
                  //className='object-fit-blog-card'
                >
                  {loadingPost && (
                    <Loader
                      size="xl"
                      color="primary"
                      sx={{
                        position: 'absolute',
                        top: '24%',
                        left: '41%',
                        zIndex: 9,
                      }}
                    />
                  )}

                  <Image
                    src={`${IMAGES_BASE_URL}${img}`}
                    //width={imgWidth ?? (smallerMidScreen ? '328px' : '260px')}
                    fill
                    alt={title}
                    style={{objectFit:'cover'}}
                    //layout='fixed'
                    radius={imgRadius ?? '10px'}
                    ml={marginLeftImg ?? 'auto'}
                    mr={marginRightImg ?? 'auto'}
                  />
                </Box>
              </Grid.Col>

              <Grid.Col
                xs={12}
                sm={12}
                md={latestTxt ?? 12}
                lg={latestTxt ?? 12}
                xl={latestTxt ?? 12}
                pl="15px"
                py="0"
                pos="relative"
              >
                <Box mih="133px" sx={{ overflow: 'hidden' }}>
                  {title ? (
                    <>
                      <Title order={6} lineclamp={3} c="rgba(0, 0, 0, 0.87)">
                        {title}
                      </Title>

                      <Box pos="absolute" bottom="20px" w="95%" left="3%">
                        <Flex justify="space-between" mt="md" w="100%">
                          <Text
                            component="span"
                            c="#010609"
                            opacity="0.5"
                            fz="xs"
                            fw="900"
                            sx={(theme) => ({
                              '&:hover': {
                                color: theme.colors.gray[9],
                              },
                            })}
                          >
                            {categories?.[0]?.attributes?.title}
                          </Text>

                          <Text
                            display={dateDisplay}
                            c="#010609"
                            opacity="0.5"
                            fz="xs"
                            fw="900"
                          >
                            {postDate}
                          </Text>
                        </Flex>
                      </Box>
                    </>
                  ) : (
                    <TxtLoader />
                  )}
                </Box>
              </Grid.Col>
            </Grid>
          
        </Link>
      </Card>
    // </Zoom>
  );
}
