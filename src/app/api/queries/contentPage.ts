import { fetchGraphQL } from "../contentful";

export const getPageData = async (content: string, isDraftMode = false) => {
  return await fetchGraphQL(
    `
      query {
        pageCollection(where: { url: "/${content}" }, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            sys {
              id
            }
            pageIntroSection {
              heading
              description
              primaryCtaLabel
              primaryCtaLink
              secondaryCtaLabel
              secondaryCtaLink
              logo {
                url
              }
            }
            pageTextSectionCollection(limit: 10) {
              items {
                    heading
                    markdown
                    image {
                      url
                    }
                    thumbnail {
                      url
                    }
                    primaryCtaLabel
                    primaryCtaLink
                    secondaryCtaLabel
                    secondaryCtaLink
                       }
            }
            pageFaQs {
              heading
              questions
            }
            pageConnectSection {
              heading
              description
              logo {
                url
              }
              ctaLabel
              ctaLink
            }
            showEvents
            staff {
              firstName
              lastName
              email
              position
              bio
              image {
                url
              }
            }
          }
        }
      }       
      `,
    isDraftMode
  );
};
