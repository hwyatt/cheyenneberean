import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { FaRegClock } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { OptionSelect } from "../components/Select/Select";

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
      <div className="flex gap-4">
        <OptionSelect options={options} isMulti={true} placeholder="Day" />
        <OptionSelect
          options={options}
          isMulti={true}
          placeholder="Categories"
        />
      </div>
      <div className="flex flex-col md:grid grid-cols-12 gap-8">
        <div className="md:col-span-12 flex flex-col gap-4 md:grid grid-cols-3">
          {groups.map((group: any) => (
            <div
              className="rounded-lg border border-4 border-gray-400 p-4 flex flex-col gap-8 justify-between"
              key={group.title}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {group.categories.map((category: string) => (
                      <div
                        className="font-semibold text-xs text-accent bg-secondary py-1 px-2 rounded-xl"
                        key={`${group.title}-${category}`}
                      >
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
                <div className="flex gap-1 items-center">
                  <FaRegClock />
                  <span className="text-sm">
                    {formatGroupDayAndTime(group.dayAndTime)}
                  </span>
                </div>

                <div className="flex gap-1 items-center">
                  <FaRegUser />
                  <span className="text-sm">{group.leaders.join(", ")}</span>
                </div>
                {/* <div className="relative mt-4">
                  <button
                    className="btn btn-sm btn-primary self-start"
                    popovertarget="contact-popover"
                  >
                    Contact
                  </button>
                  <div popover="auto" id="contact-popover" className="absolute">
                    Greetings, one and all!
                  </div>
                </div> */}
                {/* <div className="flex gap-1">
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
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupsPage;
