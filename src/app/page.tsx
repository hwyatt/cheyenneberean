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
import { BsArrowRightSquareFill } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/facebook";
import "react-social-icons/email";
import { CONNECT_LINKS, CONTACT_LINKS, FAMILY_LINKS } from "./LINKS";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-accent rounded-lg shadow-lg relative overflow-hidden">
        <img
          src="/dark-mountains.png"
          className="absolute object-cover w-full h-full right-[-35%]"
        />
        <div className="w-full p-4 md:p-8 mx-auto">
          <div className="copy-container flex flex-col gap-4">
            <div className="flex flex-col z-10">
              <span className="text-sm text-gray-200 uppercase font-light tracking-widest">
                Acts 17:11
              </span>
              <h1 className="text-xl md:text-3xl font-semibold text-white">
                “They (those in Berea) received the word with all eagerness,
                examining the Scriptures daily…”
              </h1>
            </div>
            <p className="text-white text-sm md:text-base z-10">
              Our mission is to pursue and proclaim Jesus together. <br />
              Together, we accomplish this mission as we collectively fix our
              gaze on Jesus when we gather, being transformed to be more like
              Jesus as we grow, and put Him on display to all around us as we
              go.
              <br />
              The process seen in Scripture is a continuous cycle where we
              gather, grow, go, living out the Gospel in our community, region,
              and around the world.
            </p>
            {/* <div className="flex gap-4 mt-4 z-10">
                                <button className="btn btn-primary">
                                    Join Us For Service
                                </button>
                                <button className="btn btn-secondary">
                                    Stream Online
                                </button>
                            </div> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-12 gap-8">
        <div className="col-span-8 flex flex-col gap-8">
          {/* <div>
                            <div className="aspect-video rounded-lg flex flex-col relative md:hover:scale-105 duration-300 shadow-sm md:hover:shadow-lg">
                                <div className="bg-overlay"></div>
                                <img
                                    src="https://cheyenneberean.org/wp-content/uploads/2024/04/Psalms-of-Ascent-002.png"
                                    className="object-cover h-full w-full rounded-lg"
                                    style={{ objectPosition: "top" }}
                                />
                                <div className="flex flex-col gap-4 absolute bottom-[16px] left-[16px] md:bottom-[32px] md:left-[32px]">
                                    <div className="flex flex-col gap-2">
                                        <div className="inline-block">
                                            <span className="bg-secondary rounded-full text-accent text-xs font-semibold py-2 px-4 opacity-75">
                                                Latest Sermon
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="font-semibold text-xl md:text-3xl text-white m-0">
                                                Psalm 120
                                            </h2>
                                            <span className="text-white font-light">
                                                Josh Nighswonger
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-[16px] right-[16px] md:bottom-[32px] md:right-[32px]">
                                    <BsArrowRightSquareFill
                                        size={32}
                                        className="text-white"
                                    />
                                </div>
                            </div>
                        </div> */}
          <div className="flex flex-col gap-12 border-b-2 pb-12 border-gray-300">
            <div>
              <div className="aspect-video rounded-lg flex flex-col relative shadow-sm md:hover:shadow-lg">
                <div className="bg-overlay"></div>
                <img
                  src="https://cheyenneberean.org/wp-content/uploads/2024/04/Psalms-of-Ascent-002.png"
                  className="object-cover h-full w-full rounded-lg"
                  style={{ objectPosition: "top" }}
                />
                <button className="btn btn-primary absolute bottom-[-22px] left-1/2 transform -translate-x-1/2">
                  <span>Watch Sermon</span>
                  <IoChevronForward size={18} className="text-white" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <div className="flex flex-col">
                <h2 className="font-semibold text-xl md:text-3xl text-accent m-0">
                  Psalm 120
                </h2>
                <span className="text-gray-800 font-light text-sm">
                  September 7, 2024 | Josh Nighswonger
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-accent uppercase">
                Events
              </h3>
              <a href="#" className="flex items-center gap-1">
                <span className="text-gray-600 font-semibold text-sm">
                  See All Events
                </span>
                <IoChevronForward size={16} className="text-gray-600" />
              </a>
            </div>
            <div className="flex flex-col md:grid grid-cols-12 gap-4">
              <a
                href="#"
                className="col-span-6 aspect-video bg-gray-800 rounded-lg p-4 md:hover:scale-105 duration-300 shadow-sm md:hover:shadow-lg"
              >
                <img
                  src="https://assets.answersingenesis.org/img/cms/content/contentnode/image/zoomerang-logo.png"
                  className="h-full w-full object-contain"
                />
              </a>
              <a
                href="#"
                className="relative overflow-hidden flex flex-col items-center justify-center gap-2 col-span-6 aspect-video bg-accent rounded-lg p-4 md:hover:scale-105 duration-300 shadow-sm md:hover:shadow-lg"
              >
                <div className="absolute bottom-[16px] left-[16px] z-10">
                  <h4 className="font-semibold text-white text-lg z-10">
                    Membership Class
                  </h4>
                  <span className="font-light text-white text-sm z-10">
                    August 31 | 12:00pm
                  </span>
                </div>
                <div className="absolute bottom-[16px] right-[16px] z-10">
                  <BsArrowRightSquareFill size={32} className="text-white" />
                </div>
                <img
                  src="/dark-mountains.png"
                  className="absolute object-cover w-full h-full"
                />
              </a>
              <a
                href="#"
                className="relative overflow-hidden flex flex-col items-center justify-center gap-2 col-span-6 aspect-video rounded-lg p-4 md:hover:scale-105 duration-300 shadow-sm md:hover:shadow-lg"
              >
                <div className="bg-overlay z-10"></div>
                <img
                  src="https://thebelonging.co/wp-content/uploads/2021/04/PAST-MESSAGES_DESKTOP.jpg"
                  className="aspect-video absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-[16px] left-[16px] z-10">
                  <h4 className="font-semibold text-white text-lg z-10">
                    Bible Study
                  </h4>
                  <span className="font-light text-white text-sm z-10">
                    September 7 | 5:00pm
                  </span>
                </div>
                <div className="absolute bottom-[16px] right-[16px] z-10">
                  <BsArrowRightSquareFill size={32} className="text-white" />
                </div>
              </a>
              <a
                href="#"
                className="relative overflow-hidden flex flex-col items-center justify-center gap-2 col-span-6 aspect-video rounded-lg p-4 md:hover:scale-105 duration-300 shadow-sm md:hover:shadow-lg"
              >
                <div className="bg-overlay z-10"></div>
                <img
                  src="https://www.yourchurch.com/content/uploads/2023/09/8BEF47C2-9F21-46EF-9F03-7316D9BF9759.jpg"
                  className="aspect-video absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-[16px] left-[16px] z-10">
                  <h4 className="font-semibold text-white text-lg z-10">
                    Student Conference
                  </h4>
                  <span className="font-light text-white text-sm z-10">
                    September 7 | 5:00pm
                  </span>
                </div>
                <div className="absolute bottom-[16px] right-[16px] z-10">
                  <BsArrowRightSquareFill size={32} className="text-white" />
                </div>
              </a>
            </div>
          </div>
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
                  href="#"
                >
                  <div className="flex items-center gap-4">
                    {link.icon === "kids" ? (
                      <img src="/logo-kids-awana.png" className="w-12 h-auto" />
                    ) : link.icon === "youth" ? (
                      <img src="/logo-kids-awana.png" className="w-12 h-auto" />
                    ) : link.icon === "awana" ? (
                      <img src="/logo-kids-awana.png" className="w-12 h-auto" />
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
                  href="#"
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
