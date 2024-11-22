"use client";
import Link from "next/link";
import { useRef } from "react";
import { NAV_LINKS } from "../../LINKS";
import { RiAccountCircleLine } from "react-icons/ri";
import { CustomLink } from "../Link/Link";

export const DesktopMenu = () => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <div className="hidden flex-none md:block">
      <ul className="menu menu-horizontal items-center gap-8">
        {NAV_LINKS.map((link) => {
          return link.sub && link.sub.length > 0 ? (
            <li key={link.title}>
              <details ref={detailsRef}>
                <summary className={`text-dark font-medium hover:text-link`}>
                  {link.title}
                </summary>
                <ul className="bg-natural z-50 rounded-t-none p-2 min-w-48">
                  {link.sub.map((subLink) => (
                    <li key={subLink.title}>
                      <CustomLink
                        href={subLink.route}
                        target={link.title === "Giving" ? "_blank" : "_self"}
                        className={`font-medium`}
                        onClick={() => {
                          if (detailsRef.current) {
                            detailsRef.current.open = false; // Close the details
                          }
                        }}
                        variant="Secondary"
                      >
                        {subLink.title}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ) : (
            <li key={link.title}>
              <CustomLink
                href={link.route}
                target={link.title === "Giving" ? "_blank" : "_self"}
                className={`font-medium`}
                variant={"Secondary"}
              >
                {link.title}
              </CustomLink>
            </li>
          );
        })}
        <CustomLink
          href="https://cheyenneberean.ccbchurch.com/goto/login"
          className="flex flex-row items-center gap-2 text-dark font-medium group"
        >
          <RiAccountCircleLine
            size={24}
            className="text-dark group-hover:text-link"
          />
          <span className="text-dark group-hover:text-link">Log In</span>
        </CustomLink>
      </ul>
    </div>
  );
};
