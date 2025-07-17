import "react-social-icons/facebook";
import "react-social-icons/email";
import { CONNECT_LINKS, CONTACT_LINKS, FAMILY_LINKS } from "./LINKS";
import { Tile } from "./components/Tile/Tile";
import { SermonSeries } from "./components/SermonSeries/SermonSeries";
import { fetchGraphQL } from "./api/contentful";
import { LinkSection } from "./components/LinkSection/LinkSection";
import { CustomLink } from "./components/Link/Link";
import { Button } from "./components/Button/Button";
import { FaLocationDot, FaRegClock, FaCircleInfo } from "react-icons/fa6";
import { PageNextStepProps } from "./api/types";

const LocationCard = () => (
  <div className="bg-palette rounded-lg flex flex-col justify-start shadow-lg">
    <div className="flex flex-col gap-4 justify-start p-4">
      <h3 className="font-medium text-xl mb-0">Service Times</h3>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">In Person</span>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <FaRegClock className="text-body" />
            <span className="text-sm text-body">
              Sundays at 9:00 AM & 10:45 AM
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <FaCircleInfo className="text-body" />
            <span className="text-sm text-body">
              BereanKIDS at 9:00 AM (10:45 AM beginning 8/24)
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <FaLocationDot className="text-body" />
            <span className="text-sm m-0 text-body">
              5716 Powderhouse Rd, Cheyenne, WY 82009
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">Online</span>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <FaRegClock className="text-body" />
            <span className="text-sm text-body">Sundays at 10:45 AM</span>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-top mt-4">
        <Button variant="Primary" size="Small">
          Get Directions
        </Button>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-palette border border-borderPrimary rounded-box z-[1] w-52 p-2 shadow-lg mb-2"
        >
          <li>
            <CustomLink
              href="https://maps.apple.com/?address=5716%20Powderhouse%20Rd,%20Cheyenne,%20WY%20%2082009,%20United%20States&auid=3348263254314329745&ll=41.172238,-104.809766&lsp=9902&q=Cheyenne%20Berean%20Church&t=m"
              className="font-medium"
              target="_blank"
              variant="Secondary"
            >
              Apple Maps
            </CustomLink>
          </li>
          <li>
            <CustomLink
              href="https://www.google.com/maps/dir/?api=1&destination=Cheyenne+Berean+Church,+5716+Powderhouse+Rd,+Cheyenne,+WY+82009"
              className="font-medium"
              target="_blank"
              variant="Secondary"
            >
              Google Maps
            </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const LoginCard = () => (
  <div className="bg-palette rounded-lg flex flex-col justify-start shadow-lg">
    <div className="flex flex-col gap-4 justify-start p-4">
      <h3 className="font-medium text-xl mb-0">Login to CCB Church</h3>
      <span className="text-sm text-body">
        Manage giving, find a group, see events and more.
      </span>
      <Button
        href="https://cheyenneberean.ccbchurch.com/goto/login"
        className="self-start mt-4"
        size="Small"
      >
        Log Into CCB
      </Button>
    </div>
  </div>
);

const HOME_PAGE_QUERY = `
query homePage {
  sermonCollection(order: date_DESC, limit: 1) {
    items {
      title
          speaker
          date
          link
          image {
            url
          }
          notes
    }
  }
  homePageCollection {
    items {
      promoTilesCollection {
        items {
          _id
          heading
          description
          ctaLabel
          ctaLink
          backgroundImage {
            url
          }
        }
      }
    }
  }
}`;

export default async function Home() {
  const data = await fetchGraphQL(HOME_PAGE_QUERY);
  const homePageContent = data.data;
  const promoTilesContent =
    data.data.homePageCollection.items[0].promoTilesCollection;
  const sermonContent = homePageContent.sermonCollection.items[0];

  return (
    <div className="flex flex-col gap-8">
      {/* <HeroBanner
        title={`“They (those in Berea) received the word with all eagerness, examining the Scriptures daily…”`}
        eyebrowText={"Acts 17:11"}
        description={
          "Our mission is to pursue and proclaim Jesus together: Gather, Grow, and Go, being transformed by Him and sharing the Gospel worldwide."
        }
      /> */}
      <div className="flex flex-col md:grid grid-cols-12 gap-8">
        <div className="col-span-8 flex flex-col gap-8">
          {sermonContent && (
            <SermonSeries
              sermonTitle={sermonContent.title}
              sermonDate={sermonContent.date}
              sermonSpeaker={sermonContent.speaker}
              imgUrl={sermonContent.image.url}
              watchSermonLink={sermonContent.link}
              notes={sermonContent.notes}
            />
          )}
          {promoTilesContent && promoTilesContent.items.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:grid grid-cols-12 gap-4">
                {promoTilesContent.items.map((promo: PageNextStepProps) => (
                  <Tile
                    key={promo._id}
                    heading={promo.heading}
                    description={promo.description}
                    ctaLabel={promo.ctaLabel}
                    ctaLink={promo.ctaLink}
                    responsive
                    image={promo.backgroundImage.url}
                    theme={promo.theme}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-4 flex flex-col gap-8">
          <LocationCard />
          <LinkSection title="Next Steps" links={CONNECT_LINKS} />
          <LinkSection title="For Your Family" links={FAMILY_LINKS} />
          <LinkSection title="Connect with Us" links={CONTACT_LINKS} />
          <LoginCard />
        </div>
      </div>
    </div>
  );
}
