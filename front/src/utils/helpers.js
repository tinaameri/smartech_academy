import { Box, Text } from '@mantine/core';
export const textSplitter = ({ text, style }) => {
  return text?.split('\n').map((line, idx) => (
    <Box {...style} key={idx}>
      {line}
    </Box>
  ));
};
export const textColorSplitter = ({
  text,
  style,
  beforeSymbol,
  afterSymbol,
}) => {
  return text?.split('؛').map((line, index) => (
    <Text
      component="span"
      {...style}
      color={index === 0 ? beforeSymbol : afterSymbol}
      key={index}
    >
      {' '}
      {index === 0 ? line : `؛${line}`}
    </Text>
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
