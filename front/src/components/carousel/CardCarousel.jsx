import { Carousel } from '@mantine/carousel';
import Layout from '../LayoutComponent';
import '@mantine/carousel/styles.css';
import { em, Grid } from '@mantine/core';
import BlogCard from '../blog/BlogCard';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

function CardCarousel({ posts }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [embla, setEmbla] = useState(null);
  
    const handleScroll = useCallback(() => {
      if (!embla) return;
      const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
      setScrollProgress(progress * 100);
    }, [embla, setScrollProgress]);
  
    useEffect(() => {
      if (embla) {
        embla.on('scroll', handleScroll);
        handleScroll();
      }
    }, [embla, handleScroll]);
    const isMobile = useMediaQuery(`(max-width: ${em(1200)})`);
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return (

                <Carousel
                w="100%"
                  //dragFree
                  slideSize={{ xs:'73%', sm: '57%', md: '38.33%',lg:'33.2%' }}
                  slideGap={{ base: "md", sm: 'md',md:'0' }}
                  height={550}
                  getEmblaApi={setEmbla}
                  initialSlide={1}
                  align={'start'}
                  loop
                  withControls={isMobile ? false : true}
                  plugins={[autoplay.current]}
                  onMouseEnter={autoplay.current.stop}
                  onMouseLeave={autoplay.current.reset}
                //   styles={{
                //     controls: {
                //       width:'110%',
                //       right:'-5%'
                      
                //     },
                //   }}                  //align="start"

                >
                    {posts?.map((post) => (
                        <Carousel.Slide key={post?.attributes?.slug} px="xs">
                            <BlogCard
                                title={post?.attributes?.title}
                                slug={post?.attributes?.slug}
                                date={post?.attributes?.date}
                                img={post?.attributes?.featuredImage?.data?.attributes?.url}
                                categories={
                                    post?.attributes?.categories?.data[0]?.attributes?.title
                                }
                            />
                        </Carousel.Slide>
                    ))}
                </Carousel>

    );
}

export { CardCarousel };
