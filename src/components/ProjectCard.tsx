import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../data/portfolio";

interface Props {
  project: Project;
  variant?: "grid" | "featured";
}

export default function ProjectCard({ project, variant = "grid" }: Props) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-accent-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent-400 ${
        isFeatured ? "h-full" : ""
      }`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800"
        aria-label={`View ${project.title} case study`}
      >
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.status === "Ongoing" && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-amber-500/95 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Ongoing
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-accent-700 dark:text-accent-400">
            {project.role}
          </span>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-accent-700 dark:text-white dark:group-hover:text-accent-300">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {project.tagline ?? project.shortDesc}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="self-center font-mono text-[11px] text-slate-500 dark:text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent-700 hover:text-accent-800 dark:text-accent-300 dark:hover:text-accent-200"
          >
            Case study <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            {project.private ? (
              <span
                className="inline-flex items-center gap-1 text-xs"
                title={project.privateNote ?? "Private repository"}
              >
                <Lock className="h-3.5 w-3.5" /> Private
              </span>
            ) : (
              <>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${project.title} on GitHub`}
                    className="hover:text-accent-700 dark:hover:text-accent-300"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${project.title} live demo`}
                    className="hover:text-accent-700 dark:hover:text-accent-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
