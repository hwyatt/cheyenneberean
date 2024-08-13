import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { OptionSelect } from "../components/Select/Select";
import { Card } from "../components/Card/Card";

const GroupsPage = async () => {
  const data = await fetchGraphQL(`
    query {
        groupCollection {
          items {
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

  const formatGroupDayAndTime = (isoString: string): string => {
    const date = new Date(isoString);

    const dayOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
      timeZone: "UTC",
    };
    const day = new Intl.DateTimeFormat("en-US", dayOptions).format(date);

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC", // Ensure it is treated as UTC time
    };
    const time = new Intl.DateTimeFormat("en-US", timeOptions).format(date);

    return `${day}s at ${time}`;
  };

  const options: any = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" },
  ];

  //   const allCategories: string[] = groups.flatMap(
  //     (group: any) => group.categories
  //   );
  //   const uniqueCategories: string[] = Array.from(new Set(allCategories));

  //   console.log(uniqueCategories);

  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      <IntroSection
        header={"Groups"}
        copy={`This is the group directory for Cheyenne Berean church`}
      />
      <div className="flex flex-col md:grid grid-cols-12 gap-8">
        <div className="flex flex-col gap-4 md:col-span-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-800 uppercase leading-none">
              Day of Week
            </label>
            <OptionSelect options={options} isMulti={true} placeholder="Day" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-800 uppercase leading-none">
              Categories
            </label>
            <OptionSelect
              options={options}
              isMulti={true}
              placeholder="Categories"
            />
          </div>
        </div>
        {groups.map((group: any) => (
          <div className="md:col-span-4">
            <Card
              title={group.title}
              description={group.description}
              key={group.name}
              time={formatGroupDayAndTime(group.dayAndTime)}
              location={group.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupsPage;
