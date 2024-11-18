import Link from "next/link";
import { fetchGraphQL } from "@/app/api/contentful";
import { GMap } from "@/app/components/GMap/GMap";
import { FaRegClock } from "react-icons/fa6";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";
import { formatEventDayAndTime } from "../../utils/dates";

type EventPageProps = {
  params: {
    id: string;
  };
};

const EventDetailsPage = async ({ params }: EventPageProps) => {
  const { id } = params;

  console.log("testy", id);

  const data = await fetchGraphQL(`
    query {
      event(id: "${id}"){
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
  `);

  const event = data.data.event;

  console.log(id);

  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      <GMap
        zoom={14}
        center={{ lat: event.location?.lat, lng: event.location?.lon }}
        mapStyle={{
          width: "calc(100vw - 16px)",
          height: "400px",
          marginTop: "-32px",
        }}
      />
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center border-gray-300 border-b-2 gap-4 pb-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              {event.categories && (
                <div className="flex gap-2">
                  {event.categories.map((item: any) => (
                    <div
                      className="font-semibold text-xs text-accent bg-secondary py-1 px-2 rounded-xl"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
              <h1 className="text-accent font-semibold text-2xl md:text-3xl text-balance">
                {event?.title}
              </h1>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="btn btn-primary">Register Now</button>
            <button className="btn btn-square btn-secondary">
              <PiShareFat size="24" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-1 md:w-1/3">
            {event.startDateTime && (
              <div className="flex gap-2 items-center">
                <FaRegClock className="text-accent text-lg" />
                <span className="text-base">
                  {formatEventDayAndTime(event.startDateTime)}
                </span>
              </div>
            )}
            {/* {event.leaders && (
              <div className="flex gap-2 items-center">
                <IoPersonOutline className="text-accent text-lg" />
                <span className="text-base m-0">
                  {event.leaders.join(", ")}
                </span>
              </div>
            )} */}
          </div>
          <div className="flex flex-col gap-1 md:w-2/3 text-balance">
            <h2 className="font-semibold text-lg md:text-xl">Description</h2>
            <p className="md:text-lg">{event.description}</p>
          </div>
        </div>
        <Link
          href="/events"
          className="btn btn-primary self-center mt-8 w-full md:w-auto"
        >
          <span className="font-semibold text-white">See All Events</span>
          <IoChevronForward size={18} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default EventDetailsPage;
