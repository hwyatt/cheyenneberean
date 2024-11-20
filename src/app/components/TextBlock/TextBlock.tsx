import { TextBlockParams } from "@/app/api/types";
import ReactMarkdown from "react-markdown";

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
        <div className="flex-shrink-0 w-full md:w-1/3 flex items-center">
          <img
            className={`rounded-lg w-full h-auto`}
            src={image.url}
            alt={image.alt}
          />
        </div>
      )}
      <div className={`flex-grow flex flex-col gap-2 md:gap-4`}>
        {heading && (
          <h2
            className={`${
              centerText && "text-center"
            } font-semibold text-2xl text-gray-800`}
          >
            {heading}
          </h2>
        )}
        <div className={`markdown-container ${centerText && "text-center"}`}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
        {(primaryCtaLabel || secondaryCtaLabel) && (
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-0">
            {primaryCtaLabel && primaryCtaLink && (
              <a href={primaryCtaLink} className="btn btn-accent">
                {primaryCtaLabel}
              </a>
            )}
            {secondaryCtaLabel && secondaryCtaLink && (
              <a href={secondaryCtaLink} className="btn btn-secondary">
                {secondaryCtaLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
