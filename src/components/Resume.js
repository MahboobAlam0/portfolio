import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import "../styles/Resume.css";
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";

const Resume = () => {
    const [activeTab, setActiveTab] = useState("education");
    const { isDarkMode } = useTheme();
    const { ref, controls } = useScrollReveal();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className={`resume-section ${isDarkMode ? "dark-mode" : ""}`} id="resume" ref={ref}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <motion.h2 variants={itemVariants}>Resume</motion.h2>
                    </div>

                    <div className="resume-tabs">
                        <button
                            className={`resume-tab ${activeTab === "education" ? "active" : ""}`}
                            onClick={() => handleTabClick("education")}
                        >
                            Education
                        </button>
                        <button
                            className={`resume-tab ${activeTab === "skills" ? "active" : ""}`}
                            onClick={() => handleTabClick("skills")}
                        >
                            Professional Skills
                        </button>
                        <button
                            className={`resume-tab ${activeTab === "experience" ? "active" : ""}`}
                            onClick={() => handleTabClick("experience")}
                        >
                            Experience
                        </button>
                    </div>

                    <div className="resume-content-wrapper">
                        <AnimatePresence mode="wait">
                            {activeTab === "education" && (
                                <motion.div
                                    key="education"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="timeline-content"
                                >
                                    <Education isStandalone={false} />
                                </motion.div>
                            )}
                            {activeTab === "skills" && (
                                <motion.div
                                    key="skills"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Skills isStandalone={false} />
                                </motion.div>
                            )}
                            {activeTab === "experience" && (
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="timeline-content"
                                >
                                    <Experience isStandalone={false} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
