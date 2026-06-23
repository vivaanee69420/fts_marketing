import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileNav } from "./MobileNav";

describe("MobileNav", () => {
  it("hides the menu until the burger is toggled", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);
    const burger = screen.getByRole("button", { name: /toggle menu/i });
    expect(burger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("link", { name: /^Pricing$/i })).not.toBeInTheDocument();

    await user.click(burger);
    expect(burger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: /^Pricing$/i })).toBeInTheDocument();
  });

  it("collapses the menu when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileNav />);
    await user.click(screen.getByRole("button", { name: /toggle menu/i }));
    await user.click(screen.getByRole("link", { name: /^Pricing$/i }));
    expect(screen.queryByRole("link", { name: /^Pricing$/i })).not.toBeInTheDocument();
  });
});
