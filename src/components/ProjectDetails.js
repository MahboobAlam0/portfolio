import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { useTheme } from '../context/ThemeContext';
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

                <motion.div 
                    className="project-header"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                    <h1>{project.title}</h1>
                    <div className="tech-stack-detail">
                        {project.techStack.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="project-banner"
                    initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <img src={project.image} alt={project.title} />
                </motion.div>

                <motion.div 
                    className="project-info glass"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 60, 
                        damping: 12, 
                        delay: 0.2 
                    }}
                >
                    <div className="project-description" dangerouslySetInnerHTML={{ __html: project.fullDescription }}></div>
                    
                    <div className="project-actions">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn demo-btn">
                            Live Demo <i className="fas fa-external-link-alt"></i>
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
                            View Code <i className="fab fa-github"></i>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectDetails;
