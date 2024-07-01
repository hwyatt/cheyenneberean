import ReactMarkdown from "react-markdown";
import { SocialIcon } from "react-social-icons";
import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";

const LeadershipPage = async ({}) => {
  const data = await fetchGraphQL(`
  query {
    staffMemberCollection {
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
      shepherds(id: "7bbu2x2glMTqArQJ75UqAO"){
        name
      }
  }`);

  const staffContent = data.data.staffMemberCollection;
  const leadPastorContent = staffContent.items.filter(
    (member) => member.position === "Lead Pastor"
  )[0];
  const shepherdsContent = data.data.shepherds.name;

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 md:gap-16">
      <IntroSection
        header={"Our Leadership"}
        copy={`At Cheyenne Berean we are guided by pastors and strengthened by
          Shepherds... Etc etc overview of the church government in whatever
          language is clear and concise`}
      />
      {leadPastorContent && (
        <div className="flex flex-col md:grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-4 flex flex-col items-center">
            <img
              className="rounded-lg max-h-80 md:max-h-none"
              src={leadPastorContent.image.url}
            />
          </div>
          <div className="col-span-8 flex flex-col gap-2 md:gap-4">
            <h2 className="text-accent font-semibold text-2xl">
              {leadPastorContent.name}
            </h2>
            <div className="markdown-container">
              <ReactMarkdown>{leadPastorContent.bio}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
      {staffContent && (
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-lg font-semibold text-accent uppercase">
            Church Staff
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {staffContent.items.map(
              (item) =>
                item.position !== "Lead Pastor" && (
                  <div
                    key={item.name}
                    className="flex flex-col gap-2 items-center"
                  >
                    <div className="relative overflow-hidden rounded-full bg-accent h-40 w-40 md:h-48 md:w-48">
                      {item.image && item.image.url ? (
                        <img src={item.image.url} className="" />
                      ) : (
                        <img
                          src="/dark-mountains.png"
                          className="absolute object-cover w-full h-full"
                        />
                      )}
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <span className="font-semibold text-gray-800">
                        {item.name}
                      </span>
                      <span className="font-light text-gray-600">
                        {item.position}
                      </span>
                      {item.email && (
                        <SocialIcon
                          style={{
                            height: 32,
                            width: 32,
                          }}
                          bgColor="transparent"
                          fgColor="#1F4061"
                          url={`mailto:${item.email}`}
                        />
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )}
      {shepherdsContent && (
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-lg font-semibold text-accent uppercase">
            SHEPHERDS
          </h2>
          <div className="flex flex-col gap-2">
            {shepherdsContent.map((shepherd) => (
              <span key={shepherd} className="text-center">
                {shepherd}
              </span>
            ))}
          </div>
        </div>
      )}
      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default LeadershipPage;
