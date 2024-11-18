import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { OptionSelect } from "../components/Select/Select";
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

  const options: any = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" },
  ];

  const allCategories: string[] = groups.flatMap(
    (group: any) => group.categories
  );
  const uniqueCategories: string[] = Array.from(new Set(allCategories));
  const categoryOptions = uniqueCategories.map((category) => ({
    value: category.toLowerCase().replace(/\s+/g, "-"),
    label: category,
  }));

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
      {/* <div className="md:col-span-4 pb-8 border-b-2 border-gray-300 w-full">
        <div className="flex flex-col gap-2 md:w-1/2">
          <h2 className="text-accent font-semibold text-lg">Filters</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <OptionSelect options={options} isMulti={true} placeholder="Day" />
            <OptionSelect
              options={categoryOptions}
              isMulti={true}
              placeholder="Categories"
            />
          </div>
        </div>
      </div> */}
      <div className="flex flex-col md:grid grid-cols-12 gap-4 md:gap-8">
        {groups.map((group: any) => (
          <div className="md:col-span-4" key={group.title}>
            <Card
              title={group.title}
              // description={group.description}
              key={group.name}
              time={formatGroupDayAndTime(group.dayAndTime)}
              location={group.location}
              people={group.leaders}
              context={group.categories}
              ctaSecondaryLabel="More Info"
              ctaSecondaryLink={`/groups/${group.sys.id}`}
              ctaStyle="link"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupsPage;
