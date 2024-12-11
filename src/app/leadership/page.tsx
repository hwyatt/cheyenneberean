import { fetchGraphQL } from "../api/contentful";
import { Card } from "../components/Card/Card";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { TextBlock } from "../components/TextBlock/TextBlock";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";
import { TextBlockParams } from "../api/types";

type StaffMember = {
  position: string;
  firstName: string;
  lastName: string;
  image: {
    url: string;
  };
  email: string;
  department: string;
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
      staffMemberCollection(order: lastName_ASC) {
        items {
          firstName
          lastName
          department
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
    (member: StaffMember) => member.department === "Lead Pastor"
  )[0];

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
      {leadPastorContent && (
        <TextBlock
          heading={`${leadPastorContent.firstName} ${leadPastorContent.lastName}`}
          markdown={leadPastorContent.bio}
          image={{
            url: leadPastorContent.image.url,
            alt: leadPastorContent.name,
          }}
          thumbnail={leadPastorContent?.thumbnail}
          primaryCtaLabel={`Contact ${leadPastorContent.firstName}`}
          primaryCtaLink={`mailto:${leadPastorContent.email}`}
        />
      )}
      {staffContent && (
        <div className="flex flex-col gap-4 md:gap-4 w-full">
          <h2 className="text-dark font-medium text-2xl text-center">
            Church Staff
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            {staffContent.items.map(
              (item: StaffMember) =>
                item.position !== "Lead Pastor" && (
                  <div
                    className="col-span-12 md:col-span-3"
                    key={`${item.firstName} ${item.lastName}`}
                  >
                    <Card
                      title={`${item.firstName} ${item.lastName}`}
                      subtitle={item.position}
                      image={item.image?.url}
                      theme="staff"
                      imageFit="cover"
                      ctaSecondaryLabel={`Email ${item.firstName}`}
                      ctaSecondaryLink={`mailto:${item.email}`}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      )}
      {pageTextSectionCollection &&
        pageTextSectionCollection.items.map((item: TextBlockParams) => (
          <div key={item.heading} className="w-full">
            <TextBlock
              image={item.image}
              thumbnail={item.thumbnail}
              heading={item.heading}
              markdown={item.markdown}
              reverse={item.reverse}
              primaryCtaLabel={item.primaryCtaLabel}
              primaryCtaLink={item.primaryCtaLink}
              secondaryCtaLabel={item.secondaryCtaLabel}
              secondaryCtaLink={item.secondaryCtaLink}
              // centerText
            />
          </div>
        ))}
      {pageConnectSection && (
        <ConnectSection
          heading={pageConnectSection.heading}
          description={pageConnectSection.description}
          ctaLabel={pageConnectSection.ctaLabel}
          ctaLink={`${pageConnectSection.ctaLink}?referrer=leadership`}
          logo={pageConnectSection.logo}
        />
      )}
    </div>
  );
};

export default LeadershipPage;
