import { BASE_URL, IMAGES_BASE_URL} from '@/api/client';
import { NewsArticleJsonLd, NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MetaSocial, getTypeOfImage } from '@/components/seo/Meta';

export default function PostSeo({ post, seo, config }) {
  const router = useRouter();
  const localLogo = config?.logo?.seo?.data?.attributes?.url;
  const logo = IMAGES_BASE_URL+ localLogo;
  const postImageLocal = post?.featuredImage?.data?.attributes?.url;
  const metaPostImage = seo?.metaImage?.data?.attributes?.url;
  const [postImage, setPostImage] = useState('');
  useEffect(() => {
    if (metaPostImage) {
      setPostImage(IMAGES_BASE_URL+ metaPostImage);
    } else if (postImageLocal) {
      setPostImage(IMAGES_BASE_URL+ postImageLocal);
    } else {
      setPostImage(logo);
    }
  }, [postImageLocal, metaPostImage]);
  const typeOfImage = postImageLocal?.split('.').pop();
  const socialDescription = seo?.metaDescription;
  const socialTitle = seo?.metaTitle || post?.title;
  // const metaPostImage =
  //   seo === null || seo?.metaImage?.data === undefined
  //     ? postImage
  //     : IMAGES_BASE_URL+ seo?.metaImage?.data?.attributes?.url;
  const socialImage = postImage;
  return (
    <>
      {seo?.structuredData !== null && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(seo?.structuredData),
            }}
          />
        </Head>
      )}

      <NewsArticleJsonLd
        url={BASE_URL + decodeURI(router?.asPath)}
        title={post?.title}
        keywords={seo?.keywords}
        images={postImage}
        datePublished={post?.publishedAt}
        dateModified={post?.date || post?.publishedAt}
        description={seo?.metaDescription}
        isAccessibleForFree={true}
      />

      <NextSeo
        type="Article"
        title={seo?.metaTitle ?? post?.title}
        description={seo?.metaDescription}
        // canonical={
        //   seo?.canonicalURL || BASE_URL + '/blog/post/' + router?.query?.slug
        // }

        canonical={seo?.canonicalURL || BASE_URL + decodeURI(router?.asPath)}
        images={[
          {
            url: postImage,
          },
        ]}
        additionalMetaTags={MetaSocial({
          socialTitle,
          socialDescription,
          socialImage,
          keywords: seo?.keywords,
        })}
        // index={seo?.metaRobots?.index === false ? false : true}
        // noindex={seo?.metaRobots?.index === false ? true : false}
        // follow={seo?.metaRobots?.follow === false ? false : true}
        // nofollow={seo?.metaRobots?.follow === false ? true : false}
        openGraph={{
          title: seo?.metaTitle ?? post?.title,
          description: seo?.metaDescription,
          url: BASE_URL + decodeURI(router?.asPath),
          canonical: seo?.canonicalURL || BASE_URL + decodeURI(router?.asPath),
          type: 'Article',
          siteName: config?.site_name,
          article: {
            publishedTime: post?.publishedAt,
            modifiedTime: post?.date || post?.publishedAt,
          },
          images: [
            {
              url: postImage,
              width: seo?.imageWidth || 1200,
              height: seo?.imageHeight || 630,
              type: getTypeOfImage(typeOfImage),
              alt: post?.title,
            },
          ],
        }}
      />
    </>
  );
}
