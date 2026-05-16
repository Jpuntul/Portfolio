import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

const CATEGORIES: ("all" | Project["category"])[] = ["all", "Web", "Mobile"];
const STATUSES: ("all" | Project["status"])[] = ["all", "Completed", "Ongoing"];
const ROLES: ("all" | Project["role"])[] = [
  "all",
  "Full Stack",
  "Frontend",
  "Backend",
];

export default function Projects() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("all");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("all");
  const [role, setRole] = useState<(typeof ROLES)[number]>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (status !== "all" && p.status !== status) return false;
      if (role !== "all" && p.role !== role) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay =
          `${p.title} ${p.shortDesc} ${p.technologies.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [category, status, role, search]);

  const reset = () => {
    setCategory("all");
    setStatus("all");
    setRole("all");
    setSearch("");
  };

  return (
    <main id="main">
      <section className="relative isolate overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[40vh] bg-gradient-to-b from-accent-50/60 to-transparent dark:from-accent-900/10" />

        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-wider text-accent-700 dark:text-accent-400">
            Projects
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Everything I&rsquo;ve shipped
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            {projects.length} projects across full-stack web, real-time systems,
            and cross-platform mobile. Filter to narrow down, or open a card for
            the case study.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 py-8 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              <FilterGroup
                label="Role"
                options={ROLES}
                value={role}
                onChange={setRole}
              />
              <FilterGroup
                label="Category"
                options={CATEGORIES}
                value={category}
                onChange={setCategory}
              />
              <FilterGroup
                label="Status"
                options={STATUSES}
                value={status}
                onChange={setStatus}
              />
            </div>

            <label className="relative block w-full md:w-72">
              <span className="sr-only">Search projects</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects, tech…"
                className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-300">
                No projects match these filters.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-4 rounded-full bg-accent-600 px-4 py-2 text-sm font-medium text-white hover:bg-accent-700"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

interface FilterGroupProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: FilterGroupProps<T>) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <div className="inline-flex flex-wrap gap-1 rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              value === option
                ? "bg-accent-600 text-white"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            {option === "all" ? "All" : option}
          </button>
        ))}
      </div>
    </div>
  );
}
