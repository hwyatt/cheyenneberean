import { TextBlockParams } from "@/app/api/types";
import ReactMarkdown from "react-markdown";
import { Button } from "../Button/Button";

export const TextBlock = ({
  heading,
  image,
  markdown,
  reverse = false,
  primaryCtaLabel,
  primaryCtaLink,
  secondaryCtaLabel,
  secondaryCtaLink,
  centerText = false,
}: TextBlockParams) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse && "md:flex-row-reverse"
      } gap-4 md:gap-8 w-full`}
    >
      {image && (
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-start">
          <img
            className={`rounded-lg w-full h-auto`}
            src={image.url}
            alt={image.alt}
          />
        </div>
      )}
      <div className={`flex-grow flex flex-col gap-2 md:gap-4`}>
        {heading && (
          <h2 className={`${centerText && "text-center"} font-medium text-2xl`}>
            {heading}
          </h2>
        )}
        <div
          className={`markdown-container text-balance ${
            centerText && "text-center"
          }`}
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
        {(primaryCtaLabel || secondaryCtaLabel) && (
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4">
            {primaryCtaLabel && primaryCtaLink && (
              <Button href={primaryCtaLink}>{primaryCtaLabel}</Button>
            )}
            {secondaryCtaLabel && secondaryCtaLink && (
              <Button href={secondaryCtaLink} variant={"Secondary"}>
                {secondaryCtaLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
