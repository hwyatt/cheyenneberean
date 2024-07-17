import Image from "next/image";

export const IntroSection = ({ header, copy, image }: any) => (
  <div className="copy-container flex flex-col gap-4 items-center">
    {image && (
      <div className="relative h-48 w-full">
        <Image src={image} alt={header} layout="fill" objectFit="contain" />
      </div>
    )}
    {header && (
      <h1 className="text-accent font-semibold text-2xl md:text-4xl">
        {header}
      </h1>
    )}
    {copy && <p className="text-center">{copy}</p>}
  </div>
);
