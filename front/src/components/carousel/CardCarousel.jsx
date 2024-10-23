import { Carousel } from '@mantine/carousel';
import Layout from '../LayoutComponent';
import '@mantine/carousel/styles.css';
import { em, Grid } from '@mantine/core';
import { BlogCard } from '../blog/BlogCard';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { Progress } from '@mantine/core';
import { WebinarCard } from '../webinar/WebinarCrad';
import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IMAGES_BASE_URL } from '@/api/client';

function CardCarousel({ posts, CardComponent,cardType }) {
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
    const getCardProps = (item, cardType) => {
        switch (cardType) {
            case 'BlogCard':
                return {
                    title: item?.attributes?.title,
                    slug: item?.attributes?.slug,
                    date: item?.attributes?.date,
                    author:item?.attributes?.author,
                    img: item?.attributes?.featuredImage?.data?.attributes?.url,
                    categories: item?.attributes?.categories?.data[0]?.attributes?.title,
                };
            case 'WebinarCard':
                return {
                    title: item?.attributes?.WebinarCard?.title,
                    slug: item?.attributes?.WebinarCard?.slug,
                    date: item?.attributes?.WebinarCard?.date,
                    from: item?.attributes?.WebinarCard?.from,
                    to: item?.attributes?.WebinarCard?.to,
                    price: item?.attributes?.WebinarCard?.price,                  
                    teacher: item?.attributes?.WebinarCard?.teacher,
                    teacherColorText: item?.attributes?.WebinarCard?.teacherColorText,
                    level: item?.attributes?.WebinarCard?.level,
                    position: item?.attributes?.WebinarCard?.position,
                    teacherImage: item?.attributes?.WebinarCard?.teacherImage?.data?.attributes?.url,
                    supporterImage: item?.attributes?.WebinarCard?.supporterImage?.data?.attributes?.url,

                    
                };
            default:
                return {};
        }
    }

    return (
        <>
            <Carousel
                w="100%"
                //dragFree
                slideSize={{ xs: '73%', sm: '57%', md: '38.33%', lg: '33.2%' }}
                slideGap={{ base: "md", sm: 'md', md: '0' }}
                height={550}
                getEmblaApi={setEmbla}
                initialSlide={1}
                align={'start'}
                loop
                withControls={isMobile ? false : true}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
              
                {posts?.map((item) => (
                    <Carousel.Slide key={item?.attributes?.slug} px="xs">
                        <CardComponent
                            {...getCardProps(item, cardType)}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>
            {isMobile && <Progress
                w="100%"
                bg="gray.1"
                color="gray.3"
                value={scrollProgress}
                maw={320}
                size="sm"
                mt="xl"
                mx="auto"
            />}
        </>

    );
}

export { CardCarousel };
