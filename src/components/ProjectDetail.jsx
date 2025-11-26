import React, { useEffect, useRef } from "react";

const ProjectDetail = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl border border-gray-200 p-0 sm:p-8 relative overflow-y-auto max-h-[90vh] text-left transition-all duration-300"
      >
        <button
          className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200 border border-gray-200"
          onClick={onClose}
          aria-label="Close"
        >
          <span className="text-2xl font-bold">×</span>
        </button>
        <div className="w-full h-56 rounded-t-3xl overflow-hidden mb-6 relative">
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
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
            {project.category.split(",")[0].trim()}
          </span>
          {project.role && (
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm">
              {project.role}
            </span>
          )}
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
              project.status === "Completed"
                ? "bg-green-200 text-green-800"
                : "bg-yellow-200 text-yellow-800"
            }`}
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
            <ul className="list-disc pl-6 text-gray-700">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex gap-4 mt-6">
          {project.private ? (
            <div className="inline-flex items-center gap-2">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-semibold">
                🔒 Private — contact for access
              </span>
            </div>
          ) : (
            <>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#24292f] hover:bg-[#33383f] text-white font-semibold px-4 py-2 rounded-full shadow border border-[#24292f] transition-colors flex items-center gap-2"
                >
                  <svg
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="inline-block align-middle"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full shadow border border-gray-200 transition-colors"
                >
                  Live Demo
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
