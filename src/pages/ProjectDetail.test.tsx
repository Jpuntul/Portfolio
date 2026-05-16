import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("ProjectDetail", () => {
  it("renders the case study for a known slug", () => {
    renderRoute("/projects/hms");
    expect(
      screen.getByRole("heading", { name: /healthcare management system/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Impact/i)).toBeInTheDocument();
  });

  it("renders the NotFound page for an unknown slug", () => {
    renderRoute("/projects/not-a-real-project");
    expect(
      screen.getByRole("heading", { name: /page not found/i }),
    ).toBeInTheDocument();
  });
});
