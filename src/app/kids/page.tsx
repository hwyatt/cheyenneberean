import Image from "next/image";
import { fetchGraphQL } from "../api/contentful";
import { PiCross } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { LiaCheckCircle } from "react-icons/lia";
import { TbMoodKid } from "react-icons/tb";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { Card } from "../components/Card/Card";
import { Accordion } from "../components/Accordion/Accordion";

const VALUES = [
  {
    title: "Gospel Centered",
    desc: "Our lessons come directly from Scripture. Our curriculum and conversations regularly establish our need for Jesus both to save us from our sins and to live courageously for Him.",
    icon: <PiCross className="h-8 w-8 text-orange-600" />,
    bgColor: "#6A7065",
  },
  {
    title: "Partnership",
    desc: "Scripture stresses the importance of parents and the local church in spiritual formation. We commit to partnering together; equipping and releasing a team of people who want to see children's lives transformed.",
    icon: <LuHeartHandshake className="h-8 w-8 text-orange-600" />,
    bgColor: "#6A7065",
  },
  {
    title: "Safety",
    desc: "We use structured and thorough safety protocols. All volunteers are consistently screened to ensure maximum safety and security for families.",
    icon: <AiOutlineSafety className="h-8 w-8 text-orange-600" />,
    bgColor: "#6A7065",
  },
  {
    title: "Excellence",
    desc: "We provide quality teaching and instruction to kids of all ages. We strive to be organized, consistent, and impactful so the Gospel can reach kids in lasting ways.",
    icon: <LiaCheckCircle className="h-8 w-8 text-orange-600" />,
    bgColor: "#6A7065",
  },
  {
    title: "Age Specific",
    desc: "Our curriculum runs chronologically through the Bible to help a child understand the Bible as a whole. We commit to helping even the youngest of our congregation become resilient followers of Jesus.",
    icon: <TbMoodKid className="h-8 w-8 text-orange-600" />,
    bgColor: "#6A7065",
  },
];

const CLASSES = [
  {
    name: "Embark",
    ages: "Ages 0-2",
    desc: "As we commit to equipping our youngest group, this class will focus on learning the gospel through play and worship. Your child will sing songs, enjoy a snack, and have fellowship with other children up until their 3rd birthday.",
    image: "",
    bgColor: "#97A090",
  },
  {
    name: "Ascent",
    ages: "Ages 3-5",
    desc: "We know that play and fun is of the upmost importance, alongside learning. Your child's schedule will consist of a routine including: Bible lesson and story, songs, snack, and play! Children in this room range from 3-6 years old.",
    image: "",
    bgColor: "#889082",
  },
  {
    name: "Venture",
    ages: "1st-3rd Grade",
    desc: "This class will equip your child to participate in conversations, learn the Gospel through discussion, reading, memorizing Scripture, and games.",
    image: "",
    bgColor: "#4C5048",
  },
  {
    name: "Anchor",
    ages: "4th-6th Grade",
    desc: "This class will equip your child to participate in conversations, learn the Gospel through discussion, reading, memorizing Scripture, and games.",
    image: "",
    bgColor: "#4C5048",
  },
];

const KidsPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "4eegCLl4Ktr9hs2Zu6kcVX" } }) {
        items {
          sys {
            id
          }
          pageIntroSection {
            heading
            description
            ctaPrimary
            ctaSecondary
            logo {
              url
            }
          }
        }
      }
    }    
    `);

  const pageData = data?.data?.pageCollection?.items[0];
  const { pageIntroSection } = pageData;

  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      {pageIntroSection && (
        <IntroSection
          header={pageIntroSection.heading}
          headerColor="text-gray-800"
          image={pageIntroSection.logo.url}
          copy={pageIntroSection.description}
          ctaPrimary={
            pageIntroSection.ctaPrimary ? pageIntroSection.ctaPrimary : null
          }
          ctaSecondary={
            pageIntroSection.ctaSecondary ? pageIntroSection.ctaSecondary : null
          }
        />
      )}
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col items-center gap-2">
          {/* <h2 className="text-lg font-semibold uppercase">Values</h2> */}
          <div className="flex flex-col items-center text-center gap-4 md:grid md:grid-cols-3">
            {VALUES.map((value) => (
              // <div
              //   className="flex flex-col gap-2 items-center text-center"
              //   key={value.title}
              // >
              //   <div className="flex items-center text-center gap-2">
              //     {value.icon}
              //     <span className="text-gray-800 font-semibold">
              //       {value.title}
              //     </span>
              //   </div>
              //   <div className="text-center">{value.desc}</div>
              // </div>

              <div
                className="
              font-semibold
              p-4
              md:px-8
              md:pb-8
              md:pt-16
              rounded
              flex flex-col
              gap-4
              justify-between
              relative
              overflow-hidden
              text-start
              md:col-span-1
              h-full
              shadow-md
            "
                style={{ background: value.bgColor }}
              >
                <img
                  src="/texture-kids.png"
                  className="absolute inset-0 h-full w-full object-cover transform scale-150"
                />
                <div className="flex flex-col gap-1 z-10">
                  <div className="flex flex-col gap-4">
                    {value.icon}
                    <span className="text-xl text-white z-10">
                      {value.title}
                    </span>
                  </div>
                  <p className="text-white font-light z-10">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <h2 className="text-lg font-semibold uppercase">Classrooms</h2>
          <div className="flex flex-col md:grid grid-cols-12 gap-4 w-full">
            {CLASSES.map((kidsClass) => (
              <Card
                title={kidsClass.name}
                subtitle={kidsClass.ages}
                description={kidsClass.desc}
                image={kidsClass.image}
                backgroundColor={kidsClass.bgColor}
                key={kidsClass.name}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <h2 className="text-lg font-semibold uppercase">Events</h2>
        </div>
        <Accordion
          header="BereanKIDS FAQs"
          items={[
            { question: "This is a question", answer: "This is an answer" },
            { question: "This is a question", answer: "This is an answer" },
            { question: "This is a question", answer: "This is an answer" },
            { question: "This is a question", answer: "This is an answer" },
            { question: "This is a question", answer: "This is an answer" },
          ]}
        />
      </div>

      <div
        className="
            flex flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            py-8
            border-accent border-t-2 border-b-2 w-full
          "
      >
        <div className="flex items-center gap-4">
          {/* <img src="/logo-berean-kids.png" className="h-auto w-24" /> */}
          <div className="flex flex-col gap-2">
            <span className="text-center md:text-start font-semibold text-accent text-2xl leading-5">
              Have questions about BereanKIDS?
            </span>
            <span className="text-center md:text-start text-gray-800 leading-5">
              Connect with our BereanKIDS team.
            </span>
          </div>
        </div>
        <button className="btn btn-secondary w-full md:w-auto">
          Contact BereanKIDS
        </button>
      </div>
    </div>
  );
};

export default KidsPage;
