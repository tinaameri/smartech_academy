import {
  Card,
  Flex,
  Text,
  Title,
  Box,
  Grid,
  Loader,
  Group,
  Button,
  UnstyledButton,
  Center,

} from '@mantine/core';
import Link from 'next/link';
import { TxtLoader } from '@/components/blog/Loader';
import { useState } from 'react';
// import Zoom from 'react-reveal/Zoom';
import { IMAGES_BASE_URL } from '@/api/client';
import { getSlugPost } from '@/utils/helpers';
import Image from 'next/image';
import { useHover } from '@mantine/hooks';
import { LEVEL } from '@/utils/constants';

function WebinarCard(props) {
  const {
    title,
    teacher,
    date,
    slug,
    img,
    free,
    teacherImage,
    supporterImage,
    from,
    to,
    teacherColorText,
    position,
    price,
    level,
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
  const dateObject = new Date(date);
  const now = new Date()
  const isPast = dateObject < now;

  const dayOfWeekNumber = dateObject.getDay();

  const daysOfWeek = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];

  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
  const formattedFrom = from?.slice(0, 5);
  const formattedTo = to?.slice(0, 5);




  const [loadingPost, setLoadingPost] = useState(false);
  const toggleLoader = () => {
    setLoadingPost(true);

    setTimeout(() => setLoadingPost(false), 2300);
  };
  const { hovered, ref } = useHover()
  return (
    // <Zoom>
    <>
      <Card
        bg="white"
        radius="xs"
        mt="md"
        shadow='xl'
        onClick={() => toggleLoader()}
        ref={ref}
      //pos={'relative'}

      >
        <Link href={'/blog/post/' + getSlugPost(slug)} passHref aria-label={title}>

          <Card.Section h="248px" pos={'relative'} bg="#FFF2E9">
            <Grid p='lg' >
              <Grid.Col span={6} ta="right" h='150px' >
                {/* <Box h='21px' pos={'relative'} > */}
                {supporterImage && <div style={{ position: 'relative', width: '100px', height: '21px' }}>
                  <Image
                    src={supporterImage ? IMAGES_BASE_URL + supporterImage : '/assets/images/Placeholder.png'}
                    alt={title}
                    sizes="50px"
                    fill
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
                }

                {/* </Box> */}

                <Text fz={'sm'} c="third.0" fw={600} mt="lg" lineClamp={3}>
                  {title}
                </Text>


              </Grid.Col>
              <Grid.Col span={6} ta="center" h='150px' >
                <Image
                  src={teacherImage ? IMAGES_BASE_URL + teacherImage : '/assets/images/Placeholder.png'}
                  width={117}
                  height={137.51}
                  alt={title}
                />

              </Grid.Col>
              <Grid.Col span={6} >
                <Flex direction={"column"} align={"flex-start"}  >
                  {postDate && <Button p="0" variant="transparent" h="20px" fw={600} fz="10px" color="third.0" leftSection={<Image src='/assets/images/icon/calendar-fill.svg' height={12} width={12} alt='calendar' />}>{dayOfWeekName} - {postDate}</Button>}
                  {formattedFrom && <Button p="0" h="20px" variant="transparent" fw={600} fz="10px" color="third.0" leftSection={<Image src='/assets/images/icon/clock.svg' height={12} width={12} alt='clock' />}>{formattedFrom} - {formattedTo}</Button>}

                </Flex>

              </Grid.Col>
              <Grid.Col span={6}>
                <Flex justify={"center"} align="center" direction={"column"}>
                  <Text component='strong' fz="xs" c={`${teacherColorText}`}>
                    {teacher}
                  </Text>
                  <Text component='p' ta="center" fz="9px" w="112px" c="third.0" mt="5px">
                    {position}
                  </Text>

                </Flex>
              </Grid.Col>


            </Grid>


            <Center bg="#35A6B4BF"
              opacity={hovered ? 0.8 : 0}
              h="248px"
              style={{
                position: 'absolute',
                top: '0',
                width: '100%',
                transition: 'opacity 0.3s ease',
              }}
            >
              <Image
                src={"/assets/images/icon/graduationCap.svg"}
                height={49}
                width={70}
                alt={title}
              />

            </Center>
          </Card.Section>
          <Box p='sm' lineclamp={2} >
            <Text fz={'md'} c="third.0" fw={600} h="50px" lineClamp={3}>
              {title}
            </Text>
            <Flex justify={"space-between"} align="center" mt="lg">
              <Text component='span' fz="lg" c="secondary.0" fw={600}>
                {price ? `${price} تومان` : 'رایگان'}
              </Text>
              <Text component='span' fz="sm" c="gray.7">
                {teacher}
              </Text>
            </Flex>

            <Group justify='space-between' mt="lg">
              <Button variant={LEVEL[level].variant}>{LEVEL[level].name}</Button>

              {isPast ? <Button variant='gray'>این وبینار پایان یافته است</Button> : <Button variant="textDisplay">{postDate} <span style={{ display: 'inline-block', width: '2px', height: '12px', margin: '0px 10px 3px 10px', borderRadius: '5px', background: '#A9B5CB' }}></span>{formattedFrom} - {formattedTo}</Button>}
            </Group>

          </Box>

        </Link>
      </Card>
    </>
    // </Zoom>
  );
}
export { WebinarCard }