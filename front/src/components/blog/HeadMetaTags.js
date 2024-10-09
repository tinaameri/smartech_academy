import HTMLReactParser from 'html-react-parser';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const HeadMetaTags = ({ metaTags }) => {
  const { asPath } = useRouter();
  return (
    <Head>
      {/* <link href={`${process.env.NEXT_PUBLIC_WP_URL}`}/> */}
      {metaTags &&
        HTMLReactParser(
          metaTags?.replace(
            new RegExp(
              `"${process.env.NEXT_PUBLIC_WP_URL}(?!/wp-content/uploads)(?!/feed)(.*?)"`,
              'g',
            ),
            `"${process.env.NEXT_PUBLIC_URL}${asPath}"`,
          ),
        )}
    </Head>
  );
};
