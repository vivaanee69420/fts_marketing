export type FaqItem = { q: string; a: string };

/** Accordion built on native <details>/<summary> (no JS). */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-[840px]">
      {items.map((item) => (
        <details key={item.q} className="qa mb-3 overflow-hidden rounded-[13px] border border-line bg-white">
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-[22px] py-[18px] text-[1.02rem] font-bold">
            {item.q}
          </summary>
          <div className="px-[22px] pb-5 text-ink2">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
