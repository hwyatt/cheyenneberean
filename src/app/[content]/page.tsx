import { draftMode } from "next/headers";
import { fetchGraphQL } from "../api/contentful";
import { getPageData } from "../api/queries/contentPage";
import { Accordion } from "../components/Accordion/Accordion";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { TextBlock } from "../components/TextBlock/TextBlock";
import { Tile } from "../components/Tile/Tile";

const ContentPage = async ({ params }: any) => {
  const { isEnabled } = draftMode();
  const { content } = params;

  const data = await getPageData(content, isEnabled);

  const pageData = data?.data?.pageCollection?.items[0];
  const {
    pageIntroSection,
    pageTextSectionCollection,
    showEvents,
    pageFaQs,
    pageConnectSection,
  } = pageData;

  const eventParam =
    content === "youth"
      ? "Youth"
      : content === "young-adults"
      ? "Young Adults"
      : null;

  const eventData =
    eventParam &&
    (await fetchGraphQL(`query {
    eventCollection(where: { categories_contains_some: ["Youth"] }, limit: 3) {
      items {
        title
        image {
          url
        }
      }
    }
    }
    `));

  const pageEvents = eventData?.data?.eventCollection?.items;

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
      {showEvents && eventData && (
        <div className="flex flex-col items-center gap-2 w-full">
          <h2 className="text-2xl font-semibold">Events</h2>
          <div className="flex flex-col md:grid grid-cols-12 gap-4 w-full">
            {pageEvents.map((event: any) => (
              <div className="md:col-span-4" key={event.title}>
                <Tile
                  header={event.title}
                  backgroundImg={event.image.url}
                  ctaLabel="Learn More"
                  ctaLink={`/`}
                  theme="dark"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {pageFaQs && (
        <Accordion header={pageFaQs.heading} items={pageFaQs.questions} />
      )}
      {pageConnectSection && (
        <ConnectSection
          header={pageConnectSection.heading}
          copy={pageConnectSection.description}
          ctaLabel={pageConnectSection.ctaLabel}
          ctaLink={`${pageConnectSection.ctaLink}?referrer=${content}`}
          img={pageConnectSection.logo?.url}
          theme={textColor === "text-accent" ? "brand" : "text-gray-800"}
        />
      )}
    </div>
  );
};

export default ContentPage;
