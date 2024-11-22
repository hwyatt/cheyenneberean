import { draftMode } from "next/headers";
import { FaCircle } from "react-icons/fa6";
import { fetchGraphQL } from "../api/contentful";
import { getPageData } from "../api/queries/contentPage";
import {
  ContentfulEvent,
  ContentPageResponse,
  EventCollectionResponse,
} from "../api/types";
import { Accordion } from "../components/Accordion/Accordion";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { TextBlock } from "../components/TextBlock/TextBlock";
import { Tile } from "../components/Tile/Tile";
import { ValuesTile } from "../components/ValuesTile/ValuesTile";

const WelcomePage = async () => {
  const { isEnabled } = draftMode();
  const content = "welcome";

  const data: ContentPageResponse = await getPageData(content, isEnabled);

  const pageData = data?.data?.pageCollection?.items[0];
  const {
    pageIntroSection,
    pageTextSectionCollection,
    showEvents,
    pageFaQs,
    pageConnectSection,
  } = pageData;

  const contentConfig: Record<
    string,
    { pageClass: string; eventParam: string | null }
  > = {
    beliefs: { pageClass: `page-${content}`, eventParam: null },
    youth: { pageClass: `page-${content}`, eventParam: "Youth" },
    "young-adults": {
      pageClass: `page-${content}`,
      eventParam: "Young Adults",
    },
  };

  const { pageClass = "", eventParam = null } = contentConfig[content] || {};

  const eventData: EventCollectionResponse =
    eventParam &&
    (await fetchGraphQL(`query {
    eventCollection(where: { categories_contains_some: ["${eventParam}"] }, limit: 3) {
      items {
        sys {
          id
        }
        title
        image {
          url
        }
      }
    }
  }`));

  const pageEvents: ContentfulEvent[] = eventData?.data?.eventCollection?.items;

  return (
    <div
      className={`${pageClass} min-h-screen flex flex-col items-center gap-8 md:gap-16`}
    >
      {pageIntroSection && (
        <IntroSection
          heading={pageIntroSection.heading}
          logo={pageIntroSection.logo}
          description={pageIntroSection.description}
          primaryCtaLabel={pageIntroSection.primaryCtaLabel}
          primaryCtaLink={pageIntroSection.primaryCtaLink}
          secondaryCtaLabel={pageIntroSection.secondaryCtaLabel}
          secondaryCtaLink={pageIntroSection.secondaryCtaLink}
        />
      )}
      <div className="flex flex-col items-center text-center gap-4 md:grid md:grid-cols-3 w-full">
        <ValuesTile
          title="Gather"
          description="Strength, companionship, and joy are found in unified gathering. Our lives are changed as we band together pursuing and proclaiming Jesus. We seek to encourage and enjoy one another by gathering together on Sunday mornings and throughout the week in smaller gatherings called grow groups."
          icon={<FaCircle className="text-sagebrush" />}
          theme="church"
        />
        <ValuesTile
          title="Grow"
          description="Together, with eyes fixed on Jesus we are being transformed to be more like him. We want to encounter Jesus; be filled with his characteristics and qualities; so that others will experience Jesus who is alive in us."
          icon={<FaCircle className="text-moss" />}
          theme="church"
        />
        <ValuesTile
          title="Go"
          description="God lovingly and sovereignly set us in a place, a time, and for a purpose. Together, we are discovering where God is at work around us and joining Him. We are taking steps together and encouraging one another as we make Jesus known locally, regionally, and globally."
          icon={<FaCircle className="text-salmonberry" />}
          theme="church"
        />
      </div>
      {pageTextSectionCollection &&
        pageTextSectionCollection.items.map((item: any) => (
          <div key={item.header}>
            <TextBlock
              image={item.image}
              heading={item.heading}
              markdown={item.markdown}
              reverse={item.reverse}
              primaryCtaLabel={item.primaryCtaLabel}
              primaryCtaLink={item.primaryCtaLink}
              secondaryCtaLabel={item.secondaryCtaLabel}
              secondaryCtaLink={item.secondaryCtaLink}
            />
          </div>
        ))}
      {showEvents && eventData && (
        <div className="flex flex-col items-center gap-2 w-full">
          <h2 className="text-2xl font-medium">Events</h2>
          <div className="flex flex-col md:grid grid-cols-12 gap-4 w-full">
            {pageEvents.map((event: ContentfulEvent) => (
              <div className="md:col-span-4" key={event.title}>
                <Tile
                  heading={event.title}
                  image={event.image.url}
                  ctaLabel="Learn More"
                  ctaLink={`/events/${event.sys.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {pageFaQs && (
        <Accordion heading={pageFaQs.heading} questions={pageFaQs.questions} />
      )}
      {pageConnectSection && (
        <ConnectSection
          heading={pageConnectSection.heading}
          description={pageConnectSection.description}
          ctaLabel={pageConnectSection.ctaLabel}
          ctaLink={`${pageConnectSection.ctaLink}?referrer=${content}`}
          logo={pageConnectSection.logo}
        />
      )}
    </div>
  );
};

export default WelcomePage;
