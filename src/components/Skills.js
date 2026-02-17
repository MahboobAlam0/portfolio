import React from "react";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Skills.css";

const Skills = ({ isStandalone = true }) => {
    const { isDarkMode } = useTheme();
    const { ref, controls } = useScrollReveal();

    const skillsList = [
        { name: "Python & SQL", percentage: "95%" },
        { name: "Statistical Modeling & Predictive Analytics", percentage: "85%" },
        { name: "Data Structures & Algorithms", percentage: "80%" },
        { name: "Scikit-learn", percentage: "85%" },
        { name: "Deep Learning Architectures (CNNs, Transformers)", percentage: "80%" },
        { name: "PyTorch & TensorFlow", percentage: "80%" },
        { name: "Computer Vision (YOLO, OpenCV)", percentage: "75%" },
        { name: "Cost-Sensitive Learning & Optimization", percentage: "80%" },
        { name: "Image Segmentation", percentage: "75%" },
        { name: "EDA & Visualization", percentage: "85%" },
        { name: "Version Control (Git & GitHub)", percentage: "90%" },
        { name: "Jupyter & Colab", percentage: "95%" },
    ];

    const skillsContent = (
        <div className="skills-progress-container">
            <div className="skills-list grid-layout">
                {skillsList.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="skill-bar-wrapper"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="skill-info">
                            <h4>{skill.name}</h4>
                            <span>{skill.percentage}</span>
                        </div>
                        <div className="progress-line">
                            <motion.span 
                                className="progress-bar-inner"
                                initial={{ width: 0 }}
                                whileInView={{ width: skill.percentage }}
                                transition={{ duration: 1, delay: 0.2 }}
                            ></motion.span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    if (!isStandalone) {
        return (
            <motion.div
                className={`skills-standalone ${isDarkMode ? "dark-mode" : ""}`}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {skillsContent}
            </motion.div>
        );
    }

    return (
        <section className={`skills ${isDarkMode ? "dark-mode" : ""}`} id="skills" ref={ref}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    <motion.h2 variants={itemVariants}>
                        Technical Skills
                    </motion.h2>
    
                    {skillsContent}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
