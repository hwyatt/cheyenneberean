import Link from "next/link";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { IoChevronForward, IoPersonOutline } from "react-icons/io5";

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
  ctaPrimaryLabel,
  ctaPrimaryLink,
  ctaSecondaryLabel,
  ctaSecondaryLink,
  ctaStyle,
  theme,
}: any) => (
  <div
    className="md:col-span-6 lg:col-span-3 flex flex-col bg-white rounded-lg shadow-md"
    key={title}
  >
    <div
      className={`relative rounded-t-lg flex flex-col items-center justify-center ${
        !image && backgroundColor && `h-2`
      } ${image && imageFit !== "cover" && `pt-4 px-4`} ${
        theme === "staff" && "aspect-square bg-accent"
      }`}
      style={{ backgroundColor: theme !== "staff" && backgroundColor }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className={`${
            theme === "staff"
              ? "aspect-square object-cover"
              : imageFit !== "cover"
              ? "max-h-[95px] h-auto object-contain"
              : "aspect-video object-cover"
          }`}
        />
      )}
      {!image && (
        <img
          src="/dark-mountains.png"
          className="absolute object-contain w-full h-full p-4"
        />
      )}
    </div>
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        {context && (
          <div className="flex flex-wrap gap-2">
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
            className={`text-gray-800 ${
              theme === "kids" ? `font-bobby text-2xl` : "text-xl font-semibold"
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
      {(ctaPrimaryLabel || ctaSecondaryLabel) && (
        <div className="flex flex-col gap-2 mt-4">
          {ctaPrimaryLabel &&
            (ctaStyle === "link" ? (
              <Link
                href={ctaPrimaryLink}
                className="flex items-center gap-1 group"
              >
                <span className="font-semibold text-primary group-hover:underline group-hover:underline-offset-4 decoration-2">
                  {ctaPrimaryLabel}
                </span>
                <IoChevronForward size={18} className="text-primary" />
              </Link>
            ) : (
              <Link href={ctaPrimaryLink} className={`btn btn-primary`}>
                {ctaPrimaryLabel}
              </Link>
            ))}
          {ctaSecondaryLabel &&
            (ctaStyle === "link" ? (
              <Link
                href={ctaSecondaryLink}
                className="flex items-center gap-1 group"
              >
                <span className="font-semibold text-primary group-hover:underline group-hover:underline-offset-4 decoration-2">
                  {ctaSecondaryLabel}
                </span>
                <IoChevronForward size={18} className="text-primary" />
              </Link>
            ) : (
              <Link href={ctaSecondaryLink} className={`btn btn-secondary`}>
                {ctaSecondaryLabel}
              </Link>
            ))}
        </div>
      )}
    </div>
  </div>
);
