import {
  BASE_URL,
  IMAGES_BASE_UR,
  PAGINATION_POSTS_PER_PAGE,
  REVALIDATE_RATE,
} from '@/api/client';
import { getCategories, requestPosts } from '@/api/query/blogPosts';
import {Posts} from '@/components/blog/Posts';
import { getTypeOfImage } from '@/components/seo/Meta';
import { Box } from '@mantine/core';
import { ArticleJsonLd, LogoJsonLd, NextSeo } from 'next-seo';

export async function getStaticPaths() {
  const response = await getCategories();

  return {
    paths: response?.map((category) => ({
      params: { page: '1', slug: category?.attributes?.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await requestPosts({
    categoryName: params.slug,
    page: parseInt(params.page),
  });

  if (!response?.blogPosts) {
    return {
      notFound: true,
    };
  }
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
      currentCategoryName:
        response?.blogPosts?.data[0]?.attributes?.categories?.data[0]
          ?.attributes?.title || null,
      topHeader: response?.blog?.data?.attributes || null,
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
  currentCategoryName,
  topHeader,
}) {
  const logo = config?.logo?.header?.data?.attributes?.url;
  const typeOfImage = logo?.split('.').pop();

  return (
    <>
      <ArticleJsonLd
        type="Blog Category"
        url={`${BASE_URL}/blog`}
        //title={`${currentCategory} اخبار`}
        images={`${IMAGES_BASE_UR}${logo}`}
        description="در جریان آخرین اخبار مارکتینگ تکنولوژی باشید"
      />
      <LogoJsonLd logo={`${IMAGES_BASE_UR}${logo}`} url={`${BASE_URL}`} />
      <NextSeo
        title={` اخبار ${currentCategoryName} `}
        description="در جریان آخرین اخبار مارکتینگ تکنولوژی باشید"
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
        openGraph={{
          type: 'Blog Category',
          url: `${BASE_URL} /blog/category/${currentCategory}/page/${currentPage}`,
          title: `${currentCategoryName} اخبار`,
          description: 'در جریان آخرین اخبار مارکتینگ تکنولوژی باشید',
          images: [
            {
              url: `${IMAGES_BASE_UR}${logo}`,
              width: 1200,
              height: 630,
              alt: `${currentCategoryName} اخبار`,
              type: getTypeOfImage(typeOfImage),
            },
          ],
        }}
      />
      <Box mt="50px">
        <Posts
          posts={posts}
          totalPages={totalPages}
          currentPage={currentPage}
          categories={categories}
          currentCategory={currentCategory}
          input_placeholder={topHeader?.input_placeholder}
          button={topHeader?.button}
        />
      </Box>
    </>
  );
}
