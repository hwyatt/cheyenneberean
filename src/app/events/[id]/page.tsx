async function fetchGraphQL(query: string) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

const EventDetailsPage = async ({ params: id }: any) => {
  //   const data = await fetchGraphQL(`
  //   query {
  //     eventCollection(order: startDateTime_ASC, limit: 4) {
  //       items {
  //         _id
  //         title
  //         startDateTime
  //         coverImage {
  //           url
  //         }
  //         logoImage {
  //           url
  //         }
  //         backgroundColor
  //       }
  //     }
  //   }`);

  return <div>{JSON.stringify(id)}</div>;
};

export default EventDetailsPage;
