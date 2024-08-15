import Image from "next/image";
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

  return (
    <Link
      key={title}
      href={link}
      className={`relative overflow-hidden flex flex-col items-center justify-center gap-2 aspect-video rounded-lg p-4 md:hover:scale-105 duration-300 shadow-sm md:hover:shadow-lg ${tileBGColor}`}
    >
      {coverImg && (
        <>
          <div className="bg-overlay z-10"></div>
          <Image
            src={coverImg}
            alt={title}
            className="absolute"
            layout="fill"
            objectFit="cover"
          />
        </>
      )}
      {!coverImg && logoImg && (
        <Image
          src={logoImg}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="p-4"
        />
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
        <Image
          src="/dark-mountains.png"
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      )}
    </Link>
  );
};
