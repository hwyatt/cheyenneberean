export async function fetchGraphQL(query: string, isDraftMode = false) {
  const accessToken = isDraftMode
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
      // next: { revalidate: 60 * 5 },
      next: { tags: ["event"] },
    }
  ).then((response) => response.json());
}
