import { SITE_URL } from "@/lib/site";

export function ShareButtons({ path, title }: { path: string; title: string }) {
  const url = encodeURIComponent(`${SITE_URL}${path}`);
  const text = encodeURIComponent(title);
  const links = [
    { label: "X", href: `https://twitter.com/intent/tweet?url=${url}&text=${text}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${text}%20${url}` },
  ];
  return (
    <div className="mt-8 flex items-center gap-3 text-sm">
      <span className="font-semibold text-muted">Share:</span>
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
          className="rounded-full border border-line px-3 py-1 font-semibold hover:border-teal">{l.label}</a>
      ))}
    </div>
  );
}
