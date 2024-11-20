import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { CONNECT_LINKS } from "./LINKS";
import { IoPersonOutline, IoPeopleOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaHandHoldingHeart, FaWalking } from "react-icons/fa";
import { PiHandsPrayingFill } from "react-icons/pi";
import "react-social-icons/facebook";
import "react-social-icons/email";
import { DesktopMenu } from "./components/DesktopMenu/DesktopMenu";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Footer } from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cheyenne Berean Church",
  description:
    "Our mission is to pursue and proclaim Jesus together: Gather, Grow, and Go, being transformed by Him and sharing the Gospel worldwide.",
  openGraph: {
    images: [
      {
        url: "/brand/OpenGraph.png",
        width: 1200,
        height: 630,
        alt: "Description of the image",
      },
    ],
  },
};

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
            <div className="md:border-b md:border-gray-300">
              <div className="navbar bg-white w-full m-auto px-4 relative site-container">
                <div className="flex-none md:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-link"
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
                  <Link href="/">
                    <Image
                      src="/brand/logo.png"
                      alt="Cheyenne Berean Church Logo"
                      width={80}
                      height={80}
                      className="absolute md:relative m-auto md:m-0 inset-0"
                    />
                  </Link>
                </div>
                <DesktopMenu />
              </div>
            </div>
            <div className="md:hidden border-b border-gray-300 overflow-x-auto">
              <div className="px-4 pt-4 pb-2 flex justify-between sm:justify-evenly">
                {CONNECT_LINKS.map((link) => (
                  <Link
                    key={link.route}
                    href={link.route}
                    className="flex flex-col justify-center items-center gap-1"
                  >
                    {link.icon === "person" ? (
                      <IoPersonOutline size={24} className="text-gray-800" />
                    ) : link.icon === "serve" ? (
                      <IoPeopleOutline size={24} className="text-gray-800" />
                    ) : link.icon === "walking" ? (
                      <FaWalking size={24} className="text-gray-800" />
                    ) : link.icon === "people" ? (
                      <FaRegMessage size={24} className="text-gray-800" />
                    ) : link.icon === "give" ? (
                      <FaHandHoldingHeart size={24} className="text-gray-800" />
                    ) : link.icon === "prayer" ? (
                      <PiHandsPrayingFill size={24} className="text-gray-800" />
                    ) : null}
                    <p className="font-semibold text-gray-600 text-xs">
                      {link.title === "Prayer Request" ? "Prayer" : link.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between bg-gray-200 pb-8">
              <div className="site-container w-full px-4 py-8 mx-auto">
                {children}
              </div>
            </main>
          </div>
          <MobileMenu />
        </div>
        <div className="relative border-t border-gray-300 overflow-hidden bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
