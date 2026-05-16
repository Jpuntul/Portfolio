import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      className="border-t border-slate-200 bg-white py-20 md:py-28 dark:border-slate-800 dark:bg-slate-900"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-wider text-accent-700 dark:text-accent-400">
            Stack
          </p>
          <h2
            id="skills-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            What I work with
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Grouped by category. Levels are honest — &ldquo;Proficient&rdquo;
            means I&rsquo;ve shipped non-trivial code; &ldquo;Experienced&rdquo;
            means I&rsquo;ve used it in real projects; &ldquo;Familiar&rdquo;
            means coursework or focused exploration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <SkillLevelBadge level={skill.experience} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillLevelBadge({
  level,
}: {
  level: "Proficient" | "Experienced" | "Familiar";
}) {
  const dots = level === "Proficient" ? 3 : level === "Experienced" ? 2 : 1;
  return (
    <span className="flex items-center gap-1" aria-label={level} title={level}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < dots ? "bg-accent-500" : "bg-slate-300 dark:bg-slate-700"
          }`}
        />
      ))}
      <span className="ml-1 font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {level}
      </span>
    </span>
  );
}
