export const Card = ({
  title,
  subtitle,
  description,
  image,
  backgroundColor,
}: any) => (
  <div
    className="md:col-span-6 lg:col-span-3 flex flex-col bg-white rounded-lg"
    key={title}
  >
    <div
      className={`relative rounded-t-lg flex flex-col items-center justify-center p-4 ${
        !image && `h-2`
      }`}
      style={{ backgroundColor: backgroundColor }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="max-h-[95px] h-auto object-contain"
        />
      )}
    </div>
    <div className="flex flex-col gap-2 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className="text-sm font-light text-gray-600">{subtitle}</span>
      </div>
      <p className="text-gray-800">{description}</p>
    </div>
  </div>
);
