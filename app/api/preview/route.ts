import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user) return new Response("Unauthorized", { status: 401 });
  const slug = new URL(req.url).searchParams.get("slug");
  if (!slug) return new Response("Missing slug", { status: 400 });
  (await draftMode()).enable();
  redirect(`/blog/${encodeURIComponent(slug)}/`);
}
