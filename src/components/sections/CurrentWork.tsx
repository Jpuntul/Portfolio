import { Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/portfolio";

const velosim = projects.find((p) => p.slug === "velosim");

export default function CurrentWork() {
  if (!velosim) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-accent-100/40 blur-2xl dark:bg-accent-500/10" />

      <div className="relative">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-700 dark:text-accent-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          Currently working on
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {velosim.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {velosim.tagline}
        </p>

        <ul className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
          {velosim.impact?.slice(0, 3).map((point) => (
            <li key={point} className="flex items-start gap-2">
              <Activity className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-600 dark:text-accent-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {velosim.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${velosim.slug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-700 hover:text-accent-800 dark:text-accent-300 dark:hover:text-accent-200"
        >
          Read case study <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
