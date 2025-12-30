import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
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
        className="education-timeline"
      >
        <motion.h2 variants={itemVariants}>Education</motion.h2>
        <div className="timeline-container">
          <motion.div variants={itemVariants}>
            <ResumeCard
                title="M.Tech in Data Science"
                subTitle="Defence Institute of Advanced Technology (DIAT–DRDO), Pune • 2024–2026"
                result="CGPA: 7.65"
                des="Focus on Machine Learning, Deep Learning, and Advanced Data Analytics."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ResumeCard
                title="B.Tech in Computer Science and Engineering"
                subTitle="RBSSIET, Rewari • 2019–2023"
                result=""
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
