// src/pages/Projects.jsx
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import CustomDropdown from "../components/CustomDropdown";
import { projects } from "../data/portfolio";
import ProjectDetail from "../components/ProjectDetail";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeStatus, setActiveStatus] = useState("all");
  const [activeRole, setActiveRole] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // Dynamically extract all unique categories from project data
  const categories = [
    "all",
    ...Array.from(
      new Set(
        projects
          .flatMap((p) => p.category.split(","))
          .map((cat) => cat.trim().toLowerCase()),
      ),
    ).sort((a, b) => a.localeCompare(b)),
  ];

  // Dynamically extract all unique roles from project data
  const roles = [
    "all",
    ...Array.from(new Set(projects.map((p) => (p.role || "").trim()))).filter(
      Boolean,
    ),
  ];

  const statusOptions = ["all", "Completed", "Ongoing"];

  // Filter and search functionality
  useEffect(() => {
    let filtered = projects;

    // Filter by category (support multiple categories per project)
    if (activeFilter !== "all") {
      filtered = filtered.filter((project) =>
        project.category
          .split(",")
          .map((cat) => cat.trim().toLowerCase())
          .includes(activeFilter.toLowerCase()),
      );
    }

    // Filter by status
    if (activeStatus !== "all") {
      filtered = filtered.filter(
        (project) =>
          (project.status || "").toLowerCase() === activeStatus.toLowerCase(),
      );
    }

    // Filter by role
    if (activeRole !== "all") {
      filtered = filtered.filter(
        (project) =>
          (project.role || "").toLowerCase() === activeRole.toLowerCase(),
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    setFilteredProjects(filtered);
  }, [activeFilter, activeStatus, activeRole, searchTerm]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleStatusChange = (status) => {
    setActiveStatus(status);
  };

  return (
    <>
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <div>
        {/* Hero Section */}
        <section className="pt-40 pb-20 hero-gradient">
          <div className="container mx-auto px-6 text-center fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my software development projects,
              demonstrating my skills across different technologies and domains.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="bg-gray-50 pt-8 pb-0">
          <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 fade-in">
            {/* Role Filter Dropdown */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <CustomDropdown
                options={roles}
                value={activeRole}
                onChange={setActiveRole}
                label="Role"
                color="purple"
              />
            </div>
            {/* Category Filter Dropdown */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <CustomDropdown
                options={categories}
                value={activeFilter}
                onChange={handleFilterChange}
                label="Category"
                color="green"
              />
            </div>
            {/* Status Filter Dropdown */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <CustomDropdown
                options={statusOptions}
                value={activeStatus}
                onChange={handleStatusChange}
                label="Status"
                color="blue"
              />
            </div>
            {/* Search Bar */}
            <div className="flex items-center gap-2 self-end md:self-end">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-full border border-gray-200 focus:ring-2 focus:ring-green-400 focus:outline-none bg-white text-gray-700 w-64 shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                  No projects found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    variant="grid"
                    onCardClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
