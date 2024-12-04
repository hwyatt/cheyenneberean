import { FaRegClock } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { Button } from "@/app/components/Button/Button";
import { Chip } from "@/app/components/Chip/Chip";
import { CCBEventResponse, fetchEvents } from "@/app/api/ccb";
import moment from "moment-timezone";
// import { IoPersonOutline } from "react-icons/io5";
// import { GMap } from "@/app/components/GMap/GMap";

type EventPageProps = {
  params: {
    id: string;
  };
};

const EventDetailsPage = async ({ params }: EventPageProps) => {
  const { id } = params;
  const event = await fetchEvents(id);

  const timezone = "America/Denver";

  const formattedStartTime = moment
    .tz(event.start, timezone)
    .format("dddd, MMMM D, YYYY [at] h:mm A");

  const formattedQueryParam = moment
    .tz(event.start, timezone)
    .format("YYYYMMDD");

  return (
    event && (
      <div className="min-h-screen flex flex-col items-center gap-8">
        {/* <GMap
        zoom={14}
        center={{ lat: event.location?.lat, lng: event.location?.lon }}
        mapStyle={{
          width: "calc(100vw - 16px)",
          height: "400px",
          marginTop: "-32px",
        }}
      /> */}
        <div className="flex flex-col w-full gap-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center border-borderPrimary border-b-2 gap-4 pb-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                {[event?.event?.group?.name] && (
                  <div className="flex gap-2">
                    {[event?.event?.group?.name].map(
                      (item: CCBEventResponse["event"]["group"]["name"]) => (
                        <Chip key={item}>{item}</Chip>
                      )
                    )}
                  </div>
                )}
                <h1 className="text-dark font-medium text-2xl md:text-3xl text-balance">
                  {event?.event?.name}
                </h1>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                href={`https://cheyenneberean.ccbchurch.com/goto/events/public/${event?.event?.id}/${formattedQueryParam}`}
                target="_blank"
              >
                Register Now
              </Button>
              <Button variant="Secondary">
                <PiShareFat size="20" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-1 md:w-1/3">
              {event.start && (
                <div className="flex gap-2 items-center">
                  <FaRegClock className="text-body text-lg" />
                  <span className="text-body text-base">
                    {formattedStartTime}
                  </span>
                </div>
              )}
              {/* {event.event.owner && (
              <div className="flex gap-2 items-center">
                <IoPersonOutline className="text-body text-lg" />
                <span className="text-body text-base m-0">
                  {event.event.owner.name}
                </span>
              </div>
            )} */}
            </div>
            {event?.event?.description && (
              <div className="flex flex-col gap-1 md:w-2/3 text-balance">
                <h2 className="font-medium text-lg md:text-xl">Description</h2>
                <p className="text-body md:text-lg">
                  {event?.event?.description}
                </p>
              </div>
            )}
          </div>
          <Button variant="Secondary" className="self-center" href="/events">
            <span className="text-inherit">See All Events</span>
          </Button>
        </div>
      </div>
    )
  );
};

export default EventDetailsPage;
