import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import type { Project } from "../data/portfolio";

const baseProject: Project = {
  id: 99,
  slug: "test-project",
  role: "Full Stack",
  title: "Test Project",
  shortDesc: "A short description.",
  description: "A longer description.",
  image: "images/projects/test.png",
  technologies: ["React", "TypeScript", "Vitest"],
  github: "https://github.com/example/test",
  demo: "",
  category: "Web",
  status: "Completed",
  features: ["Feature A"],
};

function renderCard(project: Project) {
  return render(
    <MemoryRouter>
      <ProjectCard project={project} />
    </MemoryRouter>,
  );
}

describe("ProjectCard", () => {
  it("renders the title, tagline, and tech chips", () => {
    renderCard({
      ...baseProject,
      tagline: "An eighty-char tagline.",
    });
    expect(
      screen.getByRole("heading", { name: /test project/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/eighty-char tagline/i)).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("falls back to shortDesc when no tagline is provided", () => {
    renderCard(baseProject);
    expect(screen.getByText(/a short description/i)).toBeInTheDocument();
  });

  it("links to the case-study page using slug", () => {
    renderCard(baseProject);
    const links = screen
      .getAllByRole("link")
      .map((a) => a.getAttribute("href"))
      .filter((href): href is string => Boolean(href));
    expect(links).toContain("/projects/test-project");
  });

  it("shows the private lock when project.private is true and hides github icon", () => {
    renderCard({ ...baseProject, private: true, github: "" });
    expect(screen.getByText(/private/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/on github/i)).not.toBeInTheDocument();
  });

  it("renders an Ongoing pip when status is Ongoing", () => {
    renderCard({ ...baseProject, status: "Ongoing" });
    expect(screen.getByText(/ongoing/i)).toBeInTheDocument();
  });
});
