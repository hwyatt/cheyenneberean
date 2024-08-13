import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";

const MinistriesPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "OBAUbRdwj9JPvqQApDwYe" } }) {
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

export default MinistriesPage;
