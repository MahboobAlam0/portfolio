import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Education.css";

const Education = ({ isStandalone = true }) => {
  const { isDarkMode } = useTheme();
  const { ref, controls } = useScrollReveal();

  const educationContent = (
        <div className="resume-card-list">
            <ResumeCard
                title="M.Tech in Data Science"
                subTitle="Defence Institute of Advanced Technology (DIAT–DRDO), Pune"
                result="2024–2026"
                des={
                    <>
                        <p style={{marginBottom: '0.5rem', fontWeight: '500'}}>CGPA: 8.10</p>
                        <p>Focus on Machine Learning, Deep Learning, and Advanced Data Analytics.</p>
                    </>
                }
            />
            <ResumeCard
                title="B.Tech in Computer Science and Engineering"
                subTitle="RBSSIET, Indira Gandhi University, Rewari"
                result="2019–2023"
                des="Completed undergraduate studies with a focus on core computer science foundations."
            />
        </div>
  );

  if (!isStandalone) {
      return (
        <motion.div 
            className={`education-standalone ${isDarkMode ? "dark-mode" : ""}`}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {educationContent}
        </motion.div>
      );
  }

  return (
    <section className={`education ${isDarkMode ? "dark-mode" : ""}`} id="education" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container" 
      >
        <motion.h2 variants={itemVariants}>Education</motion.h2>
        
        {educationContent}
      </motion.div>
    </section>
  );
};

export default Education;
