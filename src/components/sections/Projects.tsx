import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/portfolio";
import ProjectCard from "../ProjectCard";

const featuredProjects = projects.filter((p) => p.highlight);

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-slate-50 py-20 md:py-28 dark:border-slate-800 dark:bg-slate-950"
      aria-labelledby="featured-projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between gap-4"
        >
          <div>
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-wider text-accent-700 dark:text-accent-400">
              Featured work
            </p>
            <h2
              id="featured-projects-heading"
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
            >
              Things I&rsquo;ve built
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden items-center gap-1 text-sm font-medium text-accent-700 hover:text-accent-800 sm:inline-flex dark:text-accent-300 dark:hover:text-accent-200"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <ProjectCard project={project} variant="featured" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent-700 dark:text-accent-300"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
