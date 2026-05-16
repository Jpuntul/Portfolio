import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";
import CurrentWork from "./CurrentWork";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[60vh] bg-gradient-to-b from-accent-50/60 to-transparent dark:from-accent-900/10" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="lg:col-span-3"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="font-mono text-sm font-medium text-accent-700 dark:text-accent-300"
          >
            {personalInfo.availability}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="mt-3 text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-300"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {personalInfo.headline} B.Eng. Software Engineering,{" "}
            {personalInfo.university} ({personalInfo.graduated}).{" "}
            {personalInfo.citizenship}, based in Montréal.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-accent-700"
            >
              View projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-300"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="mt-6 flex items-center gap-4 text-slate-600 dark:text-slate-400"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-accent-700 dark:hover:text-accent-300"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent-700 dark:hover:text-accent-300"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="transition-colors hover:text-accent-700 dark:hover:text-accent-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <CurrentWork />
        </motion.div>
      </div>
    </section>
  );
}
