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

    const MagneticButton = ({ children, to, className }) => {
        const ref = React.useRef(null);
        const [position, setPosition] = React.useState({ x: 0, y: 0 });

        const handleMouse = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
        };

        const reset = () => {
            setPosition({ x: 0, y: 0 });
        };

        const { x, y } = position;
        return (
            <motion.div
                style={{ position: "relative" }}
                ref={ref}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{ x, y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                <Link to={to} className={className}>
                    {children}
                </Link>
            </motion.div>
        );
    }

    return (
        <section className={`project-details ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <MagneticButton to="/" className="back-btn">
                    <i className="fas fa-arrow-left"></i> Back to Home
                </MagneticButton>

                <ScrollRevealWrapper>
                    <div className="project-header">
                        <h1>{project.title}</h1>
                        <div className="tech-stack-detail">
                            {project.techStack.map((tech, idx) => (
                                <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </ScrollRevealWrapper>

                <ScrollRevealWrapper delay={0.1}>
                    <div className="project-banner">
                        <img src={project.image} alt={project.title} />
                    </div>
                </ScrollRevealWrapper>

                <ScrollRevealWrapper delay={0.2}>
                    <div className="project-info glass">
                        <div className="project-description" dangerouslySetInnerHTML={{ __html: project.fullDescription }}></div>
                        
                        <div className="project-actions">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn demo-btn">
                                Live Demo <i className="fas fa-external-link-alt"></i>
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
                                View Code <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </ScrollRevealWrapper>
            </div>
        </section>
    );
};

export default ProjectDetails;
