import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import useScrollReveal, { containerVariants, itemVariants } from "../hooks/useScrollReveal";
import "../styles/Experience.css";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const { ref, controls } = useScrollReveal();

  return (
    <section className={`experience ${isDarkMode ? "dark-mode" : ""}`} id="experience" ref={ref}>
      <div className="container">
        <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <motion.h2 variants={itemVariants}>
            Work Experience
            </motion.h2>
            
            <div className="experience-timeline">
            <div className="timeline-container">
                    <motion.div variants={itemVariants}>
                        <ResumeCard
                            title="Research Intern – Machine Learning"
                            subTitle="Defence Institute of Advanced Technology (DIAT–DRDO), Pune • Jun 2025 – Present"
                            result="Research"
                            des={
                                <ul className="experience-list">
                                    <li>Designed and trained a Physics-Informed Attention U-Net (PIAUNet) for underwater image segmentation.</li>
                                    <li>Improved segmentation performance by +3.52% Dice score and +3.90% mIoU over baseline U-Net.</li>
                                    <li>Built end-to-end PyTorch pipelines for data preprocessing, augmentation, training, and validation.</li>
                                    <li>Integrated domain physics constraints to improve robustness under real-world noise and light attenuation.</li>
                                </ul>
                            }
                        />
                    </motion.div>
            </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
