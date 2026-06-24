import { savePost } from "@/app/admin/actions";
import { RichTextEditor } from "./RichTextEditor";
import { Button } from "@/components/ui/Button";
import type { Category } from "@/lib/blog/schemas";
import type { TeamMember } from "@/lib/team";

type Values = {
  id?: string; title?: string; slug?: string; excerpt?: string; contentHtml?: string;
  coverImageId?: string; authorSlug?: string; categorySlug?: string; tags?: string[];
  status?: string; featured?: boolean; metaTitle?: string; metaDescription?: string;
};

const field = "w-full rounded-[10px] border border-line px-3 py-2";

export function PostForm({ values = {}, categories, team }: { values?: Values; categories: Category[]; team: TeamMember[] }) {
  return (
    <form action={savePost} className="grid gap-4">
      {values.id && <input type="hidden" name="id" value={values.id} />}
      <input className={field} name="title" placeholder="Title" defaultValue={values.title} required />
      <input className={field} name="slug" placeholder="Slug (optional — auto from title)" defaultValue={values.slug} />
      <textarea className={field} name="excerpt" placeholder="Excerpt" defaultValue={values.excerpt} required />

      <label className="text-sm font-semibold">Body</label>
      <RichTextEditor name="contentHtml" initialHtml={values.contentHtml} />

      <input className={field} name="coverImageId" placeholder="Cover image id (upload via body image, paste id)" defaultValue={values.coverImageId} />

      <div className="grid grid-cols-2 gap-4">
        <select className={field} name="categorySlug" defaultValue={values.categorySlug} required>
          <option value="">Select category…</option>
          {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
        <select className={field} name="authorSlug" defaultValue={values.authorSlug}>
          <option value="">No author</option>
          {team.map((m) => <option key={m.slug} value={m.slug}>{m.name}</option>)}
        </select>
      </div>

      <input className={field} name="tags" placeholder="Tags (comma separated)" defaultValue={values.tags?.join(", ")} />

      <div className="grid grid-cols-2 gap-4">
        <input className={field} name="metaTitle" placeholder="SEO title" defaultValue={values.metaTitle} />
        <input className={field} name="metaDescription" placeholder="SEO description" defaultValue={values.metaDescription} />
      </div>

      <label className="flex items-center gap-2 text-sm font-semibold">
        <input type="checkbox" name="featured" defaultChecked={values.featured} /> Featured
      </label>

      <select className={field} name="status" defaultValue={values.status ?? "draft"}>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <div className="flex items-center gap-4">
        <Button variant="teal" type="submit">Save</Button>
        {values.id && values.slug && (
          <a href={`/api/preview?slug=${values.slug}`} target="_blank" rel="noopener noreferrer"
             className="text-sm font-semibold text-teal">Preview draft ↗</a>
        )}
      </div>
    </form>
  );
}
