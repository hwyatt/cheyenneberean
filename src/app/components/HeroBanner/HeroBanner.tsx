import Image from "next/image";

type HeroBannerProps = {
  title: string;
  description: string;
  eyebrowText: string;
};

export const HeroBanner = ({
  title,
  description,
  eyebrowText,
}: HeroBannerProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-dark shadow-lg p-8 md:p-16 md:min-h-[350px] flex justify-center items-center">
      <div className="mx-auto flex h-full w-full items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center text-balance text-2xl font-medium text-inverse md:text-3xl">
            “They (those in Berea) received the word with all eagerness,
            examining the Scriptures daily”
          </h1>
          <span className="text-center text-sm font-light uppercase tracking-widest text-inverse">
            Acts 17:11
          </span>
        </div>
      </div>
      <Image
        src="/brand/nameless-vector.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute bottom-0 opacity-5 pointer-events-none"
      />
    </div>
  );
};
