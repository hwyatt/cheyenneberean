import { fetchGraphQL } from "../api/contentful";
import { Accordion } from "../components/Accordion/Accordion";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { TextBlock } from "../components/TextBlock/TextBlock";

const ContentPage = async ({ params }: any) => {
  const { content } = params;

  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { url: "/${content}" }) {
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
  const {
    pageIntroSection,
    pageTextSectionCollection,
    showEvents,
    pageFaQs,
    pageConnectSection,
  } = pageData;

  const pageClass = content === "beliefs" ? "page-beliefs" : "";
  const textColor =
    content === "youth" || content === "young-adults"
      ? "text-dark-800"
      : "text-accent";

  return (
    <div
      className={`${pageClass} min-h-screen flex flex-col items-center gap-8 md:gap-16`}
    >
      {pageIntroSection && (
        <IntroSection
          header={pageIntroSection.heading}
          headerColor={textColor}
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
          <div key={item.header}>
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
      {pageFaQs && (
        <Accordion header={pageFaQs.heading} items={pageFaQs.questions} />
      )}
      {pageConnectSection && (
        <ConnectSection
          header={pageConnectSection.heading}
          copy={pageConnectSection.description}
          ctaLabel={pageConnectSection.ctaLabel}
          ctaLink={pageConnectSection.ctaLink}
          img={pageConnectSection.logo?.url}
          theme={textColor === "text-accent" ? "brand" : "text-gray-800"}
        />
      )}
    </div>
  );
};

export default ContentPage;
