import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";
import { SECTION_REVEAL } from "../../constants/ui";

const facts = [
  { label: "Location", value: personalInfo.location },
  { label: "Citizenship", value: personalInfo.citizenship },
  {
    label: "University",
    value: `${personalInfo.university} B.Eng. ${personalInfo.graduated}`,
  },
  { label: "Available", value: "August 2026", gold: true },
  { label: "Focus", value: "Backend-leaning full-stack" },
  { label: "Languages", value: "Thai · English" },
];

export default function About() {
  return (
    <section
      id="about"
      data-snap-section
      className="flex h-screen flex-col justify-center border-t border-slate-800 bg-slate-950"
      style={{ scrollSnapAlign: "start" }}
    >
      <motion.div
        {...SECTION_REVEAL}
        className="grid h-full grid-cols-1 lg:grid-cols-2"
      >
        {/* Left */}
        <div className="flex flex-col justify-center border-b border-slate-800 px-8 py-16 lg:border-b-0 lg:border-r lg:px-16">
          <p className="mb-1 text-[80px] font-black leading-none tracking-tighter text-slate-900 select-none">
            01
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
            About
          </h2>
          <p className="max-w-md text-base leading-relaxed text-slate-400">
            Full-stack engineer focused on backend systems, real-time
            architecture, and developer tooling. Ships clean code across the
            stack — from database schema to React UI.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
            Strongest work: Healthcare Management System (447+ patients, 75%
            query speedup), Hand-in-Hand real-time charity auction on Firestore,
            and the SOEN-390 Flutter campus navigation capstone.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}Jutipong_Puntuleng_resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500 transition-colors hover:text-accent-600"
          >
            Résumé (PDF) →
          </a>
        </div>

        {/* Right — fact grid */}
        <div className="grid grid-cols-2 content-center gap-0 px-8 py-10 lg:px-16">
          {facts.map(({ label, value, gold }) => (
            <div
              key={label}
              className="border-b border-r border-slate-800 px-4 py-5 nth-[2n]:border-r-0"
            >
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {label}
              </p>
              <p
                className={`text-sm font-semibold leading-snug ${gold ? "text-accent-600" : "text-slate-200"}`}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
