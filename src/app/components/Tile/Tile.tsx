import Image from "next/image";
import Link from "next/link";

export const Tile = ({
  header,
  description,
  ctaLabel,
  ctaLink,
  responsive,
  theme,
  backgroundImg,
}: any) => {
  let gradient: string;
  let background: string;

  switch (theme) {
    case "light":
      gradient = "from-[rgba(255,255,255,0.9)] to-[rgba(255,255,255,0)]";
      background = "bg-white";
      break;
    case "dark":
      gradient = "from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]";
      background = "bg-gray-800";
      break;
    case "brand":
      gradient = "from-[rgba(3,50,76,0.9)] to-[rgba(3,50,76,0)]";
      background = "bg-accent";
      break;
    default:
      gradient = "from-[rgba(3,50,76,0.9)] to-[rgba(3,50,76,0)]";
      background = "bg-accent";
  }

  return responsive ? (
    <div
      className={`flex flex-col items-start justify-end col-span-12 relative rounded-lg min-h-[350px]`}
    >
      <div className="absolute inset-0 h-full w-full">
        <img
          src={backgroundImg}
          className="h-full w-full object-cover rounded-lg"
        />
        <div
          className={`absolute inset-0 bottom-0 rounded-md bg-gradient-to-t md:bg-gradient-to-l ${gradient}`}
        ></div>
      </div>
      <div className="flex flex-col justify-end md:justify-center md:self-end md:max-w-[40%] gap-4 p-4 lg:p-8 relative z-10 h-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span
              className={`${
                theme === "light" ? `text-accent` : `text-white`
              } text-xl md:text-2xl font-bold`}
            >
              {header}
            </span>
            <span
              className={`${
                theme === "light" ? `text-gray-800` : `text-white`
              } text-sm md:text-base font-light`}
            >
              {description}
            </span>
          </div>
          <div className="flex">
            <a href={ctaLink} className="btn btn-primary w-auto">
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`flex flex-col items-start justify-end col-span-6 relative rounded-lg min-h-[350px]`}
    >
      <div className="absolute inset-0 h-full w-full">
        <img
          src={backgroundImg}
          className="h-full w-full object-cover rounded-lg"
        />
        <div
          className={`absolute inset-x-0 bottom-0 rounded-md h-[75%] bg-gradient-to-t ${gradient}`}
        ></div>
      </div>
      <div className="flex flex-col justify-end gap-4 p-4 lg:p-8 relative z-10 h-full">
        <div className="flex flex-col">
          <span
            className={`${
              theme === "light" ? `text-accent` : `text-white`
            } text-xl font-bold`}
          >
            {header}
          </span>
          <span
            className={`${
              theme === "light" ? `text-gray-800` : `text-white`
            } text-sm font-light`}
          >
            {description}
          </span>
        </div>
        <div className="flex">
          <a href={ctaLink} className="btn btn-primary w-auto">
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
};
