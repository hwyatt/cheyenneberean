export const ValuesTile = ({
  title,
  description,
  icon,
  theme,
  verse,
  verseText,
}: any) => {
  let textColor, secondaryTextColor, bgColor, bgImg, iconImg;

  if (theme === "kids") {
    textColor = "text-dark";
    secondaryTextColor = null;
    bgColor = "#f7f5f3";
    bgImg = "/kids/texture.png";
  }

  if (theme === "awana") {
    textColor = "text-dark";
    secondaryTextColor = null;
    bgColor = "#ffffff";
    bgImg = "/awana/value-background.png";
    iconImg = "/awana/yellow-arrowhead.png";
  }

  if (theme === "kidsVerse") {
    textColor = "text-inverse";
    secondaryTextColor = null;
    bgColor = "#a04303";
    bgImg = null;
  }

  if (theme === "church") {
    textColor = "text-dark";
    secondaryTextColor = "text-body";
    bgColor = "#f7f5f3";
    bgImg = null;
  }

  return (
    <div
      key={title}
      className={`h-full font-medium p-4 md:px-8 md:pb-8 md:pt-16 rounded flex flex-col gap-4 justify-between relative overflow-hidden text-start md:col-span-1 shadow-md min-h-[225px] md:min-h-[300px] ${
        theme === "awana" ? "border border-gray-200" : ""
      }`}
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
              <span className="text-sm text-inverse uppercase font-light tracking-widest">
                {verse}
              </span>
              <h1 className="text-3xl font-medium text-inverse">{verseText}</h1>
            </div>
          )}
          {title && (
            <span className={`${textColor} z-10 text-xl`}>{title}</span>
          )}
        </div>
        {description && (
          <p
            className={`${
              secondaryTextColor ? secondaryTextColor : textColor
            } font-light z-10`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
