import Image from "next/image";
import { ConnectSectionProps } from "@/app/api/types";
import { Button } from "../Button/Button";

export const ConnectSection = ({
  logo,
  heading,
  description,
  ctaLabel,
  ctaLink,
  theme,
}: ConnectSectionProps) => (
  <div
    className={`flex flex-col md:flex-row items-center justify-between gap-4 py-8 ${
      theme === "awana" ? "border-gray-200" : "border-borderPrimary"
    } border-t-2 border-b-2 w-full`}
  >
    <div className="flex flex-col md:flex-row items-center gap-4">
      {logo && (
        <Image
          src={logo.url}
          alt={heading}
          className="mb-4 md:mb-0"
          width={126}
          height={48}
          objectFit="contain"
          style={{ maxHeight: "48px", width: "auto" }}
        />
      )}
      <div className="flex flex-col gap-2 mb-4 md:mb-0">
        <span
          className={`text-center md:text-start font-medium text-dark text-2xl md:leading-5 text-balance`}
        >
          {heading}
        </span>
        <span className="text-center md:text-start text-body md:leading-5 text-balance">
          {description}
        </span>
      </div>
    </div>
    <Button
      href={ctaLink}
      className="w-full md:w-auto"
      variant={
        theme === "awana"
          ? "Dark"
          : theme === "youth"
          ? "Dark"
          : theme === "kids"
          ? "Cedar"
          : "Primary"
      }
    >
      {ctaLabel}
    </Button>
  </div>
);
