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
import { Tile } from "../components/Tile/Tile";
import Image from "next/image";
import { TextBlock } from "../components/TextBlock/TextBlock";

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
            primaryCtaLabel
            primaryCtaLink
            secondaryCtaLabel
            secondaryCtaLink
            logo {
              url
            }
          }
          pageTextSectionCollection(limit: 5) {
            items {
            heading
            markdown
            image {
            url
            }
            primaryCtaLabel
            primaryCtaLink
            secondaryCtaLabel
            secondaryCtaLink
            reverse
            }
          }
          showEvents
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
  const {
    pageIntroSection,
    pageTextSectionCollection,
    showEvents,
    pageFaQs,
    pageConnectSection,
  } = pageData;

  // const eventData = await fetchGraphQL(`query {
  //     eventCollection(where: { categories_contains_some: ["Kids"] }) {
  //       items {
  //         title
  //         coverImage {
  //           url
  //         }
  //       }
  //     }
  //   }
  //   `);

  // const pageEvents = eventData.data.eventCollection.items;
  // const numberOfEvents = pageEvents.length;

  return (
    <div
      className="page-kids min-h-screen flex flex-col items-center gap-8 md:gap-16 bg-transparent"
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
        {pageTextSectionCollection &&
          pageTextSectionCollection.items.length > 0 && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-4 md:gap-8 w-full">
                {pageTextSectionCollection.items.map((item: any) => (
                  <div key={item.heading}>
                    <TextBlock
                      header={item.heading}
                      markdown={item.markdown}
                      image={item.image}
                      reverse={item.reverse}
                      theme="kids"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        {/* {showEvents && eventData && (
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="text-3xl uppercase">
              Events
            </h2>
            <div className="flex flex-col md:grid grid-cols-12 gap-4 w-full">
              {pageEvents.map((event: any) => (
                <div className="md:col-span-4" key={event.title}>
                  <Tile
                    header={event.title}
                    backgroundImg={event.coverImage.url}
                    ctaLabel="Sign Up"
                    theme="dark"
                  />
                </div>
              ))}
            </div>
          </div>
        )} */}
        {pageFaQs && (
          <Accordion
            header={pageFaQs.heading}
            items={pageFaQs.questions}
            theme="kids"
          />
        )}
        {pageConnectSection && (
          <ConnectSection
            img={pageConnectSection.logo?.url}
            header={pageConnectSection.heading}
            copy={pageConnectSection.description}
            ctaLabel={pageConnectSection.ctaLabel}
            ctaLink={pageConnectSection.ctaLink}
          />
        )}
        <div className="w-[calc(100vw-16px)] overflow-hidden mb-[-100px] md:mb-[-225px]">
          <Image
            src="/kids/mountains-vector.png"
            alt="BereanKIDS Mountains Vector"
            layout="responsive"
            width={4500}
            height={1830}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
