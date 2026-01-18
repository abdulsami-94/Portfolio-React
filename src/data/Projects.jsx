import { Link } from "react-router-dom";
import { projects } from "./ProjectsData.jsx";

function Projects() {

        return (
            <div className="project-page">
                <h2>Projects Lists</h2>
                
                    <div className="project-grid">
                        {projects.map((project) => (

                            <div key={project.id} className="project-card">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <Link to={`/projects/${project.slug}`}>View Project</Link>
                            </div>
                    ))}
                    </div>
            </div>
        );  
}

export default Projects;