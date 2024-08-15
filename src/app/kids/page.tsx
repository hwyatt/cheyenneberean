import { fetchGraphQL } from "../api/contentful";
import { PiCross } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { LiaCheckCircle } from "react-icons/lia";
import { TbMoodKid } from "react-icons/tb";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { Card } from "../components/Card/Card";
import { Accordion } from "../components/Accordion/Accordion";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { ValuesTile } from "../components/ValuesTile/ValuesTile";
import { BKDots } from "../components/BKDots/BKDots";

const VALUES = [
  {
    title: "Gospel Centered",
    desc: "Our lessons come directly from Scripture. Our curriculum and conversations regularly establish our need for Jesus both to save us from our sins and to live courageously for Him.",
    icon: <PiCross className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Partnership",
    desc: "Scripture stresses the importance of parents and the local church in spiritual formation. We commit to partnering together; equipping and releasing a team of people who want to see children's lives transformed.",
    icon: <LuHeartHandshake className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Safety",
    desc: "We use structured and thorough safety protocols. All volunteers are consistently screened to ensure maximum safety and security for families.",
    icon: <AiOutlineSafety className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Excellence",
    desc: "We provide quality teaching and instruction to kids of all ages. We strive to be organized, consistent, and impactful so the Gospel can reach kids in lasting ways.",
    icon: <LiaCheckCircle className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Age Specific",
    desc: "Our curriculum runs chronologically through the Bible to help a child understand the Bible as a whole. We commit to helping even the youngest of our congregation become resilient followers of Jesus.",
    icon: <TbMoodKid className="h-8 w-8 text-orange-600" />,
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
    <div
      className="min-h-screen flex flex-col items-center gap-8 bg-transparent"
      data-theme="kids"
    >
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
      <div className="flex flex-col items-center gap-8 md:gap-16 w-full">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-semibold uppercase font-bobby">
            Values
          </h2>
          <div className="flex flex-col items-center text-center gap-4 md:grid md:grid-cols-3">
            {VALUES.map((value) => (
              <ValuesTile
                title={value.title}
                desc={value.desc}
                icon={value.icon}
                theme="kids"
                key={value.title}
              />
            ))}
            <ValuesTile
              theme="kidsVerse"
              verse="3 John 1:4"
              verseText={`"I have no greater joy than to hear that my children are walking in the truth."`}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <h2 className="text-3xl font-semibold uppercase font-bobby">
            Classrooms
          </h2>
          <div className="flex flex-col md:grid grid-cols-12 gap-4 w-full">
            {CLASSES.map((kidsClass) => (
              <Card
                title={kidsClass.name}
                subtitle={kidsClass.ages}
                description={kidsClass.desc}
                theme="kids"
                key={kidsClass.name}
              />
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col items-center gap-2 w-full">
          <h2 className="text-3xl font-semibold uppercase font-bobby">
            Events
          </h2>
        </div> */}
        <Accordion
          header="BereanKIDS FAQs"
          items={[
            { question: "This is a question", answer: "This is an answer" },
            { question: "This is a question", answer: "This is an answer" },
            { question: "This is a question", answer: "This is an answer" },
            { question: "This is a question", answer: "This is an answer" },
            { question: "This is a question", answer: "This is an answer" },
          ]}
          theme="kids"
        />
        <ConnectSection
          img={"/logo-berean-kids.png"}
          header="Connect with the BereanKIDS Team"
          copy="Have a question? Looking for resources?"
          ctaLabel="Contact BereanKIDS"
          ctaLink="/contact"
        />
        <div className="hidden md:block w-screen overflow-hidden mb-[-100px]">
          <BKDots />
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
