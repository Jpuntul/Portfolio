// src/pages/About.jsx
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
  FaDownload,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolio";

const About = () => {
  const background = [
    {
      icon: FaGraduationCap,
      title: "Education",
      items: [
        `B.Eng. Software Engineering, ${personalInfo.university}`,
        `Graduated ${personalInfo.graduated}`,
        "Coursework: Data Structures, Databases, OS, Cloud Computing, Distributed Systems",
        "Capstone: SOEN-390 campus navigation mobile app",
      ],
    },
    {
      icon: FaCode,
      title: "Where I've Shipped",
      items: [
        "Full-stack healthcare platform (Django + React, 447 patients / 303 staff)",
        "Real-time charity auction platform on Firebase Firestore",
        "Open-source bike network simulator with BIXI Montréal (ongoing)",
      ],
    },
    {
      icon: FaBook,
      title: "How I Work",
      items: [
        "Test-driven, code-reviewed Agile sprints (currently weekly on VeloSim)",
        "Strict CI gates: typecheck, lint, tests, pre-commit hooks",
        "REST API design + clean architecture as default habits",
      ],
    },
  ];

  const currentFocus = [
    "Real-time systems and WebSocket-driven data streaming",
    "Distributed systems and schema design",
    "REST API design and clean backend architecture",
    "CI/CD automation and pre-commit quality gates",
    "Performance: query optimization, indexing, caching",
  ];

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="pt-40 pb-20 hero-gradient">
          <div className="container mx-auto px-6 text-center fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">
              More About Me
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              I just graduated from {personalInfo.university}&rsquo;s Software
              Engineering program ({personalInfo.graduated}) and I&rsquo;m
              available for full-time roles from July {personalInfo.graduated}.
              Below: how I work, what I&rsquo;ve shipped, and what I&rsquo;m
              focused on right now.
            </p>
          </div>
        </section>

        {/* Educational Background & Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                My Background & Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                How I've built my foundation in software engineering through
                hands-on projects and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
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
                      <li
                        key={itemIndex}
                        className="text-gray-600 text-sm flex items-start gap-2 text-left"
                      >
                        <span className="text-green-500 mt-1 flex-shrink-0">
                          •
                        </span>
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
                Current technologies and concepts I'm actively studying and
                implementing in projects.
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
  );
};

export default About;
