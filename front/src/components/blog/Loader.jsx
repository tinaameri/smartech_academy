import { Skeleton, Flex } from '@mantine/core';
import React from 'react';

export default function Loader() {
  return (
    <>
      <Skeleton height={200} width="100%" mb="xl" />
      <Skeleton height={8} width="90%" radius="xl" />
      <Skeleton height={8} mt={6} width="90%" radius="xl" />
      <Skeleton height={8} mt={6} width="60%" radius="xl" />
    </>
  );
}

export function ImageLoader({ imgHeight }) {
  return (
    <>
      <Skeleton height={imgHeight ?? '144px'} width="100%" mb="xl" />
    </>
  );
}
export function TxtLoader() {
  return (
    <>
      <Skeleton height={8} width="95%" radius="xl" />
      <Skeleton height={8} mt={6} width="95%" radius="xl" />
      <Skeleton height={8} mt={6} width="60%" radius="xl" />
      <Flex justify="space-between" mt="40px" w="90%">
        <Skeleton height={8} mt={6} width="30%" radius="xl" />
        <Skeleton height={8} mt={6} width="30%" radius="xl" />
      </Flex>
    </>
  );
}
