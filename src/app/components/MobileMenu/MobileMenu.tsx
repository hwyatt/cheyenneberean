"use client";
import Link from "next/link";
import { NAV_LINKS } from "../../LINKS";

export const MobileMenu = () => {
  // Function to close the drawer
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "my-drawer-3"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false; // Uncheck the checkbox to close the drawer
    }
  };

  return (
    <>
      {/* Drawer toggle checkbox */}
      <input type="checkbox" id="my-drawer-3" className="drawer-toggle" />

      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay text-accent"
        ></label>
        <ul className="mobile-menu menu bg-white min-h-full w-3/4 p-0">
          {/* Sidebar content here */}
          <div className="flex flex-col gap-16 mt-8 border-gray-200">
            {NAV_LINKS.map((link) =>
              link.sub && link.sub.length > 0 ? (
                <li key={link.title}>
                  <details>
                    <summary
                      className={`${
                        link.title === "Giving" ? `text-primary` : `text-accent`
                      } font-semibold hover:text-primary text-3xl px-4 py-0`}
                    >
                      {link.title}
                    </summary>
                    <ul className="z-50 rounded-t-none p-0 min-w-48 flex flex-col gap-8 mt-8">
                      {link.sub.map((subLink) => (
                        <li key={subLink.title}>
                          <Link
                            href={subLink.route}
                            className={`${
                              link.title === "Giving"
                                ? `text-primary`
                                : `text-accent`
                            } text-3xl font-semibold hover:text-primary px-4 py-0`}
                            onClick={closeDrawer} // Close drawer on link click
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
                    } text-3xl font-semibold hover:text-primary px-4 py-0`}
                    onClick={closeDrawer} // Close drawer on link click
                  >
                    {link.title}
                  </Link>
                </li>
              )
            )}
          </div>
        </ul>
      </div>
    </>
  );
};
