import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

function renderHeader(initialPath = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Header />
    </MemoryRouter>,
  );
}

describe("Header", () => {
  it("renders the four primary nav links", () => {
    renderHeader();
    const nav = screen.getByRole("navigation", { name: /primary/i });
    expect(nav).toBeInTheDocument();
    for (const name of ["Home", "About", "Projects", "Contact"]) {
      const matches = screen.getAllByRole("link", { name });
      expect(matches.length).toBeGreaterThan(0);
    }
  });

  it("includes a skip-to-main-content link for keyboard users", () => {
    renderHeader();
    expect(screen.getByText(/skip to main content/i)).toBeInTheDocument();
  });

  it("marks the active route via NavLink active styling", () => {
    renderHeader("/projects");
    const links = screen.getAllByRole("link", { name: "Projects" });
    const desktopLink = links.find((l) => l.className.includes("text-accent"));
    expect(desktopLink).toBeDefined();
  });
});
