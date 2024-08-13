import { fetchGraphQL } from "../api/contentful";
import { Card } from "../components/Card/Card";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { TextBlock } from "../components/TextBlock/TextBlock";
import ReactMarkdown from "react-markdown";

type StaffMember = {
  position: string;
  name: string;
  image: {
    url: string;
  };
  email: string;
};

const LeadershipPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "5vfQ44liJqG39WdBuOMT44" } }) {
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
          textSection
        }
      }
      staffMemberCollection(order: name_ASC) {
        items {
          name
          position
          email
          image {
            url
          }
          bio
        }
      }
    }       
    `);

  const pageData = data?.data?.pageCollection?.items[0];
  const { pageIntroSection, textSection } = pageData;
  const staffContent = data.data.staffMemberCollection;
  const leadPastorContent = staffContent.items.filter(
    (member: StaffMember) => member.position === "Lead Pastor"
  )[0];

  return (
    <div className="page-beliefs min-h-screen flex flex-col items-center gap-8 md:gap-16">
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
      {leadPastorContent && (
        <TextBlock
          header={leadPastorContent.name}
          markdown={leadPastorContent.bio}
          image={{
            url: leadPastorContent.image.url,
            alt: leadPastorContent.name,
          }}
        />
      )}
      {staffContent && (
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-lg font-semibold text-accent text-center uppercase">
            Church Staff
          </h2>
          <div className="grid grid-cols-12 gap-4">
            {staffContent.items.map(
              (item: StaffMember) =>
                item.position !== "Lead Pastor" && (
                  <div className="col-span-12 md:col-span-3">
                    <Card
                      title={item.name}
                      subtitle={item.position}
                      image={item.image?.url}
                      theme="staff"
                      imageFit="cover"
                      key={item.name}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      )}
      {textSection && (
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-lg font-semibold text-accent text-center uppercase">
            SHEPHERDS
          </h2>
          <div className="markdown-container items-center">
            <ReactMarkdown>{textSection}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadershipPage;
