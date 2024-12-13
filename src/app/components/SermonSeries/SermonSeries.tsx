import Image from "next/image";
import { Button } from "../Button/Button";
import dynamic from "next/dynamic";

const SermonNotes = dynamic(() => import("../SermonNotes/SermonNotes"), {
  ssr: false,
});

type SermonSeriesProps = {
  sermonTitle: string;
  sermonDate: string;
  sermonSpeaker: string;
  watchSermonLink: string;
  imgUrl: string;
  notes: string[];
};

export const SermonSeries = ({
  sermonTitle,
  sermonDate,
  sermonSpeaker,
  watchSermonLink,
  imgUrl,
  notes,
}: SermonSeriesProps) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col gap-12 border-b-2 pb-12 border-borderPrimary">
      <div>
        <div className="aspect-video rounded-lg flex flex-col relative shadow-sm">
          <Image
            src={imgUrl}
            alt="Latest Sermon"
            className="rounded-lg"
            layout="fill"
            objectFit="cover"
          />
          {watchSermonLink && (
            <div className="flex gap-4 absolute bottom-[-22px] left-1/2 transform -translate-x-1/2">
              <Button
                size="Large"
                variant="Dark"
                className="hidden md:flex items-center text-nowrap gap-2 "
                href={watchSermonLink}
                target="_blank"
              >
                Watch Sermon
              </Button>
              <Button
                variant="Dark"
                className="md:hidden flex items-center text-nowrap gap-2 "
                href={watchSermonLink}
                target="_blank"
              >
                Watch Sermon
              </Button>
            </div>
          )}
        </div>
      </div>
      {sermonTitle && sermonDate && sermonSpeaker && (
        <div className="flex flex-col gap-2 text-center items-center">
          <h2 className="font-medium text-2xl md:text-3xl m-0">
            {sermonTitle}
          </h2>
          <span className="text-sm md:text-base text-body">
            {formatDate(sermonDate)} | {sermonSpeaker}
          </span>
          {notes && (
            <SermonNotes
              title={sermonTitle}
              speaker={sermonSpeaker}
              date={sermonDate}
              questions={notes}
            />
          )}
        </div>
      )}
    </div>
  );
};
