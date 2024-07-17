import Image from "next/image";
import {
  IoChevronForward,
  IoPersonOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { PiHandsPrayingFill } from "react-icons/pi";
import { MdPhone } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/facebook";
import "react-social-icons/email";
import { CONNECT_LINKS, CONTACT_LINKS, FAMILY_LINKS } from "./LINKS";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { SermonSeries } from "./components/SermonSeries/SermonSeries";
import { Tile } from "./components/Tile/Tile";
import { fetchGraphQL } from "./api/contentful";

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
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-accent uppercase">
                  Events
                </h3>
                <a href="/events" className="flex items-center gap-1">
                  <span className="text-gray-600 font-semibold text-sm">
                    See All Events
                  </span>
                  <IoChevronForward size={16} className="text-gray-600" />
                </a>
              </div>
              <div className="flex flex-col md:grid grid-cols-12 gap-4">
                {eventContent.items.map((event: any) => (
                  <div className="col-span-6" key={event.title}>
                    <Tile
                      link={`/events/${event._id}`}
                      title={event.title}
                      description={formatDateTime(event.startDateTime)}
                      coverImg={event.coverImage?.url}
                      logoImg={event.logoImage?.url}
                      bgColor={event.backgroundColor}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-4 flex flex-col gap-8">
          <div className="border-gray-400 border-2 rounded-lg p-4 flex flex-col gap-2 justify-start">
            <h3 className="text-accent font-semibold text-lg mb-0">
              Service Times
            </h3>
            <span className="text-gray-800 text-sm">Sunday: 9am & 10:30am</span>
            <div className="flex flex-col">
              <span className="text-gray-600 text-sm m-0">
                5716 Powderhouse Rd,
              </span>
              <span className="text-gray-600 text-sm m-0">
                Cheyenne, WY 82009
              </span>
            </div>
            <button className="text-accent font-semibold md:hover:underline text-sm mt-2 inline-flex items-center self-start p-0 gap-1">
              <span>Get Directions</span>
              <IoChevronForward size={16} className="text-gray-800" />
            </button>
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
                  href="#"
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
