import React from 'react';
import DynamicPage from '@/components/DynamicPage';
// import { pages } from "public/assets/contentJson";
import { getSinglePage } from '@/api/query/staticPages';
import { REVALIDATE_RATE } from '@/api/client';

export async function getStaticProps() {
  const res = await getSinglePage('home');
  if (!res?.pageData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      ...res,
    },
    revalidate: REVALIDATE_RATE,
  };
}

export default function Home({ pageData, posts, config,categories,webinars }) {
  return (
    <>
      <DynamicPage
        pageData={pageData}
        seo={pageData?.seo}
        posts={posts}
        categories={categories}
        config={config}
        webinars={webinars}

      />
    </>
  );
}
