import { motion } from "framer-motion";
import { SECTION_REVEAL } from "../../constants/ui";

const timeline = [
  {
    period: "Jan 2025 – Apr 2025",
    title: "Campus Navigation App · Flutter",
    place: "Concordia University (9-person capstone)",
  },
  {
    period: "May 2025 – May 2026",
    title: "Business Development & Consultant Intern · San Fun Group",
    place: "Hand-in-Hand auction rebuild + Vanasin Residence site",
  },
  {
    period: "June 2025 – Present",
    title: "Healthcare Management System · Full-stack",
    place: "Course project (team, complete) → personal rewrite",
  },
  {
    period: "Sep 2025 – Apr 2026",
    title: "VeloSim · Frontend engineer",
    place: "BIXI Montréal + Concordia (11-person team)",
  },
  {
    period: "May 2026",
    title: "Graduated · B.Eng. Software Engineering",
    place: "Concordia University, Montréal",
  },
  {
    period: "Jun 2026 – Jul 2026",
    title: "Business Development & Consultant · San Fun Group",
    place: "Automation workflows (Zapier, Make.com, n8n) + internal AI tooling",
  },
  {
    period: "Aug 2026 – Present",
    title: "IT & Systems · San Fun Group",
    place: "Ongoing IT support and troubleshooting",
  },
  {
    period: "Aug 2026 – Present",
    title: "Digital Transformation Consultant · Independent, with Teeraporn",
    place: "Healthcare digital-transformation advisory engagement",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      data-snap-section
      className="flex h-screen flex-col justify-center border-t border-slate-800 bg-slate-950 px-8 py-16 md:px-16"
      style={{ scrollSnapAlign: "start" }}
    >
      <motion.div {...SECTION_REVEAL} className="mx-auto w-full max-w-5xl">
        <p className="mb-1 text-[80px] font-black leading-none tracking-tighter text-slate-900 select-none">
          02
        </p>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
          Experience
        </h2>

        <ol className="divide-y divide-slate-800 border-t border-slate-800">
          {timeline.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-1 gap-1 py-4 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent-600">
                {item.period}
              </p>
              <p className="text-sm font-semibold text-slate-100 md:text-base">
                {item.title}
              </p>
              <p className="text-xs text-slate-500 md:text-right">
                {item.place}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
