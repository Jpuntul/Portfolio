import { personalInfo } from "../../data/portfolio";

const facts = [
  { label: "Location", value: personalInfo.location },
  { label: "Citizenship", value: personalInfo.citizenship },
  {
    label: "University",
    value: `${personalInfo.university} B.Eng. ${personalInfo.graduated}`,
  },
  { label: "Open to", value: "Remote · Bangkok", gold: true },
  { label: "Focus", value: "Backend-leaning full-stack" },
  {
    label: "Languages",
    value: personalInfo.languagesSpoken.map((l) => l.name).join(" · "),
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-snap-section
      className="snap-start flex min-h-dvh flex-col justify-center border-t border-slate-800 bg-slate-950"
    >
      <div
        data-reveal
        className="grid w-full flex-1 grid-cols-1 lg:grid-cols-2"
      >
        {/* Left */}
        <div className="flex flex-col justify-center border-b border-slate-800 px-8 pb-16 pt-24 lg:border-b-0 lg:border-r lg:px-16 lg:py-16">
          <p
            className="mb-1 text-[80px] font-bold leading-none tracking-tighter text-slate-900 select-none"
            aria-hidden="true"
          >
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
            Strongest work: Hand-in-Hand, a live charity-auction platform
            shipped under a one-week deadline and rewritten twice; VeloSim, a
            bike-network simulator built with BIXI Montréal; and a healthcare
            platform rebuilt from PHP to Django REST + React.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}Jutipong_Puntuleng_resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-400 transition-colors hover:text-accent-600"
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
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
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
      </div>
    </section>
  );
}
