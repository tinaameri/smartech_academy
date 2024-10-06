import { getPagesSlugs, getSinglePage } from '@/api//query/staticPages';
import DynamicPage from '@/components/DynamicPage';
import { REVALIDATE_RATE } from '@/api/client';

export async function getStaticProps({ params }) {
  const res = await getSinglePage(params.dynamicPageSlug);

  if (!res?.pageData) {
    return {
      notFound: true,
    };
  }
  try {
    return {
      props: {
        ...res,
      },
      revalidate: REVALIDATE_RATE,
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
export async function getStaticPaths() {
  const pageSlugs = await getPagesSlugs();
  const data = {
    paths: pageSlugs?.map((s) => ({
      params: {
        dynamicPageSlug: s.id,
      },
    })),

    fallback: true,
  };

  return data;
}

export default function Page({ pageData, posts, config }) {
  return (
    <>
      <DynamicPage
        pageData={pageData}
        seo={pageData?.seo}
        posts={posts}
        config={config}
      />
    </>
  );
}
