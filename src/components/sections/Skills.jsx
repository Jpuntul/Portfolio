import { skills } from "../../data/portfolio";

const Skills = () => {
  return (
    <>
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies I work with, grouped by experience level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(
              ([category, skillList], categoryIndex) => (
                <div
                  key={category}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {skillList.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span
                          className={
                            `px-2 py-0.5 rounded-full border text-xs font-semibold ` +
                            (skill.experience === "Proficient"
                              ? "bg-green-100 border-green-300 text-green-700"
                              : skill.experience === "Experienced"
                                ? "bg-blue-100 border-blue-300 text-blue-700"
                                : "bg-gray-100 border-gray-300 text-gray-600")
                          }
                        >
                          {skill.experience}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
