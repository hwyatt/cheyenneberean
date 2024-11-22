import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  size?: "Small" | "Medium" | "Large";
  variant?: "Primary" | "Secondary" | "Dark" | "Cedar";
  href?: string;
  target?: "_self" | "_blank";
};

export const Button = ({
  children,
  className,
  fullWidth = false,
  onClick,
  size,
  variant = "Primary",
  href,
  target,
}: ButtonProps) => {
  const variantClass =
    variant === "Secondary"
      ? "bg-inverse text-buttonDark border-2 border-borderSecondary hover:bg-natural hover:text-buttonDark hover:border-2 hover:border-buttonDark active:bg-borderSecondary active:text-white active:border-borderSecondary"
      : variant === "Dark"
      ? "bg-buttonDark text-inverse border-2 border-buttonDark hover:bg-[#edeae3] hover:text-[rgba(12,11,8,.75)] active:bg-buttonDark active:text-inverse"
      : variant === "Cedar"
      ? "bg-redCedar text-inverse border-2 border-redCedar hover:bg-natural hover:text-redCedar active:bg-redCedar active:text-inverse"
      : // Primary
        "bg-spruce text-inverse border-2 border-spruce hover:bg-natural hover:text-spruce hover:border-2 border-spruce active:bg-sound active:text-white";

  const width = fullWidth ? "w-full" : "w-auto";

  const sizeClass =
    size === "Small"
      ? "px-3 py-1.5"
      : size === "Large"
      ? "px-6 py-3"
      : // Medium
        "px-4 py-2";

  const commonClasses = `${variantClass} ${width} ${sizeClass} font-medium rounded transition-all duration-300 ease-in-out text-center ${className}`;

  return href ? (
    <Link href={href} target={target} className={commonClasses}>
      {children}
    </Link>
  ) : (
    <button className={commonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
