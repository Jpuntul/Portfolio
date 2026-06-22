import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { skills, personalInfo } from "../../data/portfolio";
import type { SkillLevel } from "../../data/portfolio";

const SHOW = ["Languages", "Frameworks", "Databases", "Tools & Cloud"];

const levelDots: Record<SkillLevel, number> = {
  Proficient: 3,
  Experienced: 2,
  Familiar: 1,
};

export default function Skills() {
  const filtered = Object.entries(skills).filter(([cat]) => SHOW.includes(cat));

  return (
    <section
      id="skills"
      data-snap-section
      className="flex h-screen flex-col justify-center border-t border-slate-800 bg-slate-950 px-8 py-16 md:px-16"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left — stack */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-1 text-[80px] font-black leading-none tracking-tighter text-slate-900 select-none">
                03
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
                Stack
              </h2>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-5 border-b border-slate-800 pb-4">
              {(["Proficient", "Experienced", "Familiar"] as SkillLevel[]).map(
                (lvl) => (
                  <span
                    key={lvl}
                    className="flex items-center gap-1.5 text-[10px] text-slate-400"
                  >
                    <span className="flex gap-0.5">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className={`block h-1.5 w-1.5 rounded-full ${
                            i < levelDots[lvl]
                              ? "bg-accent-600"
                              : "bg-slate-800"
                          }`}
                        />
                      ))}
                    </span>
                    {lvl}
                  </span>
                ),
              )}
            </div>

            {/* Category rows */}
            <div className="space-y-4">
              {filtered.map(([category, items]) => (
                <div
                  key={category}
                  className="grid grid-cols-[96px_1fr] gap-3 items-start"
                >
                  <p className="pt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill.name}
                        className="flex items-center gap-1.5 text-[11px]"
                      >
                        <span className="flex gap-0.5">
                          {[0, 1, 2].map((i) => (
                            <span
                              key={i}
                              className={`block h-1 w-1 rounded-full ${
                                i < levelDots[skill.experience]
                                  ? "bg-accent-600"
                                  : "bg-slate-800"
                              }`}
                            />
                          ))}
                        </span>
                        <span
                          className={
                            skill.experience === "Proficient"
                              ? "text-slate-200"
                              : "text-slate-400"
                          }
                        >
                          {skill.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — contact */}
          <div className="flex flex-col justify-center border-t border-slate-800 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Get in touch
            </p>
            <p className="mb-8 text-2xl font-bold leading-tight tracking-tight text-slate-100">
              Open to full-time roles
              <br />
              <span className="text-accent-600">from August 2026.</span>
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="mb-6 inline-flex w-fit items-center gap-2 border border-accent-600 px-5 py-2.5 text-sm font-semibold text-accent-600 transition-colors hover:bg-accent-600 hover:text-slate-950"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>

            <div className="flex items-center gap-5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition-colors hover:text-accent-600"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition-colors hover:text-accent-600"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-700">
              Built with React · TypeScript · Vite · Tailwind v4
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
