import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";

const GroupsPage = async () => {
  const data = await fetchGraphQL(`
    query {
        groupCollection {
          items {
            title
            description
            categories
            leaders
            contactEmail
            contactPhone
          }
        }
      }
    `);

  const groups = data?.data?.groupCollection?.items;

  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      <IntroSection
        header={"Groups"}
        copy={`This is the group directory for Cheyenne Berean church`}
      />
      <div className="flex flex-col md:grid grid-cols-12 gap-8">
        <div className="md:col-span-3 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-accent uppercase">
            FILTERS
          </h3>
          <div className="flex flex-col gap-4"></div>
        </div>
        <div className="md:col-span-9 flex flex-col gap-8 md:grid grid-cols-2">
          {groups.map((group: any) => (
            <div className="rounded-lg border border-4 border-gray-400 p-4 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {group.categories.map((category: string) => (
                      <div className="font-semibold text-xs text-accent bg-secondary py-1 px-2 rounded-xl">
                        {category}
                      </div>
                    ))}
                  </div>
                  <span className="font-semibold text-accent text-xl">
                    {group.title}
                  </span>
                </div>
                <p className="text-sm">{group.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1">
                  <span className="text-sm font-semibold">Leaders:</span>
                  <span className="text-sm">{group.leaders.join(", ")}</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-sm font-semibold">Contact:</span>
                  {group.contactEmail && (
                    <a
                      href={`mailto:${group.contactEmail}`}
                      className="font-semibold text-primary text-sm"
                    >
                      {group.contactEmail}
                    </a>
                  )}
                  {group.contactPhone && (
                    <a
                      href={`tel:${group.contactPhone}`}
                      className="font-semibold text-primary text-sm"
                    >
                      {group.contactPhone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupsPage;
