import { fetchGraphQL } from "../api/contentful";
import { Card } from "../components/Card/Card";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { formatEventDayAndTime } from "../utils/dates";

const EventPage = async ({}) => {
  const data = await fetchGraphQL(`
  query {
    eventCollection(order: startDateTime_ASC) {
      items {
        sys {
          id
        }
        title
        description
        startDateTime
        endDateTime
        location {
          lat
          lon
        }
        categories
      }
    }
    pageCollection(where: { sys: { id: "5ITN1PZVKAkYgSaMvIxAjk" } }) {
      items {
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
        showEvents
      }
    }
  }`);

  const pageData = data?.data?.pageCollection?.items[0];
  const {
    pageIntroSection,
    pageTextSectionCollection,
    showEvents,
    pageConnectSection,
  } = pageData;

  const eventData = data?.data?.eventCollection?.items;

  return (
    <div className="page-events min-h-screen flex flex-col items-center gap-8 md:gap-16">
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
      {showEvents && eventData && (
        <div className="flex flex-col md:grid grid-cols-12 gap-4 md:gap-8 w-full">
          {eventData.map((event: any) => (
            <div className="md:col-span-4" key={event.title}>
              <Card
                title={event.title}
                time={formatEventDayAndTime(event.startDateTime)}
                // location={`${event.location.lat}, ${event.location.lon}`}
                // description={event.description}
                context={event.categories}
                ctaSecondaryLabel="More Info"
                ctaSecondaryLink={`/events/${event.sys.id}`}
                // image={event.coverImage.url}
                imageFit="cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventPage;
