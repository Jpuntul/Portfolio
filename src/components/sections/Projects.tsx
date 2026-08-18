import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolio";
import { SECTION_REVEAL } from "../../constants/ui";

const featured = projects.filter((p) => p.highlight);

export default function Projects() {
  return (
    <section
      id="projects"
      data-snap-section
      className="flex h-screen flex-col justify-center border-t border-slate-800 bg-slate-950 px-8 py-16 md:px-16"
      style={{ scrollSnapAlign: "start" }}
    >
      <motion.div {...SECTION_REVEAL} className="mx-auto w-full max-w-5xl">
        {/* Header row */}
        <div className="mb-0 flex items-end justify-between">
          <div>
            <p className="mb-1 text-[80px] font-black leading-none tracking-tighter text-slate-900 select-none">
              03
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
              Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="mb-1 inline-flex items-center gap-1.5 border border-accent-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent-600 transition-colors hover:bg-accent-600 hover:text-slate-950"
          >
            See all →
          </Link>
        </div>

        {/* Column labels */}
        <div className="mt-6 grid grid-cols-[48px_1fr_200px_140px] gap-4 border-b border-slate-800 pb-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500">
          <span>#</span>
          <span>Project</span>
          <span className="hidden md:block">Description</span>
          <span className="hidden md:block">Stack</span>
        </div>

        {/* Project rows */}
        {featured.map((project, i) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="group grid grid-cols-[48px_1fr] gap-4 border-b border-slate-800 py-5 transition-colors md:grid-cols-[48px_1fr_200px_140px]"
          >
            <span className="pt-0.5 text-xs font-medium tabular-nums text-slate-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-100 transition-colors group-hover:text-accent-600 md:text-xl">
                {project.title}
              </p>
              <p className="mt-0.5 text-xs text-slate-400 md:hidden">
                {project.tagline ?? project.shortDesc}
              </p>
            </div>
            <p className="hidden self-center text-xs leading-relaxed text-slate-400 md:block">
              {project.tagline ?? project.shortDesc}
            </p>
            <div className="hidden self-center md:flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="border border-slate-800 px-2 py-0.5 text-[10px] text-slate-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}

        <div className="mt-6 md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 border border-accent-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent-600 transition-colors hover:bg-accent-600 hover:text-slate-950"
          >
            See all projects →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
