import { fetchGraphQL } from "../api/contentful";

const EventPage = async ({}) => {
  const data = await fetchGraphQL(`
  query {
    eventCollection(order: startDateTime_ASC, limit: 4) {
      items {
        _id
        title
        startDateTime
        coverImage {
          url
        }
        logoImage {
          url
        }
        backgroundColor
      }
    }
  }`);

  return <div>{JSON.stringify(data)}</div>;
};

export default EventPage;
