import ReactMarkdown from "react-markdown";

export const TextBlock = ({ image, header, markdown, reverse }: any) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse && "md:flex-row-reverse"
      } gap-4 md:gap-8`}
    >
      {image && (
        <div className="flex-shrink-0 w-full md:w-1/3 flex items-center">
          <img
            className="rounded-lg w-full h-auto"
            src={image.url}
            alt={image.alt}
          />
        </div>
      )}
      <div className="flex-grow flex flex-col gap-2 md:gap-4">
        <h2 className="text-accent font-semibold text-2xl">{header}</h2>
        <div className="markdown-container">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
