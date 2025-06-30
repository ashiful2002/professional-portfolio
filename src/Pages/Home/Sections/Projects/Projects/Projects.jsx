// src/pages/Projects.jsx
import projects from "../ProjectsData";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 rounded-2xl my-2 shadow-2xl"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
