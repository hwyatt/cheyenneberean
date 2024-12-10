import Image from "next/image";
import { Button } from "../Button/Button";

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
    <div className="w-[calc(100vw-8px)] mx-[calc(50%-50vw)] relative overflow-hidden min-h-[450px] flex bg-gray-800 -mt-8">
      <div className="absolute inset-0 bg-black opacity-55 z-10"></div>
      <div className="relative z-20 flex flex-col justify-end gap-2 site-container mx-auto p-8 md:py-16">
        <h1 className="text-balance text-2xl font-medium text-inverse md:text-3xl">
          “They (those in Berea) received the word with all eagerness, examining
          the Scriptures daily”
        </h1>
        <span className="text-sm font-light uppercase tracking-widest text-inverse">
          Acts 17:11
        </span>
        <div className="md:hidden flex flex-col md:flex-row gap-4 mt-6">
          <Button>Join Us For Service</Button>
          <Button variant="Secondary">Stream Online</Button>
        </div>
        <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-8 mt-6">
          <Button href="/welcome" size="Large">
            {`I'm New Here`}
          </Button>
          <Button
            target="_blank"
            href="https://www.youtube.com/@CheyenneBereanChurch/streams"
            variant="Secondary"
            size="Large"
          >
            Stream Online
          </Button>
        </div>
      </div>

      {/* Background Image */}
      <Image
        src="/brand/hero.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
};
