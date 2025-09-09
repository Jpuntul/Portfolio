import { skills } from '../../data/portfolio'

const Skills = () => {
  return (
    <>
      <style jsx>{`
        .forest-gradient {
          background: linear-gradient(to right, #22c55e, #0ea5e9);
        }
      `}</style>

      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies I work with and my proficiency levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div 
                key={category} 
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{animationDelay: `${categoryIndex * 0.2}s`}}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">{category}</h3>
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill.name} style={{animationDelay: `${(categoryIndex * skillList.length + skillIndex) * 0.1}s`}}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="forest-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills