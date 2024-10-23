import { Box, Text } from '@mantine/core';
export const textSplitter = ({ text, style }) => {
  return text?.split('\n').map((line, idx) => (
    <Box {...style} key={idx}>
      {line}
    </Box>
  ));
};

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};
export const replaceBaseUrlsInMarkdown = (markdown) => {
  const oldBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL_IP;
  const newBaseUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL;
  const regex = new RegExp(oldBaseUrl, 'g');
  return markdown?.replace(regex, newBaseUrl);
};
export function generateSlug(title) {
  const title2 = title.replace(/-/g, '#').replace(/%/g, '@');
  return encodeURIComponent(title2.replace(/ /g, '-'));
}
export const getSlugPost = (title) => {
  if (title) {
    return generateSlug(title);
  }
};

