import React from "react";
import { useTheme } from "../context/ThemeContext";
import profileImage from "../assets/images/ProfileImage/Profile.png";
import resumePDF from "../assets/Resume_Fresher_Mahboob.pdf";
import "../styles/About.css";

const About = () => {
    const { isDarkMode } = useTheme();

    return (
        <section className={`about ${isDarkMode ? "dark-mode" : ""}`} id="about">
            <div className="about-container container">
                <div className="about-content-grid">
                    {/* Section 1: Image */}
                    <div className="about-image-section">
                        <div className="profile-image-container">
                            <img src={profileImage} alt="Mahboob Alam" className="profile-img" />
                        </div>
                    </div>

                    {/* Section 2: Summary */}
                    <div className="about-summary-section">
                        <h2 className="welcome-text">Hello, I'm</h2>
                        
                        <h1 className="name-title">Mahboob Alam</h1>

                        <h3 className="gradient-subtitle">Data Scientist | Machine Learning Engineer</h3>

                        <p className="bio-text">
                            I am a Data Scientist and Machine Learning Engineer passionate about building scalable, intelligent systems. My focus is on bridging the gap between research and production—developing deep learning models for edge devices, engineering robust data pipelines, and optimizing predictive algorithms for business impact. With a strong foundation in Computer Science and specialized research in AI (DIAT-DRDO), I enjoy solving complex, real-world problems through data-driven innovation.
                        </p>

                        <div className="cta-container">
                            <a href="#projects" className="btn-primary">View Projects</a>
                            <a href={resumePDF} download="Mahboob_Resume.pdf" className="btn-secondary">
                                Resume <i className="fas fa-download"></i>
                            </a>
                            <a href="#contact" className="btn-secondary">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
