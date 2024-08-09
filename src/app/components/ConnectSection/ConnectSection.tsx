export const ConnectSection = ({ img, header, copy, cta }: any) => (
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 border-gray-300 border-t-2 border-b-2 w-full">
    <div className="flex flex-col md:flex-row items-center gap-4">
      {img && <img src={img} className="h-auto w-32 mb-4 md:mb-0" />}
      <div className="flex flex-col gap-2 mb-4 md:mb-0">
        <span className="text-center md:text-start font-semibold text-gray-800 text-2xl leading-5">
          {header}
        </span>
        <span className="text-center md:text-start text-gray-800 leading-5">
          {copy}
        </span>
      </div>
    </div>
    <button className="btn btn-primary w-full md:w-auto">{cta}</button>
  </div>
);
