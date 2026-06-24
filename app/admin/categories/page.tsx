import { requireSession } from "@/lib/admin-guard";
import { listCategories } from "@/lib/blog/categories";
import { saveCategory, removeCategory } from "@/app/admin/actions";
import { Button, ButtonLink } from "@/components/ui/Button";

export const dynamic = "force-dynamic";
const field = "w-full rounded-[10px] border border-line px-3 py-2";

export default async function CategoriesPage() {
  await requireSession();
  const categories = await listCategories();
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[1.5rem]">Categories</h1>
        <ButtonLink href="/admin" variant="ghost">← Posts</ButtonLink>
      </div>

      <form action={saveCategory} className="mb-8 grid grid-cols-[1fr_1fr_auto] gap-3">
        <input className={field} name="name" placeholder="Name" required />
        <input className={field} name="description" placeholder="Description (optional)" />
        <Button variant="teal" type="submit">Add</Button>
      </form>

      <div className="rounded-card border border-line bg-white">
        {categories.map((c) => (
          <div key={c.slug} className="flex items-center justify-between border-b border-line p-3 last:border-0">
            <div><b>{c.name}</b> <span className="text-muted">/{c.slug}</span></div>
            <form action={removeCategory.bind(null, c._id.toString())}>
              <Button variant="ghost" type="submit" className="text-[#b4452f]">Delete</Button>
            </form>
          </div>
        ))}
        {categories.length === 0 && <p className="p-6 text-muted">No categories yet.</p>}
      </div>
    </div>
  );
}
