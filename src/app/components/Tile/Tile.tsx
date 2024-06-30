import Link from "next/link";
import { BsArrowRightSquareFill } from "react-icons/bs";

export const Tile = ({
  link,
  title,
  description,
  coverImg,
  logoImg,
  bgColor,
}: any) => {
  const tileBGColor =
    bgColor === "Brand"
      ? "bg-accent"
      : bgColor === "Secondary"
      ? "bg-secondary"
      : bgColor === "Black"
      ? "bg-black"
      : bgColor === "white"
      ? "bg-white"
      : bgColor === "Emphasis"
      ? "bg-gray-200"
      : "bg-accent";

  console.log("Tile BG Color:", bgColor, tileBGColor);

  return (
    <Link
      key={title}
      href={link}
      className={`relative overflow-hidden flex flex-col items-center justify-center gap-2 col-span-6 aspect-video rounded-lg p-4 md:hover:scale-105 duration-300 shadow-sm md:hover:shadow-lg ${tileBGColor}`}
    >
      {coverImg && (
        <>
          <div className="bg-overlay z-10"></div>
          <img src={coverImg} className="absolute object-cover w-full h-full" />
        </>
      )}
      {!coverImg && logoImg && (
        <img src={logoImg} className="h-full w-full object-contain" />
      )}
      {!logoImg && (
        <div className="absolute bottom-[16px] left-[16px] z-10">
          <h4 className="font-semibold text-white text-lg z-10">{title}</h4>
          <span className="font-light text-white text-sm z-10">
            {description}
          </span>
        </div>
      )}
      <div className="absolute bottom-[16px] right-[16px] z-10">
        <BsArrowRightSquareFill size={32} className="text-white" />
      </div>
      {!coverImg && !logoImg && (
        <img
          src="/dark-mountains.png"
          className="absolute object-cover w-full h-full"
        />
      )}
    </Link>
  );
};
