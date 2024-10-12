import React from 'react'
import Layout from '../LayoutComponent'
import { Heading } from '../Heading'
import { Box, Center, em, Flex, Grid, Skeleton, Text } from '@mantine/core'
import { IMAGES_BASE_URL } from '@/api/client'
import Image from 'next/image'
import Markdown from '../Markdown'
import { useMediaQuery } from '@mantine/hooks'
function VerticalCards({ heading_title, heading_description, cards, bgFluidMobile,bgFluidDesktop }) {
  const image = cards?.map((item) => (item?.image?.data?.attributes?.url))
  const isMobile = useMediaQuery(`(max-width: ${em(1200)})`);

  return (
    <Layout bgFluid={isMobile ? bgFluidMobile : bgFluidDesktop}>
      <Heading title={heading_title} description={heading_description} />
      {cards?.map((item) => (
        <Grid.Col span={{ xs: 12, md: 4 }} key={item?.title}>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Box h="187px" w="187px" pos={"relative"}>
              {image ? <Image
                fill style={{ objectFit: 'cover' }} src={IMAGES_BASE_URL + item?.image?.data?.attributes?.url} alt={item?.title} /> :
                <Skeleton height={187} width={187} />

              }

            </Box>
            <Box mt="xl" ta={'center'}>
                 <Text component='strong' fz="md" c="third.0" fw="650">
              {item?.title}
            </Text>
            <Text component='div' fz={'sm'} c="third.0">
              <Markdown text={item?.description} />
            </Text> 
            </Box>
        
          </Flex>
        </Grid.Col>

      ))}


    </Layout>
  )
}
export { VerticalCards }
