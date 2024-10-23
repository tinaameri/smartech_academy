import '@mantine/core/styles.css';
import '@/styles/global.scss';
import React from 'react';
import AppProviders from '@/components/AppProviders';
import {BaseLayout} from '@/components/BaseLayout'
export default function App({ Component, pageProps }) {
  return (
    <>
    <AppProviders>
      <BaseLayout  config={pageProps?.config} slug={pageProps?.pageData?.slug}>
      <Component {...pageProps} />
      </BaseLayout>
      </AppProviders>
      </>
  );
}