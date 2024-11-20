"use client";
import Link from "next/link";
import { useRef } from "react";
import { NAV_LINKS } from "../../LINKS";
import { RiAccountCircleLine } from "react-icons/ri";

export const DesktopMenu = () => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <div className="hidden flex-none md:block">
      <ul className="menu menu-horizontal items-center gap-8">
        {NAV_LINKS.map((link) => {
          return link.sub && link.sub.length > 0 ? (
            <li key={link.title}>
              <details ref={detailsRef}>
                <summary
                  className={`${
                    link.title === "Giving" ? `text-primary` : `text-gray-800`
                  } font-semibold hover:text-blue-500 uppercase`}
                >
                  {link.title}
                </summary>
                <ul className="z-50 rounded-t-none p-2 min-w-48">
                  {link.sub.map((subLink) => (
                    <li key={subLink.title}>
                      <Link
                        href={subLink.route}
                        target={link.title === "Giving" ? "_blank" : "_self"}
                        className={`${
                          link.title === "Giving"
                            ? `text-primary`
                            : `text-gray-800`
                        } font-semibold hover:text-blue-500 uppercase`}
                        onClick={() => {
                          if (detailsRef.current) {
                            detailsRef.current.open = false; // Close the details
                          }
                        }}
                      >
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ) : (
            <li key={link.title}>
              <Link
                href={link.route}
                target={link.title === "Giving" ? "_blank" : "_self"}
                className={`${
                  link.title === "Giving" ? `text-primary` : `text-gray-800`
                } font-semibold hover:text-blue-500 uppercase`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
        <Link
          href="https://cheyenneberean.ccbchurch.com/goto/login"
          className="flex flex-row items-center gap-2 text-primary font-semibold group uppercase"
        >
          <RiAccountCircleLine
            size={24}
            className="text-gray-600 group-hover:text-blue-500"
          />
          <span className="text-primary group-hover:text-blue-500">Log In</span>
        </Link>
      </ul>
    </div>
  );
};
