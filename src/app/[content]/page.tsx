import moment from "moment";
import { draftMode } from "next/headers";
import Image from "next/image";
import { CCBEventResponse, fetchEvents } from "../api/ccb";
import { fetchGraphQL } from "../api/contentful";
import { getPageData } from "../api/queries/contentPage";
import {
  ContentfulEvent,
  ContentPageResponse,
  EventCollectionResponse,
  TextBlockParams,
} from "../api/types";
import { Accordion } from "../components/Accordion/Accordion";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { EventBlock } from "../components/EventBlock/EventBlock";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { StaffSection } from "../components/StaffSection/StaffSection";
import { TextBlock } from "../components/TextBlock/TextBlock";
import { Tile } from "../components/Tile/Tile";
import {
  KidsPageTiles,
  WelcomePageTiles,
} from "../components/ValuesTile/ValuesTile";
import { formatEventDayAndTime } from "../utils/dates";

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
  } = pageData;

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
      {staff && <StaffSection staffMember={staff} theme="kids" />}
      {showEvents && eventData && (
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-2xl font-medium md:border-b md:border-borderPrimary md:pb-2 md:w-full md:text-center md:mb-4">
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
