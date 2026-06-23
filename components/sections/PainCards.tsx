const CARDS = [
  { icon: "🦷", title: "Loose, painful dentures", body: "They slip, click, limit what you eat and never quite feel like yours." },
  { icon: "⚠️", title: "Failing or broken teeth", body: "Crumbling, infected or wobbly teeth that keep needing more work." },
  { icon: "🍎", title: "Can't eat what you love", body: "Avoiding apples, steak, crusty bread — and the meals you used to enjoy." },
  { icon: "🙈", title: "Hiding your smile", body: "Covering your mouth in photos, holding back in social situations." },
];

export function PainCards() {
  return (
    <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
      {CARDS.map((c) => (
        <div
          key={c.title}
          className="rounded-card border border-line border-l-[3px] border-l-gold bg-white p-7 shadow-sm transition hover:-translate-y-[3px] hover:shadow-card"
        >
          <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-[13px] bg-soft2 text-2xl text-teal">
            {c.icon}
          </div>
          <h4 className="mb-[6px]">{c.title}</h4>
          <p className="m-0 text-muted">{c.body}</p>
        </div>
      ))}
    </div>
  );
}
