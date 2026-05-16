import { motion } from "framer-motion";
import { Download, GraduationCap, Languages, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";

const timeline = [
  {
    period: `${personalInfo.graduated}`,
    title: "Graduated · B.Eng. Software Engineering",
    place: `${personalInfo.university}, Montréal`,
    body: "Coursework in data structures, databases, OS, cloud computing, distributed systems. Capstone: SOEN-390 campus navigation Flutter app.",
  },
  {
    period: "2025 – present",
    title: "VeloSim · Open-source contributor",
    place: "BIXI Montréal + Concordia",
    body: "11-person Agile team. WebSocket-driven live updates, schema migrations, unit tests, code reviews on every PR. Python + React + PostgreSQL.",
  },
  {
    period: "2024",
    title: "Hand-in-Hand Auction · Sole developer",
    place: "Charity event, end-to-end ship",
    body: "Built and shipped a real-time bidding platform on React + Firebase Firestore for an in-person charity event. Admin CRUD, image gallery, live bid sync.",
  },
  {
    period: "2024",
    title: "Healthcare Management System · Full-stack",
    place: "Coursework + capstone-level project",
    body: "Django REST + React/TypeScript + MySQL. 447 patients, 303 staff, 11+ facilities, 30+ endpoints, 75% query speedup via indexing/caching/schema redesign.",
  },
];

const currentFocus = [
  "Real-time systems and WebSocket-driven data streaming",
  "Distributed systems and schema design",
  "REST API design and clean backend architecture",
  "CI/CD automation and pre-commit quality gates",
  "Performance: query optimization, indexing, caching",
];

export default function About() {
  usePageMeta({
    title: "About · Jutipong Puntuleng",
    description:
      "How I got here, what I'm working on next. Concordia '26, available from July 2026.",
  });
  return (
    <main id="main">
      <section className="relative isolate overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[40vh] bg-gradient-to-b from-accent-50/60 to-transparent dark:from-accent-900/10" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl px-6"
        >
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-wider text-accent-700 dark:text-accent-400">
            About me
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            How I got here, what I&rsquo;m working on next.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            I just graduated from {personalInfo.university}&rsquo;s Software
            Engineering program ({personalInfo.graduated}) and I&rsquo;m
            available for full-time roles from July {personalInfo.graduated}.
            Below: how I work, what I&rsquo;ve shipped, and what I&rsquo;m
            focused on right now.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent-600 dark:text-accent-400" />
              {personalInfo.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-accent-600 dark:text-accent-400" />
              {personalInfo.university}, &rsquo;
              {personalInfo.graduated.slice(-2)}
            </span>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-300"
          >
            <Download className="h-4 w-4" /> Resume (PDF)
          </a>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-2xl font-semibold text-slate-900 dark:text-white">
            Timeline
          </h2>
          <ol className="space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
            {timeline.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[31px] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent-500 dark:border-slate-950" />
                <p className="font-mono text-xs uppercase tracking-wider text-accent-700 dark:text-accent-400">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.place}
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-3xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              What I&rsquo;m focused on now
            </h2>
            <ul className="mt-6 space-y-2">
              {currentFocus.map((focus) => (
                <li
                  key={focus}
                  className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                  {focus}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-900 dark:text-white">
              <Languages className="h-5 w-5 text-accent-600 dark:text-accent-400" />
              Languages
            </h2>
            <ul className="mt-6 space-y-2">
              {personalInfo.languagesSpoken.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2 dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="font-medium text-slate-900 dark:text-white">
                    {lang.name}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
