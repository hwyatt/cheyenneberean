import Image from "next/image";
import {
  IoChevronForward,
  IoPersonOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { FaRegClock, FaRegMessage, FaLocationDot } from "react-icons/fa6";
import { FaHandHoldingHeart, FaWalking } from "react-icons/fa";
import { PiHandsPrayingFill } from "react-icons/pi";
import { MdPhone } from "react-icons/md";
import { FaCross } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/facebook";
import "react-social-icons/email";
import { CONNECT_LINKS, CONTACT_LINKS, FAMILY_LINKS } from "./LINKS";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { SermonSeries } from "./components/SermonSeries/SermonSeries";
import { Tile } from "./components/Tile/Tile";
import { fetchGraphQL } from "./api/contentful";
import { Card } from "./components/Card/Card";

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
    date
  );
  return `${formattedDate} | ${formattedTime}`;
};

const HOME_PAGE_QUERY = `
query homePage {
  heroBanner(id: "2thbXCaTgQCPtTZDMSWoaC") {
    sys {
      id
    }
    # add the fields you want to query
    title,
    description,
    eyebrowText
  }
  sermonSeriesCollection(order: date_DESC, limit: 1) {
    items {
      sys {
        id
      }
      title
      description
      date
      image {
        url
      }
      sermonsCollection(order: date_DESC, limit: 1) {
        items {
          title
          speaker
          date
          link
          image {
            url
          }
        }
      }
    }
  }
  eventCollection(order: startDateTime_ASC, limit: 4) {
    items {
      _id
      title
      startDateTime
      coverImage {
        url
      }
      logoImage {
        url
      }
      backgroundColor
    }
  }
}`;

export default async function Home() {
  const data = await fetchGraphQL(HOME_PAGE_QUERY);
  const homePageContent = data.data;
  const eventContent = data.data.eventCollection;
  const sermonSeriesContent = homePageContent.sermonSeriesCollection.items[0];
  const sermonContent = sermonSeriesContent.sermonsCollection.items[0];

  const theme: string = "brand";

  let gradient: string;
  let background: string;

  switch (theme) {
    case "light":
      gradient = "from-[rgba(255,255,255,0.9)] to-[rgba(255,255,255,0)]";
      background = "bg-white";
      break;
    case "dark":
      gradient = "from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]";
      background = "bg-gray-800";
      break;
    case "brand":
      gradient = "from-[rgba(3,50,76,0.9)] to-[rgba(3,50,76,0)]";
      background = "bg-accent";
      break;
    default:
      gradient = "from-[rgba(3,50,76,0.9)] to-[rgba(3,50,76,0)]";
      background = "bg-accent";
  }

  return (
    <div className="flex flex-col gap-8">
      {homePageContent.heroBanner && (
        <HeroBanner
          title={homePageContent.heroBanner.title}
          eyebrowText={homePageContent.heroBanner.eyebrowText}
          description={homePageContent.heroBanner.description}
        />
      )}
      <div className="flex flex-col md:grid grid-cols-12 gap-8">
        <div className="col-span-8 flex flex-col gap-8">
          {sermonSeriesContent && (
            <SermonSeries
              sermonTitle={sermonContent.title}
              sermonDate={sermonContent.date}
              sermonSpeaker={sermonContent.speaker}
              imgUrl={
                sermonContent.image
                  ? sermonContent.image.url
                  : sermonSeriesContent.image.url
              }
              watchSermonLink={sermonContent.link}
            />
          )}
          {eventContent && eventContent.items.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:grid grid-cols-12 gap-4">
                {/* RESPONSIVE 12 COL */}
                <div
                  className={`flex flex-col items-start justify-end col-span-12 relative rounded-lg min-h-[350px]`}
                >
                  <div className="absolute inset-0 h-full w-full">
                    <img
                      src="https://thebelonging.co/wp-content/uploads/2021/04/PAST-MESSAGES_DESKTOP.jpg"
                      className="h-full w-full object-cover rounded-lg"
                    />
                    {/* CHANGES HERE */}
                    <div
                      className={`absolute inset-0 bottom-0 rounded-md bg-gradient-to-t md:bg-gradient-to-l ${gradient}`}
                    ></div>
                  </div>
                  <div className="flex flex-col justify-end md:justify-center md:self-end md:max-w-[40%] gap-4 p-4 lg:p-8 relative z-10 h-full">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <span
                          className={`${
                            theme === "light" ? `text-accent` : `text-white`
                          } text-xl md:text-2xl font-bold`}
                        >
                          Testing 123
                        </span>
                        <span
                          className={`${
                            theme === "light" ? `text-gray-800` : `text-white`
                          } text-sm md:text-base font-light`}
                        >
                          Testing description on a promo tile for the home page
                          of Cheyenne Berean Church
                        </span>
                      </div>
                      <div className="flex">
                        <button className="btn btn-primary w-auto">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* STACKED 6 COL */}
                <div
                  className={`flex flex-col items-start justify-end col-span-6 relative rounded-lg min-h-[350px]`}
                >
                  <div className="absolute inset-0 h-full w-full">
                    <img
                      src="https://thebelonging.co/wp-content/uploads/2021/04/PAST-MESSAGES_DESKTOP.jpg"
                      className="h-full w-full object-cover rounded-lg"
                    />
                    <div
                      className={`absolute inset-x-0 bottom-0 rounded-md h-[75%] bg-gradient-to-t ${gradient}`}
                    ></div>
                  </div>
                  <div className="flex flex-col justify-end gap-4 p-4 lg:p-8 relative z-10 h-full">
                    <div className="flex flex-col">
                      <span
                        className={`${
                          theme === "light" ? `text-accent` : `text-white`
                        } text-xl font-bold`}
                      >
                        Testing 123
                      </span>
                      <span
                        className={`${
                          theme === "light" ? `text-gray-800` : `text-white`
                        } text-sm font-light`}
                      >
                        Testing description on a promo tile for the home page of
                        Cheyenne Berean Church
                      </span>
                    </div>
                    <div className="flex">
                      <button className="btn btn-primary w-auto">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
                {/* STACKED 6 COL */}
                <div
                  className={`flex flex-col items-start justify-end col-span-6 relative rounded-lg min-h-[350px]`}
                >
                  <div className="absolute inset-0 h-full w-full">
                    <img
                      src="https://thebelonging.co/wp-content/uploads/2021/04/PAST-MESSAGES_DESKTOP.jpg"
                      className="h-full w-full object-cover rounded-lg"
                    />
                    <div
                      className={`absolute inset-x-0 bottom-0 rounded-md h-[75%] bg-gradient-to-t ${gradient}`}
                    ></div>
                  </div>
                  <div className="flex flex-col justify-end gap-4 p-4 lg:p-8 relative z-10 h-full">
                    <div className="flex flex-col">
                      <span
                        className={`${
                          theme === "light" ? `text-accent` : `text-white`
                        } text-xl font-bold`}
                      >
                        Testing 123
                      </span>
                      <span
                        className={`${
                          theme === "light" ? `text-gray-800` : `text-white`
                        } text-sm font-light`}
                      >
                        Testing description on a promo tile for the home page of
                        Cheyenne Berean Church
                      </span>
                    </div>
                    <div className="flex">
                      <button className="btn btn-primary w-auto">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
                {/* STACKED 6 COL w/ Logo */}
                {/* <div
                  className={`flex flex-col items-start justify-end col-span-6 relative rounded-lg min-h-[350px] ${background}`}
                >
                  <div className="pt-4 px-4 md:pt-8 md:px-8 max-h-[175px] w-full flex justify-center">
                    <img
                      src="/logo-kids-awana.png"
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="flex flex-col justify-end gap-4 p-4 lg:p-8 relative z-10 h-full">
                    <div className="flex flex-col">
                      <span
                        className={`${
                          theme === "light" ? `text-accent` : `text-white`
                        } text-xl font-bold`}
                      >
                        Testing 123
                      </span>
                      <span
                        className={`${
                          theme === "light" ? `text-gray-800` : `text-white`
                        } text-sm font-light`}
                      >
                        Testing description on a promo tile for the home page of
                        Cheyenne Berean Church
                      </span>
                    </div>
                    <div className="flex">
                      <button className="btn btn-primary w-auto">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-4 flex flex-col gap-8">
          <div className="bg-white rounded-lg flex flex-col justify-start shadow-lg">
            <div className="aspect-video relative">
              <Image
                src="/cbcMap.png"
                alt="Cheyenne Berean Church location"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                {/* <div className="flex items-center justify-center rounded-full border-2 border-accent bg-secondary w-16 h-16 opacity-60"></div> */}
                <FaLocationDot className="text-accent" size={32} />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-start p-4">
              <h3 className="text-accent font-semibold text-xl mb-0">
                Service Times
              </h3>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1 items-center">
                    <FaRegClock className="text-accent" />
                    <span className="text-sm">
                      Sundays at 9:00 AM & 10:30 AM
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaLocationDot className="text-accent" />
                    <span className="text-sm m-0">
                      5716 Powderhouse Rd, Cheyenne, WY 82009
                    </span>
                  </div>
                </div>
                <button className="btn btn-secondary">Get Directions</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-accent uppercase">
              Get Involved
            </h3>
            <div className="flex flex-col gap-4">
              {CONNECT_LINKS.map((link) => (
                <a
                  key={link.title}
                  className="flex items-center justify-between gap-4 bg-white rounded-lg p-4 shadow-md md:hover:shadow-lg transition ease-in-out md:hover:-translate-y-0.5 md:hover:scale-105 duration-300"
                  href={link.route}
                >
                  <div className="flex items-center gap-4">
                    {link.icon === "person" ? (
                      <IoPersonOutline size={24} className="text-gray-800" />
                    ) : link.icon === "serve" ? (
                      <IoPeopleOutline size={24} className="text-gray-800" />
                    ) : link.icon === "people" ? (
                      <FaRegMessage size={24} className="text-gray-800" />
                    ) : link.icon === "give" ? (
                      <FaHandHoldingHeart size={24} className="text-gray-800" />
                    ) : link.icon === "prayer" ? (
                      <PiHandsPrayingFill size={24} className="text-gray-800" />
                    ) : link.icon === "walking" ? (
                      <FaWalking size={24} className="text-gray-800" />
                    ) : null}
                    <span className="font-semibold text-gray-800">
                      {link.title}
                    </span>
                  </div>
                  <IoChevronForward size={24} className="text-gray-800" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-accent uppercase">
              For Your Family
            </h3>
            <div className="flex flex-col gap-4">
              {FAMILY_LINKS.map((link) => (
                <a
                  key={link.title}
                  className="flex items-center justify-between gap-4 bg-white rounded-lg p-4 shadow-md md:hover:shadow-lg transition ease-in-out md:hover:-translate-y-0.5 md:hover:scale-105 duration-300"
                  href={link.route}
                >
                  <div className="flex items-center gap-4">
                    {link.icon === "kids" ? (
                      <Image
                        src="/logo-berean-kids.png"
                        className="w-12 h-6 object-contain"
                        width={48}
                        height={24}
                        alt="Berean Kids"
                      />
                    ) : link.icon === "youth" ? (
                      <Image
                        src="/logo-kids-awana.png"
                        className="w-12 h-6 object-contain"
                        width={48}
                        height={24}
                        alt="Berean Youth"
                      />
                    ) : link.icon === "young-adults" ? (
                      <Image
                        src="/logo-crossroads-412.jpg"
                        className="w-12 h-6 object-contain"
                        width={48}
                        height={24}
                        alt="Berean Young Adults"
                      />
                    ) : link.icon === "awana" ? (
                      <Image
                        src="/logo-kids-awana.png"
                        className="w-12 h-6 object-contain"
                        width={48}
                        height={24}
                        alt="Awana"
                      />
                    ) : null}
                    <span className="font-semibold text-gray-800">
                      {link.title}
                    </span>
                  </div>
                  <IoChevronForward size={24} className="text-gray-800" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-accent uppercase">
              Connect with Us
            </h3>
            <div className="flex flex-col gap-4">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.title}
                  className="flex items-center justify-between gap-4 bg-white rounded-lg p-4 shadow-md md:hover:shadow-lg transition ease-in-out md:hover:-translate-y-0.5 md:hover:scale-105 duration-300"
                  href={link.route}
                >
                  <div className="flex items-center gap-4">
                    {link.icon === "facebook" ? (
                      <SocialIcon
                        style={{
                          height: 24,
                          width: 24,
                        }}
                        className="text-gray-800"
                        url="https://www.facebook.com/cheyenneberean/"
                      />
                    ) : link.icon === "youtube" ? (
                      <SocialIcon
                        style={{
                          height: 24,
                          width: 24,
                        }}
                        className="text-gray-800"
                        url="https://www.youtube.com/c/CheyenneBereanChurch"
                      />
                    ) : link.icon === "email" ? (
                      <SocialIcon
                        style={{
                          height: 24,
                          width: 24,
                        }}
                        className="text-gray-800"
                        bgColor="#1F4061"
                        url="mailto:office@cheyenneberean.org"
                      />
                    ) : link.icon === "phone" ? (
                      <div className="bg-accent p-1 rounded-full max-w-8">
                        <MdPhone size={14} className="text-white" />
                      </div>
                    ) : null}
                    <span className="font-semibold text-gray-800">
                      {link.title}
                    </span>
                  </div>
                  <IoChevronForward size={24} className="text-gray-800" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
