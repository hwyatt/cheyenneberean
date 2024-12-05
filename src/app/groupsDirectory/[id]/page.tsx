import { fetchGraphQL } from "@/app/api/contentful";
import { GMap } from "@/app/components/GMap/GMap";
import { FaRegClock } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";
import { formatGroupDayAndTime } from "../../utils/dates";
import { Button } from "@/app/components/Button/Button";
import { Chip } from "@/app/components/Chip/Chip";
import { Group } from "@/app/api/types";

type GroupPageProps = {
  params: {
    id: string;
  };
};

const GroupDetailsPage = async ({ params }: GroupPageProps) => {
  const { id } = params;

  const data = await fetchGraphQL(`
    query {
      group(id: "${id}") {
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
        location {
          lat
          lon
        }
      }
    }
  `);

  const group: Group = data.data.group;

  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      <GMap
        zoom={14}
        center={{ lat: group.location?.lat, lng: group.location?.lon }}
        mapStyle={{
          width: "calc(100vw - 16px)",
          height: "400px",
          marginTop: "-32px",
        }}
      />
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center border-borderPrimary border-b-2 gap-4 pb-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              {group.categories && (
                <div className="flex gap-2">
                  {group.categories.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              )}
              <h1 className="text-dark font-medium text-2xl md:text-3xl text-balance">
                {group?.title}
              </h1>
            </div>
          </div>

          <div className="flex gap-4">
            <Button href="/contact">Join This Group</Button>
            <Button variant="Secondary">
              <PiShareFat size="20" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-1 md:w-1/3">
            {group.dayAndTime && (
              <div className="flex gap-2 items-center">
                <FaRegClock className="text-body text-lg" />
                <span className="text-body text-base">
                  {formatGroupDayAndTime(group.dayAndTime)}
                </span>
              </div>
            )}
            {group.leaders && (
              <div className="flex gap-2 items-center">
                <IoPersonOutline className="text-body text-lg" />
                <span className="text-body text-base m-0">
                  {group.leaders.join(", ")}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 md:w-2/3 text-balance">
            <h2 className="font-medium text-lg md:text-xl">Description</h2>
            <p className="text-body md:text-lg">{group.description}</p>
          </div>
        </div>
        <Button variant="Secondary" className="self-center" href="/groups">
          See All Groups
        </Button>
      </div>
    </div>
  );
};

export default GroupDetailsPage;
