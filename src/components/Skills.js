import React from "react";
import resumePDF from "../assets/Mahboob_Resume.pdf";
import { useTheme } from "../context/ThemeContext";
import "../styles/Skills.css";

const Skills = () => {
  const skillsList = [
    {
      category: "Languages & Core",
      items: [
        { name: "Python", icon: "fab fa-python" },
        { name: "C", icon: "devicon-c-plain" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "Git", icon: "fab fa-git-alt" },
      ],
    },
    {
      category: "Machine Learning",
      items: [
        { name: "TensorFlow", icon: "fas fa-microchip" },
        { name: "Scikit-learn", icon: "fas fa-brain" },
        { name: "PyTorch", icon: "fas fa-fire" },
        { name: "Keras", icon: "fas fa-code" },
      ],
    },
    {
      category: "Data Analysis",
      items: [
        { name: "Pandas", icon: "fas fa-table" },
        { name: "NumPy", icon: "fas fa-calculator" },
        { name: "Jupyter", icon: "fas fa-book-open" },
        { name: "Excel", icon: "fas fa-file-excel" },
      ],
    },
    {
      category: "Visualization",
      items: [
        { name: "Tableau", icon: "fas fa-chart-bar" },
        { name: "PowerBI", icon: "fas fa-chart-pie" },
        { name: "Matplotlib", icon: "fas fa-chart-line" },
        { name: "Seaborn", icon: "fas fa-chart-area" },
      ],
    },
  ];

  const { isDarkMode } = useTheme();

  return (
    <section className={`skills ${isDarkMode ? "dark-mode" : ""}`} id="skills">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillsList.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-items">
                {category.items.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="resume-btn-container">
        <a
          href={resumePDF}
          download="Mahboob_Alam_Resume.pdf"
          className="resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-download"></i>
          Download Resume
        </a>
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default Skills;
