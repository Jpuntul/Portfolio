// src/pages/Home.jsx - Using standard Tailwind classes + custom CSS
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaCode, FaGraduationCap, FaHeart, FaLeaf, FaMountain } from 'react-icons/fa'

const Home = () => {
  const [text, setText] = useState('')
  const fullText = "Software Engineering Student"

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  // Sample data (inline for simplicity)
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.",
      image: "/images/projects/project1-screenshot.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://your-ecommerce-demo.netlify.app",
      category: "web"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "React Native mobile app for task management with offline support and real-time synchronization.",
      image: "/images/projects/project2-screenshot.png",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "https://github.com/yourusername/task-management-app",
      demo: null,
      category: "mobile"
    },
    {
      id: 3,
      title: "Weather ML Model",
      description: "Machine learning model for weather prediction using historical data and neural networks.",
      image: "/images/projects/project3-screenshot.png",
      technologies: ["Python", "TensorFlow", "Pandas"],
      github: "https://github.com/yourusername/weather-ml-model",
      demo: "https://weather-ml-demo.streamlit.app",
      category: "ai/ml"
    }
  ]

  const skills = {
    "Programming Languages": [
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "TypeScript", level: 70 }
    ],
    "Frontend": [
      { name: "React", level: 80 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Vue.js", level: 70 }
    ],
    "Backend": [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "SQL", level: 80 },
      { name: "Django", level: 75 },
    ]
  }

  return (
    <div>
      {/* Custom Styles */}
      <style jsx>{`
        .forest-gradient {
          background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);
        }
        .nature-gradient {
          background: linear-gradient(135deg, #22c55e 0%, #0ea5e9 50%, #0369a1 100%);
        }
        .mountain-gradient {
          background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
        }
        .waterfall-gradient {
          background: linear-gradient(135deg, #64748b 0%, #334155 100%);
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        .float-slow {
          animation: float 4s ease-in-out infinite;
        }
        .float-fast {
          animation: float 2s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }
        @keyframes slideInRight {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .forest-text { color: #15803d; }
        .forest-bg { background-color: #dcfce7; }
        .forest-bg-dark { background-color: #22c55e; }
        .mountain-text { color: #0369a1; }
        .mountain-bg { background-color: #e0f2fe; }
        .mountain-bg-dark { background-color: #0ea5e9; }
        .waterfall-text { color: #334155; }
        .waterfall-bg { background-color: #f1f5f9; }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center nature-gradient relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full float-animation"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full float-slow"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full float-fast"></div>
          <div className="absolute top-32 right-1/3 w-40 h-40 bg-white/5 rounded-full float-animation"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="fade-in">
            <img 
              src="/images/profile.jpg" 
              alt="Profile" 
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white/30 shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Jutipong Puntuleng
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 h-12">
              {text}<span className="animate-pulse">|</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through clean code and modern technologies. 
              Currently pursuing Software Engineering with a focus on full-stack development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#projects" 
                className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </a>
              <a 
                href="/resume.pdf" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
            
            <div className="flex gap-6 justify-center">
              <a 
                href="https://github.com/Jpuntul" 
                className="text-2xl hover:text-blue-300 transition-colors transform hover:scale-110 duration-300"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/jpuntul/" 
                className="text-2xl hover:text-blue-300 transition-colors transform hover:scale-110 duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate software engineering student with a love for creating innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 slide-in-left">
              <p className="text-gray-600 leading-relaxed">
                Hello! I'm Jutipong, a passionate Software Engineering student at Concordia University. 
                I started my programming journey about 3 years ago and have been fascinated by 
                the world of software development ever since.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What drives me is the endless possibility to create solutions that can impact people's lives. 
                I'm excited about the potential to build applications that make a difference, 
                and I find joy in learning how to turn ideas into reality through code.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm particularly interested in full-stack development, machine learning, and 
                cloud computing. As a relatively new developer, I'm constantly learning 
                and working on projects to build my skills and experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 slide-in-right">
              <div className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <FaCode className="text-3xl text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Clean Code</h3>
                <p className="text-gray-600 text-sm">Writing maintainable, efficient code</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <FaGraduationCap className="text-3xl text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Always Learning</h3>
                <p className="text-gray-600 text-sm">Exploring new technologies daily</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <FaLeaf className="text-3xl text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Sustainable Tech</h3>
                <p className="text-gray-600 text-sm">Building for a better future</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <FaMountain className="text-3xl text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Problem Solver</h3>
                <p className="text-gray-600 text-sm">Tackling complex challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my skills in various technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span 
                        key={tech}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors font-medium"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <FaEnvelope className="text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <a href="mailto:p.jutipong13@gmail.com" className="text-green-600 hover:text-green-700 transition-colors">
                p.jutipong13@gmail.com
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <FaPhone className="text-blue-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <a href="tel:+15145855823" className="text-blue-600 hover:text-blue-700 transition-colors">
                (514) 585-5823
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-gray-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                <FaMapMarkerAlt className="text-gray-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <span className="text-gray-600">Montreal, QC, CA</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="mailto:p.jutipong13@gmail.com"
              className="mountain-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-105 shadow-lg"
            >
              <FaEnvelope /> Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="waterfall-gradient text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl font-bold text-green-400">Jutipong</span>
              <span className="text-2xl font-bold text-blue-400">Puntuleng</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
             Software Engineering student at Concordia University creating innovative solutions.
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://github.com/Jpuntul"
                className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jpuntul/"
                className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:p.jutipong13@gmail.com"
                className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
              Made with <FaHeart className="text-red-400" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home