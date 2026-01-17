import { useParams } from "react-router-dom";
import { projects } from "./data/ProjectsData";

function ProjectDetails() {

    const { id } = useParams();

    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return <p>Project not found</p>;
    }

    return (

        <div className="projectDetails">
            <h2>{project.title}</h2>
            <p>{project.title}</p>
            <p>{project.description}</p>

            <p>Tech Stack:</p>
            <ul>
                {project.tech.map(t => <li key={t}>{t}</li>)}
            </ul>

            <a href={project.link}>GitHub</a>
        </div>
    );
}

export default ProjectDetails;