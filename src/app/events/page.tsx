import { fetchEvents } from "../api/ccb";
import { fetchGraphQL } from "../api/contentful";
import { Card } from "../components/Card/Card";
import { IntroSection } from "../components/IntroSection/IntroSection";
import moment from "moment";
import { Button } from "../components/Button/Button";

const EventPage = async () => {
  const eventData = await fetchEvents();

  return (
    <div className="page-events min-h-screen flex flex-col items-center gap-8 md:gap-16">
      <IntroSection
        heading={"Events"}
        description={`Discover what's happening in church life at Cheyenne Berean Church. Explore our upcoming events and find ways to connect, grow, and serve.`}
      />
      {eventData && eventData.length > 0 && (
        <div className="flex flex-col md:grid grid-cols-12 gap-4 md:gap-8 w-full">
          {eventData.map((event: any) => (
            <div className="md:col-span-4" key={event.event.id}>
              <Card
                title={event.event.name}
                time={moment(event.start).format(
                  "dddd, MMMM D, YYYY [at] h:mm A"
                )}
                context={[event.event.group.name]}
                ctaSecondaryLabel="More Info"
                ctaSecondaryLink={`/events/${event.event.id}-${moment(
                  event.start
                ).format(`YYYYMMDD`)}`}
                imageFit="cover"
              />
            </div>
          ))}
        </div>
      )}
      <Button size="Large" className="my-8">
        See All Events on CCB
      </Button>
    </div>
  );
};

export default EventPage;
