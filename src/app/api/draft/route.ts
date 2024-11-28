import { NextRequest, NextResponse } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPageData } from "../queries/contentPage";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const cleanSlug = slug?.replace("/", "");

  if (!secret || !slug) {
    return new Response("Missing parameters", { status: 400 });
  }

  const article = await getPageData(cleanSlug || "");

  if (!article) {
    return new NextResponse("Article not found", { status: 404 });
  }

  draftMode().enable();
  redirect(`${slug}`);
}
