import { fetchGraphQL } from "../api/contentful";
import { Accordion } from "../components/Accordion/Accordion";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { TextBlock } from "../components/TextBlock/TextBlock";

const VISION = [
  {
    image: { url: "/brand/Gather.gif", alt: "Gather" },
    header: "Gather",
    markdown:
      "Strength, companionship, and joy are found in unified gathering. Our lives are changed as we band together pursuing and proclaiming Jesus. We seek to encourage and enjoy one another by gathering together on Sunday mornings and throughout the week in smaller gatherings called grow groups.",
    reverse: false,
  },
  {
    image: { url: "/brand/Grow.gif", alt: "Gather" },
    header: "Grow",
    markdown:
      "Together, with eyes fixed on Jesus we are being transformed to be more like him. We want to encounter Jesus; be filled with his characteristics and qualities; so that others will experience Jesus who is alive in us.",
    reverse: true,
  },
  {
    image: { url: "/brand/Go.gif", alt: "Gather" },
    header: "Go",
    markdown:
      "God lovingly and sovereignly set us in a place, a time, and for a purpose. Together, we are discovering where God is at work around us and joining Him. We are taking steps together and encouraging one another as we make Jesus known locally, regionally, and globally.",
    reverse: false,
  },
];

const FAQS = [
  {
    question: "When and where do you meet?",
    answer:
      "Our Sunday Services are at 9:00am and 10:30am at 5716 Powderhouse Rd.",
  },
  {
    question: "How do I watch the live stream each Sunday?",
    answer:
      "Sunday gatherings go live on our YouTube channel each week at 10:30 a.m. (Subscribe to our channel to get notifications)",
  },
  {
    question: "Can I connect on social media?",
    answer:
      "You can stay in the loop by connecting with us on Facebook. Also, fill out our Welcome Form to have someone from our team connect with you about ways to engage with church life at Cheyenne Berean Church.",
  },
  {
    question: "Do you have ministries for Kids or for Youth?",
    answer:
      "Yes, Children’s Ministry is provided on Sunday mornings during both services for ages 1-5th grade. Our Awana ministry meets on Monday evenings from 6:00 until 7:30 for children ages 3-12. Our youth group, Refuge, meets on Wednesdays from 6:30pm – 8:30 pm for ages 12 to 12th grade.",
  },
];

const AboutPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "5eX8mSA1goVHv9FZW6L1fQ" } }) {
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
    <div className="page-about min-h-screen flex flex-col items-center gap-8 md:gap-16">
      {pageIntroSection && (
        <IntroSection
          header={pageIntroSection.heading}
          image={pageIntroSection.logo ? pageIntroSection.logo.url : null}
          copy={pageIntroSection.description}
          ctaPrimary={
            pageIntroSection.ctaPrimary ? pageIntroSection.ctaPrimary : null
          }
          ctaSecondary={
            pageIntroSection.ctaSecondary ? pageIntroSection.ctaSecondary : null
          }
        />
      )}
      {VISION.map((item: any) => (
        <TextBlock
          image={item.image}
          header={item.header}
          markdown={item.markdown}
          reverse={item.reverse}
        />
      ))}
      <Accordion header="Common Questions" items={FAQS} theme="brand" />
      <ConnectSection
        header="Connect with our Team"
        copy="Have a question? Looking for resources?"
        cta="Contact Us"
        theme="brand"
      />
    </div>
  );
};

export default AboutPage;
