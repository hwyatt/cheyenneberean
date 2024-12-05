import { draftMode } from "next/headers";
import Image from "next/image";
import { CCBEventResponse, fetchEvents } from "../api/ccb";
import { getPageData } from "../api/queries/contentPage";
import { ContentPageResponse, TextBlockParams } from "../api/types";
import { Accordion } from "../components/Accordion/Accordion";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { EventBlock } from "../components/EventBlock/EventBlock";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { LinkSection } from "../components/LinkSection/LinkSection";
import { StaffSection } from "../components/StaffSection/StaffSection";
import { TextBlock } from "../components/TextBlock/TextBlock";
import {
  KidsPageTiles,
  WelcomePageTiles,
} from "../components/ValuesTile/ValuesTile";
import { CONNECT_LINKS, CONTACT_LINKS, FAMILY_LINKS } from "../LINKS";

type ContentPageParams = {
  params: {
    content: string;
  };
};

const ContentPage = async ({ params }: ContentPageParams) => {
  const { isEnabled } = draftMode();
  const { content } = params;

  // Filter out the favicon.ico request
  if (content === "favicon.ico") {
    return;
  }
  const data: ContentPageResponse = await getPageData(content, isEnabled);

  const pageData = data?.data?.pageCollection?.items[0];
  const {
    pageIntroSection,
    pageTextSectionCollection,
    showEvents,
    staff,
    pageFaQs,
    pageConnectSection,
  } = pageData || {};

  const contentConfig: Record<
    string,
    {
      pageClass: string;
      eventParam: string | null;
      eventContext: string | null;
      eventH2: string | null;
    }
  > = {
    beliefs: {
      pageClass: `page-${content}`,
      eventParam: null,
      eventContext: null,
      eventH2: null,
    },
    kids: {
      pageClass: `page-${content}`,
      eventParam: "kids",
      eventContext: "BereanKIDS",
      eventH2: "BereanKIDS Events",
    },
    youth: {
      pageClass: `page-${content}`,
      eventParam: "youth",
      eventContext: "The Refuge",
      eventH2: "The Refuge Events",
    },
    "young-adults": {
      pageClass: `page-${content}`,
      eventParam: "crossroads 412",
      eventContext: "Crossroads 412",
      eventH2: "Crossroads 412 Events",
    },
    welcome: {
      pageClass: `page-${content}`,
      eventParam: null,
      eventContext: "Church",
      eventH2: "Upcoming Events",
    },
  };

  const {
    pageClass = "",
    eventParam = null,
    eventContext,
    eventH2,
  } = contentConfig[content] || {};

  const eventData = await fetchEvents(undefined, 3, eventParam ?? "");

  return (
    <div
      className={`${pageClass} min-h-screen flex flex-col items-center gap-8 md:gap-16`}
    >
      {!pageData && (
        <>
          <IntroSection
            heading={"Are you lost? That page doesn't exist."}
            description={`"For the Son of Man came to seek and to save the lost." - Luke 19:10 ESV`}
          />
          <div className="flex flex-col md:grid grid-cols-12 gap-8 w-full">
            <div className="col-span-4">
              <LinkSection title="Next Steps" links={CONNECT_LINKS} />
            </div>
            <div className="col-span-4">
              <LinkSection title="For Your Family" links={FAMILY_LINKS} />
            </div>
            <div className="col-span-4">
              <LinkSection title="Connect with Us" links={CONTACT_LINKS} />
            </div>
          </div>
          <ConnectSection
            heading="Still need help?"
            description="Our team would love to connect with you!"
            ctaLabel="Contact Us"
            ctaLink="/contact"
          />
        </>
      )}
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
      {content === "welcome" ? (
        <WelcomePageTiles />
      ) : content === "kids" ? (
        <KidsPageTiles />
      ) : null}
      {pageTextSectionCollection &&
        pageTextSectionCollection.items.map((item: TextBlockParams) => (
          <div key={item.heading} className="w-full">
            <TextBlock
              image={item.image}
              thumbnail={item.thumbnail}
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
      {staff && (
        <StaffSection
          staffMember={staff}
          theme={content === "kids" ? "kids" : null}
        />
      )}
      {showEvents && eventData && (
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-2xl font-medium md:border-b-2 md:border-borderPrimary md:pb-2 md:w-full md:text-center md:mb-4">
            {eventH2 ? eventH2 : "Events"}
          </h2>
          <div className="flex flex-col gap-4 w-full">
            {eventData.map((event: CCBEventResponse) => (
              <EventBlock event={event} key={event.event.id} />
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
          theme={
            content === "youth" || content === "young-adults"
              ? "youth"
              : content === "kids"
              ? "kids"
              : "Primary"
          }
        />
      )}
      {content === "kids" && (
        <div className="w-[calc(100vw-16px)] overflow-hidden mb-[-100px] md:mb-[-225px]">
          <Image
            src="/kids/mountains-vector.png"
            alt="BereanKIDS Mountains Vector"
            layout="responsive"
            width={4500}
            height={1830}
            quality={100}
          />
        </div>
      )}
    </div>
  );
};

export default ContentPage;
