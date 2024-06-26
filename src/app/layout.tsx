import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import { IoChevronForward } from "react-icons/io5";
import { NAV_LINKS, CONNECT_LINKS, FAMILY_LINKS, CONTACT_LINKS } from "./LINKS";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const aboutSection = NAV_LINKS.find((link) => link.title === "About");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="border-b border-gray-300">
              <div className="navbar bg-white w-full m-auto px-4 relative site-container">
                <div className="flex-none md:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="mx-2 flex-1 px-2">
                  <Image
                    src="/CBC-Circle-Logo.png"
                    alt="Cheyenne Berean Church Logo"
                    width={48}
                    height={48}
                    className="absolute md:relative m-auto md:m-0 inset-0"
                  />
                </div>
                <div className="hidden flex-none md:block">
                  <ul className="menu menu-horizontal items-center gap-8">
                    {/* Navbar menu content here */}
                    {NAV_LINKS.map((link) =>
                      link.sub && link.sub.length > 0 ? (
                        <li key={link.title}>
                          <details>
                            <summary
                              className={`${
                                link.title === "Giving"
                                  ? `text-primary`
                                  : `text-accent`
                              } font-semibold hover:text-primary`}
                            >
                              {link.title}
                            </summary>
                            <ul className="z-50 rounded-t-none p-2 min-w-48">
                              {link.sub.map((subLink) => (
                                <li key={subLink.title}>
                                  <a
                                    href={subLink.route}
                                    className={`${
                                      link.title === "Giving"
                                        ? `text-primary`
                                        : `text-accent`
                                    } font-semibold hover:text-primary`}
                                  >
                                    {subLink.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </li>
                      ) : (
                        <li key={link.title}>
                          <a
                            href={link.route}
                            className={`${
                              link.title === "Giving"
                                ? `text-primary`
                                : `text-accent`
                            } font-semibold hover:text-primary`}
                          >
                            {link.title}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between bg-gray-200 pb-8">
              <div className="site-container w-full px-4 py-8 mx-auto">
                {children}
              </div>
            </main>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay text-accent"
            ></label>
            <ul className="menu bg-white min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <div className="flex flex-col border-t-2 border-gray-200">
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.title}
                    className="border-b-2 border-gray-200 py-4"
                  >
                    <a
                      href={link.route}
                      className="text-accent font-semibold uppercase text-2xl hover:text-primary flex items-center justify-between"
                    >
                      <span>{link.title}</span>
                      <IoChevronForward size={32} className="text-accent" />
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
        <div className="relative border-t border-gray-300 overflow-hidden">
          <img
            src="/light-mountains.png"
            className="absolute object-cover hidden md:block w-full md:top-[-128px]"
          />
          <footer className="bg-white px-4 py-8 md:px-8 site-container m-auto flex flex-col gap-16">
            <div className="footer z-10">
              <nav>
                <h6 className="font-bold text-accent uppercase mb-2">About</h6>
                {aboutSection?.sub.map((link) => (
                  <a className="text-gray-800 hover:underline" key={link.title}>
                    {link.title}
                  </a>
                ))}
              </nav>
              <nav>
                <h6 className="font-bold text-accent uppercase mb-2">
                  Get Involved
                </h6>
                {CONNECT_LINKS.map((link) => (
                  <a className="text-gray-800 hover:underline" key={link.title}>
                    {link.title}
                  </a>
                ))}
              </nav>
              <nav>
                <h6 className="font-bold text-accent uppercase mb-2">
                  For Your Family
                </h6>
                {FAMILY_LINKS.map((link) => (
                  <a className="text-gray-800 hover:underline" key={link.title}>
                    {link.title}
                  </a>
                ))}
              </nav>
              <nav>
                <h6 className="font-bold text-accent uppercase mb-2">
                  Connect With Us
                </h6>
                {CONTACT_LINKS.map((link) => (
                  <a className="text-gray-800 hover:underline" key={link.title}>
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-4 w-full items-center justify-center z-10">
              <p className="text-sm text-gray-800">
                5716 Powderhouse Rd, Cheyenne, WY 82009
              </p>
              <p className="hidden md:block text-sm text-gray-400">|</p>
              <a className="text-sm text-primary">123-456-7890</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
