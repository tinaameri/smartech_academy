import { IMAGES_BASE_URL } from '@/api/client';
import { List } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

export default function Social({ social, position }) {
  const smallerLgScreen = useMediaQuery('(max-width: 75em)');

  return (
    <List
      listStyleType="none"
      display="flex"
      mt="3px"
      sx={{
        justifyContent: `${position === 'footer' ? 'center' : 'flex-start'}`,
        order: `${smallerLgScreen && '-1'}`,
      }}
    >
      {social?.map((item, i) => (
        <List.Item mr="xl" key={i}>
          <Link prefetch={false} href={item?.link} passHref className="cursor-pointer"
              target="_blank"
              aria-label={item?.title}
              >
      
              <Image
                src={`${IMAGES_BASE_URL}${item?.icon?.data?.attributes?.url}`}
                width={35}
                height={35}
                alt={item?.title}
              />
            
          </Link>
        </List.Item>
      ))}
    </List>
  );
}
