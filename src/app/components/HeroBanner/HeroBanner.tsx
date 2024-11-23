import Image from "next/image";

export const HeroBanner = ({ title, description, eyebrowText }: any) => {
  return (
    <div className="bg-spruce rounded-lg shadow-lg relative overflow-hidden">
      <div className="w-full mx-auto flex flex-col-reverse gap-8 md:grid grid-cols-12">
        <div className="copy-container flex flex-col gap-4 col-span-8 h-full justify-between px-8 pb-8 md:pt-8 md:pr-0">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col z-10">
              {eyebrowText && (
                <span className="text-sm text-inverse uppercase font-light tracking-widest">
                  {eyebrowText}
                </span>
              )}
              <h1 className="text-xl md:text-3xl font-medium text-inverse">
                {title}
              </h1>
            </div>
            {description && (
              <p className="text-inverse text-sm md:text-base z-10">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="col-span-4 h-64 md:h-auto relative mt-8 md:mt-0">
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
