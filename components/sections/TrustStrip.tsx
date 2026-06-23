const ITEMS = [
  "GDC-registered clinicians",
  "CQC-regulated clinics",
  "Led by an implant specialist",
  "0% finance options",
  "Our own dental laboratory",
];

export function TrustStrip() {
  return (
    <div className="bg-ink py-5 text-[#cfe0db]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-[26px] text-[0.92rem] font-semibold">
        {ITEMS.map((t) => (
          <span key={t} className="flex items-center gap-[9px] opacity-95">
            <span className="text-gold">●</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
