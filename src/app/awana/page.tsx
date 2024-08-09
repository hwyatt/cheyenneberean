import { fetchGraphQL } from "../api/contentful";
import { Accordion } from "../components/Accordion/Accordion";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { ValuesTile } from "../components/ValuesTile/ValuesTile";

const VALUES = [
  {
    title: "Belong",
    desc: "Highly relational ministry led by loving, caring adults.",
  },
  {
    title: "Believe",
    desc: "Deeply scriptural ministry rooted in the Gospel and the truth of God’s Word in order that kids may know, love and serve Jesus Christ.",
  },
  {
    title: "Become",
    desc: "Truly experiential ministry designed to help kids navigate a changing culture, experience God’s presence and walk in the ways of Jesus.",
  },
];

const CLUBS = [
  {
    name: "Puggles",
    ages: "Ages 2-3",
    desc: "Puggles teaches children four Big Truths from the Bible — God made everything, God is great, God loves us, and we give thanks. (For children of volunteers only)",
    img: "/awana/puggles-kid.png",
    logo: "/awana/awana-puggles.webp",
    bgColor: {
      light: "#fff1cc",
      medium: "#f6c74a",
      dark: "#ff9232",
    },
  },
  {
    name: "Cubbies",
    ages: "Ages 4-5",
    desc: `Children in Cubbies are taught about God’s love for them, and how he sent Jesus to save us.`,
    img: "/awana/cubbies-kid.png",
    logo: "/awana/awana-cubbies.webp",
    bgColor: {
      light: "#e6f1ff",
      medium: "#99C9FF",
      dark: "#3379ff",
    },
  },
  {
    name: "Sparks",
    ages: "Kindergaten-2nd Grade",
    desc: "The children in Sparks learn about God’s desire to have a personal relationship with us, as they explore His faithfulness through studying people and events in the Bible.",
    img: "/awana/sparks-kid.png",
    logo: "/awana/awana-sparks.webp",
    bgColor: {
      light: "#ffebe6",
      medium: "#ffc1b0",
      dark: "#ff4746",
    },
  },
  {
    name: "T&T",
    ages: "3rd-6th Grade",
    desc: "T&T stands for Truth and Training. The focus of T&T is on the badics of the Christian Faith and guides kids to a deeper understanding of God’s Grace.",
    img: "/awana/tt-kid.png",
    logo: "/awana/awana-t&t.png",
    bgColor: {
      light: "#e6fff0",
      medium: "#78f0ac",
      dark: "#34ad68",
    },
  },
];

const ClubCard = ({ img, logo, ages, desc, bgColor, key }: any) => (
  <div
    key={key}
    className="relative flex items-center overflow-hidden w-screen pt-8 pl-8 md:pb-8 md:min-h-[315px]"
    style={{ backgroundColor: bgColor.light }}
  >
    <div className="site-container w-full mx-auto flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 flex flex-col gap-4 pr-8 md:pr-0">
        <img
          src={logo}
          alt="Puggles logo"
          className="object-contain w-full max-w-[242px] max-h-[100px] object-left"
        />
        <p className="text-gray-800 font-semibold text-lg">{ages}</p>
        <p className="text-lg">{desc}</p>
      </div>
      <div className="m-club-info-block__image-side">
        <div
          className="m-club-info-block__secondary-bg-color"
          style={{ backgroundColor: bgColor.medium }}
        />
        <div
          className="m-club-info-block__primary-bg-color"
          style={{ backgroundColor: bgColor.dark }}
        />
        <img
          className="m-club-info-block__image max-h-[420px] md:max-h-none"
          src={img}
        />
      </div>
    </div>
  </div>
);

const AwanaPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "5C61n20INdzml9XNnCweCv" } }) {
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
          <h2 className="text-lg font-semibold uppercase">Values</h2>
          <div className="flex flex-col items-center text-center gap-4 md:grid md:grid-cols-3">
            {VALUES.map((value) => (
              <ValuesTile title={value.title} desc={value.desc} theme="awana" />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center w-screen">
          <h2 className="text-lg font-semibold text-gray-800 uppercase">
            Awana Clubs
          </h2>
          <div>
            {CLUBS.map((club: any) => (
              <ClubCard
                key={club.ages}
                img={club.img}
                logo={club.logo}
                ages={club.ages}
                desc={club.desc}
                bgColor={club.bgColor}
              />
            ))}
          </div>
        </div>
        <Accordion
          header="What happens at an Awana club?"
          items={[
            {
              question: "Large Group Time",
              answer:
                "Kids gather together for Bible teaching, worship, announcements, and awards. This is a great opportunity for kids to hear the gospel and Biblical truth directly from pastors, missionaries, and guest speakers.",
            },
            {
              question: "Small Group Time",
              answer:
                "Relationships and belonging begin in small groups as kids huddle up with a consistent leader from week to week to discuss Bible lessons, ask and answer important questions, pray together and complete handbooks.",
            },
            {
              question: "Group Activity Time",
              answer:
                "A session of Awana Games, crafts, or other team-building activity help foster fun and encouraging relationships in the midst of the evening.",
            },
          ]}
        />
        <img src="/awana/awana-kids.png" className="max-h-[400px]" />
        <ConnectSection
          img={"/logo-kids-awana.png"}
          header="Have questions about Awana?"
          copy="Connect with our team."
          cta="Contact Us"
        />
      </div>
    </div>
  );
};

export default AwanaPage;
