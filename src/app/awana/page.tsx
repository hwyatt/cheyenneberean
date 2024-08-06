import { fetchGraphQL } from "../api/contentful";
import { IntroSection } from "../components/IntroSection/IntroSection";
import { Card } from "../components/Card/Card";

const CLUBS = [
  {
    name: "Puggles",
    ages: "Ages 2-3",
    desc: "In Puggles, children learn basic truths about God. (For children of volunteers only)",
    image: "/awana-puggles.webp",
    bgColor: "#cff2fa",
  },
  {
    name: "Cubbies",
    ages: "Ages 4-5",
    desc: `Children in Cubbies are taught about God’s love for them, and how he sent Jesus to save us.`,
    image: "/awana-cubbies.webp",
    bgColor: "#faecdc",
  },
  {
    name: "Sparks",
    ages: "Kindergaten-2nd Grade",
    desc: "The children in Sparks learn about God’s desire to have a personal relationship with us, as they explore His faithfulness through studying people and events in the Bible. ",
    image: "/awana-sparks.webp",
    bgColor: "#ffcccd",
  },
  {
    name: "T&T",
    ages: "3rd-6th Grade",
    desc: "T&T stands for Truth and Training. The focus of T&T is on the badics of the Christian Faith and guides kids to a deeper understanding of God’s Grace.",
    image: "/awana-t&t.webp",
    bgColor: "#e3f3d6",
  },
];

const AwanaPage = async ({}) => {
  const data = await fetchGraphQL(`
    query {
      pageCollection(where: { sys: { id: "5C61n20INdzml9XNnCweCv" } }) {
        items {
          sys {
            id
          }
          pageIntroSection {
            heading
            description
            ctaPrimary
            ctaSecondary
            logo {
              url
            }
          }
        }
      }
    }    
    `);

  const pageData = data?.data?.pageCollection?.items[0];
  const { pageIntroSection } = pageData;

  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      {pageIntroSection && (
        <IntroSection
          header={pageIntroSection.heading}
          headerColor="text-gray-800"
          image={pageIntroSection.logo.url}
          copy={pageIntroSection.description}
          ctaPrimary={
            pageIntroSection.ctaPrimary ? pageIntroSection.ctaPrimary : null
          }
          ctaSecondary={
            pageIntroSection.ctaSecondary ? pageIntroSection.ctaSecondary : null
          }
        />
      )}
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-lg font-semibold text-gray-800 uppercase">
            Awana Clubs
          </h2>
          <div className="flex flex-col md:grid grid-cols-12 gap-4">
            {CLUBS.map((club) => (
              <Card
                title={club.name}
                subtitle={club.ages}
                description={club.desc}
                image={club.image}
                backgroundColor={club.bgColor}
                key={club.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwanaPage;
