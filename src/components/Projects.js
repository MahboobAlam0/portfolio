import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.css';

const Projects = () => {
    const { isDarkMode } = useTheme();

    // Logic to ensure max 2 projects have the "New" tag
    const newProjectIds = projectsData
        .filter(p => p.isNew)
        .slice(0, 2)
        .map(p => p.id);

    return (
        <section className={`projects ${isDarkMode ? 'dark-mode' : ''}`} id="projects">
            <div className="container">
                <h2>Featured Projects</h2>
                
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card-wrapper">
                            <div className="project-card">
                                <div className="project-image">
                                    <Link to={`/project/${project.id}`} className="image-link" aria-label={`View details for ${project.title}`}>
                                        <img src={project.image} alt={project.title} />
                                        <div className="image-overlay">
                                            <span className="details-link-btn">
                                                View Details <i className="fas fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        {newProjectIds.includes(project.id) && (
                                            <div className="new-badge">New</div>
                                        )}
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <h3>
                                        <Link to={`/project/${project.id}`} className="title-link">
                                            {project.title}
                                        </Link>
                                    </h3>
                                    <p>{project.description}</p>
                                    <div className="tech-stack">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
