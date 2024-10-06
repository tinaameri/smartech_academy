import { GraphQLClient, gql as _gql } from 'graphql-request';

// export const GRAPHQL_ENDPOINT = 'https://wapi1.smartech.ir/index.php?graphql=';
export const PAGINATION_POSTS_PER_PAGE = 16;
export const ALL_POSTS = 1600;
export const PAGINATION_SEARCH_POSTS_PER_PAGE = 100;
export const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL;
export const GRAPHQL_STRAPI_ENDPOINT = `${CMS_BASE_URL}/graphql`;
export const IMAGES_BASE_URL = CMS_BASE_URL;
export const BASE_URL = 'https://affilio.ir';

// export const client = new GraphQLClient(GRAPHQL_ENDPOINT, { headers: {} });
// export default client;

export const strapiClient = new GraphQLClient(GRAPHQL_STRAPI_ENDPOINT, {
  headers: {},
});

export const gql = _gql;

export const REVALIDATE_RATE = 5;

// eslint-disable-next-line no-undef
// export const GRAPHQL_ENDPOINT = process.browser
//   ? '/graphql'
//   : 'https://wapi.usermost.com/index.php?graphql='; //TODO: load from env?
