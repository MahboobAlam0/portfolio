import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { useTheme } from '../context/ThemeContext';
import ScrollRevealWrapper from './ScrollRevealWrapper';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const { isDarkMode } = useTheme();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className={`project-details-container ${isDarkMode ? 'dark-mode' : ''} error-container`}>
                <h2>Project not found</h2>
                <Link to="/" className="back-btn">Back to Home</Link>
            </div>
        );
    }



    return (
        <section className={`project-details ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Hero with Background Image */}
            <div className={`case-study-hero${!project.image ? ' hero-no-image' : ''}`}>
                <div className="hero-overlay"></div>
                {project.image && (
                    <img src={project.image} alt={project.title} className="hero-bg-img" loading="lazy" />
                )}
                
                <div className="hero-content container">
                    <Link to="/" className="back-link">
                        <i className="fas fa-arrow-left"></i> Back to Projects
                    </Link>

                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p 
                        className="project-tagline"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {project.description}
                    </motion.p>
                    
                    <motion.div 
                        className="tech-stack-hero"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {project.techStack.map((tech, idx) => (
                            <span key={idx} className="tech-pill">{tech}</span>
                        ))}
                    </motion.div>

                    <div className="hero-actions">
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hero-btn primary">
                                Live Demo <i className="fas fa-external-link-alt"></i>
                            </a>
                        )}
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hero-btn secondary">
                            GitHub <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="case-study-content container">
                {/* Overview Section */}
                <ScrollRevealWrapper>
                    <div className="study-section overview-section">
                        <h2>Overview</h2>
                        <p className="lead-text">{project.overview}</p>
                    </div>
                </ScrollRevealWrapper>

                <div className="study-grid">
                    {/* Main Content Column */}
                    <div className="main-col">
                        <ScrollRevealWrapper delay={0.1}>
                            <div className="study-card problem-card">
                                <h3><i className="fas fa-exclamation-circle"></i> The Challenge</h3>
                                <div dangerouslySetInnerHTML={{ __html: project.problem }}></div>
                            </div>
                        </ScrollRevealWrapper>

                        <ScrollRevealWrapper delay={0.2}>
                            <div className="study-card solution-card">
                                <h3><i className="fas fa-lightbulb"></i> The Solution</h3>
                                <div dangerouslySetInnerHTML={{ __html: project.solution }}></div>
                            </div>
                        </ScrollRevealWrapper>
                    </div>

                    {/* Sidebar Column */}
                    <div className="sidebar-col">
                        <div className="sticky-sidebar">
                            <ScrollRevealWrapper delay={0.3}>
                                <div className="key-results-card glass">
                                    <h3>Key Results</h3>
                                    <ul>
                                        {project.key_results && project.key_results.map((result, idx) => (
                                            <li key={idx} dangerouslySetInnerHTML={{ __html: result }}></li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollRevealWrapper>

                            <ScrollRevealWrapper delay={0.4}>
                                <div className="impact-card glass">
                                    <h3>Real-World Impact</h3>
                                    <p>{project.impact}</p>
                                </div>
                            </ScrollRevealWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
