import { Box, Center, Container, Title } from '@mantine/core';
//import styles from './page.module.scss'
import { HeroSection } from '@/components/heroSection/HeroSection';

import {
  HERO_BACKGROUNDS,

} from '@/utils/constants';
//import Banner from '@/components/Banner';

import React from 'react';

import { IMAGES_BASE_URL } from '@/api/client';

import { getKeyByValue } from '@/utils/helpers';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { CardCarousel } from './carousel/CardCarousel';
import { BlogSection } from '@/components/blog/BlogSection';
import { TwoColWithImage } from './card/TwoColWithImage';
import { VerticalCards } from './card/VerticalCards';
import { CardsSection } from './CardsSection';
import { BlogCard } from './blog/BlogCard';
import { WebinarCard } from './webinar/WebinarCrad';
import { TestimonialCarousel } from './carousel/Testimonial/TestimonialCarousel';
export default function DynamicPage({ pageData, config, seo, posts, categories,webinars }) {
  const data =
    pageData?.page_dynamic_sections || pageData?.page_dynamic_sections_blog;
  const heroImage = data
    ?.filter((item) => item?.__typename === 'ComponentPageSectionHero')
    ?.map((item) => item?.media.data?.attributes?.url);
  const router = useRouter();
  return (
    <>
      {/* {!router?.pathname.includes('/blog') && (
        <Head>
          <link
            rel="preload"
            href={`${IMAGES_BASE_URL}${heroImage}`}
            as="image"
          />
        </Head>
      )} */}
      {/* <Seo seo={seo} config={config} metaTitle={pageData?.title} /> */}
      <Container fluid className="w-100" size="xl" p="0">
        {data?.map((section, idx) => (
          <React.Fragment key={idx}>
            {
              // section.__typename === "ComponentPageSectionTopBanner" ? (
              //   <>
              //     {console.log(section, 'section')}

              //     <TopBanner
              //       content={section}
              //     />
              //   </>
              // ) :
              section.__typename === 'ComponentPageSectionHero' ? (
                <>


                  <HeroSection
                    //bg="primary"
                    bgFluid={`url(${IMAGES_BASE_URL}${section?.heroBackground?.data?.attributes?.url}),#FFF2E9
`}
                    title={section?.title}
                    subtitle={section?.sub_title}
                    src={`${IMAGES_BASE_URL}${section?.media?.data?.attributes?.url}`}
                    image={section?.media?.data?.attributes?.url}
                    // //buttonType={section?.action?.type}
                    button={section?.action}
                    // //link={section?.action?.link}
                    // //targetBlank={!!section?.action?.newPage}
                    // wordsAnimation={section?.words_animation}
                    lottie={section?.lottie_image_animation}
                    alt={`${IMAGES_BASE_URL}${section?.media?.data?.attributes?.alternativeText}`}

                  />
                </>
              ) : (section.__typename === 'ComponentPageSectionWebinarsSection') ? (
                <>
                  <CardsSection
                    heading_title={section?.heading_title}
                    button={section?.button}
                    bgFluid={`url(${IMAGES_BASE_URL}${section?.background?.data?.attributes?.url})`}
                    posts={webinars}
                    categories={categories}
                    withButton={true}
                    CardComponent={WebinarCard}
                    cardType="WebinarCard"
                  // currentCategory={currentCategory}

                  />
                </>
              ) :(section.__typename === 'ComponentPageSectionBlogSection') ? (
                <>
                  <BlogSection
                    heading_title={section?.heading_title}
                    button={section?.button}
                    bgFluid={`url(${IMAGES_BASE_URL}${section?.background?.data?.attributes?.url})`}
                    posts={posts}
                    categories={categories}
                    withButton={true}
                    CardComponent={BlogCard}
                    cardType="BlogCard"
                  // currentCategory={currentCategory}
                  />
                </>
              ) : section.__typename === 'ComponentPageSectionTwoColWithImage' ? (
                <>
                  <TwoColWithImage
                    heading_title={section?.heading_title}
                    heading_description={section?.heading_description}
                    title={section?.title}
                    description={section?.description}
                    src={`${IMAGES_BASE_URL}${section?.image?.data?.attributes?.url}`}


                  />
                </>
              )
                :
                section?.__typename ===
                  'ComponentPageSectionVerticalCards' ? (
                  <>
                    <VerticalCards
                      bgFluidDesktop={`url(${IMAGES_BASE_URL}${section?.desktopBackground
                        ?.data?.attributes?.url}) center / contain no-repeat, #FFF2E9
 `}
                      bgFluidMobile={`url(${IMAGES_BASE_URL}${section?.mobileBackground
                        ?.data?.attributes?.url}) center / contain no-repeat, #FFF2E9
 `}
                      heading_title={section?.heading_title}
                      heading_description={section?.heading_description}
                      cards={section?.VerticalCardItem}

                    />
                  </>
                ) :     
                section?.__typename ===
                  'ComponentPageSectionTestimonial' ? (
                  <>
                   <TestimonialCarousel heading_description={section?.heading_description} heading_title={section?.heading_title} slides={section?.slide}/>
                  </>
                ) :
                  null
            }

          </React.Fragment>
        ))}
      </Container>
    </>
  );
}