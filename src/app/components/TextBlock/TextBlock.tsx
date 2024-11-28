import { TextBlockParams } from "@/app/api/types";
import ReactMarkdown from "react-markdown";
import { Button } from "../Button/Button";
import Image from "next/image";

type VideoProps = {
  src: string;
  poster: string;
};

export function Video({ src, poster }: VideoProps) {
  return (
    <div className={`w-full h-auto aspect-video shadow-lg`}>
      <video
        className="w-full h-auto aspect-video rounded-lg"
        width="320"
        height="240"
        controls
        preload="none"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export const TextBlock = ({
  heading,
  image,
  thumbnail,
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
          {/\.(mp4|webm|ogg)$/i.test(image.url) ? (
            // Render Video if URL indicates a video file
            <Video src={image.url} poster={thumbnail?.url} />
          ) : (
            // Render Image otherwise
            <Image
              className="rounded-lg w-full h-auto"
              src={image.url}
              alt={""}
              width={640}
              height={640}
              layout="responsive"
            />
          )}
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
