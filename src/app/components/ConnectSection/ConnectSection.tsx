import { ConnectSectionProps } from "@/app/api/types";

export const ConnectSection = ({
  logo,
  heading,
  description,
  ctaLabel,
  ctaLink,
}: ConnectSectionProps) => (
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 border-gray-300 border-t-2 border-b-2 w-full">
    <div className="flex flex-col md:flex-row items-center gap-4">
      {logo && <img src={logo.url} className="max-h-12 mb-4 md:mb-0" />}
      <div className="flex flex-col gap-2 mb-4 md:mb-0">
        <span
          className={`text-center md:text-start font-semibold text-gray-800 text-2xl leading-5 text-balance`}
        >
          {heading}
        </span>
        <span className="text-center md:text-start text-gray-800 leading-5 text-balance">
          {description}
        </span>
      </div>
    </div>
    <a href={ctaLink} className="btn btn-primary w-full md:w-auto">
      {ctaLabel}
    </a>
  </div>
);
