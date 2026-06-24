import { requireSession } from "@/lib/admin-guard";
import { listCategories } from "@/lib/blog/categories";
import { TEAM } from "@/lib/team";
import { PostForm } from "@/components/admin/PostForm";

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  await requireSession();
  const categories = await listCategories();
  return (
    <div>
      <h1 className="mb-6 text-[1.5rem]">New post</h1>
      <PostForm categories={categories} team={TEAM} />
    </div>
  );
}
