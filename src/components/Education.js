import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Education.css";

const Education = () => {
  const { isDarkMode } = useTheme();
  const { ref, controls } = useScrollReveal();

  return (
    <section className={`education ${isDarkMode ? "dark-mode" : ""}`} id="education" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container" 
      >
        <motion.h2 variants={itemVariants}>Education</motion.h2>
        
        <div className="education-list">
            <motion.div 
                className="education-card glass"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
            >
                <div className="edu-icon">
                    <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="edu-content">
                    <h3>M.Tech in Data Science</h3>
                    <p className="institution">Defence Institute of Advanced Technology (DIAT–DRDO), Pune</p>
                    <p className="year">2024–2026</p>
                    <div className="edu-tags">
                        <span className="tag-result">CGPA: 7.65</span>
                    </div>
                    <p className="description">
                        Focus on Machine Learning, Deep Learning, and Advanced Data Analytics.
                    </p>
                </div>
            </motion.div>

            <motion.div 
                className="education-card glass"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
            >
                <div className="edu-icon">
                    <i className="fas fa-university"></i>
                </div>
                <div className="edu-content">
                    <h3>B.Tech in Computer Science and Engineering</h3>
                    <p className="institution">RBSSIET, Rewari</p>
                     <p className="year">2019–2023</p>
                </div>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
