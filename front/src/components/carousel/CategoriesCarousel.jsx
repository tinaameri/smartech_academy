import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { em } from '@mantine/core';
//import { content } from '/public/assets/contentJson';
import { Progress } from '@mantine/core';

import { useCallback, useEffect, useState } from 'react';
import { CategoryItem } from '../blog/categories/CategoryItem';
import { useMediaQuery } from '@mantine/hooks';
function CtegoriesCarousel({ categories, currentCategory,onCategorySelect,selectedCategory }) {
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
  //const allPosts = content.blog.categories;
  const isMobile = useMediaQuery(`(max-width: ${em(1200)})`);

  return (
<>
    <Carousel
      w="100%"
      //dragFree
      slideSize={{base:'25%', xs: '16%', sm: '13%', md: '12%', lg: '12.8%' }}
      //slideGap={{ base: "0", sm: 'md' }}
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
              <Carousel.Slide key={category?.attributes?.slug} ta="center">

                <CategoryItem
                  title={category?.attributes?.title}
                  href={`/blog/category/${category?.attributes?.slug}/page/1`}
                  currentCategory={currentCategory}
                  categorySlug={category?.attributes?.slug}
icon={category?.attributes?.icon?.data?.attributes?.url}
onCategorySelect={onCategorySelect}
selectedCategory={selectedCategory}
isSelected={selectedCategory === category?.attributes?.slug}
                />

              </Carousel.Slide>
            );
          }
          return null;
        })}
    </Carousel>
    {isMobile &&  <Progress
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

export { CtegoriesCarousel };
