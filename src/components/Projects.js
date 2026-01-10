import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import TiltCard from './TiltCard';
import '../styles/Projects.css';

const Projects = () => {
    const { isDarkMode } = useTheme();
    const { ref, controls } = useScrollReveal();


    return (
        <section className={`projects ${isDarkMode ? 'dark-mode' : ''}`} id="projects" ref={ref}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    <motion.h2 variants={itemVariants}>
                        Featured Projects
                    </motion.h2>
                    
                    <motion.div 
                        className="projects-grid"
                        layout
                    >
                        <AnimatePresence>
                            {projectsData.map((project) => (
                                <motion.div 
                                    key={project.id}
                                    layout
                                    variants={itemVariants} 
                                    className="project-card-wrapper"
                                >
                                    <div className="project-card-wrapper">
                                        <TiltCard className="project-card glass">
                                            <div className="project-image">
                                                <Link to={`/project/${project.id}`} className="image-link" aria-label={`View details for ${project.title}`}>
                                                    <img src={project.image} alt={project.title} />
                                                    <div className="image-overlay">
                                                        <div className="overlay-links">
                                                            <span className="details-link-btn">
                                                                View Details <i className="fas fa-arrow-right"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {project.isNew && (
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
                                        </TiltCard>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
