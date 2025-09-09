// src/pages/About.jsx
import { FaGraduationCap, FaCode, FaLaptopCode, FaLightbulb, FaRocket, FaDownload, FaMapMarkerAlt, FaCalendarAlt, FaBook, FaUsers } from 'react-icons/fa'
import { personalInfo } from '../data/portfolio'

const About = () => {
  const background = [
    {
      icon: FaGraduationCap,
      title: "Education",
      items: [
        "Software Engineering at Concordia University",
        "Focus on full-stack development and algorithms",
        "Strong academic performance in core courses"
      ]
    },
    {
      icon: FaCode,
      title: "Technical Growth",
      items: [
        "3 years of hands-on programming experience",
        "Built multiple full-stack applications",
        "Continuously expanding skillset through practice"
      ]
    },
    {
      icon: FaBook,
      title: "Learning Style",
      items: [
        "Hands-on project-based learning",
        "Building real applications to understand concepts",
        "Combining theory with practical implementation"
      ]
    }
  ]

  const currentFocus = [
    "Advanced React patterns and state management",
    "Machine Learning with Python and TensorFlow", 
    "AWS Cloud Services and serverless architecture",
    "Database design and optimization",
    "DevOps practices and CI/CD pipelines"
  ]

  return (
    <>
      <style jsx>{`
        .nature-gradient {
          background: linear-gradient(135deg, #22c55e 0%, #0ea5e9 50%, #0369a1 100%);
        }
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div>
        {/* Hero Section */}
        <section className="pt-40 pb-20 nature-gradient">
          <div className="container mx-auto px-6 text-center">
            <div className="fade-in">
              <h1 className="text-5xl font-bold text-white mb-6">
                More About Me
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Deep dive into my educational background, learning approach, 
                and what I'm currently focused on in my software engineering journey.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Background & Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                My Background & Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                How I've built my foundation in software engineering over the past {personalInfo.yearsOfExperience} years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {background.map((section, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-green-500 text-3xl mb-6 flex justify-center">
                    <section.icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-sm flex items-start gap-2 text-left">
                        <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Learning Focus */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What I'm Learning Right Now
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Current technologies and concepts I'm actively studying and implementing in projects.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentFocus.map((focus, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About