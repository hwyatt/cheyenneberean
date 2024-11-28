import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { Button } from "../Button/Button";
import { Chip } from "../Chip/Chip";
import { BsArrowRight } from "react-icons/bs";

type CardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  context?: string[];
  time?: string;
  people?: string[];
  location?: string | { lat: number; lon: number };
  ctaPrimaryLabel?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryLink?: string;
  ctaStyle?: string;
  theme?: string;
};

export const Card = ({
  title,
  subtitle,
  description,
  image,
  imageFit,
  context,
  time,
  people,
  location,
  ctaPrimaryLabel,
  ctaPrimaryLink = "/",
  ctaSecondaryLabel,
  ctaSecondaryLink = "/",
  ctaStyle,
  theme,
}: CardProps) => (
  <div
    className="md:col-span-6 lg:col-span-3 flex flex-col bg-palette rounded-lg shadow-md h-full"
    key={title}
  >
    <div
      className={`relative rounded-t-lg flex flex-col items-center justify-center ${
        theme === "staff" && "bg-palette pt-4 px-4"
      } ${theme !== "staff" && image ? "aspect-video" : ""}`}
    >
      {image &&
        (theme === "staff" ? (
          <Image
            src={image}
            alt={title}
            width={192}
            height={192}
            className="rounded-full"
            objectFit="cover"
            layout="intrinsic"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            layout="fill"
            className=""
          />
        ))}
    </div>
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        {context && (
          <div className="flex flex-wrap gap-2">
            {context.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        )}
        {title && (
          <h3
            className={`text-dark ${
              theme === "kids" ? `font-bobby text-2xl` : "text-xl font-medium"
            }`}
          >
            {title}
          </h3>
        )}
        {subtitle && (
          <span className="text-sm font-light text-body">{subtitle}</span>
        )}
      </div>
      {description && <p className="text-body">{description}</p>}
      {(time || people || location) && (
        <div className="flex flex-col gap-1">
          {time && (
            <div className="flex gap-1 items-center">
              <FaRegClock className="text-body" />
              <span className="text-body text-sm">{time}</span>
            </div>
          )}
          {people && (
            <div className="flex gap-1 items-center">
              <IoPersonOutline className="text-body" />
              <span className="text-body text-sm m-0">{people.join(", ")}</span>
            </div>
          )}
          {location && typeof location === "string" && (
            <div className="flex gap-1 items-center">
              <FaLocationDot className="text-body" />
              <span className="text-body text-sm m-0">{location}</span>
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
                className="flex items-center gap-2 group"
              >
                <span className="font-medium text-dark group-hover:text-link">
                  {ctaPrimaryLabel}
                </span>
                <BsArrowRight size={20} className="group-hover:text-link" />
              </Link>
            ) : (
              <Button href={ctaPrimaryLink}>{ctaPrimaryLabel}</Button>
            ))}
          {ctaSecondaryLabel &&
            (ctaStyle === "link" ? (
              <Link
                href={ctaSecondaryLink}
                className="flex items-center gap-1 group"
              >
                <span className="font-medium text-dark group-hover:text-link">
                  {ctaSecondaryLabel}
                </span>
                <BsArrowRight size={20} className="group-hover:text-link" />
              </Link>
            ) : (
              <Button href={ctaSecondaryLink} variant="Secondary">
                {ctaSecondaryLabel}
              </Button>
            ))}
        </div>
      )}
    </div>
  </div>
);
