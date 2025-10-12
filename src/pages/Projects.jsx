// src/pages/Projects.jsx
import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaFilter, FaSearch } from 'react-icons/fa'
import { projects } from '../data/portfolio'

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['all', 'web', 'mobile', 'ai/ml', 'desktop']

  // Filter and search functionality
  useEffect(() => {
    let filtered = projects

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredProjects(filtered)
  }, [activeFilter, searchTerm])

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="pt-40 pb-20 hero-gradient">
          <div className="container mx-auto px-6 text-center fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my software development projects, 
              demonstrating my skills across different technologies and domains.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={() => {
                    setActiveFilter('all')
                    setSearchTerm('')
                  }}
                  className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 stagger-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Project Image */}
                    <div className="relative group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                          {project.category}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                          <p className="text-lg font-semibold mb-2">View Project</p>
                          <div className="flex gap-4 justify-center">
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                            >
                              <FaGithub />
                            </a>
                            {project.demo && (
                              <a 
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                              >
                                <FaExternalLinkAlt />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map(tech => (
                          <span 
                            key={tech}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-gray-500 text-sm self-center">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                      
                      {/* Project Links */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors font-medium"
                          >
                            <FaGithub /> Code
                          </a>
                          {project.demo && (
                            <a 
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                            >
                              <FaExternalLinkAlt /> Demo
                            </a>
                          )}
                        </div>
                        {project.status && (
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            project.status === 'completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects