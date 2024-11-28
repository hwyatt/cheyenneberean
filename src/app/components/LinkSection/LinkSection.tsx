import Link from "next/link";
import Image from "next/image";
import { IoPersonOutline, IoPeopleOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { FaHandHoldingHeart, FaWalking } from "react-icons/fa";
import { PiHandsPrayingFill } from "react-icons/pi";
import { MdPhone } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/facebook";
import "react-social-icons/email";

type LinkSectionLink = { route: string; icon: string; title: string };

export const LinkSection = ({
  title,
  links,
}: {
  title: string;
  links: LinkSectionLink[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-medium text-dark">{title}</h3>
      <div className="flex flex-col bg-palette rounded-lg shadow-lg">
        {links.map((link) => (
          <LinkCard key={link.title} link={link} />
        ))}
      </div>
    </div>
  );
};

const LinkCard = ({ link }: { link: LinkSectionLink }) => {
  return (
    <Link
      className="flex items-center justify-between gap-4 p-4 transition ease-in-out md:hover:-translate-y-0.5 md:hover:scale-105 duration-700"
      href={link.route}
      target={link.icon === "give" ? "_blank" : "_self"}
    >
      <div className="flex items-center gap-4">
        {renderIcon(link.icon)}
        <span className="font-medium text-dark">{link.title}</span>
      </div>
      <BsArrowRight size={24} />
    </Link>
  );
};

const renderIcon = (icon: string) => {
  switch (icon) {
    case "person":
      return <IoPersonOutline size={24} />;
    case "serve":
      return <IoPeopleOutline size={24} />;
    case "people":
      return <FaRegMessage size={24} />;
    case "give":
      return <FaHandHoldingHeart size={24} />;
    case "prayer":
      return <PiHandsPrayingFill size={24} />;
    case "walking":
      return <FaWalking size={24} />;
    case "kids":
      return (
        <Image
          src="/kids/logo-berean-kids.png"
          className="w-12 h-6 object-contain"
          width={48}
          height={24}
          alt="Berean Kids"
        />
      );
    case "youth":
      return (
        <Image
          src="/youth/circle-black.webp"
          className="w-12 h-6 object-contain"
          width={48}
          height={24}
          alt="Berean Youth"
        />
      );
    case "young-adults":
      return (
        <Image
          src="/crossroads412/logo-crossroads-412.webp"
          className="w-12 h-6 object-contain"
          width={48}
          height={24}
          alt="Berean Young Adults"
        />
      );
    case "awana":
      return (
        <Image
          src="/awana/logo-kids-awana.png"
          className="w-12 h-6 object-contain"
          width={48}
          height={24}
          alt="Awana"
        />
      );
    case "facebook":
      return (
        <SocialIcon
          style={{ height: 24, width: 24 }}
          url="https://www.facebook.com/cheyenneberean/"
        />
      );
    case "youtube":
      return (
        <SocialIcon
          style={{ height: 24, width: 24 }}
          url="https://www.youtube.com/c/CheyenneBereanChurch"
        />
      );
    case "email":
      return (
        <SocialIcon
          style={{ height: 24, width: 24 }}
          bgColor="#000000"
          url="mailto:office@cheyenneberean.org"
        />
      );
    case "phone":
      return (
        <div className="bg-black p-1 rounded-full max-w-8">
          <MdPhone size={14} className="text-white" />
        </div>
      );
    default:
      return null;
  }
};
