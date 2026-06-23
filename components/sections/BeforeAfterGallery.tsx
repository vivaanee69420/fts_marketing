import { CdnImage } from "@/components/ui/CdnImage";

export type BAItem = { img: string; cap: string };

export function BeforeAfterGallery({ items }: { items: BAItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.img} className="overflow-hidden rounded-[14px] border border-line bg-white">
          <div className="relative aspect-[4/3]">
            <CdnImage src={it.img} alt={it.cap} sizes="(max-width:940px) 100vw, 33vw" />
          </div>
          <div className="px-[14px] py-3 text-[0.9rem] text-ink2">{it.cap}</div>
        </div>
      ))}
    </div>
  );
}

export const HOME_BEFORE_AFTER: BAItem[] = [
  {
    img: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a5fdb212eecbcaa6d0249.jpeg",
    cap: "Upper & lower full arch · eating normally within weeks",
  },
  {
    img: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a63b8212eecbcaa6d8c39.png",
    cap: "From failing teeth to a fixed, natural smile",
  },
  {
    img: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a63b8181eb301d4267349.png",
    cap: "Denture-wearer · now fixed teeth, no removal",
  },
];
