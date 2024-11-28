import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { draftMode } from "next/headers";

export async function POST(request: NextRequest) {
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

  // draftMode().disable();
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
