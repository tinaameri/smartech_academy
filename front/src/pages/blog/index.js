import {Posts} from '@/components/blog/Posts';
import TopHeader from '@/components/blog/TopHeader';
import LatestPost from '@/components/blog/LatestPost';
import { PAGINATION_POSTS_PER_PAGE, REVALIDATE_RATE } from '@/api/client';
import { requestPosts } from '@/api/query/blogPosts';
import PostPagination from '@/components/blog/PostPagination/PostPagination';
import PostSeo from '@/components/blog/PostSeo';
export async function getStaticProps() {
  const response = await requestPosts({});
  try {
    return {
      props: {
        posts: response?.blogPosts?.data,
        categories: response?.blogCategories?.data || [],
        totalPages: Math.ceil(
          response?.blogPosts?.meta?.pagination?.total /
            PAGINATION_POSTS_PER_PAGE,
        ),
        currentPage: 1,
        config: response?.config?.data?.attributes,
        gdpr: response?.config?.data?.attributes?.Gdpr || [],
        seo: response?.blog?.data?.attributes?.seo || null,
        topHeader: response?.blog?.data?.attributes || null,
      },
      revalidate: REVALIDATE_RATE,
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
export default function Post({
  posts,
  categories,
  totalPages,
  currentPage,
  config,
  seo,
  topHeader,
}) {
  var data = [];
  for (var i = 1; i <= totalPages; i++) {
    data.push(i);
  }

  //const header = config?.top_header_blog;

  return (
    <>
      <PostSeo
        seo={seo}
        config={config}
        //post={post}
        // localHeroImage={localHeroImage}
        //metaTitle={post?.title}
        type="Blog Posting"
        //typeOfImage={typeOfImage}
      />
      <TopHeader
        heading_title={topHeader?.heading_title}
        heading_description={topHeader?.heading_description}
        input_placeholder={topHeader?.input_placeholder}
        button={topHeader?.button}
      />
      <LatestPost
        posts={posts}
        categories={categories}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <Posts
        type="home"
        posts={posts}
        categories={categories}
        totalPages={totalPages}
        currentPage={currentPage}
        paginationDisplay="none"
      />
      <PostPagination
        //type="all-news"
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {/* <Bubble /> */}
    </>
  );
}
