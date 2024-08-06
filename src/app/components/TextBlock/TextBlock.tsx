import Image from "next/image";
import ReactMarkdown from "react-markdown";

export const TextBlock = ({ image, header, markdown }: any) => {
  return (
    <div className="flex flex-col md:grid grid-cols-12 gap-4 md:gap-8">
      {image && (
        <div className="col-span-4 flex flex-col items-center">
          <Image
            className="rounded-lg w-full h-auto"
            src={image.url}
            alt={image.alt}
            height={0}
            width={0}
          />
        </div>
      )}
      <div
        className={`${
          image ? `col-span-8` : `col-span-12`
        } flex flex-col gap-2 md:gap-4`}
      >
        <h2 className="text-accent font-semibold text-2xl">{header}</h2>
        <div className="markdown-container">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
