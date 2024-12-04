import { CCBEventResponse } from "@/app/api/ccb";
import moment from "moment-timezone";
import Image from "next/image";
import { Button } from "../Button/Button";

export const EventBlock = ({ event }: { event: CCBEventResponse }) => {
  const timezone = "America/Denver";

  const formattedStartTime = moment
    .tz(event.start, timezone)
    .format("dddd, MMMM D, YYYY [at] h:mm A");

  const formattedQueryParam = moment
    .tz(event.start, timezone)
    .format("YYYYMMDD");

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="w-full md:w-1/3">
        <Image
          src={
            event.event.images?.large
              ? event.event.images.large
              : event.event.name.toLowerCase().includes("kids") ||
                event.event.group.name.toLowerCase().includes("kids")
              ? "/kids/event-fallback.png"
              : event.event.name.toLowerCase().includes("youth") ||
                event.event.group.name.toLowerCase().includes("youth")
              ? "/youth/event-fallback.png"
              : event.event.name.toLowerCase().includes("refuge") ||
                event.event.group.name.toLowerCase().includes("refuge")
              ? "/youth/event-fallback.png"
              : event.event.name.toLowerCase().includes("crossroads") ||
                event.event.group.name.toLowerCase().includes("crossroads")
              ? "/crossroads412/event-fallback.png"
              : event.event.name.toLowerCase().includes("awana") ||
                event.event.group.name.toLowerCase().includes("awana")
              ? "/awana/event-fallback.png"
              : "/brand/event-fallback.png"
          }
          alt={event.event.name}
          height={720}
          width={1280}
          className="rounded-lg"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium">{event.event.name}</span>
            <span className="text-sm text-body">{formattedStartTime}</span>
          </div>
          {event.event.description && (
            <span className="hidden md:block copy-container text-body">
              {event.event.description}
            </span>
          )}
        </div>
        <Button
          className="self-start"
          variant="Dark"
          href={`/events/${event.event.id}-${formattedQueryParam}`}
        >
          More Info
        </Button>
      </div>
    </div>
  );
};
