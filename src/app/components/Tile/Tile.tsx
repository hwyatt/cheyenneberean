import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";

type TileParams = {
  heading: string;
  description?: string;
  image: string;
  ctaLabel: string;
  ctaLink: string;
  responsive?: boolean;
  theme?: string;
};

export const Tile = ({
  heading,
  description,
  ctaLabel,
  ctaLink,
  responsive = false,
  theme = "dark",
  image,
}: TileParams) => {
  let gradient: string;
  let background: string;

  switch (theme) {
    case "light":
      gradient = "from-[rgba(255,255,255,0.9)] to-[rgba(255,255,255,0)]";
      background = "bg-white";
      break;
    default:
      gradient = "from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]";
      background = "bg-black";
      break;
  }

  const imgOnly = image && ctaLink && !ctaLabel && !heading && !description;

  return responsive ? (
    <Link
      className={`flex flex-col items-start justify-end col-span-12 relative rounded-lg aspect-video`}
      href={ctaLink}
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={image}
          alt={`${heading} background image`}
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
        <div
          className={`absolute inset-0 bottom-0 rounded-md bg-gradient-to-t md:bg-gradient-to-l ${
            imgOnly ? "" : gradient
          }`}
        ></div>
      </div>
      <div className="flex flex-col justify-end md:justify-center md:self-end md:max-w-[40%] gap-4 p-4 lg:p-8 relative z-10 h-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span
              className={`${
                theme === "light" ? `text-dark` : `text-white`
              } text-xl md:text-2xl font-bold text-balance`}
            >
              {heading}
            </span>
            <span
              className={`${
                theme === "light" ? `text-dark` : `text-white`
              } text-sm md:text-base font-light text-balance`}
            >
              {description}
            </span>
          </div>
          <div className="flex md:mt-4">
            {ctaLink && ctaLabel && (
              <Button href={ctaLink} variant="Secondary">
                {ctaLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <Link
      className={`flex flex-col items-start justify-end col-span-6 relative rounded-lg min-h-[350px]`}
      href={ctaLink}
    >
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={image}
          alt={`${heading} background image`}
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
        <div
          className={`absolute inset-x-0 bottom-0 rounded-md h-[75%] bg-gradient-to-t ${
            imgOnly ? "" : gradient
          }`}
        ></div>
      </div>
      <div className="flex flex-col justify-end gap-4 p-4 lg:p-8 relative z-10 h-full">
        <div className="flex flex-col">
          <span
            className={`${
              theme === "light" ? `text-dark` : `text-white`
            } text-xl font-bold text-balance`}
          >
            {heading}
          </span>
          <span
            className={`${
              theme === "light" ? `text-dark` : `text-white`
            } text-sm font-light text-balance`}
          >
            {description}
          </span>
        </div>
        <div className="flex md:mt-4">
          {ctaLink && ctaLabel && (
            <Button href={ctaLink} variant={"Secondary"}>
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
};
