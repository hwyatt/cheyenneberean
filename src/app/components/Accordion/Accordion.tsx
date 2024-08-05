export const Accordion = ({ header, items }: any) => {
  <div className="flex flex-col items-center gap-2 w-full">
    <h2 className="text-lg font-semibold uppercase">{header}</h2>
    <div className="flex flex-col gap-4 copy-container md:min-w-[768px]">
      {items.map((item: any) => {
        <div className="collapse collapse-arrow bg-white rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-semibold">
            {item.question}
          </div>
          <div className="collapse-content">
            <p>{item.answer}</p>
          </div>
        </div>;
      })}
    </div>
  </div>;
};
