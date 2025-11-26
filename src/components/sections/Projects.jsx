import { Link } from "react-router-dom";
import { projects } from "../../data/portfolio";
import ProjectCard from "../ProjectCard";

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
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  variant="featured"
                />
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
