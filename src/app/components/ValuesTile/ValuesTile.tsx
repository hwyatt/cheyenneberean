import { BiSolidCircleHalf } from "react-icons/bi";
import { PiCross } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { LiaCheckCircle } from "react-icons/lia";
import { TbMoodKid } from "react-icons/tb";
import { Card } from "../Card/Card";
import { ReactNode } from "react";
import Image from "next/image";

type ValuesTileProps = {
  title?: string;
  description?: string;
  icon?: ReactNode;
  theme?: string;
  verse?: string;
  verseText?: string;
};

export const ValuesTile = ({
  title,
  description,
  icon,
  theme,
  verse,
  verseText,
}: ValuesTileProps) => {
  let textColor, secondaryTextColor, bgColor, bgImg, iconImg;

  if (theme === "kids") {
    textColor = "text-dark";
    secondaryTextColor = null;
    bgColor = "#f7f5f3";
    bgImg = "/kids/texture.png";
  }

  if (theme === "awana") {
    textColor = "text-dark";
    secondaryTextColor = null;
    bgColor = "#ffffff";
    bgImg = "/awana/value-background.png";
    iconImg = "/awana/yellow-arrowhead.png";
  }

  if (theme === "church") {
    textColor = "text-dark";
    secondaryTextColor = "text-body";
    bgColor = "#F5F6F2";
    bgImg = null;
  }

  return (
    <div
      key={title}
      className={`h-full font-medium p-4 md:px-8 md:pb-8 md:pt-16 rounded flex flex-col gap-4 justify-between relative overflow-hidden text-start md:col-span-1 shadow-md min-h-[225px] md:min-h-[300px] ${
        theme === "awana" ? "border border-gray-200" : ""
      }`}
      style={{ background: bgColor }}
    >
      {bgImg && (
        <Image
          src={bgImg}
          alt="BereanKIDS Texture Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 transform scale-150"
        />
      )}
      <div className="flex flex-col gap-1 z-10">
        <div className="flex flex-col gap-4">
          {icon && icon}
          {theme === "awana" && (
            <Image
              src={iconImg || ""}
              alt={`Awana value - ${title}`}
              width={24}
              height={24}
              className="w-6 h-auto"
            />
          )}
          {verse && verseText && (
            <div className="flex flex-col z-10">
              <span className="text-sm text-inverse uppercase font-light tracking-widest">
                {verse}
              </span>
              <h1 className="text-3xl font-medium text-inverse">{verseText}</h1>
            </div>
          )}
          {title && (
            <span className={`${textColor} z-10 text-xl`}>{title}</span>
          )}
        </div>
        {description && (
          <p
            className={`${
              secondaryTextColor ? secondaryTextColor : textColor
            } font-light z-10`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export const WelcomePageTiles = () => (
  <div className="flex flex-col items-center gap-4">
    <h2 className="text-2xl font-medium">Our Vision</h2>
    <div className="flex flex-col items-center text-center gap-4 md:grid md:grid-cols-3 w-full">
      <ValuesTile
        title="Gather"
        description="Strength, companionship, and joy are found in unified gathering. Our lives are changed as we band together pursuing and proclaiming Jesus. We seek to encourage and enjoy one another by gathering together on Sunday mornings and throughout the week in smaller gatherings called grow groups."
        icon={
          <BiSolidCircleHalf size={48} className="text-sagebrush ml-[-22px]" />
        }
        theme="church"
      />
      <ValuesTile
        title="Grow"
        description="Together, with eyes fixed on Jesus we are being transformed to be more like him. We want to encounter Jesus; be filled with his characteristics and qualities; so that others will experience Jesus who is alive in us."
        icon={<BiSolidCircleHalf size={48} className="text-moss ml-[-22px]" />}
        theme="church"
      />
      <ValuesTile
        title="Go"
        description="God lovingly and sovereignly set us in a place, a time, and for a purpose. Together, we are discovering where God is at work around us and joining Him. We are taking steps together and encouraging one another as we make Jesus known locally, regionally, and globally."
        icon={
          <BiSolidCircleHalf
            size={48}
            className="text-salmonberry ml-[-22px]"
          />
        }
        theme="church"
      />
    </div>
  </div>
);

const VALUES = [
  {
    title: "Gospel Centered",
    desc: "Our lessons come directly from Scripture. Our curriculum and conversations regularly establish our need for Jesus both to save us from our sins and to live courageously for Him.",
    icon: <PiCross className="h-8 w-8 text-redCedar" />,
  },
  {
    title: "Partnership",
    desc: "Scripture stresses the importance of parents and the local church in spiritual formation. We commit to partnering together; equipping and releasing a team of people who want to see children's lives transformed.",
    icon: <LuHeartHandshake className="h-8 w-8 text-redCedar" />,
  },
  {
    title: "Safety",
    desc: "We use structured and thorough safety protocols. All volunteers are consistently screened to ensure maximum safety and security for families.",
    icon: <AiOutlineSafety className="h-8 w-8 text-redCedar" />,
  },
  {
    title: "Excellence",
    desc: "We provide quality teaching and instruction to kids of all ages. We strive to be organized, consistent, and impactful so the Gospel can reach kids in lasting ways.",
    icon: <LiaCheckCircle className="h-8 w-8 text-redCedar" />,
  },
  {
    title: "Age Specific",
    desc: "Our curriculum runs chronologically through the Bible to help a child understand the Bible as a whole. We commit to helping even the youngest of our congregation become resilient followers of Jesus.",
    icon: <TbMoodKid className="h-8 w-8 text-redCedar" />,
  },
];

type BKCLASS = {
  title: string;
  description: string;
  ages: string;
};

const CLASSES: BKCLASS[] = [
  {
    title: "Embark",
    description:
      "As we commit to equipping our youngest group, this class will focus on learning the gospel through play and worship. Your child will sing songs, enjoy a snack, and have fellowship with other children up until their 3rd birthday.",
    ages: "Ages 0-2",
  },
  {
    title: "Ascent",
    description:
      "We know that play and fun is of the upmost importance, alongside learning. Your child's schedule will consist of a routine including: Bible lesson and story, songs, snack, and play! Children in this room range from 3-6 years old.",
    ages: "Ages 3-5",
  },
  {
    title: "Venture",
    description:
      "This class will equip your child to participate in conversations, learn the Gospel through discussion, reading, memorizing Scripture, and games.",
    ages: "1st-3rd Grade",
  },
  {
    title: "Anchor",
    description:
      "This class will equip your child to participate in conversations, learn the Gospel through discussion, reading, memorizing Scripture, and games.",
    ages: "4th-6th Grade",
  },
];

export const KidsPageTiles = () => (
  <>
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-medium">What to expect on Sundays</h2>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="flex flex-wrap justify-center -my-2">
          {VALUES.map((value) => (
            <div className="flex-none w-full md:w-1/3 p-2" key={value.title}>
              <ValuesTile
                title={value.title}
                description={value.desc}
                icon={value.icon}
                theme="kids"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center gap-4 w-full">
      <h2 className="text-2xl font-medium">Our Kids Environments</h2>
      <div className="flex flex-wrap justify-center -my-2">
        {CLASSES.map((classroom: BKCLASS) => (
          <div className="flex-none w-full md:w-1/4 p-2" key={classroom.title}>
            <Card
              title={classroom.title}
              description={classroom.description}
              context={[classroom.ages]}
            />
          </div>
        ))}
      </div>
    </div>
  </>
);
