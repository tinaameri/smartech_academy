import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang="fa" dir="rtl"> 
      <Head>
        <ColorSchemeScript />
        <link
            rel="preload"
            href="/assets/fonts/YekanBakhFaNum-VF.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
