export const ValuesTile = ({ title, desc, icon, theme }: any) => {
  let textColor, bgColor, bgImg, iconImg;

  if (theme === "kids") {
    textColor = "text-white";
    bgColor = "#6A7065";
    bgImg = "/texture-kids.png";
  }

  if (theme === "awana") {
    textColor = "text-gray-800";
    bgColor = "#ffffff";
    bgImg = "/awana/value-background.png";
    iconImg = "/awana/yellow-arrowhead.png";
  }

  return (
    <div
      key={title}
      className="font-semibold p-4 md:px-8 md:pb-8 md:pt-16 rounded flex flex-col gap-4 justify-between relative overflow-hidden text-start md:col-span-1 h-full shadow-md"
      style={{ background: bgColor }}
    >
      <img
        src={bgImg}
        className="absolute inset-0 h-full w-full object-cover transform scale-150"
      />
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
          <span className={`text-xl ${textColor} z-10`}>{title}</span>
        </div>
        <p className={`${textColor} font-light z-10`}>{desc}</p>
      </div>
    </div>
  );
};
