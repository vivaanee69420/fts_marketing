export type Step = { title: string; body: string };

export const DEFAULT_STEPS: Step[] = [
  {
    title: "Suitability & consultation",
    body: "Free consultation and a 3D scan. We assess your jaw and bone and tell you, honestly, if you're suitable — there and then.",
  },
  {
    title: "Your treatment plan",
    body: "A clear, fixed-price plan with finance options. No hidden costs, no pressure — take it away and think it over.",
  },
  {
    title: "Fixed teeth in a day",
    body: "On treatment day, your implants are placed and a fixed set of teeth fitted — you leave with a smile.",
  },
  {
    title: "Aftercare for life",
    body: "Your final bridge and ongoing reviews at your local clinic, supported by our own laboratory.",
  },
];

export function StepsHowItWorks({ steps = DEFAULT_STEPS }: { steps?: Step[] }) {
  return (
    <div className="steps grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <div
          key={s.title}
          className="step relative rounded-card border border-line bg-white px-6 pb-6 pt-7"
        >
          <h4 className="mb-[6px] mt-[14px]">{s.title}</h4>
          <p className="m-0 text-muted">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
