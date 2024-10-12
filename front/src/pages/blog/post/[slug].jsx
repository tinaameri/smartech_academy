import { REVALIDATE_RATE } from '@/api/client';
import {
  Grid,
  Title,
  Flex,
  Text,
  Box,
  Breadcrumbs,
  Skeleton,
  BackgroundImage,
} from '@mantine/core';
import {
  getCategories,
  getSinglePost,
  requestAllPosts,
} from '@/api/query/blogPosts';
import Layout from '@/components/LayoutComponent';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
//import { IconChevronLeft } from '@tabler/icons-react';
import { IMAGES_BASE_URL} from '@/api/client';
import DynamicPage from '@/components/DynamicPage';
import { pages } from 'public/assets/contentJson';
import {BlogSection} from '@/components/blog/BlogSection';
import PostSeo from '@/components/blog/PostSeo';

export async function getStaticPaths() {
  const response = await getCategories();

  return {
    //paths: slugs,
    paths: response?.map((category) => ({
      params: { slug: category?.attributes?.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const response = await getSinglePost(slug);
  const allPostsResponse = await requestAllPosts({});

  if (!response?.post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      allPosts: allPostsResponse?.blogPosts?.data,
      post: response?.post?.attributes,
      config: response?.config?.data?.attributes,
    },
    revalidate: REVALIDATE_RATE,
  };
}

export default function Post({ post, allPosts, config }) {
  const smallerXsScreen = useMediaQuery('(max-width: 22.5em)');
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');
  // const largerLgScreen = useMediaQuery('(min-width: 75em)');
  const largerSmallScreen = useMediaQuery('(min-width: 37.5em)');

  const items = [
    { title: 'آکادمی', href: '/' },
    { title: 'بلاگ', href: '/blog' },
  ];
  const currentCategory = post?.categories?.data?.length
    ? post?.categories?.data[0]
    : null;

  if (currentCategory) {
    items.push({
      title: currentCategory?.attributes?.title || '',
      href: `/blog/category/${currentCategory?.attributes?.slug}/page/1`,
    });
  }
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let postDate = new Date(post?.date).toLocaleDateString('fa-IR', options);

  let relatedPosts = allPosts?.filter(
    (item) =>
      item?.attributes?.categories?.data[0]?.attributes?.slug ===
      currentCategory?.attributes?.slug,
  );
  let relatedPostsData = relatedPosts?.filter(
    (item) => item?.attributes?.slug !== post?.slug,
  );

  return (
    <>
      <PostSeo
        seo={post?.seo}
        config={config}
        post={post}
        // localHeroImage={localHeroImage}
        //metaDescription={post?.metaDescription}
        metaTitle={post?.title}
      />
      <Layout
        
        bgFluid={pages?.header_blog}
        mt={smallerXsScreen ? '78px' : smallerLgScreen ? '90px' : '97px'}
        pt={smallerLgScreen ? '40px' : '60px'}
      >
        <Grid.Col xs={12}>
          <Title
            order={1}
            className="icon-bottom"
            ta="center"
            my={largerSmallScreen ? '40px' : 'xl'}
          >
            {post?.title}
          </Title>
          <Flex justify="center" mt="55px" mb="xl">
            {/* <Text component='small'>Written by: {post.author?.node.name}</Text>
                        <Text component='span'>&#8226;</Text> */}
            <Text c="dimmed" fz="14px" component="small">
              آخرین به‌روزرسانی: {postDate}
            </Text>
          </Flex>
          <Box
            h={largerSmallScreen ? '422px' : '200px'}
            sx={{
              borderRadius: '15px',
              border: '1px solid #e6eaf1',
            }}
          >
            {post?.featuredImage?.data?.attributes?.url === undefined ? (
              // <Image
              //   //layout='responsive'
              //   fit="cover"
              //   withPlaceholder
              //   width="100%"
              //   alt={post?.title}
              //   height={largerSmallScreen ? '420px' : '200px'}
              //   radius="1rem"
              //   src={`${IMAGES_BASE_UR}${post?.featuredImage?.data?.attributes?.url}`}
              // />

              <Skeleton
                height={largerSmallScreen ? '420px' : '200px'}
                mt={6}
                width="100%"
                radius="1rem"
              />
            ) : (
              <BackgroundImage
                sx={{ borderRadius: '15px' }}
                src={`${IMAGES_BASE_URL}${post?.featuredImage?.data?.attributes?.url}`}
                h={largerSmallScreen ? '420px' : '200px'}
                py="20%"
                radius={'xl'}
              />
            )}
          </Box>
          <Flex align="center" mt="xl">
            <Breadcrumbs
              separator={
                <Box mx="sm" mt="2px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <path
                      d="M5 9L1 5L5 1"
                      stroke="#BCC9E2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              }
              mt="xs"
            >
              {items.map((item, index) => (
                <Box w="max-content" key={index}>
                  <Text
                    fz="sm"
                    component={Link}
                    href={item?.href}
                    lineClamp={1}
                  >
                    {item?.title}
                  </Text>{' '}
                </Box>
              ))}
            </Breadcrumbs>
            <Box m="15px 12px 0 13px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path
                  d="M5 9L1 5L5 1"
                  stroke="#BCC9E2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>

            <Text c="primary.1" fz="sm" mt="xs" lineClamp={1}>
              {post?.title || null}
            </Text>
          </Flex>
        </Grid.Col>
      </Layout>
      <article className="article-post">
        <DynamicPage
          pageData={post}
          //seo={pageData?.seo}
          //posts={posts}
        />
      </article>
      {/* {relatedPostsData?.length > 0 && (
        
        <BlogSection
          posts={relatedPostsData}
          heading_title={pages?.blog?.related_posts}
          //background={pages?.blog_section_bg}
          //background={INFO_COLOR[section?.background]}
          //button={section?.button}
          withButton={false}
        />
      )} */}
    </>
    
    
  );
}
