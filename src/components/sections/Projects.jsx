import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../../data/portfolio";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in various
            technologies.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-8 min-w-[320px]">
            {projects
              .filter((p) => p.highlight)
              .map((project, index) => (
                <div
                  key={project.id}
                  className="min-w-[320px] max-w-xs h-[430px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 flex flex-col"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative group">
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
                      {project.role && (
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase mb-1 tracking-wide">
                          {project.role}
                        </span>
                      )}
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category.split(",")[0].trim()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-left text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-left text-gray-600 mb-4">
                      {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
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
      </div>
      {/* View All Projects Button */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/projects"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
