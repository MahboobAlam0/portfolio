import React from "react";
import { useTheme } from "../context/ThemeContext";
import profileImage from "../assets/images/ProfileImage/Profile.png";
import { motion } from "framer-motion";
import resumePDF from "../assets/Mahboob_Resume.pdf";
import "../styles/About.css";

const About = () => {
    const { isDarkMode } = useTheme();

    const fullText = "Building Intelligent Systems | Exploring Deep Learning";
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section className={`about ${isDarkMode ? "dark-mode" : ""}`} id="about">
            <div className="about-container container">
                
                <div className="hero-content">
                    <motion.div 
                        className="profile-section"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="profile-image-container">
                            <img src={profileImage} alt="Mahboob Alam" className="profile-img" />
                            <div className="blob-bg"></div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="text-section"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2 variants={itemVariants} className="welcome-text">
                            Hello, I'm
                        </motion.h2>
                        
                        <motion.h1 variants={itemVariants} className="name-title">
                            Mahboob Alam
                        </motion.h1>

                        <motion.div variants={itemVariants} className="typing-container">
                             <h3 className="gradient-subtitle">{fullText}</h3>
                        </motion.div>

                        <motion.p variants={itemVariants} className="bio-text">
                            I am currently pursuing an M.Tech in Data Science at DIAT-DRDO, Pune. I focus on Machine Learning and Deep Learning, working across the entire model lifecycle—from exploratory analysis to deployment. My background includes building cost-sensitive business solutions and conducting research on underwater image segmentation, which resulted in a peer-reviewed publication. I enjoy solving complex data problems and translating technical results into actionable business insights.
                        </motion.p>

                        <motion.div variants={itemVariants} className="cta-container">
                            <a href="#projects" className="btn-primary">View Projects</a>
                            <a href={resumePDF} download="Mahboob_Resume.pdf" className="btn-secondary">
                                Resume <i className="fas fa-download"></i>
                            </a>
                            <a href="#contact" className="btn-secondary">Contact Me</a>
                        </motion.div>

                        <motion.div 
                            className="status-card glass"
                            variants={itemVariants}
                        >
                            <span className="star">✨</span>
                            <p>Currently open for new opportunities and collaborations.</p>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
