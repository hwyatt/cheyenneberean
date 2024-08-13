export const Accordion = ({ header, items, theme }: any) => (
  <div className="flex flex-col items-center gap-2 bg-white rounded-lg p-4 md:p-8 min-w-full lg:min-w-none">
    <h2
      className={`${
        theme === "kids" ? `font-bobby text-3xl` : "text-xl"
      } font-semibold uppercase ${theme === "brand" && "text-accent"}`}
    >
      {header}
    </h2>
    <div className="flex flex-col min-w-full">
      {items.map((item: any, index: any) => (
        <div
          className={`collapse collapse-plus ${
            index < items.length - 1
              ? "border-b-2 border-gray-200 rounded-none"
              : ""
          }`}
          key={item.question}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-gray-800 flex items-center">
            {item.question}
          </div>
          <div className="collapse-content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
