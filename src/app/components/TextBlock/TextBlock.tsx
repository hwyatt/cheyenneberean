import ReactMarkdown from "react-markdown";

export const TextBlock = ({
  image,
  header,
  markdown,
  reverse,
  ctaPrimaryLabel,
  ctaPrimaryLink,
  ctaSecondaryLabel,
  ctaSecondaryLink,
  centerText,
  theme,
}: any) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse && "md:flex-row-reverse"
      } gap-4 md:gap-8 w-full ${theme === "kids" && `bg-white rounded-lg`}`}
    >
      {image && (
        <div className="flex-shrink-0 w-full md:w-1/3 flex items-center">
          <img
            className={`rounded-lg w-full h-auto ${
              theme === "kids" && "aspect-video object-cover md:aspect-square"
            }`}
            src={image.url}
            alt={image.alt}
          />
        </div>
      )}
      <div
        className={`flex-grow flex flex-col gap-2 md:gap-4 ${
          theme === "kids" && "p-4 md:p-8"
        }`}
      >
        {header && (
          <h2
            className={`${centerText && "text-center"} ${
              theme === "kids"
                ? "font-bobby text-3xl"
                : "text-accent font-semibold text-2xl"
            }`}
          >
            {header}
          </h2>
        )}
        <div className={`markdown-container ${centerText && "text-center"}`}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
        {(ctaPrimaryLabel || ctaPrimaryLink) && (
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-0">
            {ctaPrimaryLabel && ctaPrimaryLink && (
              <a href={ctaPrimaryLink} className="btn btn-primary">
                {ctaPrimaryLabel}
              </a>
            )}
            {ctaSecondaryLabel && ctaSecondaryLink && (
              <a href={ctaSecondaryLink} className="btn btn-secondary">
                {ctaSecondaryLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
