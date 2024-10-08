import Image from "next/image";
import Link from "next/link";

export const HeroBanner = ({ title, description, eyebrowText }: any) => {
  return (
    <div className="bg-accent rounded-lg shadow-lg relative overflow-hidden">
      <div className="w-full p-4 md:p-8 mx-auto flex flex-col-reverse gap-8 md:grid grid-cols-12">
        <div className="copy-container flex flex-col gap-4 col-span-8 h-full justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col z-10">
              {eyebrowText && (
                <span className="text-sm text-gray-200 uppercase font-light tracking-widest">
                  {eyebrowText}
                </span>
              )}
              <h1 className="text-xl md:text-3xl font-semibold text-white">
                {title}
              </h1>
            </div>
            {description && (
              <p className="text-white text-sm md:text-base z-10">
                {description}
              </p>
            )}
          </div>
          {/* <div className="flex gap-4 mt-4 z-10">
            <button className="btn btn-primary">Join Us For Service</button>
            <Link
              href="https://www.youtube.com/@CheyenneBereanChurch/streams"
              className="btn btn-secondary"
            >
              Stream Online
            </Link>
          </div> */}
        </div>
        <div className="col-span-4 h-64 md:h-auto relative">
          <Image
            src="/brand/vector.png"
            alt={"Cheyenne Berean Church Building"}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};
