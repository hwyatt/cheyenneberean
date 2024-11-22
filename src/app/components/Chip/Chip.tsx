import { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  href?: string;
};

export const Chip = ({ children, href }: ChipProps) => {
  return (
    <a
      href={href}
      className={`bg-white text-xs rounded-lg border border-borderPrimary ${
        href ? "hover:bg-natural hover:border-borderSecondary" : ""
      } py-1 px-2 rounded-xl whitespace-nowrap no-underline`}
    >
      {children}
    </a>
  );
};
