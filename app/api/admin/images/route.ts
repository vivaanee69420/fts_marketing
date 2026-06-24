import { auth } from "@/lib/auth";
import { uploadImage } from "@/lib/blog/images";

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/gif"];

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return new Response("Unauthorized", { status: 401 });

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return new Response("No file", { status: 400 });
  if (!ALLOWED.includes(file.type)) return new Response("Unsupported type", { status: 415 });
  const buf = Buffer.from(await file.arrayBuffer());
  if (buf.length > MAX_BYTES) return new Response("Too large", { status: 413 });

  const id = await uploadImage(buf, file.name || "upload", file.type);
  return Response.json({ id, url: `/api/images/${id}` });
}
