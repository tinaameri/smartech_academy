import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Grid } from '@mantine/core';
import { content } from '/public/assets/contentJson';
import { Progress } from '@mantine/core';

import { useCallback, useEffect, useState } from 'react';
import { CategoryItem } from '../blog/categories/CategoryItem';
import { IMAGES_BASE_URL } from '@/api/client';
import classes from '@/components/carousel/CategoriesCarousel'
function CtegoriesCarousel({ categories, currentCategory }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState(null);
  const uniqueCategories = new Set();

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
  const allPosts = content.blog.categories;

  return (
<>
    <Carousel
      w="100%"
      //dragFree
      slideSize={{ xs: '16%', sm: '13%', md: '47%', lg: '11%' }}
      //slideGap={{ base: "md", sm: 'md' }}
      mih={70}
      getEmblaApi={setEmbla}
      // initialSlide={5}    
      withControls={false}
      align="start"
      //className={classes}
      //withIndicators
      

    >
      

      {categories?.length >= 1 &&
        categories?.map((category) => {
          if (!uniqueCategories.has(category?.attributes?.slug)) {
            uniqueCategories.add(category?.attributes?.slug);
            return (
              <Carousel.Slide key={category?.attributes?.slug} mx="10px">

                <CategoryItem
                  title={category?.attributes?.title}
                  href={`/blog/category/${category?.attributes?.slug}/page/1`}
                  currentCategory={currentCategory}
                  categorySlug={category?.attributes?.slug}
icon={category?.attributes?.icon?.data?.attributes?.url}

                />

              </Carousel.Slide>
            );
          }
          return null;
        })}
    </Carousel>
     <Progress
     value={scrollProgress}
     maw={320}
     size="sm"
     mt="xl"
     mx="auto"
   />
</>
  );
}

export { CtegoriesCarousel };
