import Image from "next/image";
import { Tile } from "../components/Tile/Tile";
import { fetchGraphQL } from "../api/contentful";
import { PiCross } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { LiaCheckCircle } from "react-icons/lia";
import { TbMoodKid } from "react-icons/tb";
import { IntroSection } from "../components/IntroSection/IntroSection";

const CLUBS = [
  {
    name: "Puggles",
    ages: "2-3 years old",
    desc: "In Puggles, children learn basic truths about God. (For children of volunteers only)",
    image: "/awana-puggles.webp",
    bgColor: "#cff2fa",
  },
  {
    name: "Cubbies",
    ages: "4-5 years old",
    desc: `Children in Cubbies are taught about God’s love for them, and how he sent Jesus to save us.`,
    image: "/awana-cubbies.webp",
    bgColor: "#faecdc",
  },
  {
    name: "Sparks",
    ages: "Kindergaten - 2nd Grade",
    desc: "The children in Sparks learn about God’s desire to have a personal relationship with us, as they explore His faithfulness through studying people and events in the Bible. ",
    image: "/awana-sparks.webp",
    bgColor: "#ffcccd",
  },
  {
    name: "T&T",
    ages: "3rd - 6th Grade",
    desc: "T&T stands for Truth and Training. The focus of T&T is on the badics of the Christian Faith and guides kids to a deeper understanding of God’s Grace.",
    image: "/awana-t&t.webp",
    bgColor: "#e3f3d6",
  },
];

const AwanaPage = async ({}) => {
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
      <IntroSection
        image="/logo-kids-awana.png"
        copy={`The mission of Awana is to reach kids with the gospel and to engage them in life-long discipleship.`}
      />
      <div className="flex flex-col items-center gap-8 md:gap-16 w-full">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-lg font-semibold text-gray-800 uppercase">
            Awana Clubs
          </h2>
          <div className="flex flex-col md:grid grid-cols-12 gap-4">
            {CLUBS.map((club) => (
              <div
                className="md:col-span-6 lg:col-span-3 flex flex-col bg-white rounded-lg"
                key={club.name}
              >
                <div
                  className="relative rounded-t-lg flex flex-col items-center justify-center p-4"
                  style={{ backgroundColor: club.bgColor }}
                >
                  <img
                    src={club.image}
                    alt={club.name}
                    className="max-h-[95px] h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-800">{club.name}</h3>
                    <span className="text-sm font-light text-gray-600">
                      {club.ages}
                    </span>
                  </div>
                  <p className="text-gray-800">{club.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwanaPage;
