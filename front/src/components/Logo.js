import Link from 'next/link';
// import Image from 'next/image'
import { IMAGES_BASE_URL } from '@/api/client';
import { Box, Skeleton } from '@mantine/core';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';

function Logo({ position, logo, href, target }) {
  const smallerMdScreen = useMediaQuery('(max-width: 64em)');
  const image = logo?.footer?.data?.attributes?.url || logo?.header?.data?.attributes?.url;


  return (
    <>
      <Box h="48px" className="flex-align-center logo">
        <Link prefetch={false} href={href ?? '/'}
          className="cursor-pointer flex-align-center"
          target={target || undefined}
          aria-label={
            position === 'footer'
              ? logo?.footer?.data?.attributes?.alternativeText
              : logo?.header?.data?.attributes?.alternativeText
          }>

          {image ? (
            <Image
            priority
              src={
                position === 'footer'
                  ? `${IMAGES_BASE_URL}${logo?.footer?.data?.attributes?.url}`
                  : `${IMAGES_BASE_URL}${logo?.header?.data?.attributes?.url}`
              }
              alt={
                position === 'footer'
                  ? logo?.footer?.data?.attributes?.alternativeText
                  : logo?.header?.data?.attributes?.alternativeText
              }
              width={smallerMdScreen ? 110 : 150}
              height={48}
            />
          ) : (
            <Skeleton width={smallerMdScreen ? 110 : 150} height={48} />
          )}

        </Link>
      </Box>
    </>
  );
}
export { Logo }