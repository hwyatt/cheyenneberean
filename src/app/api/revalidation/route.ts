import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: any) {
  //   const requestHeaders = new Headers(request.headers);
  //   const secret = requestHeaders.get("x-vercel-reval-key");

  //   if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
  //     return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  //   }

  const body = await request.json();
  const contentType = body.sys?.contentType?.sys?.id;

  if (contentType) {
    revalidateTag(contentType);
  } else {
    return NextResponse.json(
      { message: "Missing content type" },
      { status: 400 }
    );
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
