import {
  IMAGES_BASE_UR,
  PAGINATION_POSTS_PER_PAGE,
  REVALIDATE_RATE,
} from '@/api/client';
import { requestPosts } from '@/api/query/blogPosts';
import {Posts} from '@/components/blog/Posts';
import { getTypeOfImage } from '@/components/seo/Meta';
import { Box } from '@mantine/core';
import { ArticleJsonLd, LogoJsonLd, NextSeo } from 'next-seo';

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { page: '1' },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await requestPosts({
    page: parseInt(params.page),
  });

  return {
    props: {
      posts: response?.blogPosts?.data,
      categories: response?.blogCategories?.data || [],
      totalPages: Math.ceil(
        response?.blogPosts?.meta?.pagination?.total /
          PAGINATION_POSTS_PER_PAGE,
      ),
      currentPage: params?.page || 1,
      currentCategory: params?.slug || null,
      config: response?.config?.data?.attributes,
    },
    revalidate: REVALIDATE_RATE,
  };
}

export default function Category({
  posts,
  currentPage,
  totalPages,
  categories,
  currentCategory,
  config,
}) {
  const logo = config?.logo?.header?.data?.attributes?.url;
  const header = config?.top_header_blog;
  const typeOfImage = logo?.split('.').pop();
  return (
    <>
      <Box mt="80px">
        <ArticleJsonLd
          type="BlogPosting"
          url={`${IMAGES_BASE_UR}/blog`}
          title="اخبار"
          images={`${IMAGES_BASE_UR}${logo}`}
          description="در جریان آخرین اخبار مارکتینگ تکنولوژی باشید"
        />
        <LogoJsonLd
          logo={`${IMAGES_BASE_UR}${logo}`}
          url={`${IMAGES_BASE_UR}`}
        />
        <NextSeo
          title="اخبار"
          description="در جریان آخرین اخبار مارکتینگ تکنولوژی باشید"
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
          openGraph={{
            type: 'website',
            url: `${IMAGES_BASE_UR}/blog`,
            title: 'اخبار',
            description: 'در جریان آخرین اخبار مارکتینگ تکنولوژی باشید',
            images: [
              {
                url: `${IMAGES_BASE_UR}${logo}`,
                width: 600,
                height: 800,
                alt: 'اخبار',
                type: getTypeOfImage(typeOfImage),
              },
            ],
          }}
        />
        <Posts
          posts={posts}
          totalPages={totalPages}
          currentPage={currentPage}
          categories={categories}
          currentCategory={currentCategory}
          input_placeholder={header?.input_placeholder}
          button={header?.button}
        />
      </Box>
    </>
  );
}
