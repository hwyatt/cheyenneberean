import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";

const AboutPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "5eX8mSA1goVHv9FZW6L1fQ" } }) {
        items {
          sys {
            id
          }
          pageIntroSection {
            heading
            description
            ctaPrimary
            ctaSecondary
            logo {
              url
            }
          }
        }
      }
    }    
    `);

  const pageData = data?.data?.pageCollection?.items[0];
  const { pageIntroSection } = pageData;

  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      {pageIntroSection && (
        <IntroSection
          header={pageIntroSection.heading}
          headerColor="text-gray-800"
          image={pageIntroSection.logo ? pageIntroSection.logo.url : null}
          copy={pageIntroSection.description}
          ctaPrimary={
            pageIntroSection.ctaPrimary ? pageIntroSection.ctaPrimary : null
          }
          ctaSecondary={
            pageIntroSection.ctaSecondary ? pageIntroSection.ctaSecondary : null
          }
        />
      )}
    </div>
  );
};

export default AboutPage;
