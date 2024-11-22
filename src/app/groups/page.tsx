import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { Card } from "../components/Card/Card";
import { formatGroupDayAndTime } from "../utils/dates";

const GroupsPage = async () => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "2VdTxtA9jSYJ25VDRceR1t" } }) {
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
        }
      }
        groupCollection {
          items {
            sys {
              id
            }
            title
            description
            dayAndTime
            categories
            leaders
            contactEmail
            contactPhone
          }
        }
      }
    `);

  const groups = data?.data?.groupCollection?.items;
  const pageData = data?.data?.pageCollection?.items[0];
  const { pageIntroSection } = pageData;

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
      <div className="flex flex-col md:grid grid-cols-12 gap-4 md:gap-8">
        {groups.map((group: any) => (
          <div className="md:col-span-4" key={group.title}>
            <Card
              title={group.title}
              key={group.name}
              time={formatGroupDayAndTime(group.dayAndTime)}
              location={group.location}
              people={group.leaders}
              context={group.categories}
              ctaSecondaryLabel="More Info"
              ctaSecondaryLink={`/groups/${group.sys.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupsPage;
