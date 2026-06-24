import { auth } from "@/lib/auth";
import { uploadImage } from "@/lib/s3";

const MAX_BYTES = 8 * 1024 * 1024;
const EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
};

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return new Response("Unauthorized", { status: 401 });

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return new Response("Missing file", { status: 400 });
  const ext = EXT[file.type];
  if (!ext) return new Response("Unsupported image type", { status: 415 });
  if (file.size > MAX_BYTES) return new Response("File too large", { status: 413 });

  const bytes = Buffer.from(await file.arrayBuffer());
  const url = await uploadImage(bytes, file.type, ext);
  return Response.json({ url });
}
