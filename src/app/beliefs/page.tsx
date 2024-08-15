import { fetchGraphQL } from "../api/contentful";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { TextBlock } from "../components/TextBlock/TextBlock";

const BeliefsPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "2hRfPACaZKMcTslwu12oYH" } }) {
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
          pageTextSectionCollection(limit: 10) {
            items {
      			heading
      			markdown
      			image {
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
        }
      }
    }       
    `);

  const pageData = data?.data?.pageCollection?.items[0];
  const { pageIntroSection, pageTextSectionCollection, pageConnectSection } =
    pageData;

  return (
    <div className="page-beliefs min-h-screen flex flex-col items-center gap-8">
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
      {pageTextSectionCollection &&
        pageTextSectionCollection.items.map((item: any) => (
          <div>
            <TextBlock
              image={item.image}
              header={item.heading}
              markdown={item.markdown}
              reverse={item.reverse}
              ctaPrimaryLabel={item.primaryCtaLabel}
              ctaPrimaryLink={item.primaryCtaLink}
              ctaSecondaryLabel={item.secondaryCtaLabel}
              ctaSecondaryLink={item.secondaryCtaLink}
            />
          </div>
        ))}
      {pageConnectSection && (
        <ConnectSection
          header={pageConnectSection.heading}
          copy={pageConnectSection.description}
          ctaLabel={pageConnectSection.ctaLabel}
          ctaLink={pageConnectSection.ctaLink}
          img={pageConnectSection.logo?.url}
          theme="brand"
        />
      )}
    </div>
  );
};

export default BeliefsPage;
