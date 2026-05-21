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
                subTitle="Defence Institute of Advanced Technology (DIAT-DU), Pune"
                result="2024 – 2026 (Completed)"
                des={
                    <>
                        <p style={{marginBottom: '0.5rem', fontWeight: '500'}}>CGPA: 8.10 / 10</p>
                        <p>Specialization in Machine Learning, Deep Learning, and Computer Vision.</p>
                    </>
                }
            />
            <ResumeCard
                title="B.Tech in Computer Science and Engineering"
                subTitle="RBSSIET, Rewari — IGU Affiliated"
                result="2019 – 2023"
                des="Core computer science foundations including data structures, algorithms, and software engineering."
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
