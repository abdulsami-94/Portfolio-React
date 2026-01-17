import { Link } from "react-router-dom";
import { projects } from "./ProjectsData.jsx";

function Projects() {

        return (
            <div className="projects">
                <h2>Projects Lists</h2>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <Link to={`/projects/${project.id}`}>{project.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );  
}

export default Projects;