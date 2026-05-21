import React from "react";

import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Skills.css";

const Skills = ({ isStandalone = true }) => {
    const { isDarkMode } = useTheme();
    const { ref, controls } = useScrollReveal();

    const skillsList = [
        // Languages
        { name: "Python", percentage: "95%" },
        { name: "SQL", percentage: "90%" },
        // ML / DL
        { name: "PyTorch", percentage: "88%" },
        { name: "Scikit-learn & LightGBM", percentage: "88%" },
        { name: "CNNs & Transformers", percentage: "85%" },
        { name: "Semantic Segmentation", percentage: "85%" },
        { name: "Physics-Informed Neural Networks", percentage: "82%" },
        { name: "SHAP & Grad-CAM (Explainability)", percentage: "80%" },
        // LLM & RAG
        { name: "LLM Fine-tuning (QLoRA / PEFT)", percentage: "82%" },
        { name: "RAG Systems (Qdrant / LangChain)", percentage: "82%" },
        { name: "Sentence-Transformers & Embeddings", percentage: "80%" },
        { name: "Hugging Face Ecosystem", percentage: "85%" },
        // Tools
        { name: "FastAPI & Docker", percentage: "88%" },
        { name: "GitHub Actions (CI/CD)", percentage: "82%" },
        { name: "OpenCV & Streamlit", percentage: "85%" },
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
