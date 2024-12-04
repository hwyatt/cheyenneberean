import { CCBEventResponse, fetchEvents } from "../api/ccb";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { EventBlock } from "../components/EventBlock/EventBlock";
import { Button } from "../components/Button/Button";

const EventPage = async () => {
  const eventData = await fetchEvents(undefined, 15);

  return (
    <div className="page-events min-h-screen flex flex-col items-center gap-8 md:gap-16">
      <IntroSection
        heading={"Events"}
        description={`Discover what's happening in church life at Cheyenne Berean Church. Explore our upcoming events and find ways to connect, grow, and serve.`}
      />
      {eventData && eventData.length > 0 && (
        <div className="flex flex-col gap-8 w-full">
          {eventData.map((event: CCBEventResponse) => (
            <EventBlock event={event} key={event.event.id} />
          ))}
        </div>
      )}
      <Button
        size="Large"
        className="my-8"
        href="https://cheyenneberean.ccbchurch.com/goto/events/public"
      >
        See All Events on CCB
      </Button>
    </div>
  );
};

export default EventPage;
