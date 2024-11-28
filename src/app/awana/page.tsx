import { fetchGraphQL } from "../api/contentful";
import { ContentPageResponse } from "../api/types";
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

type Club = {
  name: string;
  ages: string;
  desc: string;
  img: string;
  logo: string;
  bgColor: {
    light: string;
    medium: string;
    dark: string;
  };
};

type ClubCardProps = {
  img: string;
  logo: string;
  ages: string;
  description: string;
  bgColor: {
    light: string;
    medium: string;
    dark: string;
  };
  key: string;
};

const ClubCard = ({
  img,
  logo,
  ages,
  description,
  bgColor,
  key,
}: ClubCardProps) => (
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
        <p className="text-dark font-medium text-lg">{ages}</p>
        <p className="text-lg">{description}</p>
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
  const data: ContentPageResponse = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "5C61n20INdzml9XNnCweCv" } }) {
        items {
          sys {
            id
          }
          pageIntroSection {
            heading
            description
            primaryCtaLabel
            primaryCtaLink
            secondaryCtaLabel
            secondaryCtaLink
            logo {
              url
            }
          }
          pageFaQs {
            heading
            questions
          }
          pageConnectSection {
            heading
            description
            logo {
              url
            }
            ctaLabel
            ctaLink
          }
        }
      }
    }    
    `);

  const pageData = data?.data?.pageCollection?.items[0];
  const { pageIntroSection, pageFaQs, pageConnectSection } = pageData;

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 md:gap-16">
      {pageIntroSection && (
        <IntroSection
          heading={pageIntroSection.heading}
          logo={pageIntroSection.logo}
          description={pageIntroSection.description}
          primaryCtaLabel={pageIntroSection.primaryCtaLabel}
          primaryCtaLink={pageIntroSection.primaryCtaLink}
          secondaryCtaLabel={pageIntroSection.secondaryCtaLabel}
          secondaryCtaLink={pageIntroSection.secondaryCtaLink}
        />
      )}
      <div className="flex flex-col items-center gap-8 md:gap-16 w-full">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-medium">Values</h2>
          <div className="flex flex-col items-center text-center gap-4 md:grid md:grid-cols-3">
            {VALUES.map((value) => (
              <ValuesTile
                title={value.title}
                description={value.desc}
                theme="awana"
                key={value.title}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center w-screen">
          <h2 className="text-2xl font-medium">Awana Clubs</h2>
          <div>
            {CLUBS.map((club: Club) => (
              <ClubCard
                key={club.ages}
                img={club.img}
                logo={club.logo}
                ages={club.ages}
                description={club.desc}
                bgColor={club.bgColor}
              />
            ))}
          </div>
        </div>
        {pageFaQs && (
          <Accordion
            heading={pageFaQs.heading}
            questions={pageFaQs.questions}
            theme="awana"
          />
        )}
        {pageConnectSection && (
          <ConnectSection
            logo={pageConnectSection.logo}
            heading={pageConnectSection.heading}
            description={pageConnectSection.description}
            ctaLabel={pageConnectSection.ctaLabel}
            ctaLink={`${pageConnectSection.ctaLink}?referrer=awana`}
            theme="awana"
          />
        )}
        <img src="/awana/awana-kids.png" className="max-h-[400px] mb-[-64px]" />
      </div>
    </div>
  );
};

export default AwanaPage;
