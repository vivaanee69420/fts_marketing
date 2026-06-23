import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { SuitabilityQuiz } from "./SuitabilityQuiz";

// BookButton (rendered on the result screen) needs the booking context.
function renderQuiz() {
  return render(
    <BookingProvider>
      <SuitabilityQuiz />
    </BookingProvider>,
  );
}

// Walk all 7 steps, always picking the first option (or a chosen value at a step).
async function complete(user: ReturnType<typeof userEvent.setup>, overrides: Record<number, string> = {}) {
  for (let i = 0; i < 7; i++) {
    const label = overrides[i];
    if (label) {
      await user.click(screen.getByRole("button", { name: new RegExp(label, "i") }));
    } else {
      // first option button on the step (radio-style option)
      const opts = screen.getAllByRole("button", { name: /./ });
      const firstOption = opts.find((b) => b.getAttribute("aria-pressed") !== null);
      if (firstOption) await user.click(firstOption);
    }
    await user.click(screen.getByRole("button", { name: /Continue|See my result/i }));
  }
}

describe("SuitabilityQuiz", () => {
  it("renders the first question and step counter", () => {
    renderQuiz();
    expect(screen.getByText(/Question 1 of 7/i)).toBeInTheDocument();
    expect(screen.getByText(/What best describes your situation/i)).toBeInTheDocument();
  });

  it("blocks advancing without a selection (guard)", async () => {
    const user = userEvent.setup();
    renderQuiz();
    await user.click(screen.getByRole("button", { name: /Continue/i }));
    expect(screen.getByText(/Please pick an option to continue/i)).toBeInTheDocument();
    // still on question 1
    expect(screen.getByText(/Question 1 of 7/i)).toBeInTheDocument();
  });

  it("advances after a selection and clears the error", async () => {
    const user = userEvent.setup();
    renderQuiz();
    await user.click(screen.getByRole("button", { name: /Several or most teeth missing/i }));
    await user.click(screen.getByRole("button", { name: /Continue/i }));
    expect(screen.getByText(/Question 2 of 7/i)).toBeInTheDocument();
  });

  it("shows a reassurance note when 'told no elsewhere' is picked", async () => {
    const user = userEvent.setup();
    renderQuiz();
    // step 1 -> 2 -> 3 (bone question)
    await user.click(screen.getByRole("button", { name: /Loose or uncomfortable dentures/i }));
    await user.click(screen.getByRole("button", { name: /Continue/i }));
    await user.click(screen.getByRole("button", { name: /Upper jaw/i }));
    await user.click(screen.getByRole("button", { name: /Continue/i }));
    await user.click(screen.getByRole("button", { name: /turned away before/i }));
    expect(screen.getByText(/this is exactly what we specialise in/i)).toBeInTheDocument();
  });

  it("reaches a result screen that captured nothing", async () => {
    const user = userEvent.setup();
    renderQuiz();
    await complete(user);
    expect(screen.getByText(/very likely suitable/i)).toBeInTheDocument();
    expect(screen.getByText(/Nothing was submitted/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Book my free consultation/i })).toBeInTheDocument();
  });
});
