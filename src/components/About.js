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
               I've always loved solving problems. During my B.Tech, I learned how to code well, but I soon realized the most interesting challenges were hidden in data, not just in the code itself. I understood that the future was about using data to ask smarter questions.
            </p>
            <p>
              This realization changed my plan. Instead of taking a job right away, I decided to spend a full year preparing for the GATE exam. It was a big commitment, but my goal was clear: to get into a top data science program.
            </p>
            <p>
              My M.Tech at DIAT (DRDO) has been a fantastic opportunity to learn the most current ideas in AI. Here, I'm not just learning theory; I'm applying it to real-world problems. I focus on practical challenges, like making new Generative AI tools give reliable results. This has also led me to study Explainable AI (XAI), because I believe an AI's answer is only useful if we can understand how it reached its conclusion.
            </p>
            <p>
                My main goal is to use my skills in Python and PyTorch to turn complicated data into simple, useful information. I am looking for a team that is serious about solving tough problems in NLP or predictive analytics, and I would do well in a place that is always searching for better answers.
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
