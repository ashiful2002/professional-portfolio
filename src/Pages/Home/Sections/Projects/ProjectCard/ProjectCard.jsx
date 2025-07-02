// src/components/ProjectCard.jsx
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-600 rounded-xl shadow-md overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="text-sm mt-2">{project.description}</p>
        <Link
          to={`/projects/${project.id}`}
          className="inline-block mt-4 text-blue-600 font-semibold"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
