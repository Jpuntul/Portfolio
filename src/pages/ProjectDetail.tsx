import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolio";
import NotFound from "./NotFound";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  usePageMeta({
    title: project
      ? `${project.title} · Jutipong Puntuleng`
      : "Project not found",
    description: project?.tagline ?? project?.shortDesc,
  });

  if (!project) return <NotFound />;

  return (
    <main id="main">
      <section className="relative isolate overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[40vh] bg-gradient-to-b from-accent-50/60 to-transparent dark:from-accent-900/10" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl px-6"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-accent-700 dark:text-slate-300 dark:hover:text-accent-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {project.role}
            </span>
            <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {project.category}
            </span>
            <span
              className={`rounded border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider ${
                project.status === "Completed"
                  ? "border-accent-200 bg-accent-50 text-accent-700 dark:border-accent-700 dark:bg-accent-900/30 dark:text-accent-300"
                  : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
              {project.tagline}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {project.private ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                <Lock className="h-4 w-4" />
                {project.privateNote ?? "Private repository"}
              </span>
            ) : (
              <>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                  >
                    <FaGithub className="h-4 w-4" /> Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-medium text-white hover:bg-accent-700"
                  >
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                )}
              </>
            )}
          </div>
        </motion.div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-3xl px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
            <img
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={`${project.title} screenshot`}
              className="w-full"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-12 px-6 py-12">
        {project.problem && (
          <Section heading="Problem">
            <p>{project.problem}</p>
          </Section>
        )}

        {project.solution && (
          <Section heading="Solution">
            <p>{project.solution}</p>
          </Section>
        )}

        {project.architecture && project.architecture.length > 0 && (
          <Section heading="Architecture">
            <ul className="space-y-2">
              {project.architecture.map((line) => (
                <li
                  key={line}
                  className="flex gap-2 font-mono text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="text-accent-600 dark:text-accent-400">
                    ›
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.impact && project.impact.length > 0 && (
          <Section heading="Impact">
            <ul className="space-y-2">
              {project.impact.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                  {line}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.myRole && (
          <Section heading="My role">
            <p>{project.myRole}</p>
          </Section>
        )}

        <Section heading="Tech stack">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        {project.description && (
          <Section heading="Full description">
            <p className="whitespace-pre-line">{project.description}</p>
          </Section>
        )}
      </article>
    </main>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent-700 dark:text-accent-400">
        {heading}
      </h2>
      <div className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </section>
  );
}
