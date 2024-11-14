import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPageData } from "../queries/contentPage";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const cleanSlug = slug?.replace("/", "");

  if (!secret || !slug) {
    return new Response("Missing parameters", { status: 400 });
  }

  //   if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
  //     return new Response("Invalid token", { status: 401 });
  //   }

  const article = await getPageData(cleanSlug || "");

  if (!article) {
    return new Response("Article not found", { status: 404 });
  }

  draftMode().enable();
  redirect(`${slug}`);
}
