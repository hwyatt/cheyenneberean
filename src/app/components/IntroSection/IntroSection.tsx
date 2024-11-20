import { PageIntroSection } from "@/app/api/types";
import Image from "next/image";

export const IntroSection = ({
  heading,
  description,
  logo,
  primaryCtaLabel,
  primaryCtaLink,
  secondaryCtaLabel,
  secondaryCtaLink,
}: PageIntroSection) => {
  const hasTwoButtons = primaryCtaLink && secondaryCtaLink;

  return (
    <div className="copy-container flex flex-col gap-4 items-center mb-8">
      {logo && (
        <div className="relative w-[250px] h-[150px]">
          <Image
            src={logo.url}
            alt={heading}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
      {heading && (
        <h1 className={`font-semibold text-3xl text-center text-gray-800`}>
          {heading}
        </h1>
      )}
      {description && (
        <p className="text-center text-lg text-balance">{description}</p>
      )}
      {(primaryCtaLink || secondaryCtaLink) && (
        <div className="flex flex-col md:flex-row gap-4 mt-4 w-full items-center justify-center">
          {primaryCtaLink && (
            <a
              href={primaryCtaLink}
              className={`btn btn-accent w-full ${
                !hasTwoButtons ? "md:w-auto" : "md:w-1/2"
              }`}
            >
              {primaryCtaLabel}
            </a>
          )}
          {secondaryCtaLink && (
            <a
              href={secondaryCtaLink}
              className={`btn btn-accent w-full ${
                !hasTwoButtons ? "md:w-auto" : "md:w-1/2"
              }`}
            >
              {secondaryCtaLabel}
            </a>
          )}
        </div>
      )}
    </div>
  );
};
