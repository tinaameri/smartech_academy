import { Carousel, CarouselSlide } from '@mantine/carousel'
import React, { useRef } from 'react'
import Layout from '../../LayoutComponent'
import { BackgroundImage, Box, Center, em, Flex, Grid, Text, Title } from '@mantine/core'
import Markdown from '../../Markdown'
import { useMediaQuery } from '@mantine/hooks'
import Autoplay from 'embla-carousel-autoplay';
import { Testimonial } from '../../Testimonial/Testimonial'
import classes from './Testimonial.module.scss'
function TestimonialCarousel({ heading_description, heading_title, slides }) {
    const isMobile = useMediaQuery(`(max-width: ${em(1200)})`);
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    return (
        <>
        <Layout justify="center" align="center" gutter="xl">
            <Grid.Col span={{ xs: 12, md: 6 }} order={{base:2,xs:2,md:1}} >
                <BackgroundImage src="/assets/images/Testimonial.svg" style={{backgroundSize:'100% 100%'}} h="480px">
                    <Flex h="100%" align={"center"} justify={"flex-end"} className={classes.carouselTransform}>
                        <Carousel loop 
                        slideSize="100%" 
                       dragFree slideGap="lg" align="start"
                        classNames={classes}                    
                           onMouseEnter={autoplay.current.stop}
                           onMouseLeave={autoplay.current.reset}
                        plugins={[autoplay.current]}
                        >
                            {slides?.map((item) => (
                                <CarouselSlide p="xl">
                                 <Testimonial item={item}/>
                                </CarouselSlide>

                            ))}

                        </Carousel>
                    </Flex>

                </BackgroundImage>

            </Grid.Col>
            <Grid.Col span={{ xs: 12, md: 6 }} order={{base:1,xs:1,md:2}}>
                <Box ta={isMobile ? 'center' : 'right'}>
                <Title order={2} c="third.0">
                    {heading_title}
                </Title>
                <Text component={"div"} c="third.0">
                    <Markdown text={heading_description} />

                </Text>
                </Box>
                <Box h='36px'>

                </Box>
            </Grid.Col>
        </Layout>
{        console.log(isMobile,'>>>isMobile')
}</>


    )
}
export { TestimonialCarousel }
