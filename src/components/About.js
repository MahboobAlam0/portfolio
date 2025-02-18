import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import profileImage from "../assets/images/ProfileImage/Profile.png";
import "../styles/About.css";

const About = () => {
  const [text, setText] = useState("");
  const fullText =
    "Data Science & ML Enthusiast | AI Enthusiast | Python Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setText("");
        setIndex(0);
      }, 2000);
    }
  }, [index, text]);
  const { isDarkMode } = useTheme();

  return (
    <section className={`about ${isDarkMode ? "dark-mode" : ""}`} id="about">
      <div className="about-container">
        <div className="about-profile">
          <h2 className="welcome-text">Welcome to My Portfolio</h2>
          <div className="profile-image">
            <img src={profileImage} alt="Mahboob Alam" />
          </div>
          <div className="profile-title">
            <h1 className="name-container">
              <span className="greeting">Hi, I'm</span>
              <span className="gradient-name"> Mahboob Alam</span>
            </h1>
            <h2 className="typing-text">{text}</h2>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm pursuing M.Tech (Data Science) from DIAT - DRDO, Pune. A
              passionate Data Science enthusiast with a drive for turning
              complex data into actionable insights. I specialize in machine
              learning, statistical analysis, and data visualization, constantly
              exploring new technologies and methodologies in the field of AI
              and Data Science.
            </p>
            <p>
              With a strong foundation in Python programming and machine
              learning algorithms, I focus on developing innovative solutions
              that make a real impact. My expertise includes deep learning,
              natural language processing, and predictive modeling.
            </p>
            <h4 className="warning">
              <span className="star">*</span>
              Currently, I'm working on my skills and projects which are shown
              below. I made this web page for my future reference.
              <span className="star">*</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default About;
