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

                        <h3 className="gradient-subtitle">ML Engineer | Computer Vision | LLM & RAG</h3>

                        <p className="bio-text">
                            Fresh M.Tech graduate in Data Science from DIAT-DU, Pune (May 2026), with hands-on research internship experience in Computer Vision and Deep Learning. I've built physics-informed segmentation models (PIAU-Net, LiteFishSeg, FishSegDet) and production LLM/RAG systems from scratch — with a published paper and open-source deployments to show for it. Actively seeking full-time roles where I can apply my skills in edge AI, model optimization, and applied ML.
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
