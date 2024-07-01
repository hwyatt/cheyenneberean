export const IntroSection = ({ header, copy }: any) => (
  <div className="copy-container flex flex-col gap-4 items-center">
    <h1 className="text-accent font-semibold text-2xl md:text-4xl">{header}</h1>
    <p className="text-center">{copy}</p>
  </div>
);
