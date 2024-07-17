import Image from "next/image";
import { Tile } from "../components/Tile/Tile";
import { fetchGraphQL } from "../api/contentful";
import { PiCross } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { LiaCheckCircle } from "react-icons/lia";
import { TbMoodKid } from "react-icons/tb";

const VALUES = [
  {
    title: "Gospel Centered",
    desc: "Our lessons come directly from Scripture. Our curriculum and conversations regularly establish our need for Jesus both to save us from our sins and to live courageously for Him.",
    icon: <PiCross className="h-8 w-8 text-gray-800" />,
  },
  {
    title: "Partnership",
    desc: "Scripture stresses the importance of parents and the local church in spiritual formation. We commit to partnering together; equipping and releasing a team of people who want to see children's lives transformed.",
    icon: <LuHeartHandshake className="h-8 w-8 text-gray-800" />,
  },
  {
    title: "Safety",
    desc: "We use structured and thorough safety protocols. All volunteers are consistently screened to ensure maximum safety and security for families.",
    icon: <AiOutlineSafety className="h-8 w-8 text-gray-800" />,
  },
  {
    title: "Excellence",
    desc: "We provide quality teaching and instruction to kids of all ages. We strive to be organized, consistent, and impactful so the Gospel can reach kids in lasting ways.",
    icon: <LiaCheckCircle className="h-8 w-8 text-gray-800" />,
  },
  {
    title: "Age Specific",
    desc: "Our curriculum runs chronologically through the Bible to help a child understand the Bible as a whole. We commit to helping even the youngest of our congregation become resilient followers of Jesus.",
    icon: <TbMoodKid className="h-8 w-8 text-gray-800" />,
  },
];

const CLASSES = [
  { name: "Embark", ages: "Ages 0-2" },
  { name: "Ascent", ages: "Ages 3-5" },
  { name: "Venture", ages: "1st-3rd Grade" },
  { name: "Anchor", ages: "4th-6th Grade" },
];

const KidsPage = async ({}) => {
  //   const data = await fetchGraphQL(`
  //   query {
  //     eventCollection(order: startDateTime_ASC, limit: 4) {
  //       items {
  //         _id
  //         title
  //         startDateTime
  //         coverImage {
  //           url
  //         }
  //         logoImage {
  //           url
  //         }
  //         backgroundColor
  //       }
  //     }
  //   }`);

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 md:gap-16">
      <div className="relative h-48 w-full">
        <Image
          src="/logo-berean-kids.png"
          alt="Berean Kids"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col items-center gap-4 copy-container">
          <h2 className="text-lg font-semibold text-kidsAccent uppercase">
            Mission
          </h2>
          <div className="text-center text-gray-800">
            BereanKIDS strives to transform kids lives through accurately
            teaching the Gospel and showing them how to live for Jesus. We will
            provide BereanKIDS a nurturing and exciting environment to gather,
            in order to build their understanding of the God who created them,
            loves them, and faithfully walks beside them. We believe that life
            transformation happens in families' lives when the church and home
            partner together.
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 copy-container">
          <h2 className="text-lg font-semibold text-kidsAccent uppercase">
            Values
          </h2>
          <div className="flex flex-col items-center text-center gap-4">
            {VALUES.map((value) => (
              <div className="flex flex-col gap-2 items-center text-center">
                <div className="flex items-center text-center gap-2">
                  {value.icon}
                  <span className="text-gray-800 font-semibold">
                    {value.title}
                  </span>
                </div>
                <div className="text-center">{value.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-lg font-semibold text-kidsAccent uppercase">
            Classrooms
          </h2>
          <div className="flex flex-col md:grid grid-cols-12 gap-4 w-full">
            {CLASSES.map((kidsClass) => (
              <div className="col-span-6 lg:col-span-3">{kidsClass.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
