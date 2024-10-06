import { gql, strapiClient } from '@/api/client';

export const CONFIG_QUERY = gql`
config {
    data {
      attributes {
        site_name
        top_banner {
          image {
            data {
              id
              attributes {
                url
                caption
                height
              }
            }
          }
          link
          title
          
        }
        Navigation {
          title
          link
          sub_links {
            title
            link
            description
            image {
              data {
                id
                attributes {
                  name
                  caption
                  url
                }
              }
            }
          }
        }
        header_button{
          login_button{
            id
            title
            type
          }
          dropDownItem{
            title
            link
            newPage
            
          }
        }
        newsletter{
          title
          email_placeholder
          button
          caption
        }
        footerNavigation {
          id
          title
          links {
            id
            link
            title
            newPage
            type
          }

        }
        top_header_blog{
          heading_title
          heading_description
          input_placeholder
          button
        }
        Gdpr {
          id
          heading_title
          description
          image {
            data {
              id
              attributes {
                url
                caption
              }
            }
          }
          customize
          toggle_option_essential {
            id
            title
            description
          }
          toggle_option_analytics {
            id
            title
            description
          }
          accept_button {
            id
            title
            type
          }
          decline_button {
            id
            title
            type
          }
        }
        copy_right
        social_media {
          id
          title
          color
          link
          icon {
            data {
              id
              attributes {
                url
                caption
              }
            }
          } 
          icon_hover {
            data {
              id
              attributes {
                url
                caption
              }
            }
          }

        }
        trust_logo {
          id
          title
          html        
        }
        logo {
          id
          header {
            data {
              id
              attributes {
                alternativeText
                url
                caption
                height
                width
              }
            }
          }
          footer {
            data {
              id
              attributes {
                alternativeText
                url
                caption
                height
                width
              }
            }
          } 
          #  seo {
          #   data {
          #     id
          #     attributes {
          #       alternativeText
          #       url
          #     }
          #   }
          # }

        }

   
      }
    }
  }
`;

export const SEO_QUERY = gql`

          seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
              }
            }
          }
          keywords
          structuredData
          canonicalURL
          # twitter{
          #  title
          #   description
          #   image{
          #    data{
          #      attributes{
          #        url
          #       }
          #     }
          #   }
          # }
        }
`;
export const SLUG_QUERY = gql`
blogPosts(pagination:{pageSize:100}){
  data{
    attributes{
      slug: title
      
    }
  }
}
staticPages{
  data{
    attributes{      
      slug
       }
}}
`;
export async function getSlug() {
  const QUERY = gql`
    {
      ${SLUG_QUERY}
    }
  `;
  const response = await strapiClient.request(QUERY);

  return response;
}
export async function getConfig() {
  const QUERY = gql`
    {
      ${CONFIG_QUERY}
    }
  `;
  const response = await strapiClient.request(QUERY);

  return response;
}
