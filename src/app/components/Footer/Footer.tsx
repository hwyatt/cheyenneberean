import { draftMode } from "next/headers";
import Link from "next/link";
import { Fragment } from "react";
import { MdPhone } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
import {
  NAV_LINKS,
  CONNECT_LINKS,
  FAMILY_LINKS,
  CONTACT_LINKS,
} from "../../LINKS";
import { CustomLink } from "../Link/Link";

type Link = {
  title: string;
  icon: string;
  route: string;
};

export const Footer = () => {
  const aboutSection = NAV_LINKS.find((link: Link) => link.title === "About");

  const { isEnabled } = draftMode();

  return (
    <footer className="px-4 py-8 md:px-8 site-container m-auto flex flex-col gap-16">
      <div className="flex flex-col md:flex-row gap-16 md:gap-32 mt-8 md:mt-0">
        <span className="flex md:flex-col text-lg md:text-2xl gap-1 justify-center w-full md:w-auto">
          <span className="text-body block">Pursuing</span>
          <span className="text-body block">and</span>
          <span className="text-body block">Proclaiming</span>
          <span className="font-medium block underline underline-offset-4 decoration-2 md:no-underline">
            Jesus
          </span>
          <span className="text-body block">Together</span>
        </span>

        <div className="grid w-full grid-cols-12 gap-y-8 gap-x-4 z-10">
          <nav className="flex flex-col gap-2 col-span-6 md:col-span-3">
            <h6 className="font-medium text-dark mb-2">About</h6>
            {aboutSection?.sub.map((link) => (
              <Link
                href={link.route}
                className="text-body hover:text-link"
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-2 col-span-6 md:col-span-3">
            <h6 className="font-medium text-dark mb-2">Get Involved</h6>
            {CONNECT_LINKS.map((link: Link) => (
              <Link
                href={link.route}
                className="text-body hover:text-link"
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-2 col-span-6 md:col-span-3">
            <h6 className="font-medium text-dark mb-2">For Your Family</h6>
            {FAMILY_LINKS.map((link: Link) => (
              <Link
                href={link.route}
                className="text-body hover:text-link"
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-2 col-span-6 md:col-span-3">
            <h6 className="font-medium text-dark mb-2">Connect With Us</h6>
            {CONTACT_LINKS.map((link: Link) => (
              <Link
                href={link.route}
                className="text-body hover:text-link"
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-row-reverse gap-8 items-center justify-center md:justify-between">
        <div className="flex gap-4">
          {CONTACT_LINKS.map((link: Link) =>
            link.title === "Phone" ? (
              <a
                key={link.title}
                href={`tel:${link.route}`}
                className="bg-black p-1 rounded-full flex items-center justify-center"
                style={{
                  height: 36,
                  width: 36,
                }}
              >
                <MdPhone size={18} className="text-white" />
              </a>
            ) : (
              <SocialIcon
                key={link.title}
                style={{
                  height: 36,
                  width: 36,
                }}
                className="text-dark"
                url={link.route}
                bgColor={link.title === "Email" ? "#202838" : undefined}
              />
            )
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center justify-center z-10">
          <p className="text-sm md:text-base text-body">
            5716 Powderhouse Rd, Cheyenne, WY 82009
          </p>
          <p className="hidden md:block text-sm text-body">|</p>
          <CustomLink
            href={
              CONTACT_LINKS.find((link: Link) => link.title === "Phone")
                ?.route || "#"
            }
            className="text-sm md:text-base"
          >
            {CONTACT_LINKS.find(
              (link: Link) => link.title === "Phone"
            )?.route.replace("tel:", "")}
          </CustomLink>
        </div>
      </div>
      {isEnabled && <span className="text-xs">*You are in preview mode</span>}
    </footer>
  );
};
