export const ValuesTile = ({
  title,
  desc,
  icon,
  theme,
  verse,
  verseText,
}: any) => {
  let textColor, bgColor, bgImg, iconImg;

  if (theme === "kids") {
    textColor = "text-white";
    bgColor = "#6A7065";
    bgImg = "/kids/texture-kids.png";
  }

  if (theme === "awana") {
    textColor = "text-gray-800";
    bgColor = "#ffffff";
    bgImg = "/awana/value-background.png";
    iconImg = "/awana/yellow-arrowhead.png";
  }

  if (theme === "kidsVerse") {
    textColor = "text-white";
    bgColor = "#D45D0E";
    bgImg = null;
  }

  return (
    <div
      key={title}
      className="font-semibold p-4 md:px-8 md:pb-8 md:pt-16 rounded flex flex-col gap-4 justify-between relative overflow-hidden text-start md:col-span-1 shadow-md min-h-[225px] md:min-h-[300px]"
      style={{ background: bgColor }}
    >
      {bgImg && (
        <img
          src={bgImg}
          className="absolute inset-0 h-full w-full object-cover transform scale-150"
        />
      )}
      <div className="flex flex-col gap-1 z-10">
        <div className="flex flex-col gap-4">
          {icon && icon}
          {theme === "awana" && (
            <img
              src={iconImg}
              alt={`Awana value - ${title}`}
              className="w-6 h-auto"
            />
          )}
          {verse && verseText && (
            <div className="flex flex-col z-10">
              <span className="text-sm text-gray-200 uppercase font-light tracking-widest">
                {verse}
              </span>
              <h1 className="text-3xl font-semibold text-white">{verseText}</h1>
            </div>
          )}
          {title && (
            <span className={`${textColor} z-10 text-xl`}>{title}</span>
          )}
        </div>
        {desc && <p className={`${textColor} font-light z-10`}>{desc}</p>}
      </div>
    </div>
  );
};
