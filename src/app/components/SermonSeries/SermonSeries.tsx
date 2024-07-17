import Image from "next/image";
import {
  IoChevronForward,
  IoPersonOutline,
  IoPeopleOutline,
} from "react-icons/io5";

export const SermonSeries = ({
  sermonTitle,
  sermonDate,
  sermonSpeaker,
  watchSermonLink,
  imgUrl,
}: any) => {
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
    <div className="flex flex-col gap-12 border-b-2 pb-12 border-gray-300">
      <div>
        <div className="aspect-video rounded-lg flex flex-col relative shadow-sm md:hover:shadow-lg">
          <div className="bg-overlay"></div>
          <Image
            src={imgUrl}
            alt="Latest Sermon"
            className="rounded-lg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
          {watchSermonLink && (
            <a
              href={watchSermonLink}
              target="_blank"
              className="btn btn-primary absolute bottom-[-22px] left-1/2 transform -translate-x-1/2"
            >
              <span>Watch Sermon</span>
              <IoChevronForward size={18} className="text-white" />
            </a>
          )}
        </div>
      </div>
      {sermonTitle && sermonDate && sermonSpeaker && (
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl md:text-3xl text-accent m-0">
              {sermonTitle}
            </h2>
            <span className="text-gray-800 font-light text-sm">
              {formatDate(sermonDate)} | {sermonSpeaker}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
