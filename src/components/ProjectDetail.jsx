import React from "react";

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl border border-gray-200 p-0 sm:p-8 relative overflow-y-auto max-h-[90vh] text-left transition-all duration-300">
        <button
          className="absolute top-4 right-4 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200 border border-gray-200"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="text-2xl font-bold">&times;</span>
        </button>
        <div className="w-full h-56 rounded-t-3xl overflow-hidden mb-6 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-t-3xl" />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-left text-gray-900 drop-shadow-sm">
          {project.title}
        </h2>
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            {project.category}
          </span>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium shadow-sm ${project.status === "Completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}
          >
            {project.status}
          </span>
        </div>
        <div className="mb-6 text-left">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Description
          </h3>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="mb-6 text-left">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.features && project.features.length > 0 && (
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 pl-4">
              {project.features.map((f) => (
                <li key={f} className="mb-1">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex gap-4 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors shadow-sm"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
