import React from "react";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Skills.css";

const Skills = () => {
    const { isDarkMode } = useTheme();
    const { ref, controls } = useScrollReveal();

    const skillsList = [
        {
            category: "Programming & Core",
            items: [
                { name: "Python", icon: "fab fa-python", color: "#3776AB" },
                { name: "SQL", icon: "fas fa-database", color: "#4479A1" },
            ],
        },
        {
            category: "Machine Learning",
            items: [
                { name: "Regression", icon: "fas fa-chart-line", color: "#F7931E" },
                { name: "Classification", icon: "fas fa-sitemap", color: "#F7931E" },
                { name: "Cost-Sensitive Modeling", icon: "fas fa-balance-scale", color: "#FF6F00" },
                { name: "Scikit-learn", icon: "fas fa-brain", color: "#F7931E" },
            ],
        },
        {
            category: "Deep Learning",
            items: [
                { name: "CNNs", icon: "fas fa-images", color: "#EE4C2C" },
                { name: "Image Segmentation", icon: "fas fa-layer-group", color: "#D00000" },
                { name: "Attention Mechanisms", icon: "fas fa-eye", color: "#FF6F00" },
                { name: "PyTorch", icon: "fas fa-fire", color: "#EE4C2C" },
            ],
        },
        {
            category: "Data Analysis",
            items: [
                { name: "Exploratory Data Analysis", icon: "fas fa-search", color: "#150458" },
                { name: "Statistics", icon: "fas fa-calculator", color: "#013243" },
                { name: "Feature Engineering", icon: "fas fa-cogs", color: "#F37626" },
                { name: "Model Evaluation", icon: "fas fa-check-circle", color: "#217346" },
            ],
        },
        {
            category: "Tools & Platforms",
            items: [
                { name: "Git & GitHub", icon: "fab fa-git-alt", color: "#F05032" },
                { name: "Jupyter Notebook", icon: "fas fa-book", color: "#F37626" },
                { name: "Google Colab", icon: "fab fa-google", color: "#F9AB00" },
            ],
        },
    ];

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
    
                    <div className="skills-grid-wrapper">
                        {skillsList.map((category, idx) => (
                            <motion.div 
                                key={idx} 
                                className="skill-category-card glass"
                                variants={itemVariants} 
                            >
                                <h3 className="category-title">{category.category}</h3>
                                <div className="skills-items-grid">
                                    {category.items.map((skill, index) => (
                                        <motion.div 
                                            key={index} 
                                            className="skill-item"
                                            whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2 } }}
                                        >
                                            <div className="icon-box" style={{ color: skill.color }}>
                                                <i className={skill.icon}></i>
                                            </div>
                                            <span>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
