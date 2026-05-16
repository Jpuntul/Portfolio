import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 bg-white py-20 md:py-28 dark:border-slate-800 dark:bg-slate-950"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-wider text-accent-700 dark:text-accent-400">
            About
          </p>
          <h2
            id="about-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            Engineer, not a tinkerer
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Real shipped systems, defensible metrics, tests that mean something.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-700 hover:text-accent-800 dark:text-accent-300 dark:hover:text-accent-200"
          >
            Read more <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 lg:col-span-3"
        >
          <p className="text-slate-700 dark:text-slate-300">
            Hi, I&rsquo;m Jutipong. I just graduated from{" "}
            {personalInfo.university}&rsquo;s Software Engineering program (
            {personalInfo.graduated}) and I&rsquo;m available for full-time
            roles from July {personalInfo.graduated}.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            I lean backend &mdash; REST API design, schema and query
            optimization, real-time data &mdash; but I ship the frontend too. My
            favourite work right now is contributing to{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              VeloSim
            </span>
            , an open-source bike-network simulator built with BIXI
            Montr&eacute;al that uses WebSocket-driven live updates over a
            Python + React stack.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            Strongest projects:{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              Healthcare Management System
            </span>{" "}
            (447 patients, 303 staff, 11+ facilities, 30+ endpoints, 75% query
            speedup),{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              Hand-in-Hand Auction
            </span>{" "}
            (real-time charity bidding on Firestore), and the{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              SOEN-390 Campus Navigation
            </span>{" "}
            Flutter app (95% location accuracy, 30% faster routing).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
