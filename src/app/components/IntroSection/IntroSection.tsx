import Image from "next/image";

export const IntroSection = ({
  header,
  copy,
  image,
  headerColor,
  ctaPrimaryLabel,
  ctaPrimaryLink,
  ctaSecondaryLabel,
  ctaSecondaryLink,
}: any) => {
  const hasTwoButtons = ctaPrimaryLink && ctaSecondaryLink;

  return (
    <div className="copy-container flex flex-col gap-4 items-center mb-8">
      {image && (
        <div className="relative w-[250px] h-[150px]">
          <Image src={image} alt={header} layout="fill" objectFit="contain" />
        </div>
      )}
      {header && (
        <h1
          className={`font-semibold text-3xl text-center ${
            !headerColor ? "text-gray-800" : headerColor
          }`}
        >
          {header}
        </h1>
      )}
      {copy && <p className="text-center text-lg text-balance">{copy}</p>}
      {(ctaPrimaryLink || ctaSecondaryLink) && (
        <div className="flex flex-col md:flex-row gap-4 mt-4 w-full items-center justify-center">
          {ctaPrimaryLink && (
            <a
              href={ctaPrimaryLink}
              className={`btn btn-accent w-full ${
                !hasTwoButtons ? "md:w-auto" : "md:w-1/2"
              }`}
            >
              {ctaPrimaryLabel}
            </a>
          )}
          {ctaSecondaryLink && (
            <a
              href={ctaSecondaryLink}
              className={`btn btn-accent w-full ${
                !hasTwoButtons ? "md:w-auto" : "md:w-1/2"
              }`}
            >
              {ctaSecondaryLabel}
            </a>
          )}
        </div>
      )}
    </div>
  );
};
