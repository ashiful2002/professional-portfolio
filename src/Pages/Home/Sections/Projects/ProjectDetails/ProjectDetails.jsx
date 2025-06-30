// src/pages/ProjectDetail.jsx
import { useParams } from "react-router";
import projects from "../ProjectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="container mx-auto py-10 px-4 mt-10">
      <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
      <img
        src={project.image}
        alt={project.name}
        className="w-full max-h-96 object-cover mb-6 rounded-xl"
      />
      <p className="mb-4">{project.description}</p>

      <div className="mb-4">
        <strong>Tech Stack:</strong>
        <ul className="list-disc list-inside">
          {project.tech.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>

      <p className="mb-2">
        <strong>Challenges:</strong> {project.challenges}
      </p>
      <p className="mb-2">
        <strong>Future Plans:</strong> {project.futurePlans}
      </p>

      <div className="mt-4 flex gap-6">
        <a
          href={project.liveLink}
          className="text-blue-600 font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
        <a
          href={project.githubLink}
          className="text-blue-600 font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
