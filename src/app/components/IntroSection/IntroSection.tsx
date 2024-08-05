import Image from "next/image";

export const IntroSection = ({ header, copy, image, headerColor }: any) => (
  <div className="copy-container flex flex-col gap-4 items-center mb-8">
    {image && (
      <div className="relative w-[250px] h-[150px]">
        <Image src={image} alt={header} layout="fill" objectFit="contain" />
      </div>
    )}
    {header && (
      <h1
        className={`font-semibold text-3xl ${
          !headerColor ? "text-accent" : headerColor
        }`}
      >
        {header}
      </h1>
    )}
    {copy && <p className="text-center text-lg">{copy}</p>}
  </div>
);
