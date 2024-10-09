import Layout from '@/components/LayoutComponent';
import { Grid } from '@mantine/core';
import BlogCard from './BlogCard';
import { useMediaQuery } from '@mantine/hooks';

const BlogCardItem = ({
  post,
  latestImg,
  latestTxt,
  imgHeight,
  imgWidth,
  orderImg,
  imgAlign,
  dateDisplay,
  imgHeightLoader,
  marginLeftImg,
  marginRightImg,
}) => (
  <BlogCard
    title={post?.title}
    slug={post?.slug}
    date={post?.publishedAt}
    img={post?.featuredImage?.data?.attributes?.url}
    categories={post.categories?.data || []}
    latestTxt={latestTxt}
    latestImg={latestImg}
    imgHeight={imgHeight}
    //imgRadius={imgRadius ?? '24px'}
    imgWidth={imgWidth}
    orderImg={orderImg}
    imgAlign={imgAlign}
    dateDisplay={dateDisplay}
    imgHeightLoader={imgHeightLoader}
    marginLeftImg={marginLeftImg}
    marginRightImg={marginRightImg}
  />
);

export default function LatestPost({ posts }) {
  const smallerMidScreen = useMediaQuery('(max-width: 64em)');
  //const latestPosts = content.blog.latest_post;

  return (
    <Layout Layout mt="xl" display={smallerMidScreen && 'none'}>
      <Grid.Col xs={12} sm={12} md={6} lg={7} xl={7} mt="xl">
        {posts?.slice(0, 1)?.map((post) => (
          <BlogCardItem
            key={post?.attributes?.slug}
            post={post.attributes}
            imgHeight="440px"
            imgWidth="520px"
            latestTxt={12}
            imgHeightLoader="440px"
            marginRightImg="auto"
          />
        ))}
      </Grid.Col>

      <Grid.Col xs={12} sm={12} md={6} lg={5} xl={5} mt="xl">
        {/* <Title ta="left" order={3} mb="37px">
          {latestPosts}
        </Title> */}

        {posts?.slice(1, 4)?.map((post) => (
          <BlogCardItem
            post={post.attributes}
            key={post?.attributes?.slug}
            latestImg={5}
            latestTxt={7}
            imgHeight={'160px'}
            //imgRadius='16px'
            imgWidth="120px"
            orderImg={0}
            imgAlign="right"
            imgHeightLoader="90px"
            marginLeftImg="auto"
            marginRightImg="0"
          />
        ))}
      </Grid.Col>
    </Layout>
  );
}
