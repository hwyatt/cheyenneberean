import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

export const Card = ({
  title,
  subtitle,
  description,
  image,
  imageFit,
  backgroundColor,
  context,
  time,
  people,
  location,
  ctaPrimary,
  ctaSecondary,
  theme,
}: any) => {
  let primaryText, primaryUrl, secondaryText, secondaryUrl;
  if (ctaPrimary) {
    [primaryText, primaryUrl] = ctaPrimary.split(" | ");
  }
  if (ctaSecondary) {
    [secondaryText, secondaryUrl] = ctaSecondary.split(" | ");
  }
  return (
    <div
      className="md:col-span-6 lg:col-span-3 flex flex-col bg-white rounded-lg shadow-md"
      key={title}
    >
      <div
        className={`relative rounded-t-lg flex flex-col items-center justify-center ${
          !image && backgroundColor && `h-2`
        } ${image && imageFit !== "cover" && `p-4`}`}
        style={{ backgroundColor: backgroundColor }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className={`${
              imageFit !== "cover"
                ? `max-h-[95px] h-auto object-contain`
                : `aspect-video object-cover`
            }`}
          />
        )}
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1">
          {context && (
            <div className="flex gap-2">
              {context.map((item: any) => (
                <div
                  className="font-semibold text-xs text-accent bg-secondary py-1 px-2 rounded-xl"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
          {title && (
            <h3
              className={`font-semibold text-gray-800 ${
                theme === "kids" ? `font-bobby text-2xl` : "text-xl"
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <span className="text-sm font-light text-gray-600">{subtitle}</span>
          )}
        </div>
        {description && <p className="text-gray-800">{description}</p>}
        {(time || people || location) && (
          <div className="flex flex-col gap-1">
            {time && (
              <div className="flex gap-1 items-center">
                <FaRegClock className="text-accent" />
                <span className="text-sm">{time}</span>
              </div>
            )}
            {people && (
              <div className="flex gap-1 items-center">
                <IoPersonOutline className="text-accent" />
                <span className="text-sm m-0">{people.join(", ")}</span>
              </div>
            )}
            {location && (
              <div className="flex gap-1 items-center">
                <FaLocationDot className="text-accent" />
                <span className="text-sm m-0">{location}</span>
              </div>
            )}
          </div>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-col gap-2 mt-4">
            {ctaPrimary && (
              <a href={primaryUrl} className="btn btn-primary">
                {primaryText}
              </a>
            )}
            {ctaSecondary && (
              <a href={secondaryUrl} className="btn btn-secondary">
                {secondaryText}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
