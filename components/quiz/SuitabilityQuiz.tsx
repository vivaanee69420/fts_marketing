"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { BookButton } from "@/components/booking/BookButton";
import { CONFIG, gbp } from "@/lib/config";
import { cn } from "@/lib/cn";

type Question = {
  key: string;
  title: string;
  options: { value: string; label: string; sub?: string }[];
  /** reassurance note shown once any option (or a matching one) is selected */
  reassure?: { match?: (v: string) => boolean; text: string };
};

const FIN = gbp(CONFIG.financeFrom);

const QUESTIONS: Question[] = [
  {
    key: "situation",
    title: "What best describes your situation?",
    options: [
      { value: "Loose or uncomfortable dentures", label: "Loose or uncomfortable dentures" },
      { value: "Loose, failing or broken teeth", label: "Loose, failing or broken teeth" },
      { value: "Several or most teeth missing", label: "Several or most teeth missing" },
      {
        value: "Lots of dental problems — I want one fixed solution",
        label: "Lots of problems — I want one fixed solution",
      },
    ],
  },
  {
    key: "jaw",
    title: "Which would you like restored?",
    options: [
      { value: "Upper jaw", label: "Upper jaw" },
      { value: "Lower jaw", label: "Lower jaw" },
      { value: "Both jaws (full mouth)", label: "Both jaws (full mouth)" },
      { value: "Not sure yet", label: "I'm not sure yet" },
    ],
  },
  {
    key: "bone",
    title: 'Have you been told you’re not suitable, or that you "don’t have enough bone"?',
    options: [
      { value: "Yes — I've been turned away before", label: "Yes — I've been turned away before" },
      { value: "No", label: "No" },
      { value: "Not sure", label: "I'm not sure" },
    ],
    reassure: {
      match: (v) => v.startsWith("Yes"),
      text: 'Good news — many patients told "no" elsewhere are suitable with our advanced techniques. This is exactly what we specialise in.',
    },
  },
  {
    key: "smoke",
    title: "Do you currently smoke?",
    options: [
      { value: "No", label: "No" },
      { value: "Occasionally", label: "Occasionally" },
      { value: "Yes", label: "Yes" },
    ],
    reassure: {
      match: (v) => v === "Yes" || v === "Occasionally",
      text: "That's fine to know up front — smoking doesn't automatically rule you out. We'll simply factor it into your plan and aftercare.",
    },
  },
  {
    key: "timeline",
    title: "How soon would you like your new smile?",
    options: [
      { value: "As soon as possible", label: "As soon as possible" },
      { value: "In the next 1–3 months", label: "In the next 1–3 months" },
      { value: "Just researching for now", label: "Just researching for now" },
    ],
  },
  {
    key: "finance",
    title: `Treatment starts from £7,997 per arch, with finance from ${FIN}/month. How would you like to handle it?`,
    options: [
      { value: "That's within reach", label: "That's within reach" },
      { value: "I'd like to see finance options", label: "I'd like to see finance options" },
      { value: "I need to think about it", label: "I need to think about it" },
    ],
  },
  {
    key: "centre",
    title: "Which clinic is nearest to you?",
    options: CONFIG.centres.map((c) => ({
      value: c.name,
      label: c.name,
      sub: `· ${c.area}`,
    })),
  },
];

const TOTAL = QUESTIONS.length;

function buildResult(answers: Record<string, string>) {
  let title = "Great news — you're very likely suitable";
  let msg =
    "Based on your answers, full arch implants could be an excellent option for you. The next step is a free consultation and 3D scan to confirm everything and build your plan.";
  if (answers.bone?.startsWith("Yes")) {
    msg =
      "You've been told no before — but this is exactly what we specialise in. Many patients in your position are suitable with our advanced techniques. A free 3D scan will confirm it.";
  }
  if (answers.timeline === "Just researching for now") {
    title = "You're very likely suitable — whenever you're ready";
    msg =
      "There's no rush. Based on your answers full arch implants look like a strong option. A free consultation and 3D scan will give you the full picture so you can decide in your own time.";
  }
  return { title, msg };
}

/** Pure-UI multi-step suitability quiz. No name/phone/email, no consent, nothing submitted. */
export function SuitabilityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const q = QUESTIONS[step];
  const selected = answers[q.key];
  const progress = done ? 100 : ((step + 1) / TOTAL) * 100;

  function select(value: string) {
    setError(false);
    setAnswers((a) => ({ ...a, [q.key]: value }));
  }

  function next() {
    if (!selected) {
      setError(true);
      return;
    }
    if (step === TOTAL - 1) {
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
  }

  function back() {
    setError(false);
    setStep((s) => Math.max(0, s - 1));
  }

  const reassure =
    q.reassure && selected && (!q.reassure.match || q.reassure.match(selected))
      ? q.reassure.text
      : null;

  return (
    <div className="mx-auto max-w-[720px] overflow-hidden rounded-[22px] border border-line bg-white shadow-card">
      {/* head */}
      <div className="bg-gradient-to-br from-teal-d to-teal px-8 py-[26px] text-white">
        <h3 className="m-0 mb-1 text-white">Your free suitability check</h3>
        <p className="m-0 text-[0.95rem] text-[#cdeae3]">
          No cost · no obligation · results in under a minute
        </p>
      </div>

      {/* progress bar */}
      <div className="h-[6px] bg-soft2">
        <div
          className="h-full bg-gold transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {done ? (
        <Result answers={answers} />
      ) : (
        <div className="px-8 py-[34px]">
          <div className="mb-2 text-[0.78rem] font-extrabold uppercase tracking-[0.1em] text-teal">
            Question {step + 1} of {TOTAL}
          </div>
          <h4 className="mb-5 font-serif text-[1.5rem] font-medium">{q.title}</h4>

          <div className="grid gap-3">
            {q.options.map((o) => {
              const sel = selected === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => select(o.value)}
                  aria-pressed={sel}
                  className={cn(
                    "flex cursor-pointer items-center gap-[14px] rounded-[13px] border-[1.6px] px-[18px] py-4 text-left font-bold text-ink2 transition-colors",
                    sel
                      ? "border-teal bg-soft2"
                      : "border-line bg-white hover:border-teal hover:bg-soft",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full border-2",
                      sel ? "border-teal bg-teal" : "border-line",
                    )}
                  >
                    {sel && <span className="h-[9px] w-[9px] rounded-full bg-white" />}
                  </span>
                  <span>
                    {o.label}
                    {o.sub && <span className="font-medium text-muted"> {o.sub}</span>}
                  </span>
                </button>
              );
            })}
          </div>

          {reassure && (
            <div className="mt-[18px] rounded-[12px] border-l-[3px] border-gold bg-[#f7efdd] px-[18px] py-[14px] text-[0.94rem] text-[#5a4413]">
              {reassure}
            </div>
          )}

          {error && (
            <p className="mt-3 text-[0.88rem] font-semibold text-[#b4452f]">
              Please pick an option to continue.
            </p>
          )}

          <div className="mt-[26px] flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              onClick={back}
              className={cn(step === 0 && "invisible")}
            >
              ← Back
            </Button>
            <Button variant="teal" onClick={next}>
              {step === TOTAL - 1 ? "See my result →" : "Continue →"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Result({ answers }: { answers: Record<string, string> }) {
  const { title, msg } = buildResult(answers);
  return (
    <div className="px-8 py-10 text-center">
      <div className="mx-auto mb-[18px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-soft2 text-[38px] text-teal">
        ✓
      </div>
      <h3 className="text-[1.8rem]">{title}</h3>
      <p className="mx-auto max-w-[520px] text-muted">{msg}</p>

      <div className="my-5 rounded-[13px] bg-soft p-[18px] text-left text-[0.92rem] text-ink2">
        <b>Your answers</b>
        <br />
        Situation: {answers.situation || "—"}
        <br />
        Restore: {answers.jaw || "—"}
        <br />
        Nearest clinic: {answers.centre || "—"}
        <br />
        Timeline: {answers.timeline || "—"}
      </div>

      <BookButton variant="gold" size="lg">
        Book my free consultation
      </BookButton>

      <p className="mt-[18px] text-[0.78rem] text-muted">
        Nothing was submitted — your answers stay on this screen. These results are for general
        information only and are not a diagnosis. A clinical assessment is required to confirm
        suitability.
      </p>
    </div>
  );
}
