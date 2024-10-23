import {
    strapiClient,
    gql,
    PAGINATION_POSTS_PER_PAGE,
    ALL_POSTS,
  } from '@/api/client';
  import { CONFIG_QUERY, SEO_QUERY } from './shared';
  
  export const BLOG_CATEGORIES = gql`
    blogCategories {
      data {
        attributes {
          slug
          title
          description
          icon {
            data {
              attributes {
                url
                caption
              }
            }
          }
        }
      }
    }
  `;
  
  export const WEBINARS = gql`
    query GET_PERPAGEWEBINAR(
      $page: Int
      $size: Int
      $categoryName: String
      $search: String
      $title: String
    ) {

      webinars(
        sort:"createdAt:desc"
        filters: {
          or: [
            #{ body: { contains: $search } },
             { title: { contains: $search } }]
          categories: { slug: { contains: $categoryName } }
          title: {eq: $title}
        }
        pagination: { page: $page, pageSize: $size }
      ) {
        meta {
          pagination {
            total
            page
            pageSize
            pageCount
          }
        }
        data {
          attributes {
            title
            page_dynamic_sections_blog{
              __typename
              ... on ComponentPageSectionArticle{
                id
                body
                article_button{
                  body
                  button{
                    id
                    title
                    link
                    newPage
                    type
                  }
                }
              }  
              ... on ComponentPageSectionTwoColWithImage{
                  id
                  heading_title
                  heading_description
                  title
                  description
                  reverse              
                  image{
                    data{
                      attributes{
                        caption
                        url
                      }
                    }
                  }
                }
               ... on ComponentPageSectionButton{
                  Button{
                    id
                    title
                    link
                    newPage
                    type
                  }
              }
              
              ... on ComponentPageSectionAccordion{
                id
                heading_title
                accordion_item{
                  id
                  title
                  description
                }
                
                
              }
              ... on ComponentPageSectionVideo {
                video {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            slug: title
            date: publishedAt
            #body
            featuredImage {
              data {
                attributes {
                  url
                  caption
                }
              }
            }
            categories {
              data {
                attributes {
                  title
                  slug
                }
              }
            }
            ${SEO_QUERY}
          }
        }
      }
  
      ${BLOG_CATEGORIES}
      ${CONFIG_QUERY}
    }
  `;
  export const WEBINARS_SECTION = gql`
  webinars {
    data {
      attributes {
        WebinarCard {
          title
          slug: title
          description
          level
          date
          from
          to
          teacher
          position
          supporter
          teacherColorText
          cardBackground{
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          teacherImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          } 
          supporterImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          button {
            title
            link
            newPage
            type
          }
          price
        }
      }
    }
  }  

  
  `;
  export async function requestPosts({ categoryName, page, search, title } = {}) {
    const params = {
      size: PAGINATION_POSTS_PER_PAGE,
      page: page || 1,
    };
    if (categoryName) {
      params.categoryName = categoryName;
    }
    if (search) {
      params.search = search;
    }
    if (title) {
      params.title = title;
    }
  
    return await strapiClient.request(BLOG_POSTS, params);
  }
  export async function requestAllPosts({
    categoryName,
    page,
    search,
    title,
  } = {}) {
    const params = {
      size: ALL_POSTS,
      page: page || 1,
    };
    if (categoryName) {
      params.categoryName = categoryName;
    }
    if (search) {
      params.search = search;
    }
    if (title) {
      params.title = title;
    }
  
    return await strapiClient.request(BLOG_POSTS, params);
  }
  
  export async function getCategories() {
    const response = await strapiClient.request(gql`{${BLOG_CATEGORIES}}`);
    return response?.blogCategories?.data || [];
  }
  
  export async function getSinglePost(slug) {
    const title = slug.replace(/-/g, ' ');
  
    const res = await requestPosts({ title });
    if (res?.blogPosts?.meta?.pagination?.total != 1) {
      return null;
    } else {
      return { post: res?.blogPosts?.data[0], config: res?.config };
    }
  }
  
  export async function getPostSlugs() {
    const SLUG_LIST = gql`
      {
        blogPosts {
          data {
            attributes {
              title
            }
          }
        }
      }
    `;
    const response = await strapiClient.request(SLUG_LIST);
    const slugs = response?.blogPosts?.data?.map((post) => ({
      params: { slug: post.attributes.title.replace(/ /g, '-') },
    }));
    return slugs;
  }
  