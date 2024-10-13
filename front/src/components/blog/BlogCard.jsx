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

function BlogCard(props) {
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
 const  {hovered,ref}=useHover()
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

        <Card.Section h="248px" pos={'relative'}>
          <Image
            src={img ? IMAGES_BASE_URL + img : '/assets/images/Placeholder.png'}
            fill

            alt={title}
          />
          <Center bg="#35A6B4BF" opacity={hovered ? 0.8 : 0} h="248px" 
          style={{transition: 'opacity 0.3s ease',
          }}
          >
          <Image
            src={"/assets/images/icon/graduationCap.svg"}
            height={49}
            width={70}
            alt=  {title}
          />

          </Center>
        </Card.Section>
        <Box p='md' lineClamp={2} >
          <Text fz={'md'} c="third.0" fw={600} h="50px">
            {title}
          </Text>
          <Group justify="flex-start" gap='0' mt="lg" >
            <Text c='gray.5' fw={350} component='span' fz={'sm'}>
              نویسنده:

            </Text>
            <Text c='gray.6' fw={350} component='span' fz={'sm'}>
              شایان شجاعی

            </Text>
          </Group>
          <Group justify='space-between' mt="lg">

            <Button variant="textDisplay"  w="151px" leftSection={<Image src='/assets/images/icon/calendar.svg' height={20} width={20} alt='calendar' />}>{postDate}</Button>
            <Button variant='primary' h="36px" p="9px 16px" fz="xs">
              مطالعه مقاله
            </Button>
          </Group>

        </Box>

      </Link>
    </Card>
    </>
    // </Zoom>
  );
}
export {BlogCard}