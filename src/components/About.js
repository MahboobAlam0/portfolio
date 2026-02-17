import React from "react";
import { useTheme } from "../context/ThemeContext";
import profileImage from "../assets/images/ProfileImage/Profile.png";
import { motion } from "framer-motion";
import resumePDF from "../assets/Resume_Fresher_Mahboob.pdf";
import "../styles/About.css";

const About = () => {
    const { isDarkMode } = useTheme();

    const fullText = "Data Scientist | Machine Learning Engineer";
    
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
                
                <div className="about-content-grid">
                    {/* Section 1: Image */}
                    <motion.div 
                        className="about-image-section"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="profile-image-container">
                            <img src={profileImage} alt="Mahboob Alam" className="profile-img" />
                        </div>
                    </motion.div>

                    {/* Section 2: Summary */}
                    <motion.div 
                        className="about-summary-section"
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
                            I am a Data Scientist and Machine Learning Engineer passionate about building scalable, intelligent systems. My focus is on bridging the gap between research and production—developing deep learning models for edge devices, engineering robust data pipelines, and optimizing predictive algorithms for business impact. With a strong foundation in Computer Science and specialized research in AI (DIAT-DRDO), I enjoy solving complex, real-world problems through data-driven innovation.
                        </motion.p>

                        <motion.div variants={itemVariants} className="cta-container">
                            <a href="#projects" className="btn-primary">View Projects</a>
                            <a href={resumePDF} download="Mahboob_Resume.pdf" className="btn-secondary">
                                Resume <i className="fas fa-download"></i>
                            </a>
                            <a href="#contact" className="btn-secondary">Contact Me</a>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
