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
import { StaffSection } from "../components/StaffSection/StaffSection";

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

const CLASSES = [
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
          staff {
            firstName
            lastName
            email
            position
            bio
            image {
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
  const {
    pageIntroSection,
    pageTextSectionCollection,
    showEvents,
    staff,
    pageFaQs,
    pageConnectSection,
  } = pageData;

  const eventData =
    showEvents &&
    (await fetchGraphQL(`query {
    eventCollection(where: { categories_contains_some: ["Kids"] }, limit: 3) {
      items {
        sys {
          id
        }
        title
        image {
          url
        }
      }
    }
    }
    `));

  const pageEvents = eventData ? eventData.data.eventCollection.items : null;

  return (
    <div
      className="page-kids min-h-screen flex flex-col items-center gap-8 md:gap-16 bg-transparent"
      data-theme="kids"
    >
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
          <h2 className="text-2xl font-medium">What to expect on Sundays</h2>
          <div className="flex flex-col items-center text-center gap-4 md:grid md:grid-cols-3">
            {VALUES.map((value) => (
              <ValuesTile
                title={value.title}
                description={value.desc}
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
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-2xl font-medium">Our Kids Environments</h2>
          <div className="flex flex-col md:grid grid-cols-12 gap-4 w-full">
            {CLASSES.map((classroom: any) => (
              <div
                className="md:col-span-6 lg:col-span-3"
                key={classroom.title}
              >
                <Card
                  title={classroom.title}
                  description={classroom.description}
                  context={[classroom.ages]}
                />
              </div>
            ))}
          </div>
        </div>
        {pageTextSectionCollection &&
          pageTextSectionCollection.items.map((item: any) => (
            <div key={item.header} className="w-full">
              <TextBlock
                image={item.image}
                heading={item.heading}
                markdown={item.markdown}
                reverse={item.reverse}
                primaryCtaLabel={item.primaryCtaLabel}
                primaryCtaLink={item.primaryCtaLink}
                secondaryCtaLabel={item.secondaryCtaLabel}
                secondaryCtaLink={item.secondaryCtaLink}
              />
            </div>
          ))}
        {staff && <StaffSection staffMember={staff} theme="kids" />}
        {eventData && pageEvents.length > 0 && (
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-2xl font-medium">Events</h2>
            <div className="flex flex-col md:grid grid-cols-12 gap-4 w-full">
              {pageEvents.map((event: any) => (
                <div className="md:col-span-4" key={event.title}>
                  <Tile
                    heading={event.title}
                    image={event.image.url}
                    ctaLabel="Register Now"
                    ctaLink={`/events/${event.sys.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {pageFaQs && (
          <Accordion
            heading={pageFaQs.heading}
            questions={pageFaQs.questions}
          />
        )}
        {pageConnectSection && (
          <ConnectSection
            logo={pageConnectSection.logo}
            heading={pageConnectSection.heading}
            description={pageConnectSection.description}
            ctaLabel={pageConnectSection.ctaLabel}
            ctaLink={`${pageConnectSection.ctaLink}?referrer=kids`}
            theme="kids"
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
