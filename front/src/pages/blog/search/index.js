import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {Posts} from '@/components/blog/Posts';
import { getConfig } from '@/api/query/shared';
import { requestPosts } from '@/api/query/blogPosts';
import { NextSeo } from 'next-seo';
import { Box } from '@mantine/core';
import { PAGINATION_POSTS_PER_PAGE, REVALIDATE_RATE } from '@/api/client';

export async function getStaticProps() {
  const response = await getConfig();
  return {
    props: {
      config: response?.config?.data?.attributes,
    },
    revalidate: REVALIDATE_RATE,
  };
}

export default function SearchPage({ config }) {
  const router = useRouter();
  const [posts, setPosts] = useState(null);
  const [totalSearchPages, setTotalSearchpages] = useState(null);
  const getPosts = async () => {
    try {
      const search = router.query.query?.replace(/-/g, ' ');
      const results = await requestPosts({ search });
      const totalPages = Math.ceil(
        results?.blogPosts?.meta?.pagination?.total / PAGINATION_POSTS_PER_PAGE,
      );
      setPosts(results?.blogPosts?.data);
      setTotalSearchpages(totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [router?.query?.query]);
  const header = config?.top_header_blog;

  return (
    <>
      <NextSeo
        noindex={true}
        nofollow={true}
        title={`نتایج مرتبط با ${router?.query?.query}`}
      />
      <Box mt="110px">
        <Posts
          key=""
          posts={posts}
          totalPages={totalSearchPages}
          currentPage={null}
          categories={null}
          currentCategory={null}
          categoriesTab="none"
          paginationDisplay="none"
          input_placeholder={header?.input_placeholder}
          button={header?.button}
        />
      </Box>
    </>
  );
}
