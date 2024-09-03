import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";

const YoungAdultsPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "5g6QgCYR8RhkHTM0tK4ZSG" } }) {
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
        }
      }
    }    
    `);

  const pageData = data?.data?.pageCollection?.items[0];
  const { pageIntroSection } = pageData;

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 md:gap-16">
      {pageIntroSection && (
        <IntroSection
          header={pageIntroSection.heading}
          headerColor="text-gray-800"
          image={pageIntroSection.logo.url}
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

export default YoungAdultsPage;
