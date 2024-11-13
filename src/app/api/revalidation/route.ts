import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: any) {
  //   const requestHeaders = new Headers(request.headers);
  //   const secret = requestHeaders.get("x-vercel-reval-key");

  //   if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
  //     return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  //   }

  //   revalidateTag("event");

  // Parse the JSON payload from Contentful
  const body = await request.json();

  // Extract contentType and entry id
  const contentType = body.sys?.contentType?.sys?.id;
  const entryId = body.sys?.id;

  // Ensure we have the necessary data for revalidation
  if (contentType && entryId) {
    revalidateTag(`${contentType}:${entryId}`); // Specific revalidation for this entry
  } else if (contentType) {
    revalidateTag(contentType); // General revalidation for this content type
  } else {
    return NextResponse.json(
      { message: "Missing content type or entry ID" },
      { status: 400 }
    );
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
