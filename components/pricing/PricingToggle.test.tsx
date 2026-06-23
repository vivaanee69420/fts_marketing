import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { PricingToggle } from "./PricingToggle";

// PricingTiers renders BookButton, which needs the booking context.
function renderToggle() {
  return render(
    <BookingProvider>
      <PricingToggle />
    </BookingProvider>,
  );
}

describe("PricingToggle", () => {
  it("shows single-arch prices by default", () => {
    renderToggle();
    // Classic single-arch price (price1)
    expect(screen.getByText("£7,997")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /1 jaw/i })).toHaveAttribute("aria-selected", "true");
  });

  it("switches to full-mouth prices when the 2-jaw tab is selected", async () => {
    const user = userEvent.setup();
    renderToggle();
    await user.click(screen.getByRole("tab", { name: /2 jaws/i }));
    // Classic full-mouth price (price2)
    expect(screen.getByText("£14,995")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /2 jaws/i })).toHaveAttribute("aria-selected", "true");
  });
});
