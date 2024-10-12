import React from 'react';
import { LocalBusinessJsonLd, LogoJsonLd, NextSeo } from 'next-seo';
import Head from 'next/head';
import { BASE_URL, IMAGES_BASE_URL} from '@/api/client';
import { useRouter } from 'next/router';
import {
  MetaSocial,
  SameAsSocialLink,
  getTypeOfImage,
} from '@/components/seo/Meta';

export default function Seo({ seo, config, metaTitle, heroImage }) {
  const router = useRouter();
  //const localLogo = headerLogo?.data?.attributes?.url;
  const localLogo = config?.logo?.header?.data?.attributes?.url;

  const logo = IMAGES_BASE_URL+ localLogo;
  const typeOfImage =
    seo?.metaImage?.data?.attributes?.url !== undefined
      ? seo?.metaImage?.data?.attributes?.url?.split('.')?.pop()
      : localLogo?.split('.')?.pop();
  const socialTitle = seo?.twitter?.title || seo?.metaTitle || metaTitle;
  const socialDescription = seo?.metaDescription;
  const metaPageImage =
    seo?.metaImage?.data?.attributes?.url === undefined
      ? logo
      : `${IMAGES_BASE_UR}${seo?.metaImage?.data?.attributes?.url}`;
  const socialImage = metaPageImage;

  return (
    <>
      <Head>
        {seo?.structuredData !== null && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(seo?.structuredData),
            }}
          />
        )}
      </Head>
      <LogoJsonLd logo={logo} url={BASE_URL} />
      {!router?.asPath.includes('/blog') && (
        <NextSeo
          title={seo?.metaTitle || metaTitle}
          description={seo?.metaDescription}
          keywords={seo?.keywords}
          additionalMetaTags={MetaSocial({
            seo,
            heroImage,
            socialTitle,
            socialDescription,
            socialImage,
            siteName: config?.site_name,
          })}
          canonical={seo?.canonicalURL || BASE_URL + decodeURI(router?.asPath)}
          index={seo?.metaRobots?.index === false ? false : true}
          noindex={seo?.metaRobots?.index === false ? true : false}
          follow={seo?.metaRobots?.follow === false ? false : true}
          nofollow={seo?.metaRobots?.follow === false ? true : false}
          openGraph={{
            type: 'website',
            siteName: config?.site_name,
            url: `${BASE_URL}${router.asPath}`,
            title: seo?.metaTitle || metaTitle,
            description: seo?.metaDescription,
            canonical:
              seo?.canonicalURL || BASE_URL + decodeURI(router?.asPath),
            images: [
              {
                url: metaPageImage,
                width: seo?.imageWidth || 1200,
                height: seo?.imageHeight || 630,
                alt: metaTitle,
                type: getTypeOfImage(typeOfImage),
              },
            ],
          }}
        />
      )}
      <LocalBusinessJsonLd
        type="Company"
        id={`${IMAGES_BASE_UR}`}
        name={config?.site_name}
        description={seo?.metaDescription}
        url={`${IMAGES_BASE_UR}`}
        telephone="021 4300 0086"
        address={{
          streetAddress: 'انتهای کوچه ۱۱, پلاک ۱۵',
          addressLocality: 'شهرک غرب',
          addressRegion: 'تهران',
          postalCode: '1465754461',
          addressCountry: 'ایران',
        }}
        geo={{
          latitude: '35.759507405250496',
          longitude: '51.3752609875386',
        }}
        images={logo}
        sameAs={SameAsSocialLink({ config })}
        openingHours={[
          {
            opens: '08:00',
            closes: '20:00',
            dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
            validFrom: '2019-12-23',
            validThrough: '2020-04-02',
          },
          {
            opens: '08:00',
            closes: '20:00',
            dayOfWeek: 'Saturday',
            validFrom: '2019-12-23',
            validThrough: '2020-04-02',
          },
        ]}
      />
    </>
  );
}
