import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import "../styles/Education.css";

const Education = () => {

  const { isDarkMode } = useTheme();
  return (
    <section className={`education ${isDarkMode ? "dark-mode" : ""}`} id="education">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="education-timeline"
      >
        <h2>Education</h2>
        <div className="timeline-container">
          <ResumeCard
            title="M.Tech in Data Science"
            subTitle="Defence Institute of Advanced Technology - DRDO, Pune • 2024-2026"
            result="7.31/10.0"
            des="Specialized in Machine Learning and Data Analytics"
          />
          <ResumeCard
            title="B.Tech in Computer Science and Engineering"
            subTitle="Rao Birender Singh State Institute of Engineering and Technology, Rewari • 2019-2023"
            result="6.1/10.0"
          />
          <ResumeCard
            title="Senior Secondary School Education"
            subTitle="Bal Bharti Inter College, Gajraula • 2017-2018"
            result="73.8%"
          />
          <ResumeCard
            title="Senior Secondary School Education"
            subTitle="Carmel Public School, Gajraula • 2017-2018"
            result="7.8/10.0"
          />
        </div>
      </motion.div>
      <div className="section-divider"></div>
    </section>
  );
};

export default Education;
