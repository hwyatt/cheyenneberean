"use client";
import Link from "next/link";
import { useRef } from "react";
import { NAV_LINKS } from "../../LINKS";

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
                    link.title === "Giving" ? `text-primary` : `text-accent`
                  } font-semibold hover:text-primary`}
                >
                  {link.title}
                </summary>
                <ul className="z-50 rounded-t-none p-2 min-w-48">
                  {link.sub.map((subLink) => (
                    <li key={subLink.title}>
                      <Link
                        href={subLink.route}
                        className={`${
                          link.title === "Giving"
                            ? `text-primary`
                            : `text-accent`
                        } font-semibold hover:text-primary`}
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
                className={`${
                  link.title === "Giving" ? `text-primary` : `text-accent`
                } font-semibold hover:text-primary`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
