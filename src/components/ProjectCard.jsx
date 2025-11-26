import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  project,
  index,
  variant = "grid",
  onCardClick = null,
}) => {
  const baseClasses =
    "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col";

  const variantClasses = {
    grid: "stagger-in h-full cursor-pointer",
    featured: "min-w-[380px] max-w-md h-[430px] flex-shrink-0",
  };

  const animationDelay = variant === "featured" ? index * 0.2 : index * 0.1;

  // Render project links based on privacy and variant
  const renderLinks = (linkVariant = "default") => {
    if (project.private) {
      if (linkVariant === "hover") {
        return (
          <span className="bg-white/20 p-2 rounded-full text-white/90">
            🔒 Private
          </span>
        );
      }
      return (
        <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
          🔒 Private
        </span>
      );
    }

    if (linkVariant === "hover") {
      return (
        <>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </>
      );
    }

    return (
      <>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </>
    );
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]}`}
      style={{ animationDelay: `${animationDelay}s` }}
      onClick={onCardClick}
    >
      {/* Project Image */}
      <div className="relative group">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
          {/* Role badge */}
          {project.role && (
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase mb-1 tracking-wide">
              {project.role}
            </span>
          )}
          {/* Category badge */}
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
            {project.category.split(",")[0].trim()}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
        {/* Hover Overlay - only show on grid variant */}
        {variant === "grid" && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-lg font-semibold mb-2">View Project</p>
              <div className="flex gap-4 justify-center">
                {renderLinks("hover")}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow">
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3
              className={`font-semibold text-gray-800 ${
                variant === "featured" ? "text-left text-xl mb-2" : "text-xl"
              }`}
            >
              {project.title}
            </h3>
            {variant === "grid" && project.year && (
              <span className="text-sm text-gray-500">{project.year}</span>
            )}
          </div>
          <p
            className={`text-left text-gray-600 mb-4 ${
              variant === "grid" ? "line-clamp-3" : ""
            }`}
          >
            {project.shortDesc}
          </p>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies
              .slice(0, variant === "featured" ? 3 : 4)
              .map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            {variant === "grid" && project.technologies.length > 4 && (
              <span className="text-gray-500 text-sm self-center">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Project Links - always at the bottom */}
        <div
          className={
            variant === "featured" ? "p-6 pt-0 mt-auto" : "px-6 pb-6 mt-auto"
          }
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">{renderLinks()}</div>
            {variant === "grid" && project.status && (
              <span
                className={`text-sm px-2 py-1 rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status === "Completed" ? "Completed" : "Ongoing"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
