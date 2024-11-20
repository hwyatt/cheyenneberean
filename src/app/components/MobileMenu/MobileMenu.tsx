"use client";
import Link from "next/link";
import { RiAccountCircleLine } from "react-icons/ri";
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
          className="drawer-overlay text-gray-800"
        ></label>
        <ul className="mobile-menu menu bg-white min-h-full w-3/4 p-0">
          {/* Sidebar content here */}
          <div className="flex flex-col gap-16 mt-8 border-gray-200 border-b pb-8 mx-4">
            {NAV_LINKS.map((link) =>
              link.sub && link.sub.length > 0 ? (
                <li key={link.title}>
                  <details>
                    <summary
                      className={`${
                        link.title === "Giving"
                          ? `text-primary`
                          : `text-gray-600`
                      } font-semibold hover:text-primary text-3xl py-0 uppercase`}
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
                                : `text-gray-600`
                            } text-3xl font-semibold hover:text-primary py-0 uppercase`}
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
                    target={link.title === "Giving" ? "_blank" : "_self"}
                    className={`${
                      link.title === "Giving" ? `text-primary` : `text-gray-600`
                    } text-3xl font-semibold hover:text-primary py-0 uppercase`}
                    onClick={closeDrawer} // Close drawer on link click
                  >
                    {link.title}
                  </Link>
                </li>
              )
            )}
          </div>
          <Link
            href="https://cheyenneberean.ccbchurch.com/goto/login"
            className="flex flex-row items-center gap-2 text-primary font-semibold hover:text-primary uppercase mt-8 mx-4"
          >
            <RiAccountCircleLine size={48} className="text-gray-600" />
            <span className="text-primary text-3xl">Log In</span>
          </Link>
        </ul>
      </div>
    </>
  );
};
