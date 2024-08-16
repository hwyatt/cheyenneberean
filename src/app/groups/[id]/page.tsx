import Link from "next/link";
import { fetchGraphQL } from "@/app/api/contentful";
import { GMap } from "@/app/components/GMap/GMap";
import { FaRegClock } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";
import { formatGroupDayAndTime } from "../page";

const GroupDetailsPage = async ({ params: id }: any) => {
  const data = await fetchGraphQL(`
    query {
      group(id: "4HLsLmDnXCcQetPLvhFmkL") {
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

  const group = data.data.group;

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
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href="/groups">Groups</Link>
            </li>
            <li className="font-semibold text-gray-600">{group.title}</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center border-gray-300 border-b-2 gap-4 md:gap-0 pb-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              {group.categories && (
                <div className="flex gap-2">
                  {group.categories.map((item: any) => (
                    <div
                      className="font-semibold text-xs text-accent bg-secondary py-1 px-2 rounded-xl"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
              <h1 className="text-accent font-semibold text-2xl md:text-3xl">
                {group?.title}
              </h1>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="btn btn-primary">Join This Group</button>
            <button className="btn btn-square btn-secondary">
              <PiShareFat size="24" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-1 md:w-1/3">
            {group.dayAndTime && (
              <div className="flex gap-2 items-center">
                <FaRegClock className="text-accent text-lg" />
                <span className="text-base">
                  {formatGroupDayAndTime(group.dayAndTime)}
                </span>
              </div>
            )}
            {group.leaders && (
              <div className="flex gap-2 items-center">
                <IoPersonOutline className="text-accent text-lg" />
                <span className="text-base m-0">
                  {group.leaders.join(", ")}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 md:w-2/3 text-balance">
            <h2 className="font-semibold text-lg md:text-xl">Description</h2>
            <p className="md:text-lg">{group.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetailsPage;
