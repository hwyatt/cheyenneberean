import { fetchGraphQL } from "../api/contentful";
import { Card } from "../components/Card/Card";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { TextBlock } from "../components/TextBlock/TextBlock";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";

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
  const { pageIntroSection, pageTextSectionCollection, pageConnectSection } =
    pageData;
  const staffContent = data.data.staffMemberCollection;
  const leadPastorContent = staffContent.items.filter(
    (member: StaffMember) => member.position === "Lead Pastor"
  )[0];

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 md:gap-16">
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
        <div className="flex flex-col gap-2 md:gap-4 w-full">
          <h2 className="text-gray-800 font-semibold text-2xl text-center">
            Church Staff
          </h2>
          <div className="grid grid-cols-12 gap-4">
            {staffContent.items.map(
              (item: StaffMember) =>
                item.position !== "Lead Pastor" && (
                  <div className="col-span-12 md:col-span-3" key={item.name}>
                    <Card
                      title={item.name}
                      subtitle={item.position}
                      image={item.image?.url}
                      theme="staff"
                      imageFit="cover"
                    />
                  </div>
                )
            )}
          </div>
        </div>
      )}
      {pageTextSectionCollection &&
        pageTextSectionCollection.items.map((item: any) => (
          <div key={item.header}>
            <TextBlock
              image={item.image}
              header={item.heading}
              markdown={item.markdown}
              reverse={item.reverse}
              ctaPrimaryLabel={item.primaryCtaLabel}
              ctaPrimaryLink={item.primaryCtaLink}
              ctaSecondaryLabel={item.secondaryCtaLabel}
              ctaSecondaryLink={item.secondaryCtaLink}
              centerText
            />
          </div>
        ))}
      {pageConnectSection && (
        <ConnectSection
          header={pageConnectSection.heading}
          copy={pageConnectSection.description}
          ctaLabel={pageConnectSection.ctaLabel}
          ctaLink={`${pageConnectSection.ctaLink}?referrer=leadership`}
          img={pageConnectSection.logo?.url}
          theme="brand"
        />
      )}
    </div>
  );
};

export default LeadershipPage;
