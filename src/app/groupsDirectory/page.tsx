import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";
// import { Card } from "../components/Card/Card";
import { ConnectSection } from "../components/ConnectSection/ConnectSection";

const GroupsDirectoryPage = async () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-8 md:gap-16">
      <IntroSection
        heading={"Grow Group Directory"}
        description={
          "This is the future home of the Grow Groups directory at Cheyenne Berean Church"
        }
      />
      {/* <div className="flex flex-col md:grid grid-cols-12 gap-4 md:gap-8 w-full">
        {groups.map((group: Group) => (
          <div className="md:col-span-4" key={group.title}>
            <Card
              title={group.title}
              key={group.title}
              time={formatGroupDayAndTime(group.dayAndTime)}
              location={group.location}
              people={group.leaders}
              context={group.categories}
              ctaSecondaryLabel="More Info"
              ctaSecondaryLink={`/groups/${group.sys.id}`}
            />
          </div>
        ))}
      </div> */}
      <ConnectSection
        heading={"Ready to join a group?"}
        description={"Contact us to get plugged in!"}
        ctaLabel={"Contact Us"}
        ctaLink={`/contact?referrer=groupsDirectory`}
      />
    </div>
  );
};

export default GroupsDirectoryPage;
