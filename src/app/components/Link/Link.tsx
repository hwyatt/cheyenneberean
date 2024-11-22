import Link from "next/link";
import { ReactNode } from "react";

type CustomLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: () => void;
  target?: "_self" | "_blank";
  variant?: "Primary" | "Secondary";
};

export const CustomLink = ({
  children,
  className,
  href,
  onClick,
  target = "_self",
  variant = "Primary",
}: CustomLinkProps) => {
  const variantClasses =
    variant === "Primary"
      ? "text-link active:text-linkActive"
      : variant === "Secondary"
      ? "text-dark hover:text-link active:text-linkActive"
      : "";

  return (
    <Link
      href={href}
      onClick={onClick}
      target={target}
      className={`${className} ${variantClasses}`}
    >
      {children}
    </Link>
  );
};
