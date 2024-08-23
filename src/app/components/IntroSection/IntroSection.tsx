import Image from "next/image";

export const IntroSection = ({
  header,
  copy,
  image,
  headerColor,
  ctaPrimary,
  ctaSecondary,
}: any) => {
  let primaryText, primaryUrl, secondaryText, secondaryUrl;
  if (ctaPrimary) {
    [primaryText, primaryUrl] = ctaPrimary.split(" | ");
  }
  if (ctaSecondary) {
    [secondaryText, secondaryUrl] = ctaSecondary.split(" | ");
  }

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
            !headerColor ? "text-accent" : headerColor
          }`}
        >
          {header}
        </h1>
      )}
      {copy && <p className="text-center text-lg text-balance">{copy}</p>}
      {(ctaPrimary || ctaSecondary) && (
        <div className="flex flex-col md:flex-row gap-4 mt-4 w-full items-center justify-center">
          {ctaPrimary && (
            <a href={primaryUrl} className="btn btn-primary w-full md:w-1/2">
              {primaryText}
            </a>
          )}
          {ctaSecondary && (
            <a
              href={secondaryUrl}
              className="btn btn-secondary w-full md:w-1/2"
            >
              {secondaryText}
            </a>
          )}
        </div>
      )}
    </div>
  );
};
